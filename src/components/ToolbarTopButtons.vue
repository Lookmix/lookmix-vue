<template>
  <div style="display: flex;">
    <v-btn 
      class="mr-n3"
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
        :disabled="!hasDailyLookSetup"
      >
        <v-icon>
          mdi-calendar-check-outline
        </v-icon>
      </v-btn>

      <v-bottom-sheet
        v-model="showDailyLookOptions"
      >
        <template v-slot:activator="{ props }">
          <v-btn 
            icon
            color="primary"
            :disabled="!hasDailyLookSetup"
            v-bind="props"
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

          <v-list-item 
            link
            @click="showDailyLookOptions=false; showAllLooks()"
          >
            <v-list-item-title>
              TODOS OS LOOKS
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-bottom-sheet>
    </template>

    <button-update-daily-look-setup v-if="isDailyLookSetupRoute"/>

    <button-add-clothe v-if="showAddClotheButton" />
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import ButtonUpdateDailyLookSetup from "./ButtonUpdateDailyLookSetup.vue";
import ButtonAddClothe from "./closet/ButtonAddClothe.vue";

export default {
  components: { 
    ButtonAddClothe,
    ButtonUpdateDailyLookSetup
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
      "dailyLookSetup"
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
    },
    hasDailyLookSetup () {
      return this.dailyLookSetup !== null && this.dailyLookSetup !== undefined
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
    changeDailyLookSetup () {
      this.$router.push("/daily-look-setup")
    },
    showAllLooks () {
      this.$router.push("/lookset")
    }
  }
}
</script>

<style scoped>

</style>