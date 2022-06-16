<template>
  <v-dialog
    v-model="dialog"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
  >
    <v-card
      elevation="0"
      :rounded="'0'"
    >
      <v-img
        :height="imageHeight"
        :src="image"
        :style="{ 'background-image': `url(${image})` }"
        class="backdrop-image"
        contain
        eager
      >
        <v-btn 
          fab 
          x-small
          style="margin: 10px; float: right;"
          @click="closeDialog()"
        >
          <v-icon>
            mdi-chevron-down
          </v-icon>
        </v-btn>
      </v-img>

      <v-card-text 
        class="pa-4 pt-0"
        :style="{
          'height': contentHeight+'px', 
          'overflow-y': 'auto'
        }"
      >
        <div class="py-4 text-subtitle-2 text-uppercase font-weight-bold"> 
          Guarda-roupa
        </div>

        <v-chip
          label
          color="#fbe4ec"
          text-color="accent"
          class="mb-6 text-capitalize font-weight-medium"
        >
          {{ closet }}
        </v-chip>

        <div class="py-4 text-subtitle-2 text-uppercase font-weight-bold"> 
          Categoria
        </div>

        <v-sheet
          elevation="0" 
          rounded 
          outlined
          class="mb-6"
        >
          <v-list
            dense
            three-line
            :color="'#FAFAFA'"
          >
            <v-list-item-group
              color="accent"
              mandatory
            >
              <v-list-item
                style="min-height: unset !important;"
              >
                <v-list-item-content>
                  <v-list-item-title>
                    {{ category ? category.name : "" }}
                  </v-list-item-title>
                  <!-- class="text--primary" -->
                  <v-list-item-subtitle>
                    {{ category ? category.description : "" }}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-sheet>

        <div class="py-4 text-subtitle-2 text-uppercase font-weight-bold"> 
          Estações do ano
        </div>

        <v-sheet 
          elevation="0" 
          rounded 
          style="display: flex; flex-wrap: wrap; padding: 10px;" 
          outlined
          class="mb-6"
        >
          <v-chip 
            v-for="(season, index) in seasons"
            :key="index"
            class="mr-1 mb-1 mt-1 font-weight-medium"
            color="#fbe4ec" 
            text-color="accent"
          >
            <v-icon left>
              {{ getSeasonIcon(season) }}
            </v-icon>

            {{ season }}
          </v-chip>
        </v-sheet>

        <div class="py-4 text-subtitle-2 text-uppercase font-weight-bold"> 
          Ocasiões
        </div>

        <v-sheet 
          elevation="0" 
          rounded 
          style="display: flex; flex-wrap: wrap; padding: 10px;" 
          outlined
          class="mb-6"
        >
          <v-chip 
            class="mr-1 mb-1 mt-1 font-weight-medium"
            v-for="(item, index) in occasions" 
            :key="index"
            color="#fbe4ec"
            text-color="accent"
          >
            {{ item }}
          </v-chip>
        </v-sheet>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions } from "vuex"
import * as utils from "./../../utils"

export default {
  props: {
    showDetails: {
      type: Boolean,
      default: false
    },
    clothe: Object
  },
  data () {
    return {
      imageHeight: 150,
      category: undefined,
      occasions: [],
      seasons: [],
      closet: undefined,
      image: undefined,
      dialog: false
    }
  },
  computed: {
    contentHeight () {
      let innerHeight = window.innerHeight
      const marginTop = 0
      innerHeight = innerHeight - this.imageHeight - marginTop
      return innerHeight // 526
    }
  },
  watch: {
    showDetails: {
      handler: function (val, oldVal) {
        if (val) {
          this.openDetails()
        }
      }
    }
  },
  methods: {
    ...mapActions([
      "getCategoryById"
    ]),
    openDetails () {
      const categoryId = this.clothe.category_id

      this.getCategoryById(categoryId)
        .then((response) => {
          const data = response.data
          this.category = data
          this.image = this.clothe.image
          this.occasions = this.clothe.occasions
          this.seasons = this.clothe.seasons
          this.closet = this.clothe.type
          this.dialog = true
        })
        .catch((error) => {
          console.log(error)
        })
    },
    getSeasonIcon (season) {
      if (season) {
        season = season.toLocaleLowerCase()
        const seasonIcons = utils.seasons
        for (let item of seasonIcons) {
          if (item.name === season) {
            return item.icon
          }
        }
      }
      return ""
    },
    closeDialog () {
      this.dialog = !this.dialog
      this.$emit("closeDialog")
    }
  }
}
</script>

<style scoped>
::v-deep div.v-image__image--contain {
  backdrop-filter: blur(7px) grayscale(65%);
}
</style>