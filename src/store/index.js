import Vue from "vue"
import Vuex from "vuex"

import axiosInstance from "@/http.js"
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
    bottomNavigatorHeight: 56,
    currentRouteName: undefined,
    toolbarTitle: "Lookmix",
    previousPage: undefined,
    maxHeightCurrentRoute: undefined,
    backgroundColor: "initial",
    disableSaveClothesButton: true,
    loadingDialog: false,
    showAddClotheButton: true,
    clothes: [],
    updatedClothes: [],
    fetchCasualClothes: [],
    fetchSocialClothes: [],
    categories: [],
    occasions: [],
    seasons: [],
    clotheUploadSuccess: undefined,
    showToolbarSelectedClothes: false,
    selectedClothes: {
      clothe_ids: [],
      image_ids: []
    },
    casualLooks: [],
    socialLooks: [],
    dailyLookSetup: undefined
  },
  getters: {
    authenticated: state => state.authenticated,
    isNewUserRoute: state => state.isNewUserRoute,
    isLoginRoute: state => state.isLoginRoute,
    maxHeight (state) {
      if (state.maxHeightCurrentRoute) {
        return state.maxHeight
      }
      return state.maxHeight - state.bottomNavigatorHeight
    },
    showNavDrawer: state => state.showNavDrawer,
    currentAppBarHeight: state => state.currentAppBarHeight,
    currentRouteName: state => state.currentRouteName,
    toolbarTitle: state => state.toolbarTitle,
    previousPage: state => state.previousPage,
    backgroundColor: state => state.backgroundColor,
    disableSaveClothesButton: state => state.disableSaveClothesButton,
    loadingDialog: state => state.loadingDialog,
    showAddClotheButton: state => state.showAddClotheButton,
    clothes: state => state.clothes,
    updatedClothes: state => state.updatedClothes,
    fetchCasualClothes: state => state.fetchCasualClothes,
    fetchSocialClothes: state => state.fetchSocialClothes,
    categories: state => state.categories,
    occasions: state => state.occasions,
    seasons: state => state.seasons,
    clotheUploadSuccess: state => state.clotheUploadSuccess,
    showToolbarSelectedClothes: state => state.showToolbarSelectedClothes,
    selectedClothes: state => state.selectedClothes,
    selectedClothesLenght (state) {
      const clotheIds = state.selectedClothes.clothe_ids
      const clotheIdsLength = clotheIds.length
      return clotheIdsLength
    },
    casualLooks: state => state.casualLooks,
    socialLooks: state => state.socialLooks,
    dailyLookSetup: state => state.dailyLookSetup
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
    },
    setCurrentRouteName (state, data) {
      state.currentRouteName = data
    },
    setToolbarTitle (state, data) {
      state.toolbarTitle = data
    },
    setPreviousPage (state, data) {
      state.previousPage = data
    },
    setMaxHeightCurrentRoute (state, data) {
      state.maxHeightCurrentRoute = data
    },
    setBackgroundColor (state, data) {
      state.backgroundColor = data
    },
    setDisableSaveClothesButton (state, data) {
      state.disableSaveClothesButton = data
    },
    setLoadingDialog (state, data) {
      state.loadingDialog = data
    },
    setShowAddClotheButton (state, data) {
      state.showAddClotheButton = data
    },
    addClothe (state, data) {
      state.clothes.unshift(data)
    },
    addClotheOnIndex (state, data) {
      state.clothes[data.index] = data.value
    },
    addUpdatedClothe (state, data) {
      state.updatedClothes.push(data)
    },
    addUpdatedClotheOnIndex (state, data) {
      state.updatedClothes[data.index] = data.value
    },
    removeClotheOnIndex (state, data) {
      state.clothes.splice(data, 1)
    },
    setClotheUploadSuccess(state, data) {
      state.clotheUploadSuccess = data
    },
    setEditClothes (state, data) {
      state.clothes = data
    },
    resetClothes(state, data) {
      state.clothes = []
    },
    resetUpdatedClothes (state, data) {
      state.updatedClothes = []
    },
    setShowToolbarSelectedClothes (state, data) {
      state.showToolbarSelectedClothes = data
    },
    setSelectedClothes (state, data) {
      const clotheId = data.clotheId
      const imageId = data.imageId
      state.selectedClothes.clothe_ids.push(clotheId)
      state.selectedClothes.image_ids.push(imageId)
    },
    removeSelectedClothe (state, data) {
      const clotheId = data.clotheId
      const imageId = data.imageId

      const imageIdIndex = state.selectedClothes.image_ids.indexOf(imageId)
      const clotheIdIndex = state.selectedClothes.clothe_ids.indexOf(clotheId)

      state.selectedClothes.clothe_ids.splice(clotheIdIndex, 1)
      state.selectedClothes.image_ids.splice(imageIdIndex, 1)
    },
    resetSelectedClothes (state, data) {
      state.selectedClothes = {
        clothe_ids: [],
        image_ids: []
      }
    },
    removeFetchSocialClotheById (state, data) {
      const clothes = state.fetchSocialClothes
      const clothe = clothes.filter((clothe) => clothe._id === data)[0]
      if (clothe) {
        const indexToRemove = clothes.indexOf(clothe)
        state.fetchSocialClothes.splice(indexToRemove, 1)
      }
    },
    removeFetchCasualClotheById (state, data) {
      const clothes = state.fetchCasualClothes
      const clothe = clothes.filter((clothe) => clothe._id === data)[0]
      if (clothe) {
        const indexToRemove = clothes.indexOf(clothe)
        state.fetchCasualClothes.splice(indexToRemove, 1)
      }
    },
    setCasualLooks (state, data) {
      state.casualLooks = data
    },
    setSocialLooks (state, data) {
      state.socialLooks = data
    },
    setDailyLookSetup (state, data) {
      state.dailyLookSetup = data
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
    },
    async saveClothesForm ({ state, commit }) {
      try {
        commit("setLoadingDialog", true)
        const url = `${DOMAIN}/clothe/save`

        const formData = new FormData();

        const clothes = state.clothes

        let count = 0

        for (let clothe of clothes) {
          const file = clothe.image
          const clotheId = clothe._id

          formData.append(count+"file", file, clotheId);
  
          const document = {
            id: clotheId,
            category_id: clothe.category_id,
            type: clothe.type,
            occasions: clothe.occasions,
            seasons: clothe.seasons,
          }
          const json = JSON.stringify(document)
          const blob = new Blob([json], {
            type: "application/json"
          })
          formData.append(count+"document", blob, clotheId)
          count++
        }
        await axios.post(url, formData, { withCredentials: true })
        commit("setClotheUploadSuccess", true)
      }
      catch (error) {
        commit("setClotheUploadSuccess", false)
        console.log(error)
      }
    },
    async getCategories({ state }) {
      try {
        const url = `${DOMAIN}/category/find`
        const response = await axios.get(url, { withCredentials: true })
        const data = response.data
        data.sort((a, b) => (a.sort > b.sort) ? 1 : -1)
        state.categories = data
      } catch (error) {
        console.log(error)
      }
    },
    getCategoryById({ state }, data) {
      const url = `${DOMAIN}/category/find_by_id`
      return axios.get(url, { 
        params: {
          id: data
        },
        withCredentials: true 
      })
    },
    async getOccasions({ state }) {
      try {
        const url = `${DOMAIN}/occasion/find`
        const response = await axios.get(url, { withCredentials: true })
        const data = response.data
        state.occasions = data
      } catch (error) {
        console.log(error)
      }
    },
    async getSeasons({ state }) {
      try {
        const url = `${DOMAIN}/season/find`
        const response = await axios.get(url, { withCredentials: true })
        const data = response.data
        state.seasons = data
      } catch (error) {
        console.log(error)
      }
    },
    async getClothes({ state }, data) {
      try {
        const url = `${DOMAIN}/clothe/find_by_closet_id`
        const response = await axios.get(url, { 
          params: {
            type: data
          },
          withCredentials: true 
        })
        const responseData = response.data
        const clothes = responseData.clothes

        if (data === "casual") {
          state.fetchCasualClothes = clothes
          return;
        }
        state.fetchSocialClothes = clothes
        return;
      }
      catch (error) {
        console.log(error)
      }
    },
    deleteClothes ({ state }, data) {
      const url = `${DOMAIN}/clothe/delete`

      return axios.delete(url, { data: data, withCredentials: true })
    },
    async updateClothes ({ state, commit }, data) {
      try {
        commit("setLoadingDialog", true)

        const url = `${DOMAIN}/clothe/update`

        const clothes = state.updatedClothes

        await axios.put(url, clothes, { withCredentials: true })

        commit("setClotheUploadSuccess", true)
      }
      catch (error) {
        commit("setClotheUploadSuccess", false)
        console.log(error)
      }
    },
    saveDailyLookSetup ({ state }) {
      console.log(state.dailyLookSetup)
    }
  },
  modules: {
  }
})
