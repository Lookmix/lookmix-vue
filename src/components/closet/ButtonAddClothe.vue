<template>
  <div>
    <v-file-input
      id="fileInput"
      v-if="iconButton"
      hide-input
      color="accent"
      accept="image/*"
      multiple
      prepend-icon=""
      v-model="images"
      @change="readImages()"
    >
      <template v-slot:append-outer>
        <v-btn 
          icon
          color="accent"
          @click="addClotheClick()"
        >
          <v-icon>
            mdi-plus
          </v-icon>
        </v-btn>
      </template>
    </v-file-input>

    <v-file-input
      id="fileInput"
      v-if="!iconButton"
      hide-input
      color="accent"
      accept="image/*"
      multiple
      prepend-icon=""
      v-model="images"
      @change="readImages()"
    >
      <template v-slot:append-outer>
        <v-btn
          color="accent"
          :elevation="2"
          rounded
          large
          @click="addClotheClick()"
        >
          <v-icon>mdi-plus</v-icon>

          ADICIONAR
        </v-btn>
      </template>
    </v-file-input>

    <dialog-loading :show="showDialog"/>

    <v-snackbar
      v-model="snackbarError"
      color="error"
    >
      {{ snackbarErrorMsg }}

      <template v-slot:action="{ attrs }">
        <v-btn
          text
          v-bind="attrs"
          @click="snackbarError = false"
        >
          OK
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex"
import { v4 as uuidv4 } from "uuid"
import DialogLoading from "./../DialogLoading.vue"

export default {
  components: {
    DialogLoading
  },
  props: {
    iconButton: { 
      type: Boolean, 
      default: true 
    }
  },
  computed: {
    ...mapGetters([
      "clothes",
      "currentRouteName"
    ])
  },
  data () {
    return {
      images: [],
      snackbarError: false,
      snackbarErrorMsg: undefined,
      showDialog: false,
    }
  },
  methods: {
    ...mapMutations([
      "addClothe",
      "setDisableSaveClothesButton"
    ]),
    addClotheClick () {
      const fileUpload = document.getElementById("fileInput")

      if (fileUpload !== undefined) {
        fileUpload.click()
      }
      this.showDialog = true

      setTimeout(() => {
        this.showDialog = false
      }, 5500)
    },
    readImages () {
      for (let image of this.images) {
        if (!image.type.includes("image")) {
          this.snackbarErrorMsg = "Tipo de arquivo inválido, apenas imagens são aceitas."
          this.snackbarError = true
        }
        if (!this.snackbarError) {
          this.addClothe({ id: uuidv4(), image: image })
        }
      }
      this.images = []
      this.setDisableSaveClothesButton(false)

      if (this.currentRouteName !== "clothesForm") {
        this.$router.push("clothes-form")
      }
      this.showDialog = false
    }
  }
}
</script>

<style scoped>
::v-deep .v-input__append-outer {
  margin-bottom: 0px;
  margin-top: 0px;
}
</style>