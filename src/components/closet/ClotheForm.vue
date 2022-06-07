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

      <v-sheet
        :ref="'card-content' + id"
        :style="{'overflow-y': 'auto', 'border-radius': '8px !important'}"
        :height="cardContentHeight"
        :id="'card-content' + id"
        :rounded="'lg'"
        @scroll="scrolling()"
      >
        <v-card-subtitle 
          class="text-uppercase font-weight-bold"
          :style="{'width': widthContentCard}"
        >
          Guarda-roupa
        </v-card-subtitle>

        <v-card-text :style="{'width': widthContentCard}">
          <v-btn-toggle
            v-model="selectedCloset"
            @change="emitPayload()"
            mandatory
            borderless
            color="accent"
            style="margin-left: -4px;"
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
        </v-card-text>

        <v-card-subtitle 
          class="text-uppercase font-weight-bold" 
          :id="'category' + id" 
          :style="{'width': widthContentCard}"
        >
          Categoria
        </v-card-subtitle>

        <!-- <v-card-subtitle> Selecione uma categoria </v-card-subtitle> -->

        <v-card-text 
          :style="{'width': widthContentCard}"
        >
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
                v-model="selectedCategory"
                @change="emitPayload()"
                mandatory
                color="accent"
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
        </v-card-text>

        <v-card-subtitle 
          class="text-uppercase font-weight-bold" 
          :id="'season' + id" 
          :style="{'width': widthContentCard}"
        >
          Estações do ano
        </v-card-subtitle>

        <!-- <v-card-subtitle> Quais estações ideais para usar essa peça? </v-card-subtitle> -->

        <v-card-text 
          :style="{'width': widthContentCard}"
        >
          <v-sheet 
            elevation="0" 
            rounded 
            style="padding: 10px;" 
            outlined
          >
            <v-chip-group
              color="accent"
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
                <!-- <v-icon left>
                  {{ 'mdi-'+ season.icon}}
                </v-icon> -->

                {{ season }}
              </v-chip>
            </v-chip-group>
          </v-sheet>
        </v-card-text>

        <v-card-subtitle 
          class="text-uppercase font-weight-bold" 
          :id="'occasion' + id" 
          :style="{'width': widthContentCard}"
        >
          Ocasiões
        </v-card-subtitle>

        <!-- <v-card-subtitle> Marque uma ou mais </v-card-subtitle> -->

        <v-card-text 
          :style="{'width': widthContentCard}"
        >
          <v-sheet 
            elevation="0" 
            rounded 
            style="padding: 10px;" 
            outlined
          >
            <v-chip-group
              color="accent"
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
        </v-card-text>
      </v-sheet>

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

export default {
  props: {
    image: File,
    cardWidth: Number,
    cardHeight: Number
  },
  data () {
    return {
      categories: [
        {
          id: uuidv4(),
          name: 'Roupas de cima',
          description: 'Camisas, camisetas, polos, blusas ou regatas',
        },
        {
          id: uuidv4(),
          name: 'Pernas',
          description: 'Calças, shorts, saias ou bermudas'
        },
        {
          id: uuidv4(),
          name: 'Pés',
          description: 'Calçados ou meias'
        },
        {
          id: uuidv4(),
          name: 'Peças sobrepostas',
          description: 'Casacos, jaquetas, moletons ou sobretudos',
        },
        { 
          id: uuidv4(),
          name: 'Peças únicas',
          description: 'Vestidos ou macacões'
        },
        {
          id: uuidv4(),
          name: 'Acessórios de cabeça',
          description: 'Bonés, chapéus, óculos, brincos ou laços'
        },
        { 
          id: uuidv4(),
          name: 'Acessórios de pescoço',
          description: 'Colares, correntes, gravatas ou cachecóis',
        },
        {
          id: uuidv4(),
          name: 'Acessórios de braços e mãos',
          description: 'Bolsas, pulseiras, relógios, anéis ou luvas'
        },
        {
          id: uuidv4(),
          name: 'Cintura',
          description: 'Cintos ou laços'
        }
      ],
      selectedCategory: 0,
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
      const height = this.maxHeight - bottomPaginator - this.cardImageHeight - marginDiscount
      return `${height}px`
    },
    imageReadable () {
      if (this.image) {
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
      const category = this.categories[this.selectedCategory]._id
      let occasions = []
      let seasons = []

      if (this.selectedOccasions.length > 0) {
        for (let occasion of this.selectedOccasions) {
          occasions.push(this.occasions[occasion])
        }
      }
      if (this.selectedSeasons.length > 0) {
        for (let season of this.selectedSeasons) {//console.log(this.seasons)
          seasons.push(this.seasons[season])
        }
      }
      const payload = {
        category_id: category,
        closet: this.selectedCloset,
        occasions: occasions,
        seasons: seasons,
        image: this.image
      }
      this.$emit("payload", payload)
    },
    remove () {
      this.$emit("remove", this.id)
    },
    goTo (element) {
      const ref = "card-content" + this.id
      this.$vuetify.goTo(element, {
        duration: 700,
        offset: -60,
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
  }
}
</script>

<style scoped>
::v-deep div.v-image__image--contain {
  backdrop-filter: blur(7px) grayscale(65%);
}
.backdrop-image {
  background-position: center;
  background-size: cover; /* auto; */
}
</style>