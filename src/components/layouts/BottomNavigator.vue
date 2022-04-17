<template>
  <v-bottom-navigation
    app
    v-model="value"
    color="accent"
    style="border-top: solid 1px lightgray;"
    shift
    grow
  >
    <v-btn 
      v-for="(item, index) in options" 
      :key="index" 
      :ripple="false"
      plain
      :to="item.to"
    >
      <span> {{ item.text }} </span>

      <v-icon> {{ item.icon }} </v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
  export default {
    data () { 
      return {
        value: 0,
        options: [
          { text: "Feed", icon: "mdi-home", to: "/home" },
          { text: "Look diário", icon: "mdi-calendar", to: "/daily-look" },
          { text: "Look aleatório", icon: "mdi-shuffle", to: "/shuffle-look" },
          { text: "Closet", icon: "mdi-hanger", to: "/closet" }
        ]
      }
    }
  }
</script>