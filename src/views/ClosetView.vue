<template>
  <div class="ma-1">
    <ListClothe 
      v-for="item in clothesByCategories" 
      :key="item.categoryId" 
      :title="item.category"
      :clothes="item.clothes"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex"
import ListClothe from "./../components/closet/ListClothe.vue"

export default {
  components: {
    ListClothe
  },
  mounted () {
    this.getClothes()
    if (this.categories.length < 1) {
      this.getCategories()
    }
  },
  methods: {
    ...mapActions([
      "getClothes",
      "getCategories"
    ])
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
    }
  }
}
</script>
