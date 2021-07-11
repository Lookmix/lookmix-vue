<template>
  <div
    style="margin-top: 0px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      background: #ffb6c1ad;"
  >
    <v-card    
      style="margin: auto; height: 526px;"
      elevation="3"
      shaped
      :width="width"
    >
      <v-card-text>
        Loren ipsun
      </v-card-text>
    </v-card>
  </div>
  <!-- <div style="background: #ffb6c1ad; width: 100%; height: 100%;">
  </div> -->
</template>

<script>
export default {
  computed: {
    width () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 286
        default: return 326
      }
    }
  }
}
</script>

<style scoped>

</style>