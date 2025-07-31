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
  },
  chainWebpack: config => {
    config.resolve.alias.set("vue", "@vue/compat")
    config.module
      .rule("vue")
      .use("vue-loader")
      .tap(options => {
        return {
          ...options,
          compilerOptions: {
            compatConfig: {
              MODE: 2,
            },
          },
        }
      })
  }  
}
