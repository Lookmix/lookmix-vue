<template>
  <v-bottom-navigation
    app
    v-model="value"
    color="primary"
    style="border-top: solid 1px lightgray;"
    mode="shift"
    grow
  >
    <v-btn 
      v-for="(item, index) in options" 
      :key="index" 
      :ripple="false"
      variant="plain"
      :to="item.to"
    >
      <v-icon> {{ item.icon }} </v-icon>
      
      <span> {{ item.text }} </span>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
  export default {
    data () { 
      return {
        value: undefined,
        options: [
          { text: "Feed", icon: "mdi-home-outline", to: "/home" },
          { text: "Diário", icon: "mdi-calendar-outline", to: "/daily-look" },
          { text: "Aleatório", icon: "mdi-shuffle", to: "/shuffle-look" },
          { text: "Closet", icon: "mdi-hanger", to: "/closet" }
        ]
      }
    }
  }
</script>