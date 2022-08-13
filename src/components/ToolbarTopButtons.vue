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

      <v-menu
        bottom
        left
        :rounded="'lg'"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn 
            icon
            color="primary"
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>
              mdi-dots-vertical
            </v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item link>
            <v-list-item-title>
              ATUALIZAR OCASIÕES
            </v-list-item-title>
          </v-list-item>

          <v-list-item link>
            <v-list-item-title>
              LOOKS FAVORITOS
            </v-list-item-title>
          </v-list-item>

          <v-list-item link>
            <v-list-item-title>
              LOOKS DESCARTADOS
            </v-list-item-title>
          </v-list-item>

          <v-list-item link>
            <v-list-item-title>
              TODOS OS LOOKS
              <!-- VISUALIZAR LOOKS -->
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
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