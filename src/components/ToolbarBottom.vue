<template>
  <div>
    <template v-if="showBottomNavigator && !showToolbarSelectedClothes">
      <BottomNavigator />
    </template>

    <template v-if="showToolbarSelectedClothes">
      <ToolbarSelectedClothes /> 
    </template>
  </div>
</template>

<script>
import BottomNavigator from "./../components/layouts/BottomNavigator.vue"
import ToolbarSelectedClothes from "./../components/closet/ToolbarSelectedClothes.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    BottomNavigator,
    ToolbarSelectedClothes
  },
  computed: {
    ...mapGetters([
      "authenticated", 
      "currentRouteName",
      "showToolbarSelectedClothes"
    ]),
    showBottomNavigator () {
      const blackListRoutes = ["clothesForm", "dailyLookSetup"]
      return this.authenticated && !blackListRoutes.includes(this.currentRouteName)
    }
  },
}
</script>