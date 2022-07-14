<template>
  <div 
    :style="{
      'width': cardWidth+'px', // 85%
    }"
  >
    <v-card
      elevation="2"
      :min-width="cardWidth+'px'"
      :max-width="cardWidth+'px'"
      :ref="'card-' + id"
      outlined
      :rounded="'lg'"
    >
      <v-img
        :height="cardImageHeight"
        :src="imageReadable"
        :style="{ 'background-image': `url(${imageReadable})` }"
        class="backdrop-image"
        contain
        eager
      >
        <v-btn 
          v-if="editClothe === undefined"
          fab 
          x-small 
          style="margin: 10px; float: right;"
          @click="remove()"
        >
          <v-icon>
            mdi-close
          </v-icon>
        </v-btn>
      </v-img>

      <div 
        v-if="showOverlayTop"
        :style="{
          'height': '35px', 
          'background': 'linear-gradient(0deg, transparent 5%, #ffffff 88%)', 
          'position': 'fixed',
          'display': 'block',
          'width': cardWidth+'px',
          'z-index': '2',
          'top': 204-43+'px'
        }"
      >
      </div>

      <v-card-text
        class="pt-n4"
        :ref="'card-content' + id"
        :style="{
          'width': widthContentCard, 
          'height': cardContentHeight, 
          'overflow-y': 'auto', 
          'border-radius': '8px !important'
        }"
        :id="'card-content' + id"
        @scroll="scrolling()"
      >
        <div 
          class="text-body-2 text-uppercase font-weight-bold"
          :style="{'width': widthContentCard}"
        >
          Guarda-roupa
        </div>

        <div class="py-4" :style="{'width': widthContentCard}">
          <v-btn-toggle
            v-model="selectedCloset"
            @change="emitPayload()"
            mandatory
            borderless
            color="primary"
          >
            <v-btn 
              v-for="closet in closets"
              :key="closet.id"
              small
              @click="goTo('#category' + id)"
              :value="closet.value" 
            >
              {{ closet.text }}
            </v-btn>
          </v-btn-toggle>            
        </div>

        <div 
          class="pt-4 text-body-2 text-uppercase font-weight-bold" 
          :id="'category' + id" 
          :style="{'width': widthContentCard}"
        >
          Categoria
        </div>

        <!-- <v-card-subtitle> Selecione uma categoria </v-card-subtitle> -->

        <div class="py-4" :style="{'width': widthContentCard}">
          <v-sheet
            elevation="0" 
            rounded 
            outlined
          >
            <v-list
              dense
              three-line
              :color="'#FAFAFA'"
            >
              <v-list-item-group
                v-model="selectedCategoryIndex"
                @change="emitPayload()"
                mandatory
                color="primary"
              >
                <v-list-item
                  @click="goTo('#season' + id)"
                  style="min-height: unset !important;"
                  v-for="(category, index) in categories"
                  :key="index"
                >
                  <v-list-item-content>
                    <v-list-item-title>
                      {{ category.name }}
                    </v-list-item-title>

                    <v-list-item-subtitle>
                      {{ category.description }}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-sheet>
        </div>

        <div 
          class="pt-4 text-body-2 text-uppercase font-weight-bold" 
          :id="'season' + id" 
          :style="{'width': widthContentCard}"
        >
          Estações do ano
        </div>

        <!-- <v-card-subtitle> Quais estações ideais para usar essa peça? </v-card-subtitle> -->

        <div class="py-4" :style="{'width': widthContentCard}">
          <v-sheet 
            elevation="0" 
            rounded 
            style="padding: 10px;" 
            outlined
          >
            <v-chip-group
              color="primary"
              mandatory
              multiple
              column
              v-model="selectedSeasons"
              @change="emitPayload()"
            >
              <v-chip 
                v-for="(season, index) in seasons"
                :key="index"
              >
                <v-icon left>
                  {{ getSeasonIcon(season) }}
                </v-icon>

                {{ season }}
              </v-chip>
            </v-chip-group>
          </v-sheet>
        </div>

        <div 
          class="pt-4 text-body-2 text-uppercase font-weight-bold" 
          :id="'occasion' + id" 
          :style="{'width': widthContentCard}"
        >
          Ocasiões
        </div>

        <!-- <v-card-subtitle> Marque uma ou mais </v-card-subtitle> -->

        <div class="py-4" :style="{'width': widthContentCard}">
          <v-sheet 
            elevation="0" 
            rounded 
            style="padding: 10px;" 
            outlined
          >
            <v-chip-group
              color="primary"
              mandatory
              multiple
              column
              v-model="selectedOccasions"
              @change="emitPayload()"
            >
              <v-chip 
                v-for="(item, index) in occasions" 
                :key="index"
              >
                {{ item }}
              </v-chip>
            </v-chip-group>
          </v-sheet>
        </div>
      </v-card-text>

      <div 
        v-if="showOverlayBottom"
        :style="{
          'height': '35px', 
          'background': 'linear-gradient(0deg, #ffffff 5%, transparent 100%)',
          'position': 'fixed',
          'display': 'block',
          'width': cardWidth+'px',
          'z-index': '2',
          'top': cardHeight-43+'px'
        }"
      >
      </div>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import { v4 as uuidv4 } from 'uuid';
