import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

Vue.use(Vuex)

const HTTP_PROTOCOL = window.location.protocol
const VUE_APP_HOST_API = process.env.NODE_ENV === 'production' ? 'api.lookmix.app/' : 'localhost'
const VUE_APP_PORT_API = process.env.NODE_ENV === 'production' ? '' : ':5000/api'

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
      const url = `${HTTP_PROTOCOL}//${VUE_APP_HOST_API}${VUE_APP_PORT_API}/usuarios/is_phone_unique`

      return axios.get(`${url}/${data}`)
    }
  },
  modules: {
  }
})
