import Vue from 'vue'
import VueRouter from 'vue-router'
import publicPrivateroutes from '@/router/routes/publicPrivateRoutes.js'
import store from '@/store/index.js'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/weekly-looks'
    }
  ].concat(publicPrivateroutes)
})
router.beforeEach((to, from, next) => {
  const authenticated = store.state.user.authenticated
  const onlyLoggedOutRoute = to.matched.some(record => record.meta.onlyLoggedOutRoute)
  const isPublicRoute = to.matched.some(record => record.meta.public)

  if (!isPublicRoute && !authenticated) {
    return next({
      path: '/login',
    })
  }
  if (authenticated && onlyLoggedOutRoute) {
    return next('/')
  }
  next()
})

export default router