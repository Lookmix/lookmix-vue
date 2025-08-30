<template>
  <div>
    <template 
      v-if="edit === undefined"
    >
      <v-file-input
        class="ml-n3"
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
        <template v-slot:append>
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
        <template v-slot:append>
          <v-btn
            color="primary"
            :elevation="2"
            rounded
            size="large"
            @click="addClotheClick()"
          >
            <v-icon>mdi-plus</v-icon>

            ADICIONAR
          </v-btn>
        </template>
      </v-file-input>

      <dialog-fetch-data-loading 
        :showDialog="showDialog"
        :showCloseButton="showCloseButton"
        @showDialog="showDialogEvent($event)"
        @showCloseButton="showCloseButtonEvent($event)"
      />

      <v-snackbar
        v-model="snackbarError"
        color="error"
      >
        {{ snackbarErrorMsg }}

        <template v-slot:actions="{ attrs }">
          <v-btn
            variant="text"
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
import DialogFetchDataLoading from "../DialogFetchDataLoading.vue"

export default {
  components: {
    DialogFetchDataLoading
  },
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
      loadingTimeoutInMiliseconds: 20000
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
    },
    showDialogEvent (data) {
      this.showDialog = data
    },
    showCloseButtonEvent (data) {
      this.showCloseButton = data
    }
  }
}
</script>

<style scoped>
/* TODO: Some components have structural changes in their markup */
:deep(.v-input__append-outer) { 
  margin-bottom: 0px;
  margin-top: 0px;
}
</style>