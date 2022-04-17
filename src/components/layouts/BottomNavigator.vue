<template>
  <v-bottom-navigation
    v-model="value"
    app
    shift
    style="border-top: solid 1px lightgray;"
    grow
    color="accent"
  >
    <v-btn :ripple="false" plain>
      <span>Feed</span>

      <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-btn :ripple="false" plain>
      <span>Look diário</span>

      <v-icon>mdi-calendar</v-icon>
    </v-btn>

    <v-btn :ripple="false" plain>
      <span>Look aleatório</span>

      <v-icon>mdi-shuffle</v-icon>
    </v-btn>

    <v-btn :ripple="false" plain>
      <span>Closet</span>

      <v-icon>mdi-hanger</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
  export default {
    data () { 
      return {
        value: 0
      }
    }
  }
</script>