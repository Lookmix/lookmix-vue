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
      color="accent"
      :disabled="disableSaveClothesButton"
      @click="saveClothesForm()"
    >
      <v-icon>
        mdi-check
      </v-icon>
    </v-btn>

    <v-btn 
      v-if="isClothesFormRoute && showAddClotheButton" 
      icon
      color="accent"
      style="margin-left: 5px;"
      @click="addClothe()"
    >
      <v-icon>
        mdi-plus
      </v-icon>
    </v-btn>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import ButtonAddClothe from './closet/ButtonAddClothe.vue';

export default {
  components: { 
    ButtonAddClothe 
  },
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
      
    },
    addClothe () {
      
    }
  }
}
</script>

<style scoped>

</style>