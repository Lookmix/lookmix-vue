import store from '@/store/index.js'

const APP_BAR_HEIGHT = 56

export function onResize () {   
  const innerHeight = window.innerHeight

  store.commit("setMaxHeight", innerHeight)

  if (!store.getters.isNewUserRoute && !store.getters.isLoginRoute) {
    store.commit("setMaxHeight", innerHeight - APP_BAR_HEIGHT)
  }
}

window.addEventListener("resize", onResize, { passive: true })
