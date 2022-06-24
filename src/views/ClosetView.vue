<template>
  <div>
    <v-tabs
      v-model="selectedTab"
      color="black"
      fixed-tabs
      background-color="primaryLighten4"
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
          class="pt-4 pb-4 ml-n1"
          :style="{
            'position': 'fixed', 
            'z-index': '2', 
            'background-color': accentLightBackground, 
            'width': '100%', 
            'height': '68px',
            'margin-top': '-1px',
          }"
        >
          <div class="px-4 ml-1">
            <v-icon 
              color="black"
              v-if="!enableCasualClotheSelect"
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
              {{ casualClothesSelected.length }} selecionadas
            </span>
          </div>
        </div>

        <div class="mt-16 pt-5">
          <ListClothe 
            v-for="item in casualClothesByCategories" 
            :key="item.categoryId" 
            :title="item.category"
            :clothes="item.clothes"
            :showCheckbox="enableCasualClotheSelect"
            @selectClothe="addSelectedCasualClotheToList($event)"
            @unselectClothe="removeSelectedCasualClotheFromList($event)"
            @openDetails="openDetails($event)"
          />
        </div>
      </v-tab-item>

      <v-tab-item :style="{'height': gridHeight+'px'}">
        <div 
          v-ripple
          @click="selectSocialClothesClick"
          class="pt-4 pb-4 ml-n1"
          :style="{
            'position': 'fixed', 
            'z-index': '2', 
            'background-color': accentLightBackground, 
            'width': '100%', 
            'height': '68px',
            'margin-top': '-1px',
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
              {{ socialClothesSelected.length }} selecionadas
            </span>
          </div>
        </div>

        <div class="mt-16 pt-5">
          <ListClothe 
            v-for="item in socialClothesByCategories" 
            :key="item.categoryId" 
            :title="item.category"
            :clothes="item.clothes"
            :showCheckbox="enableSocialClotheSelect"
            @openDetails="openDetails($event)"
            @selectClothe="addSelectedSocialClotheToList($event)"
            @unselectClothe="removeSelectedSocialClotheFromList($event)"
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
    },
    selectSocialClothesClick () {
      this.enableSocialClotheSelect = !this.enableSocialClotheSelect
    },
    selectCasualClothesClick () {
      this.enableCasualClotheSelect = true //!this.enableCasualClotheSelect
    },
    cancelSelectCasualClothesClick () {console.log("cancel")
      this.enableCasualClotheSelect = false
    },
    addSelectedCasualClotheToList (clothe) {
      this.casualClothesSelected.push(clothe)
    },
    removeSelectedCasualClotheFromList (clothe) {
      const index = this.casualClothesSelected.indexOf(clothe)
      this.casualClothesSelected.splice(index, 1)
    },
    addSelectedSocialClotheToList (clothe) {
      this.socialClothesSelected.push(clothe)
    },
    removeSelectedSocialClotheFromList (clothe) {
      const index = this.socialClothesSelected.indexOf(clothe)
      this.socialClothesSelected.splice(index, 1)
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
    },
    accentLightBackground () {
      return this.$vuetify.theme.themes.light.accentLightBackground
    }
  }
}
</script>
