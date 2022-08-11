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

    <template v-if="isDailyLookRoute" >
      <v-btn 
        icon
        color="primary"
      >
        <v-icon>
          mdi-calendar-check-outline
        </v-icon>
      </v-btn>

      <v-btn 
        icon
        color="primary"
      >
        <v-icon>
          mdi-cog-outline
        </v-icon>
      </v-btn>
    </template>

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
    },
    isDailyLookRoute () {
      return this.currentRouteName === "dailyLook"
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