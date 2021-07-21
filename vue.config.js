module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? '/lookmix-vue/'
  : '/',
  transpileDependencies: [
    'vuetify'
  ],
  pwa: {
    themeColor: '#ffb6c1ad', //#FFFFFF
    manifestPath: 'manifest.json'
  }
}
