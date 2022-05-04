<template>
  <div 
    :style="{
      'width': widthCard, // 85%
      'display': 'flex',
      'flex-direction': 'column',
    }"
  >
    <v-card
      elevation="0"
      :min-width="widthCard"
      :height="heightCard"
      :max-width="widthCard"
      :style="{'overflow-y': 'auto'}"
      :ref="'card-' + id"
    >
      <v-img
        height="250"
        :src="imageReadable"
        style="margin-top: 10px;"
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

      <v-card-title>Guarda-roupa</v-card-title>

      <v-card-text>
        <v-btn-toggle
          v-model="closet"
          @change="emitPayload()"
          tile
          mandatory
          color="accent"
          group
          style="margin-left: -4px;"
        >
          <v-btn 
            @click="goTo('#category' + id)"
            value="casual" 
          >
            CASUAL
          </v-btn>

          <v-btn 
            @click="goTo('#category' + id)"
            value="social" 
          >
            SOCIAL
          </v-btn>
        </v-btn-toggle>            
      </v-card-text>

      <v-card-title :id="'category' + id">Categoria</v-card-title>

      <!-- <v-card-subtitle> Selecione uma categoria </v-card-subtitle> -->

      <v-card-text>
        <v-list 
          dense
          outlined
          three-line
        >
          <v-list-item-group
            v-model="selectedCategory"
            @change="emitPayload()"
            mandatory
            color="accent"
          >
            <v-list-item
              @click="goTo('#occasion' + id)"
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
      </v-card-text>

      <v-card-title :id="'occasion' + id">Ocasiões</v-card-title>

      <!-- <v-card-subtitle> Marque uma ou mais </v-card-subtitle> -->

      <v-card-text>
        <v-sheet elevation="0" rounded style="padding: 10px;" outlined>
          <v-chip-group
            color="accent"
            mandatory
            multiple
            column
            v-model="selectedOcasions"
            @change="emitPayload()"
          >
            <v-chip 
              v-for="(item, index) in occasions" 
              :key="index"
            >
              {{ item.name }}
            </v-chip>
          </v-chip-group>
        </v-sheet>
      </v-card-text>

      <v-card-title :id="'season' + id">Estações do ano</v-card-title>

      <!-- <v-card-subtitle> Quais estações ideais para usar essa peça? </v-card-subtitle> -->

      <v-card-text>
        <v-sheet elevation="0" rounded style="padding: 10px;" outlined>
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
              <v-icon left>
                {{ 'mdi-'+ season.icon}}
              </v-icon>

              {{ season.name }}
            </v-chip>
          </v-chip-group>
        </v-sheet>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import { v4 as uuidv4 } from 'uuid';

export default {
  props: {
    image: File,
    widthCard: Number
  },
  data () {
    return {
      categories: [
        {
          id: uuidv4(),
          name: 'Acessórios cabeça',
          description: 'Bonés, chapéus, óculos, brincos ou laços'
        },
        { 
          id: uuidv4(),
          name: 'Acessórios pescoço',
          description: 'Colares, correntes, gravatas ou cachecóis',
        },
        {
          id: uuidv4(),
          name: 'Roupas de cima',
          description: 'Camisas, camisetas, polos, blusas ou regatas',
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
          name: 'Acessórios braços e mãos',
          description: 'Bolsas, pulseiras, relógios, anéis ou luvas'
        },
        {
          id: uuidv4(),
          name: 'Pernas',
          description: 'Calças, shorts, saias ou bermudas'
        },
        {
          id: uuidv4(),
          name: 'Cintura',
          description: 'Cintos ou laços'
        },
        {
          id: uuidv4(),
          name: 'Pés',
          description: 'Calçados ou meias'
        }
      ],
      selectedCategory: 0,
      closet: undefined,
      occasions: [
        { name: "Básico/comum", id: uuidv4() },
        { name: "Dia", id: uuidv4() },
        { name: "Noite", id: uuidv4() },
        { name: "Trabalho", id: uuidv4() },
        { name: "Curso/Faculdade", id: uuidv4() },
        { name: "Festa/evento", id: uuidv4() },
        { name: "Restaurante", id: uuidv4() },
        { name: "Shopping", id: uuidv4() },
        { name: "Viagem", id: uuidv4() },
        { name: "Praia", id: uuidv4() },
        { name: "Atividade física", id: uuidv4() },
        { name: "Natureza", id: uuidv4() }
      ],
      selectedOcasions: [],
      seasons: [
        { name: "Primavera", icon: "image-filter-vintage", id: uuidv4() },
        { name: "Verão", icon: "white-balance-sunny", id: uuidv4() },
        { name: "Outono", icon: "leaf-maple", id: uuidv4() },
        { name: "Inverno", icon: "snowflake", id: uuidv4() }
      ],
      selectedSeasons: [],
      id: uuidv4(),
      cardImageHeight: 160, //180,
    }
  },
  computed: {
    ...mapGetters([
      "maxHeight"
    ]),
    heightCard () {
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
      return `${this.widthCard - padding}px`
    }
  },
  methods: {
    emitPayload () {
      const category = this.categories[this.selectedCategory].id
      const occasions = []
      const seasons = []

      if (this.selectedOcasions.length > 0) {
        for (let ocasion of this.selectedOcasions) {//console.log(this.occasions)
          occasions.push(this.occasions[ocasion].id)
        }
      }
      if (this.selectedSeasons.length > 0) {
        for (let season of this.selectedSeasons) {//console.log(this.seasons)
          seasons.push(this.seasons[season].id)
        }
      }
      const payload = {
        category: category,
        closet: this.closet,
        occasions: occasions,
        seasons: seasons,
        image: this.image
      }
      this.$emit("payload", payload)
    },
    remove () {
      this.$emit("remove", undefined)
    },
    goTo (element) {
      const ref = 'card-' + this.id
      this.$vuetify.goTo(element, {
        duration: 700,
        offset: -60,
        easing: 'easeInOutCubic',
        container: this.$refs[ref]
      })
    }
  }
}
</script>

<style scoped>
::v-deep div.v-image__image--contain {
  backdrop-filter: blur(7px) grayscale(65%);
}
</style>