<template>
  <div>
    <v-tabs
      v-model="selectedTab"
      color="secondary"
      fixed-tabs
    >
      <v-tab>
        CASUAL
      </v-tab>

      <v-tab>
        SOCIAL
      </v-tab>
    </v-tabs>

    <v-tabs-items 
      v-model="selectedTab"
      class="mx-1" 
      :style="{
        'height': gridHeight+'px', 
        'overflow-y': 'auto'
      }"
    >
      <v-tab-item :style="{'height': gridHeight+'px'}">
        <div 
          class="pt-4 pb-4 ml-n1"
          :style="{
            'position': 'fixed', 
            'z-index': '2', 
            'background-color': 'white', 
            'width': '100%', 
            'height': '68px',
            'margin-top': '-1px',
          }"
        >
          <v-btn 
            v-if="!enableCasualClotheSelect"
            class="ml-1"
            color="accent" 
            text
            rounded
            @click="enableCasualClotheSelect = !enableCasualClotheSelect"
          >
            <v-icon left>
              mdi-checkbox-marked-circle-outline
            </v-icon>
            SELECIONAR PEÇAS
          </v-btn>

          <div 
            v-if="enableCasualClotheSelect"
            class="pt-1 ml-2"
          >
            <span
              class="text-h5 font-weight-bold"
              @click="enableCasualClotheSelect = !enableCasualClotheSelect"
            >
              {{ casualClothesSelected.length }} selecionadas
            </span>
          </div>
        </div>

        <div class="mt-16 pt-1">
          <ListClothe 
            v-for="item in casualClothesByCategories" 
            :key="item.categoryId" 
            :title="item.category"
            :clothes="item.clothes"
            @openDetails="openDetails($event)"
          />
        </div>
      </v-tab-item>

      <v-tab-item :style="{'height': gridHeight+'px'}">
        <div 
          class="pt-4 pb-4 ml-n1"
          :style="{
            'position': 'fixed', 
            'z-index': '2', 
            'background-color': 'white', 
            'width': '100%', 
            'height': '68px',
            'margin-top': '-1px',
          }"
        >
          <v-btn 
            v-if="!enableSocialClotheSelect"
            class="ml-1"
            color="accent" 
            text
            rounded
            @click="enableSocialClotheSelect = !enableSocialClotheSelect"
          >
            <v-icon left>
              mdi-checkbox-marked-circle-outline
            </v-icon>
            SELECIONAR PEÇAS
          </v-btn>

          <div 
            v-if="enableSocialClotheSelect"
            class="pt-1 ml-2"
          >
            <span
              class="text-h5 font-weight-bold"
              @click="enableSocialClotheSelect = !enableSocialClotheSelect"
            >
              {{ socialClothesSelected.length }} selecionadas
            </span>
          </div>
        </div>

        <div class="mt-16 pt-3">
          <ListClothe 
            v-for="item in socialClothesByCategories" 
            :key="item.categoryId" 
            :title="item.category"
            :clothes="item.clothes"
            @openDetails="openDetails($event)"
          />
        </div>
      </v-tab-item>
    </v-tabs-items>

    <ClotheDetails 
      :showDetails="showClotheDetails" 
      :clothe="clothe"
      @closeDialog="showClotheDetails = false;"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex"
import ListClothe from "./../components/closet/ListClothe.vue"
import ClotheDetails from "./../components/closet/ClotheDetails.vue"

export default {
  components: {
    ListClothe,
    ClotheDetails
  },
  mounted () {
    if (this.categories.length < 1) {
      this.getCategories()
    }
  },
  watch: {
    selectedTab: {
      handler: function (value, oldValue) {
        let type = "casual"

        if (value === 1) {
          type = "social"
        }
        this.getClothes(type)
      }
    }
  },
  data () {
    return {
      selectedTab: undefined,
      showClotheDetails: false,
      clothe: undefined,
      enableSocialClotheSelect: false,
      enableCasualClotheSelect: false,
      socialClothesSelected: [],
      casualClothesSelected: [],
    }
  },
  methods: {
    ...mapActions([
      "getClothes",
      "getCategories",
      "getCategoryById"
    ]),
    openDetails (clothe) {
      this.clothe = clothe
      this.showClotheDetails = true
    }
  },
  computed: {
    ...mapGetters([
      "fetchCasualClothes",
      "fetchSocialClothes",
      "categories"
    ]),
    casualClothesByCategories () {
      const result = []

      for (let category of this.categories) {
        const categoryId = category._id
        const clothes = this.fetchCasualClothes.filter(clothe => 
          clothe.category_id === categoryId
        )
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
    socialClothesByCategories () {
      const result = []

      for (let category of this.categories) {
        const categoryId = category._id
        const clothes = this.fetchSocialClothes.filter(clothe => 
          clothe.category_id === categoryId
        )
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
      const tabs = 48
      let innerHeight = window.innerHeight
      innerHeight = innerHeight - header 
        - footer 
        - marginAll 
        - tabs
      return innerHeight
    }
  }
}
</script>
