module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? '/lookmix-vue/'
  : '/',
  transpileDependencies: [
    'vuetify'
  ]
}
