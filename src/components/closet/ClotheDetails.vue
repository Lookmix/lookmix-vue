<template>
  <v-dialog
    v-model="dialog"
    fullscreen
    hide-overlay
    persistent
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
        eager
      >
        <v-btn 
          icon
          rounded-circle 
          size="x-small"
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
        <div class="pt-4 text-body-2 text-uppercase font-weight-bold"> 
          Guarda-roupa
        </div>

        <div class="py-4">
          <v-chip
            label
            color="primaryLight"
            text-color="primary"
            class="text-capitalize font-weight-medium"
          >
            {{ closet }}
          </v-chip>
        </div>

        <div class="pt-4 text-body-2 text-uppercase font-weight-bold"> 
          Categoria
        </div>

        <div class="py-4">
          <v-sheet
            elevation="0" 
            rounded 
            outlined
          >
            <v-list
              density="compact"
              lines="three"
              :color="'#FAFAFA'"

              mandatory
            >
              <!-- 
              <v-list-item-group
                color="primary"
                mandatory
              > 
              -->
                <v-list-item
                  style="min-height: unset !important;"
                >
                  <!-- <v-list-item-content> -->
                    <v-list-item-title>
                      {{ category ? category.name : "" }}
                    </v-list-item-title>

                    <v-list-item-subtitle>
                      {{ category ? category.description : "" }}
                    </v-list-item-subtitle>
                  <!-- </v-list-item-content> -->
                </v-list-item>
              <!-- </v-list-item-group> -->
            </v-list>
          </v-sheet>
        </div>

        <div class="pt-4 text-body-2 text-uppercase font-weight-bold"> 
          Estações do ano
        </div>

        <div class="py-4">
          <v-sheet
            elevation="0" 
            rounded 
            style="display: flex; flex-wrap: wrap; padding: 10px;" 
            outlined
          >
            <v-chip 
              v-for="(season, index) in seasons"
              :key="index"
              class="mr-1 mb-1 mt-1 font-weight-medium"
              color="primaryLight" 
              text-color="primary"
            >
              <v-icon start>
                {{ getSeasonIcon(season) }}
              </v-icon>

              {{ season }}
            </v-chip>
          </v-sheet>
        </div>

        <div class="pt-4 text-body-2 text-uppercase font-weight-bold"> 
          Ocasiões
        </div>

        <div class="py-4">
          <v-sheet
            elevation="0" 
            rounded 
            style="display: flex; flex-wrap: wrap; padding: 10px;" 
            outlined
          >
            <v-chip 
              class="mr-1 mb-1 mt-1 font-weight-medium text-capitalize"
              v-for="(item, index) in occasionNames" 
              :key="index"
              color="primaryLight"
              text-color="primary"
            >
              {{ item }}
            </v-chip>
          </v-sheet>
        </div>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions, mapGetters } from "vuex"
import * as models from "./../../models"

export default {
  props: {
    showDetails: {
      type: Boolean,
      default: false
    },
    clothe: Object
  },
  mounted () {
    if (this.occasions.length < 1) {
      this.getOccasions()
    }
  },
  data () {
    return {
      imageHeight: 150,
      category: undefined,
      seasons: [],
      closet: undefined,
      image: undefined,
      dialog: false
    }
  },
  computed: {
    ...mapGetters([
      "categories",
      "occasions"
    ]),
    contentHeight () {
      let innerHeight = window.innerHeight
      const marginTop = 0
      innerHeight = innerHeight - this.imageHeight - marginTop
      return innerHeight // 526
    },
    occasionNames () {
      if (this.clothe) {
        const occasionId = {} 
        for (let occasion of this.occasions) {
          occasionId[occasion._id] = occasion.name
        }
        return this.clothe.occasions.map(clotheOccasionId => occasionId[clotheOccasionId])
      }
      return []
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
      "getCategoryById",
      "getOccasions"
    ]),
    openDetails () {
      this.image = this.clothe.image
      this.seasons = this.clothe.seasons
      this.closet = this.clothe.type

      const categoryId = this.clothe.category_id

      if (this.categories.length > 0) {
        const category = this.categories.filter(category => category._id === categoryId)[0]
        this.category = category
        this.dialog = true
        return;
      }
      this.getCategoryById(categoryId)
        .then((response) => {
          const data = response.data
          this.category = data
          this.dialog = true
        })
        .catch((error) => {
          console.log(error)
        })
    },
    getSeasonIcon (season) {
      if (season) {
        season = season.toLocaleLowerCase()
        const seasonIcons = models.seasonIcons
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
/* TODO: Some components have structural changes in their markup */
:deep(div.v-image__image--contain) {
  backdrop-filter: blur(7px) grayscale(65%);
}
</style>