<template>
  <div>
    <look-list 
      :looks="looks"
      @changeCloset="setSelectedCloset($event)"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex"
import LookList from "./../components/looks/LookList.vue"
import * as models from "./../models.js"

export default {
  components: {
    LookList
  },
  data () {
    return {
      selectedCloset: 0
    }
  },
  watch: {
    categories: {
      handler (value, oldValue) {
        this.generateLook()
      }
    },
    fetchCasualClothes: {
      handler (value, oldValue) {
        this.generateLook()
      }
    },
    fetchSocialClothes: {
      handler (value, oldValue) {
        this.generateLook()
      }
    },
  },
  mounted () {
    if (this.categories.length < 1) {
      this.getCategories()
    }
    if (this.fetchCasualClothes.length < 1) {
      this.getClothes("casual")
    }
    if (this.fetchSocialClothes.length < 1) {
      this.getClothes("social")
    }
  },
  computed: {
    ...mapGetters([
      "fetchCasualClothes",
      "fetchSocialClothes",
      "categories",
      "casualLooks",
      "socialLooks"
    ]),
    width () {
      return window.innerWidth
    },
    looks () {
      if (this.selectedCloset === 1) {
        return this.socialLooks
      }
      return this.casualLooks
    }
  },
  methods: {
    ...mapActions([
      "getClothes",
      "getCategories"
    ]),
    ...mapMutations([
      "setCasualLooks",
      "setSocialLooks"
    ]),
    generateLook () {
      const casualLooks = models.generateLook(this.categories, this.fetchCasualClothes)
      this.setCasualLooks(casualLooks)

      const socialLooks = models.generateLook(this.categories, this.fetchSocialClothes)
      this.setSocialLooks(socialLooks)
    },
    setSelectedCloset (type) {
      this.selectedCloset = type
    }
  }
}
</script>
