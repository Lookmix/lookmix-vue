// import Vue from "vue"
// import Vuetify from "vuetify/lib/framework"
import colors from "vuetify/util/colors"
// import Ripple from "vuetify/lib/directives/ripple"
import "vuetify/styles"
import { createVuetify } from "vuetify"
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"

// Vue.use(Vuetify, {
  //   directives: {
    //     Ripple,
    //   },
    // });
    
    // Vue.use(Vuetify);
    
// export default new Vuetify({
export default createVuetify({
  components,
  directives,
  theme: {
    dark: false,
    variations: { 
      colors: [
        "grey",
        "red",
        "primary", 
        "primaryLight", 
        "secondary",
        "accent",
        "error",
        "backgroundBase",
        "backgroundLighten4",
        "backgroundLighten3"
      ] 
    },
    themes: {
      light: {
        colors: {
          primary: colors.pink.accent2,
          primaryLight: "#fbe4ec",
          secondary: colors.indigo.base,
          accent: colors.purple.base,
          error: colors.red.base,
          backgroundBase: colors.shades.white,
          backgroundLighten4: colors.grey.lighten4,
          backgroundLighten3: colors.grey.lighten3
        }
      },
      dark: {
        colors: {
          accent: colors.pink.accent2,
          error: colors.red.base
        }
      }
    },
  },
});
