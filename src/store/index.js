import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

Vue.use(Vuex)

const HTTP_PROTOCOL = window.location.protocol
const VUE_APP_HOST_API = process.env.NODE_ENV === 'production' ? 'api.lookmix.app' : 'localhost'
const VUE_APP_PORT_API = process.env.NODE_ENV === 'production' ? '80' : '5000'
const DOMAIN = `${HTTP_PROTOCOL}//${VUE_APP_HOST_API}:${VUE_APP_PORT_API}`

export default new Vuex.Store({
  state: {
    user: {
      authenticated: false
    },
    ongoingRequest: null
  },
  mutations: {
  },
  actions: {
    verifyDuplicatedPhone ({ state }, data) {
      const url = `${DOMAIN}/users/is_phone_unique`

      return axios.get(`${url}`, {
        params: {
          phone: data
        }
      })
    },
    sendVerifyCode ({ state }, data) {
      const url = `${DOMAIN}/auth/send_verify_code`

      return axios.get(`${url}`, {
        params: {
          phone: data
        }
      })      
    },
    createAccount ({ state }, data) {

    },
  },
  modules: {
  }
})
