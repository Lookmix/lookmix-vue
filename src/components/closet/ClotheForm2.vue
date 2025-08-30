<template>
  <v-card
    :min-width="cardWidthCalculated+'px'"
    :max-width="cardWidthCalculated+'px'"
    elevation="2"
    :ref="'card-' + id"
    border="sm"
    :rounded="'lg'"
  >
    <v-img
      :height="cardImageHeight"
      :src="imageReadable"
      :style="{ 'background-image': `url(${imageReadable})` }"
      class="backdrop-image"
      eager
    >
      <v-btn 
        v-if="editClothe === undefined"
        rounded-circle
        icon
        size="x-small" 
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
        'width': cardWidthCalculated+'px',
        'z-index': '2',
        'top': 204-43+'px'
      }"
    >
    </div>

    <v-card-text
      class="pt-n4"
      :ref="'card-content' + id"
      :style="{
        'height': cardContentHeight, 
        'overflow-y': 'auto', 
        'border-radius': '8px !important'
      }"
      :id="'card-content' + id"
      @scroll="scrolling()"
    >
      <div 
        class="text-body-2 text-uppercase font-weight-bold"
      >
        Guarda-roupa
      </div>

      <div class="py-4 d-flex">
        <v-btn-toggle
          v-model="selectedCloset"
          @change="emitPayload()"
          mandatory="force"
          variant="outlined"
          color="primary"
          class="flex-fill"
        >
          <v-btn 
            v-for="closet in closets"
            :key="closet.id"
            size="small"
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
      >
        Categoria
      </div>

      <div class="py-4">
        <v-list
          density="compact"
          lines="two"
          rounded
          border="thin"
          :color="'#FAFAFA'"
          v-model:selected="selectedCategoryIndex"
          @change="emitPayload()"
          :mandatory="true"
        >
          <v-list-item
            @click="goTo('#season' + id)"
            density="compact"
            active-class="text-primary"
            v-for="(category, index) in categories"
            :key="index"
            :value="index"
            @change="emitPayload()"
          >
            <v-list-item-title>
              {{ category.name }}
            </v-list-item-title>

            <v-list-item-subtitle class="text-high-emphasis">
              {{ category.description }}
            </v-list-item-subtitle>
          </v-list-item>
        </v-list>
      </div>

      <div 
        class="pt-4 text-body-2 text-uppercase font-weight-bold" 
        :id="'season' + id" 
      >
        Estações do ano
      </div>

      <div class="py-4">
        <v-sheet 
          elevation="0" 
          rounded 
          class="pa-3"
          border="sm"
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
              class="text-capitalize"
            >
              <v-icon start>
                {{ getSeasonIcon(season) }}
              </v-icon>

              {{ season["name"] }}
            </v-chip>
          </v-chip-group>
        </v-sheet>
      </div>

      <div 
        class="pt-4 text-body-2 text-uppercase font-weight-bold" 
        :id="'occasion' + id" 
      >
        Ocasiões
      </div>

      <div class="py-4">
        <v-sheet 
          class="pa-3"
          elevation="0" 
          rounded 
          border="sm"
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
              class="text-capitalize"
            >
              {{ item.name }}
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
        'width': cardWidthCalculated+'px',
        'border-radius': '8px',
        'z-index': '2',
        'top': cardHeight-43+'px'
      }"
    >
    </div>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex"
import { v4 as uuidv4 } from 'uuid';
import * as models from "./../../models"
import { useGoTo } from "vuetify"

export default {
  setup () {
    const scrollTo = useGoTo()
    return { scrollTo }
  },
  props: {
    image: [String, File],
    cardWidthCalculated: Number,
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
      selectedCategoryIndex: [0],
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
      "calculatedMaxHeight",
      "categories",
      "occasions",
      "seasons"
    ]),
    cardContentHeight () {
      // return this.calculatedMaxHeight - 105 - 250 // 95 + margin10 = 105
      // +10 = margin
      const marginDiscount = 20
      const bottomPaginator = 48
      const padding = 32
      const height = this.calculatedMaxHeight - bottomPaginator - this.cardImageHeight - marginDiscount - padding
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
      return `${this.cardWidthCalculated - padding}px`
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
          occasions.push(this.occasions[occasionIndex]._id)
        }
      }
      if (this.selectedSeasons.length > 0) {
        for (let seasonIndex of this.selectedSeasons) {
          seasons.push(this.seasons[seasonIndex]["name"])
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

      const occasionIds = this.occasions.map(occasion => occasion._id)
      for (let occasion of clotheOccasions) {
        const index = occasionIds.indexOf(occasion)
        occasionIndexes.push(index)
      }
      this.selectedOccasions = occasionIndexes
      
      const clotheSeasons = this.editClothe.seasons
      const seasonIndexes = []
      // TODO: remove this when update clothe's season key in db 
      const seasonNames = this.seasons.map(season => season.name.toLocaleLowerCase())
      for (let season of clotheSeasons) {
        const index = seasonNames.indexOf(season)
        seasonIndexes.push(index)
      }
      this.selectedSeasons = seasonIndexes
    },
    goTo (element) {
      const ref = "card-content" + this.id
      this.scrollTo(element, {
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
      season["name"] = season["name"].toLocaleLowerCase()
      const seasonIcons = models.seasonIcons
      for (let item of seasonIcons) {
        if (item.name === season["name"]) {
          return item.icon
        }
      }
    }
  }
}
</script>

<style scoped>
:deep(div.v-img.backdrop-image > img) {
  backdrop-filter: blur(7px) grayscale(65%);
}
:deep(.v-list-item::after) {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 98.5%;
  height: 96%;
}
</style>