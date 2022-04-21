<template>
  <div 
    :style="{
      'width': '85%',
      'margin': '0 10px',
      'display': 'flex',
      'flex-direction': 'column',
    }"
  >
    <v-card
      elevation="0"
      :style="{'height': heightCard+10+'px', 'overflow-y': 'auto'}"
    >
      <v-img
        height="250"
        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
      >
        <v-btn fab x-small style="margin: 10px; float: right;">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-img>

      <v-card-title>Categoria</v-card-title>

      <v-card-subtitle> Selecione uma categoria </v-card-subtitle>

      <v-card-text>
        <v-list 
          dense
          outlined
          three-line
        >
          <!-- v-model="selectedItem" -->
          <v-list-item-group
            mandatory
            color="accent"
          >
            <v-list-item
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

      <v-card-title>Ocasião</v-card-title>

      <v-card-text>
        <v-btn-toggle
          tile
          mandatory
          color="accent"
          group
          style="margin-left: -4px;"
        >
          <v-btn value="casual">
            CASUAL
          </v-btn>

          <v-btn value="social">
            SOCIAL
          </v-btn>
        </v-btn-toggle>            
      </v-card-text>

      <v-card-title>Guarda-roupa</v-card-title>

      <v-card-subtitle> Marque um ou mais </v-card-subtitle>

      <v-card-text>
        <v-sheet elevation="0" rounded style="padding: 10px;" outlined>
          <v-chip-group
            color="accent"
            mandatory
            multiple
            column
          >
            <v-chip 
              v-for="(item, index) in closet" 
              :key="index"
            >
              {{ item }}
            </v-chip>
          </v-chip-group>
        </v-sheet>
      </v-card-text>

      <v-card-title>Estação do ano</v-card-title>

      <v-card-subtitle> Quais estações ideais para usar essa peça? </v-card-subtitle>

      <v-card-text>
        <v-sheet elevation="0" rounded style="padding: 10px;" outlined>
          <v-chip-group
            color="accent"
            mandatory
            multiple
            column
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

export default {
  data () {
    return {
      categories: [
        {
          name: 'Acessórios cabeça',
          description: 'Bonés, chapéus, óculos, brincos ou laços'
        },
        {
          name: 'Acessórios pescoço',
          description: 'Colares, correntes, gravatas ou cachecóis',
        },
        {
          name: 'Roupas de cima',
          description: 'Camisas, camisetas, polos, blusas ou regatas',
        },
        {
          name: 'Peças sobrepostas',
          description: 'Casacos, jaquetas, moletons ou sobretudos',
        },
        {
          name: 'Peças únicas',
          description: 'Vestidos ou macacões'
        },
        {
          name: 'Acessórios braços e mãos',
          description: 'Bolsas, pulseiras, relógios, anéis ou luvas'
        },
        {
          name: 'Pernas',
          description: 'Calças, shorts, saias ou bermudas'
        },
        {
          name: 'Cintura',
          description: 'Cintos'
        },
        {
          name: 'Pés',
          description: 'Calçados ou meias'
        }
      ],
      dressCode: undefined,
      closet: [
        'Básico', 
        'Trabalho', 
        'Faculdade', 
        'Festa', 
        'Viagem', 
        'Shopping',
        'Atividades físicas',
        'Praia',
        'Parques e praças'
      ],
      seasons: [
        { name: "Primavera", icon: "image-filter-vintage"},
        { name: "Verão", icon: "white-balance-sunny"},
        { name: "Outono", icon: "leaf-maple"},
        { name: "Inverno", icon: "snowflake"}
      ],
    }
  },
  computed: {
    ...mapGetters([
      "maxHeight"
    ]),
    heightCard () {
      // return this.maxHeight - 105 - 250 // 95 + margin10 = 105
      return this.maxHeight - 67
    },
  }
}
</script>