<template>
  <div> <!--style="margin-top: 10px;"-->
    <div style="display: flex; flex-direction: column;">
      <v-card elevation="0" v-if="!existsClothes">
        <v-card-text style="text-align: center;">
          <br/>
          <span> Adicione novas peças de roupa para o seu guarda-roupa </span>
          <br/>
        </v-card-text>
      </v-card>

      <v-sheet 
        elevation="0" 
        style="padding: 5px; display: flex; justify-content: center;"
        :color="'#ebebeb78'"
      >
        <v-btn 
          color="accent"
          :elevation="existsClothes ? 0 : 2"
          rounded
          :text="existsClothes"
          :large="!existsClothes"
          @click="addClothe()"
        >
          <v-icon>mdi-plus</v-icon>

          ADICIONAR
        </v-btn>
      </v-sheet>

      <v-divider style="margin: 0px 0 10px 0px;" v-if="existsClothes"></v-divider>
    </div>

    <div style="display: flex; overflow-x: auto;">
      <template v-for="(clothe, index) in clothes">
        <ClotheForm :key="index"/>

        <v-divider vertical :key="'divider'+index"> </v-divider>
      </template>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex"
import ClotheForm from "./../components/closet/ClotheForm.vue"

export default {
  components: {
    ClotheForm
  },
  mounted () {
    if (this.clothes.length < 1) {
      this.addClothe()
    }
    this.setPreviousPage("/closet")
  },
  data () {
    return {
      clothes: []
    }
  },
  computed: {
    existsClothes () {
      return this.clothes.length > 0
    }
  },
  methods: {
    ...mapMutations([
      "setPreviousPage"
    ]),
    addClothe () {
      this.clothes.splice(0, 0, {})
    }
  }
}
</script>