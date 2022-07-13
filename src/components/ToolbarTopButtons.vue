<template>
  <div style="display: flex;">
    <v-btn 
      v-if="isClothesFormRoute" 
      icon
      color="primary"
      :disabled="disableSaveClothesButton"
      @click="saveClothesButtonClick()"
    >
      <v-icon>
        mdi-check-outline
      </v-icon>
    </v-btn>

    <button-add-clothe v-if="showAddClotheButton" />
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
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
    },
    edit () {
      const edit = this.$route.query.edit
      return edit
    }
  },
  methods: {
    ...mapActions([
      "saveClothesForm",
      "updateClothes"
    ]),
    ...mapMutations([
      "setLoadingDialog"
    ]),
    saveClothesButtonClick () {
      if (this.edit) {
        this.updateClothes()
        return
      }
      this.saveClothesForm()
    },
    addClothe () {
      
    }
  }
}
</script>

<style scoped>

</style>