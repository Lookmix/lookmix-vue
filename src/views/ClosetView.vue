<template>
  <div>
    <v-tabs
      v-model="selectedTab"
      color="black"
      fixed-tabs
      background-color="transparent"
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
          v-ripple
          @click="selectCasualClothesClick"
          class="py-3 ml-n1 red lighten-5"
          :style="{
            'position': 'fixed', 
            'z-index': '2', 
            'width': '100%', 
            'height': '60px',
            'margin-top': '-1px'
          }"
        >
          <div class="px-4 ml-1">
            <v-icon 
              v-if="!enableCasualClotheSelect"
              color="black"
              style="font-size: 18px;"
              class="ml-n1 mr-2"
            >
              mdi-checkbox-marked-circle-outline
            </v-icon>

            <span
              v-if="!enableCasualClotheSelect"
              class="text-button"
            >
              SELECIONAR PEÇAS
            </span>

            <span
              v-if="enableCasualClotheSelect"
              class="text-button"
            >
              {{ selectedClothesLenght }} selecionadas
            </span>
          </div>
        </div>

        <div class="mt-16 pt-2">
          <ListClothe 
            v-for="item in casualClothesByCategories" 
            :key="item.categoryId" 
            :title="item.category"
            :clothes="item.clothes"
            :showCheckbox="enableCasualClotheSelect"
            @openDetails="openDetails($event)"
          />
        </div>
      </v-tab-item>

      <v-tab-item :style="{'height': gridHeight+'px'}">
        <div 
          v-ripple
          @click="selectSocialClothesClick"
          class="py-3 ml-n1 red lighten-5"
          :style="{
            'position': 'fixed', 
            'z-index': '2', 
            'width': '100%', 
            'height': '60px',
            'margin-top': '-1px'
          }"
        >
          <div class="px-4 ml-1">
            <v-icon 
              color="black"
              v-if="!enableSocialClotheSelect"
              style="font-size: 18px;"
              class="ml-n1 mr-2"
            >
              mdi-checkbox-marked-circle-outline
            </v-icon>

            <span
              v-if="!enableSocialClotheSelect"
              class="text-button"
            >
              SELECIONAR PEÇAS
            </span>

            <span
              v-if="enableSocialClotheSelect"
              class="text-button"
            >
              {{ selectedClothesLenght }} selecionadas
            </span>
          </div>
        </div>

        <div class="mt-16 pt-2">
          <ListClothe 
            v-for="item in socialClothesByCategories" 
            :key="item.categoryId" 
            :title="item.category"
            :clothes="item.clothes"
            :showCheckbox="enableSocialClotheSelect"
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
import { mapActions, mapGetters, mapMutations } from "vuex"
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
        this.resetSelectionMode()
        this.setShowToolbarSelectedClothes(false)
        this.getClothes(type)
      }
    },
    showToolbarSelectedClothes: {
      handler: function (value, oldValue) {
        if (value === false) {
          this.resetSelectionMode()
        }
      }
    }
  },
  data () {
    return {
      selectedTab: undefined,
      showClotheDetails: false,
      clothe: undefined,
      enableSocialClotheSelect: false,
      enableCasualClotheSelect: false
    }
  },
  methods: {
    ...mapActions([
      "getClothes",
      "getCategories",
      "getCategoryById"
    ]),
    ...mapMutations([
      "setShowToolbarSelectedClothes",
      "resetSelectedClothes",
    ]),
    openDetails (clothe) {
      this.clothe = clothe
      this.showClotheDetails = true
    },
    selectSocialClothesClick () {
      this.setShowToolbarSelectedClothes(true)
      this.enableSocialClotheSelect = !this.enableSocialClotheSelect
    },
    selectCasualClothesClick () {
      this.setShowToolbarSelectedClothes(true)
      this.enableCasualClotheSelect = true //!this.enableCasualClotheSelect
    },
    resetSelectionMode () {
      this.enableCasualClotheSelect = false
      this.enableSocialClotheSelect = false
      this.resetSelectedClothes()
    }
  },
  computed: {
    ...mapGetters([
      "fetchCasualClothes",
      "fetchSocialClothes",
      "categories",
      "showToolbarSelectedClothes",
      "selectedClothesLenght"
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
      const tabs = 48
      let innerHeight = window.innerHeight
      innerHeight = innerHeight - header 
        - footer 
        - tabs
      return innerHeight
    }
  },
  beforeDestroy () {
    this.resetSelectionMode()
    this.setShowToolbarSelectedClothes(false)
  }
}
</script>
