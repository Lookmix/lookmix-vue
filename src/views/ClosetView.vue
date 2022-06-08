<template>
  <div style="margin: 10px 0px;">
    <v-row 
      no-gutters
    >
      <v-col
        v-for="image in images"
        :key="image._id"
        class="d-flex child-flex"
        cols="4"
      >
        <v-img
          :src="image.image"
          :lazy-src="image.image"
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
import { mapActions, mapGetters } from "vuex"

export default {
  mounted () {
    this.getClothes()
  },
  methods: {
    ...mapActions([
      "getClothes"
    ])
  },
  computed: {
    ...mapGetters([
      "images"
    ])
  }
}
</script>
