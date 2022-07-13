<template>
  <div>
    <template 
      v-if="edit === undefined"
    >
      <v-file-input
        id="fileInput"
        v-if="iconButton"
        hide-input
        color="primary"
        accept="image/*"
        multiple
        prepend-icon=""
        v-model="images"
        @change="readImages()"
      >
        <template v-slot:append-outer>
          <v-btn 
            icon
            color="primary"
            @click="addClotheClick()"
          >
            <v-icon>
              mdi-plus-circle-outline
            </v-icon>
          </v-btn>
        </template>
      </v-file-input>

      <v-file-input
        id="fileInput"
        v-if="!iconButton"
        hide-input
        color="primary"
        accept="image/*"
        multiple
        prepend-icon=""
        v-model="images"
        @change="readImages()"
      >
        <template v-slot:append-outer>
          <v-btn
            color="primary"
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

      <v-dialog
        :value="showDialog"
        width="250"
        persistent
      >
        <v-card
          width="250"
          height="250"
          style="display: flex; justify-content: center; flex-direction: column;"
        >
          <v-card-title>
            Carregando...
          </v-card-title>

          <v-progress-circular
            :size="65"
            :width="10"
            color="secondary"
            style="margin: auto;"
            indeterminate
          />

          <v-card-text 
            :style="{
              'display': 'flex',
              'flex-direction': 'row',
              'justify-content': 'center',
              'padding-top': '20px',
              'height': '68px'
            }"
          >
            <v-btn 
              v-if="showCloseButton"
              text 
              outlined
              small
              @click="showDialog = false; showCloseButton = false;" 
            >
              FECHAR
            </v-btn>
          </v-card-text>
        </v-card>
      </v-dialog>

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
    </template>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex"
import { v4 as uuidv4 } from "uuid"

export default {
  props: {
    iconButton: { 
      type: Boolean, 
      default: true 
    }
  },
  computed: {
    ...mapGetters([
      "currentRouteName"
    ]),
    edit () {
      const edit = this.$route.query.edit
      return edit
    }
  },
  data () {
    return {
      images: [],
      snackbarError: false,
      snackbarErrorMsg: undefined,
      showDialog: false,
      showCloseButton: false,
      loadingTimeoutInMiliseconds: 20_000
    }
  },
  methods: {
    ...mapMutations([
      "addClothe",
      "setDisableSaveClothesButton"
    ]),
    addClotheClick () {
      this.showDialog = true
      this.showCloseButton = false

      const fileUpload = document.getElementById("fileInput")

      if (fileUpload !== undefined) {
        fileUpload.click()
      }
      setTimeout(() => {
        this.showCloseButton = true
      }, this.loadingTimeoutInMiliseconds)
    },
    readImages () {
      for (let image of this.images) {
        if (!image.type.includes("image")) {
          this.snackbarErrorMsg = "Tipo de arquivo inválido, apenas imagens são aceitas."

          this.snackbarError = true
        }
        if (!this.snackbarError) {
          this.addClothe({ _id: uuidv4(), image: image })
        }
      }
      this.images = []

      this.setDisableSaveClothesButton(false)

      const clotheFormRouteName = "clothesForm"

      if (this.currentRouteName !== clotheFormRouteName) {
        this.$router.push({
          name: clotheFormRouteName
        })
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