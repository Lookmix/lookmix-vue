<template>
  <v-app>
    <template v-if="false">
      <AppToolbar/>
    </template>

    <v-main :dark="false">
      <div
        :class="{
          'login-new-user-display': true, 
          'background-login': login, 
          'background-new-user': newUser,
          'default-background': !login && !newUser,
          'transition': login || newUser
        }"
      >
        <router-view/>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import { mapState } from "vuex"
import AppToolbar from "./components/layouts/AppToolbar.vue"

export default {
  components: {
    AppToolbar
  },
  computed: {
    ...mapState([
      "user"
    ]),
    newUser () {
      return this.$route.name === 'newUser'
    },
    login () {
      console.log(this.$route.name)
      return this.$route.name === 'login'
    }
  }
}
</script>

<style>
.login-new-user-display {
  margin-top: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}
.background-login {
  background: #ffb6c1ad;
}
.background-new-user {
  background: #8341a1d4;
}
.transition {
  transition: background 0.75s
}
.default-background {
  background: initial
}
</style>
