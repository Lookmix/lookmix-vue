<template>
  <div>
    <div class="text-h6">
      {{ title }}
    </div>

    <v-row no-gutters class="mb-10">
      <v-col
        v-for="clothe in clothes"
        :key="clothe._id"
        class="d-flex child-flex"
        cols="4"
      >
        <v-img
          v-ripple
          :src="clothe.image"
          :lazy-src="clothe.image"
          aspect-ratio="1"
          class="grey lighten-2"
        >
          <template v-slot:placeholder>
            <v-row
              class="fill-height ma-0"
              align="center"
              justify="center"
            >
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              >
              </v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
    </v-row>
  </div>  
</template>

<script>
export default {
  props: {
    title: String,
    clothes: Array,
  }
}
</script>

<style scoped>

</style>