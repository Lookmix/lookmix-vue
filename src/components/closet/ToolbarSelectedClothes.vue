<template>
  <v-toolbar
    :height="56"
    dense
    bottom
    flat
    color="accent"
    elevation="0"
  >
    <v-btn 
      text
      :ripple="false"
      color="primary"
      elevation="0"
      class="mx-1"
      @click="cancelSelectedClick()"
    >
      cancelar
    </v-btn>

    <v-spacer/>

    <v-btn 
      text
      :disabled="!existsSelectedClothes"
      :ripple="false"
      color="primary"
      elevation="0"
      :class="{
        'mx-1': true,
        'text--secondary': !existsSelectedClothes
      }"
      @click="editSelectedClick()"
    >
      editar
    </v-btn>

    <v-spacer/>

    <v-btn 
      text
      :disabled="!existsSelectedClothes"
      :ripple="false"
      color="primary"
      elevation="0"
      :class="{
        'mx-1': true,
        'text--secondary': !existsSelectedClothes
      }"
      @click="removeSelectedClick()"
    >
      excluir
    </v-btn>
  </v-toolbar>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  methods: {
    ...mapMutations([
      "setShowToolbarSelectedClothes"
    ]),
    cancelSelectedClick () {
      this.setShowToolbarSelectedClothes(false)
      this.$emit("cancelSelect")
    },
    removeSelectedClick () {
      this.$emit("removeSelected")
    },
    editSelectedClick () {
      this.$emit("editSelected")
    },
  },
  computed: {
    ...mapGetters([
      "selectedClothes"
    ]),
    existsSelectedClothes () {
      const length = this.selectedClothes.length
      return length > 0
    }
  }
}
</script>