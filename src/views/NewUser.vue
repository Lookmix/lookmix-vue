<template>
  <div>
    <h1>NewUser works!</h1>
  </div>  
</template>

<script>
import * as utils from './../utils.js'

export default {
  mounted () {
    const darkTheme = this.$vuetify.theme.dark

    utils.updateMetaTagTheme(darkTheme, '#8341a1d4')
  }
}
</script>

<style scoped>

</style>