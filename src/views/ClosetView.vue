<template>
  <div class="ma-1">
    <ListClothe 
      v-for="item in clothesByCategories" 
      :key="item.categoryId" 
      :title="item.category"
      :clothes="item.clothes"
      @openDetails="openDetails($event)"
    />

    <v-dialog
      v-model="bottomSheet"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card
        elevation="0"
        :rounded="'0'"
      >
        <v-img
          :height="150"
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
            @click="bottomSheet = !bottomSheet"
          >
            <v-icon>
              mdi-chevron-down
            </v-icon>
          </v-btn>
        </v-img>

        <v-card-text class="mt-5">
          <span class="text-subtitle-2 text-uppercase font-weight-bold"> 
            Guarda-roupa
          </span>

          <br>

          <v-btn-toggle
            mandatory
            borderless
            color="accent"
            class="mb-6 mt-2"
          >
            <v-btn small>
              {{ closet }}
            </v-btn>
          </v-btn-toggle>

          <br>

          <span class="text-subtitle-2 text-uppercase font-weight-bold"> 
            Categoria
          </span>

          <br>

          <v-list
            dense
            three-line
            :color="'#FAFAFA'"
          >
            <v-list-item-group
              mandatory
              color="accent"
            >
              <v-list-item
                style="min-height: unset !important;"
              >
                <v-list-item-content>
                  <v-list-item-title>
                    {{ category ? category.name : "" }}
                  </v-list-item-title>

                  <v-list-item-subtitle class="text--primary">
                    {{ category ? category.description : "" }}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>

          <br>

          <span class="text-subtitle-2 text-uppercase font-weight-bold"> 
            Estações do ano
          </span>

          <br>

          <div style="display: flex; flex-wrap: wrap;">
            <v-chip 
              v-for="(season, index) in seasons"
              :key="index"
              class="mr-1 mb-1 mt-1 font-weight-bold"
              color="accent"
            >
              <!-- color=#fbe4ec  -->
              <!-- style="color: #ff4081;" -->
              <v-icon left>
                {{ getSeasonIcon(season) }}
              </v-icon>

              {{ season }}
            </v-chip>
          </div>

          <br>

          <span class="text-subtitle-2 text-uppercase font-weight-bold"> 
            Ocasiões
          </span>

          <br>

          <div style="display: flex; flex-wrap: wrap;">
            <v-chip 
              class="mr-1 mb-1 mt-1 font-weight-bold"
              v-for="(item, index) in occasions" 
              :key="index"
              color="accent"
            >
              <!-- color="#fbe4ec" -->
              <!-- style="color: #ff4081;" -->
              {{ item }}
            </v-chip>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex"
import ListClothe from "./../components/closet/ListClothe.vue"
import * as utils from "./../utils"

export default {
  components: {
    ListClothe
  },
  mounted () {
    this.getClothes()
    if (this.categories.length < 1) {
      this.getCategories()
    }
  },
  data () {
    return {
      bottomSheet: false,
      category: undefined,
      occasions: [],
      seasons: [],
      closet: undefined,
      image: undefined
    }
  },
  methods: {
    ...mapActions([
      "getClothes",
      "getCategories",
      "getCategoryById"
    ]),
    openDetails (clothe) {
      const categoryId = clothe.category_id

      this.getCategoryById(categoryId)
        .then((response) => {
          const data = response.data
          this.category = data
          this.image = clothe.image
          this.occasions = clothe.occasions
          this.seasons = clothe.seasons
          this.closet = clothe.type
          this.bottomSheet = true
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
    }
  },
  computed: {
    ...mapGetters([
      "fetchClothes",
      "categories"
    ]),
    clothesByCategories () {
      const result = []

      for (let category of this.categories) {
        const categoryId = category._id
        const clothes = this.fetchClothes.filter(clothe => clothe.category_id === categoryId)

        if (clothes.length > 0) {
          result.push({
            categoryId: categoryId,
            category: category.name,
            clothes: clothes
          })
        }
      }
      return result
    },
    gridHeight () {
      const header = 56
      const footer = 56
      const marginAll = 4
      const marginVertical = 16
      const tabs = 48
      let innerHeight = window.innerHeight
      innerHeight = innerHeight - header - footer - marginAll - marginVertical - tabs
      return innerHeight
    }
  }
}
</script>

<style scoped>
::v-deep div.v-image__image--contain {
  backdrop-filter: blur(7px) grayscale(65%);
}
</style>