import * as utils from "./../../utils"

export default {
  props: {
    image: [String, File],
    cardWidth: Number,
    cardHeight: Number,
    editClothe: Object
  },
  watch: {
    editClothe: {
      immediate: true,
      // deep: true,
      handler: function (val, oldVal) {
        if (val) {
          this.setClotheData()
        }
      }
    }
  },
  data () {
    return {
      closets: [
        {
          text: "CASUAL",
          id: uuidv4(),
          value: "casual"
        },
        {
          text: "SOCIAL",
          id: uuidv4(),
          value: "social"
        }
      ],
      selectedCategoryIndex: undefined,
      selectedCloset: undefined,
      selectedOccasions: [],
      selectedSeasons: [],
      id: uuidv4(),
      cardImageHeight: 160, //180,
      showOverlayBottom: true,
      showOverlayTop: false
    }
  },
  computed: {
    ...mapGetters([
      "maxHeight",
      "categories",
      "occasions",
      "seasons"
    ]),
    cardContentHeight () {
      // return this.maxHeight - 105 - 250 // 95 + margin10 = 105
      // +10 = margin
      const marginDiscount = 20
      const bottomPaginator = 48
      const padding = 32
      const height = this.maxHeight - bottomPaginator - this.cardImageHeight - marginDiscount - padding
      return `${height}px`
    },
    imageReadable () {
      if (this.editClothe) {
        return this.editClothe.image
      }
      if (this.image && typeof this.image === "object") {
        return URL.createObjectURL(this.image)
      } return ""
    },
    widthContentCard () {
      const padding = 32
      return `${this.cardWidth - padding}px`
    }
  },
  methods: {
    emitPayload () {
      let category = -1
      let occasions = []
      let seasons = []

      if (this.selectedCategoryIndex != undefined) {
        category = this.categories[this.selectedCategoryIndex]._id
      }
      if (this.selectedOccasions.length > 0) {
        for (let occasionIndex of this.selectedOccasions) {
          occasions.push(this.occasions[occasionIndex])
        }
      }
      if (this.selectedSeasons.length > 0) {
        for (let seasonIndex of this.selectedSeasons) {
          seasons.push(this.seasons[seasonIndex])
        }
      }
      const payload = {
        category_id: category,
        type: this.selectedCloset,
        occasions: occasions,
        seasons: seasons,
        image: this.image
      }
      if (!this.editClothe) {
        this.$emit("payloadSave", payload)
        return;
      }
      this.$emit("payloadUpdate", payload)
    },
    remove () {
      this.$emit("remove", this.id)
    },
    setClotheData () {
      const category = this.categories.filter(category => category._id === this.editClothe.category_id)[0]
      this.selectedCategoryIndex = this.categories.indexOf(category)
      this.selectedCloset = this.closets.filter(closet => closet.value === this.editClothe.type)[0].value
      
      const clotheOccasions = this.editClothe.occasions
      const occasionIndexes = []

      for (let occasion of clotheOccasions) {
        const index = this.occasions.indexOf(occasion)
        occasionIndexes.push(index)
      }
      this.selectedOccasions = occasionIndexes
      
      const clotheSeasons = this.editClothe.seasons
      const seasonIndexes = []

      for (let season of clotheSeasons) {
        const index = this.seasons.indexOf(season)
        seasonIndexes.push(index)
      }
      this.selectedSeasons = seasonIndexes
    },
    goTo (element) {
      const ref = "card-content" + this.id
      this.$vuetify.goTo(element, {
        duration: 700,
        offset: -50,
        easing: "easeInOutCubic",
        container: this.$refs[ref]
      })
    },
    scrolling () {
      const element = document.getElementById("card-content" + this.id)
      if (!element) {
        return;
      }
      const cardScrollHeight = element.scrollHeight
      const cardClientHeight = element.clientHeight
      const cardScrollTopMaxValue = cardScrollHeight - cardClientHeight
      const pixelsScrolled = element.scrollTop

      this.showOverlayBottom = true

      if (pixelsScrolled === cardScrollTopMaxValue) {
        this.showOverlayBottom = false
        return;
      }
      if (pixelsScrolled === 0) {
        this.showOverlayTop = false
        return;
      }
      if (pixelsScrolled > 0) {
        this.showOverlayTop = true
        return;
      }
    },
    getSeasonIcon (season) {
      season = season.toLocaleLowerCase()
      const seasonIcons = utils.seasons
      for (let item of seasonIcons) {
        if (item.name === season) {
          return item.icon
        }
      }
    }
  }
}
</script>

<style scoped>
::v-deep div.v-image__image--contain {
  backdrop-filter: blur(7px) grayscale(65%);
}
</style>