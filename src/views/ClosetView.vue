<template>
  <div class="ma-1">
    <v-tabs
      v-model="tabs"
      class="mt-4"
      color="secondary"
      left
    >
      <v-tab> CASUAL </v-tab>
      <v-tab> SOCIAL </v-tab>
    </v-tabs>

    <v-tabs-items 
      v-model="tabs" 
      :style="{'height': gridHeight+'px', 'overflow-y': 'auto'}"
    >
      <v-tab-item :style="{'height': gridHeight+'px'}">
        <ListClothe 
          v-for="item in clothesByCategories" 
          :key="item.categoryId" 
          :title="item.category"
          :clothes="item.clothes"
          @openDetails="openDetails($event)"
        />
      </v-tab-item>

      <v-tab-item :style="{'height': gridHeight+'px'}">
        <ListClothe 
          v-for="item in clothesByCategories" 
          :key="item.categoryId" 
          :title="item.category"
          :clothes="item.clothes"
          @openDetails="openDetails($event)"
        />
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
    this.getClothes()
    if (this.categories.length < 1) {
      this.getCategories()
    }
  },
  data () {
    return {
      tabs: undefined,
      showClotheDetails: false,
      clothe: undefined
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
