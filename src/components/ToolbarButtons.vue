<template>
  <div style="display: flex;">
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

    <button-add-clothe v-if="showAddClotheButton" />
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
      "clothes"
    ]),
    isClosetRoute () {
      return this.currentRouteName === "closet"
    },
    isClothesFormRoute () {
      return this.currentRouteName === "clothesForm"
    },
    showAddClotheButton () {
      return this.isClosetRoute || (this.isClothesFormRoute && this.clothes.length > 0)
    }
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