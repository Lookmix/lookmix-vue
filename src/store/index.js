import Vue from 'vue'
import Vuex from 'vuex'

import axiosInstance from '@/http.js'
const axios = axiosInstance

Vue.use(Vuex)

const HTTP_PROTOCOL = process.env.VUE_APP_HTTP_PROTOCOL
const HOST_API = process.env.VUE_APP_HOST_API
const PORT_API = process.env.VUE_APP_PORT_API
const PORT_API_OTP = process.env.VUE_APP_PORT_API_OTP
const DOMAIN = `${HTTP_PROTOCOL}://${HOST_API}:${PORT_API}`
const DOMAIN_OTP = `${HTTP_PROTOCOL}://${HOST_API}:${PORT_API_OTP}`

export default new Vuex.Store({
  state: {
    ongoingRequest: null,
    newUser: {
      phone: undefined,
      password: undefined
    },
    connectionOffline: undefined,
    authenticated: undefined,
    maxHeight: window.innerHeight,
    isNewUserRoute: false,
    isLoginRoute: false,
    appBarMobileHeight: 56,
    appBarDesktopHeight: 64,
    currentAppBarHeight: undefined,
    showNavDrawer: false,
    bottomNavigatorHeight: 56
  },
  getters: {
    authenticated: state => state.authenticated,
    isNewUserRoute: state => state.isNewUserRoute, // router.currentRoute.name === "newUser"
    isLoginRoute: state => state.isLoginRoute, // router.currentRoute.name === "login",
    maxHeight: state => state.maxHeight - state.bottomNavigatorHeight,
    showNavDrawer: state => state.showNavDrawer,
    currentAppBarHeight: state => state.currentAppBarHeight
  },
  mutations: {
    setNewUser(state, data) {
      state.newUser = data
    },
    setAuthenticated(state, data) {
      state.authenticated = data
    },
    setConnectionOffline (state, data) {
      state.connectionOffline = data
    },
    setMaxHeight (state, data) {
      state.maxHeight = data
    },
    setIsNewUserRoute (state, data) {
      state.isNewUserRoute = data
    },
    setIsLoginRoute (state, data) {
      state.isLoginRoute = data
    },
    setShowNavDrawer (state, data) {
      state.showNavDrawer = data
    },
    setCurrentAppBarHeight (state, data) {
      state.currentAppBarHeight = data
    }
  },
  actions: {
    verifyDuplicatedPhone ({ state }, data) { // withCredentials: false
      const url = `${DOMAIN}/users/is_phone_unique`

      return axios.get(`${url}`, {
        params: {
          phone: data
        }
      })
    },
    getOTPData ({ state }, data) { // withCredentials: false
      const url = `${DOMAIN_OTP}/auth/get_otp`

      return axios.get(`${url}`, {
        params: {
          phone: data
        }
      })      
    },
    sendOTP ({ state }, data) { // withCredentials: false
      const url = `${DOMAIN}/auth/verify_otp`

      return axios.post(`${url}`, data)
    },
    updatePassword({ state }, data) {
      const url = `${DOMAIN}/users/update_password`

      return axios.put(url, data, {
        withCredentials: true
      })
    },
    saveUser({ state }, data) {
      const url = `${DOMAIN}/users/save`

      const user = state.newUser

      return axios.post(url, user, { withCredentials: true })
    },
    signin ({ state }, data) { // withCredentials: false
      const url = `${DOMAIN}/auth/login`

      return axios.post(`${url}`, data)
    },
    checkTokenValidity ({ state }, data) {
      const url = `${DOMAIN}/auth/verify_access`

      return axios.get(`${url}`, { withCredentials: true })
    },
    logout ({ state }, data) {
      const url = `${DOMAIN}/auth/logout`

      return axios.delete(`${url}`, { withCredentials: true })
    },
    refreshToken ({ state }, data) {
      const url = `${DOMAIN}/auth/refresh`

      return axios.post(`${url}`, null, { withCredentials: true })
    }
  },
  modules: {
  }
})
