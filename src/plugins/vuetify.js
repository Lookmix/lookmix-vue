import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        primary: colors.shades.white,
        secondary: colors.indigo.base,
        accent: colors.pink.accent2,
        accentLight: "#fbe4ec",
        error: colors.red.base,
      },
      dark: {
        accent: colors.pink.accent2,
        error: colors.red.base,
      }
    },
  },
});
