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

      <v-bottom-sheet
        v-model="showDailyLookOptions"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn 
            icon
            color="primary"
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>
              mdi-cog-outline
            </v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item 
            link 
            @click="showDailyLookOptions=false; changeDailyLookSetup()"
          >
            <v-list-item-title>
              ATUALIZAR ROTINA
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
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-bottom-sheet>
    </template>

    <v-btn 
      v-if="isDailyLookSetupRoute" 
      icon
      color="primary"
      @click="saveDailyLookSetup()"
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
  data () {
    return {
      showDailyLookOptions: false
    }
  },
  computed: {
    ...mapGetters([
      "currentRouteName",
      "disableSaveClothesButton",
      "clothes",
      // "hasDailyLookSetup"
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
    },
    isDailyLookSetupRoute () {
      return this.currentRouteName === "dailyLookSetup"
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
      
    },
    saveDailyLookSetup () {
      this.$router.push("/daily-look")
    },
    changeDailyLookSetup () {
      this.$router.push("/daily-look-setup")
    }
  }
}
</script>

<style scoped>

</style>