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
      icon
      color="secondary"
      :disabled="disableSaveClothesButton"
      @click="saveClothesForm()"
    >
      <!-- rounded
      small
      elevation="0" -->
      <v-icon>
        mdi-check
      </v-icon>
      <!-- SALVAR -->
    </v-btn>

    <v-btn 
      v-if="isClothesFormRoute && showAddClotheButton" 
      icon
      color="accent"
    >
      <!-- rounded
      small
      elevation="0" -->
      <v-icon>
        mdi-plus
      </v-icon>
      <!-- SALVAR -->
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
      "disableSaveClothesButton",
      "showAddClotheButton"
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