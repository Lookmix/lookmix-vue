<template>
  <div>
    <v-btn 
      v-if="isClosetRoute" 
      icon 
      color="accent"
      @click="redirectToForm()"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>

    <v-btn 
      v-if="isClothesFormRoute" 
      rounded
      elevation="0"
      small
      color="secondary"
      :disabled="disableSaveClothesButton"
      @click="saveClothesForm()"
    >
      SALVAR
    </v-btn>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  props: [
    "value"
  ],
  computed: {
    ...mapGetters([
      "currentRouteName",
      "disableSaveClothesButton"
    ]),
    isClosetRoute () {
      return this.currentRouteName === "closet"
    },
    isClothesFormRoute () {
      return this.currentRouteName === "clothesForm"
    },
  },
  methods: {
    ...mapMutations([
      "setLoadingDialog"
    ]),
    redirectToForm () {
      this.setLoadingDialog(true)
      this.$router.push("clothes-form")
    },
    saveClothesForm () {
      
    }
  }
}
</script>

<style scoped>

</style>