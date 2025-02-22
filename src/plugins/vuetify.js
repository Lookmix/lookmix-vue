import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors'
import Ripple from "vuetify/lib/directives/ripple";

Vue.use(Vuetify, {
  directives: {
    Ripple,
  },
});

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        primary: colors.pink.accent2,
        primaryLight: "#fbe4ec",
        secondary: colors.indigo.base,
        accent: colors.purple.base,
        error: colors.red.base,
        backgroundBase: colors.shades.white,
        backgroundLighten4: colors.grey.lighten4,
        backgroundLighten3: colors.grey.lighten3
      },
      dark: {
        accent: colors.pink.accent2,
        error: colors.red.base,
      }
    },
  },
});
