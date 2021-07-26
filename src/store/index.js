import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

Vue.use(Vuex)

const VUE_APP_HOST_API = process.env.NODE_ENV === 'production' ? 'api.lookmix.app/' : 'localhost'
const VUE_APP_PORT_API = process.env.NODE_ENV === 'production' ? '' : ':5000'

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
    verifyDuplicatedPhone () {
      const protocol = window.location.protocol

      const url = `${protocol}//${VUE_APP_HOST_API}${VUE_APP_PORT_API}/`

      return axios.get(url)
    }
  },
  modules: {
  }
})
