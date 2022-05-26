<template>
  <div style="margin: 10px 0px;">
    <v-card v-for="image in images" :key="image"
      min-width="150px"
      max-width="150px"
    >
      <v-img
        height="150px"
        :src="image"
      >
      </v-img>
    </v-card>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex"

export default {
  mounted () {
    this.getImageById()
  },
  methods: {
    ...mapActions([
      "getImageById"
    ])
  },
  computed: {
    ...mapGetters([
      "images"
    ])
  }
}
</script>
