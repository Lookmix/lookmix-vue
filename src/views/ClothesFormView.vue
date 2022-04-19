<template>
  <div>
    <div style="display: flex; flex-direction: column;">
      <v-card elevation="0" v-if="!existsClothes">
        <v-card-text style="text-align: center;">
          <br/>
          <span> Adicione novas peças de roupa para o seu guarda-roupa </span>
          <br/>
        </v-card-text>
      </v-card>

      <div style="margin: 5px; display: flex; justify-content: center;">
        <v-btn 
          color="accent"
          :elevation="existsClothes ? 0 : 2"
          rounded
          :text="existsClothes"
          :large="!existsClothes"
          @click="addClothe()"
        >
          <v-icon>mdi-plus</v-icon>

          ADICIONAR
        </v-btn>
      </div>

      <v-divider style="margin: 0px 0 10px 0px;" v-if="existsClothes"></v-divider>
    </div>

    <div style="display: flex; overflow-x: auto;">
      <template v-for="(clothe, index) in clothes">
        <div 
          style="width: 90%; margin: 0 10px; display: flex; flex-direction: column;" 
          :key="index"
        >
          <div style="display: flex;justify-content: center;">
            <!-- rounded -->
            <v-btn
              icon
              small
              
              style="margin-bottom: 10px;"
            >
              <v-icon>mdi-close</v-icon>

              <!-- REMOVER -->
            </v-btn>
          </div>

          <v-card
            elevation="0" 
          >
            <v-img
              height="250"
              src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            ></v-img>

            <v-card-title>Categoria</v-card-title>

            <v-card-subtitle> Selecione uma categoria </v-card-subtitle>

            <v-card-text>
              <v-list 
                dense
                outlined
                two-line
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

            <v-card-title>Guarda-roupa</v-card-title>

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

            <v-card-title>Ocasião</v-card-title>

            <v-card-text>
              <v-chip 
                v-for="(item, index) in closet" 
                :key="index"
                style="margin-right:5px; margin-bottom:5px;" 
              >
                {{ item }}
              </v-chip>            
            </v-card-text>

            <v-card-title>Estação do ano</v-card-title>

            <v-card-text>
              <v-list 
                dense
                outlined
              >
                <!-- v-model="selectedItem" -->
                <v-list-item-group
                  mandatory
                  multiple
                  color="accent"
                >
                  <v-list-item
                    v-for="(season, index) in seasons"
                    :key="index"
                  >
                    <v-list-item-content>
                      <v-list-item-title>
                        {{ season }}
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-card-text>
          </v-card>
        </div>

        <v-divider 
          vertical 
          :key="index+'divider'"
        >
        </v-divider>
      </template>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex"

export default {
  mounted () {
    this.setPreviousPage("/closet")
  },
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
        "Primavera",
        "Verão",
        "Outono",
        "Inverno"
      ],
      clothes: []
    }
  },
  computed: {
    existsClothes () {
      return this.clothes.length > 0
    }
  },
  methods: {
    ...mapMutations([
      "setPreviousPage"
    ]),
    addClothe () {
      this.clothes.splice(0, 0, {})
    }
  }
}
</script>