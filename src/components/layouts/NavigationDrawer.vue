<template>
  <div>
    <v-navigation-drawer
      app
      :value="showNavDrawer"
      temporary
      width="250"
      @input="updateDrawerState($event)"
    >
      <v-list-item 
        :style="{
          'height': currentAppBarHeight+'px'
        }"
      >
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/25.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>John Leider</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>SAIR</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

      </v-list>
    </v-navigation-drawer>
  </div>  
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  data () {
    return {
      drawer: null,
      items: [
        { title: 'PERFIL', icon: 'mdi-account' },
      ],
    }
  },
  computed: {
    ...mapGetters(["showNavDrawer", "currentAppBarHeight"]),
  },
  methods: {
    ...mapMutations([
      "setShowNavDrawer"
    ]),
    updateDrawerState(event) {
      if(!event) {
        this.setShowNavDrawer(false)
      }
    }
  }
}
</script>

<style scoped>

</style>