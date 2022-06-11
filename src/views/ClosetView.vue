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
      "getClothes"
    ])
  },
  computed: {
    ...mapGetters([
      "images"
    ])
  }
}
</script>
