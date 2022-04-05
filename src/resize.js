import store from '@/store/index.js'

// https://vuetifyjs.com/en/components/grids/#usage

function isMdOrHigher () {
  const width = window.innerWidth
  return width > 960 // && width <= 1264
}

function isSm () {
  const width = window.innerWidth
  return width > 600 && width <= 960
}

function isXs () {
  const width = window.innerWidth
  return width <= 600
}


export function onResize () {
  const appBarMobileHeight = store.getters.appBarMobileHeight
  const appBarDesktopHeight = store.getters.appBarDesktopHeight
  const innerHeight = window.innerHeight

  let appBarHeight = appBarMobileHeight

  if (isMdOrHigher()) {
    appBarHeight = appBarDesktopHeight
  }
  store.commit("setMaxHeight", innerHeight)

  if (!store.getters.isNewUserRoute && !store.getters.isLoginRoute) {
    store.commit("setMaxHeight", innerHeight - appBarHeight)
  }
}

window.addEventListener("resize", onResize, { passive: true })
