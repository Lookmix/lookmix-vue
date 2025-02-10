module.exports = {
  publicPath: import.meta.env.NODE_ENV === "production"
  ? "/lookmix-vue/"
  : "/",
  transpileDependencies: [
    "vuetify"
  ],
  pwa: {
    themeColor: "#ffb6c1ad", //#FFFFFF
    manifestPath: "manifest.json"
  }
}
