import Vue from 'vue'
import VueRouter from 'vue-router'
import publicPrivateRoutes from '@/router/routes/publicPrivateRoutes.js'
import store from '@/store/index.js'
import * as resize from "./../resize.js"

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [].concat(publicPrivateRoutes)
})

function handleRedirect (to, next, isPublicRoute) {
  store.commit("setIsNewUserRoute", to.name === "newUser")
  store.commit("setIsLoginRoute", to.name === "login")

  const authenticated = store.state.authenticated
  const onlyLoggedOutRoute = to.matched.some(record => record.meta.onlyLoggedOutRoute)

  // no-logged try to access private route
  if (!isPublicRoute && !authenticated) {
    return next({
      path: '/login',
    })
  }
  // logged try to access public route
  if (authenticated && onlyLoggedOutRoute) {
    return next('/home')
  }
  return next()
}
router.beforeEach((to, from, next) => {
  const authenticated = store.state.authenticated
  const isPublicRoute = to.matched.some(record => record.meta.public)

  // validation to user refresh page cenario
  if (authenticated === undefined && !isPublicRoute) {
    return store.dispatch("checkTokenValidity")
      .then((response) => {
        return handleRedirect(to, next, isPublicRoute)
      })
      .catch((exception) => {
        const response = exception.response
        const statusCode = response.status

        if (statusCode === 401) {
          store.commit("setAuthenticated", false)

          return next({
            path: '/login',
          })
        }
      })
  }
  return handleRedirect(to, next, isPublicRoute)
})

router.afterEach((to, from) => {
  resize.onResize()
})

export default router