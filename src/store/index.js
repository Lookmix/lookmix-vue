import Vue from 'vue'
import Vuex from 'vuex'

import axiosInstance from '@/http.js'
var axios = axiosInstance

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
    connectionOffline: undefined
  },
  mutations: {
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
    setNewUser({ state }, data) {
      state.newUser = data
    },
    sendOTP ({ state }, data) { // withCredentials: false
      const url = `${DOMAIN}/auth/verify_otp`

      return axios.post(`${url}`, data)
    },
    setSnackbarError({ state }, data) {
      state.connectionOffline = data
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

      return axios.post(url, user, {
        withCredentials: true
      })
    }
  },
  modules: {
  }
})
