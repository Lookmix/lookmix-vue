// import Vue from 'vue'
// import VueRouter from 'vue-router'
import { createRouter, createWebHistory } from "vue-router"
import publicPrivateRoutes from "@/router/routes/publicPrivateRoutes.js"
import { store } from "@/store/index.js"
import * as resize from "./../resize.js"
import MobileOnlyView from "@/views/MobileOnlyView.vue"
import { isMobileDevice } from "./../utils.js"
// Vue.use(VueRouter)

export const router = new createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/mobile-only",
      name: "mobileOnly",
      component: MobileOnlyView,
      // components: {
      //   fullPage: () => import("@/views/MobileOnlyView.vue"),
      // },
      meta: { 
        maxHeight: true,
        pageTitle: "Acesse via smartphone",
        backgroundColor: "initial"
      }
    },
  ].concat(publicPrivateRoutes)
})

function handleRedirect (to, next, isPublicRoute) {
  store.commit("setIsNewUserRoute", to.name === "newUser")
  store.commit("setIsLoginRoute", to.name === "login")

  const authenticated = store.getters.authenticated
  const onlyLoggedOutRoute = to.matched.some(record => record.meta.onlyLoggedOutRoute)

  // no-logged try to access private route
  if (!isPublicRoute && !authenticated) {
    store.commit("setIsLoginRoute", true)

    return next({
      // path: '/login',
      path: '/login2',
    })
  }
  // logged try to access public route
  if (authenticated && onlyLoggedOutRoute) {
    store.commit("setIsNewUserRoute", false)
    store.commit("setIsLoginRoute", false)
    return next('/home')
  }
  return next()
}

router.beforeEach((to, from, next) => {
  if (to.fullPath === "/mobile-only" && !isMobileDevice()) {
    return next()
  }
  if (isMobileDevice() && to.fullPath === "/mobile-only") {
    store.commit("setIsMobileOnlyRoute", false)
    return next({
      path: "/home"
    })
  }
  if (!isMobileDevice()) {
    store.commit("setIsMobileOnlyRoute", true)
    return next({
      path: "/mobile-only"
    })
  }
  const authenticated = store.getters.authenticated
  const isPublicRoute = to.matched.some(record => record.meta.public)

  // validation for user refresh page (F5) cenario
  if (authenticated === undefined && !isPublicRoute) {
    return store.dispatch("checkTokenValidity")
      .then((response) => {
        if (response) {
          store.commit("setAuthenticated", true)
          return handleRedirect(to, next, isPublicRoute)
        }
      })
      .catch((exception) => {
        const response = exception.response
        const statusCode = response.status

        if (statusCode === 401) {
          store.commit("setAuthenticated", false)

          return next({
            // path: '/login',
            path: '/login2',
          })
        }
      })
  }
  return handleRedirect(to, next, isPublicRoute)
})

router.afterEach((to, from) => {
  store.commit("setCurrentRouteName", to.name)
  store.commit("setToolbarTitle", to.meta.pageTitle)
  store.commit("setPreviousPage", from.path)
  store.commit("setMaxHeightCurrentRoute", to.meta.maxHeight)
  store.commit("setBackgroundColor", to.meta.backgroundColor)
  resize.onResize()
})