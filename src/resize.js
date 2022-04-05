import store from '@/store/index.js'

// https://vuetifyjs.com/en/components/grids/#usage

export function isMdOrHigher () {
  const width = window.innerWidth
  return width > 960 // && width <= 1264
}

export function isSm () {
  const width = window.innerWidth
  return width > 600 && width <= 960
}

export function isXs () {
  const width = window.innerWidth
  return width <= 600
}


export function onResize () {
  const appBarMobileHeight = store.state.appBarMobileHeight
  const appBarDesktopHeight = store.state.appBarDesktopHeight
  const innerHeight = window.innerHeight

  let appBarHeight = appBarMobileHeight

  if (isMdOrHigher()) {
    appBarHeight = appBarDesktopHeight
  }
  store.commit("setMaxHeight", innerHeight)

  if (!store.getters.isNewUserRoute && !store.getters.isLoginRoute) {
    store.commit("setMaxHeight", innerHeight - appBarHeight)
    store.commit("setCurrentAppBarHeight", appBarHeight)
  }
}

window.addEventListener("resize", onResize, { passive: true })
