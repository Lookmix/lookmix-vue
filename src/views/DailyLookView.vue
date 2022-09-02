<template>
  <div>
    <v-toolbar
      flat
      elevation="0"
      color="backgroundLighten3"
      class="my-4 py-0 px-2"
      style="display: flex; justify-content: center;"
      :width="width"
      :max-width="width"
    >
      <v-sheet
        color="backgroundLighten3"
        class="mx-auto"
        elevation="0"
        :max-width="width"
      >
        <v-slide-group
          v-model="selectedDay"
          center-active
          mandatory
        >
          <v-slide-item
            v-for="(item, index) in week"
            :key="item.day+item.dayWeek+index"
            v-slot="{ active, toggle }"
          >
            <div
              class="px-5 text-center d-flex rounded-sm"
              :key="item.day+item.dayWeek+index+'div'"
              v-ripple
              @click="toggle"
              :style="{ 'border-right': (week.length - 1) !== index ? '1px solid #BDBDBD' : 'unset' }"
            >
              <div
                :style="{'border-bottom': active ? 'solid 4px #3F51B5' : 'solid 4px transparent'}"
              >
                <span 
                  :class="{ 
                    'indigo--text': active, 
                    'font-weight-bold': active,
                    'font-weight-medium': !active
                  }"
                  style="font-size: 14px;"
                >
                  {{ item.dayWeek }} <br/> {{ item.day }}
                </span>
              </div>
            </div>
          </v-slide-item>
        </v-slide-group>
      </v-sheet>
    </v-toolbar>

    <div class="my-4 mx-2">
      <v-card rounded="lg" elevation="3">
        <v-card-text>
          <div style="display:flex; justify-content: space-around;">
            <span 
              style="margin: auto;" 
              class="font-weight-medium text-body-1 grey--text text--darken-2"
            > 
              Temperatura
            </span>

            <div style="flex: 1 1 0%; display: flex; justify-content: space-around; margin: auto;">
              <v-chip 
                :color="'secondary'" 
                class="font-weight-medium"
              >
                <v-icon left>
                  mdi-chevron-down
                </v-icon>
                18°  /  23°
                <v-icon right>
                  mdi-chevron-up
                </v-icon>
              </v-chip>
            </div>

            <!--
            <v-spacer/>

            <div style="flex: 1 1 0%; display: flex; margin: auto;">
              <v-chip class="mr-2 font-weight-medium" :color="'secondary'">
                <v-icon left>
                  mdi-chevron-down
                </v-icon>
                18 °
              </v-chip>

              <v-chip class="mr-1 font-weight-medium" :color="'secondary'">
                <v-icon left>
                  mdi-chevron-up
                </v-icon>

                23 º
              </v-chip>
            </div>
            -->
          </div>
        </v-card-text>

        <v-divider> </v-divider>

        <v-card-text>
          <div style="display:flex; justify-content: space-between;">
            <span 
              style="margin: auto 0;" 
              class="font-weight-medium text-body-1 grey--text text--darken-2"
            > 
              Guarda-roupa
            </span>

            <div style="display: flex;">
              <v-chip-group
                class="my-0 py-0"
                v-model="selectedCloset"
                mandatory
                column
                active-class="indigo white--text"
              >
                <v-chip 
                  class="my-0 py-0 font-weight-medium"
                >
                  CASUAL
                </v-chip>

                <v-chip 
                  class="my-0 py-0 font-weight-medium"
                >
                  SOCIAL
                </v-chip>
              </v-chip-group>
            </div>
          </div>
        </v-card-text>

        <v-divider> </v-divider>

        <v-card-text>
          <div style="display:flex; justify-content: space-between;">
            <span 
              style="margin: auto 0;" 
              class="font-weight-medium text-body-1 grey--text text--darken-2"
            > 
              Período
            </span>

            <div style="display:- flex;">
              <v-chip-group
                class="my-0 py-0"
                v-model="selectedPeriod"
                active-class="indigo white--text"
                mandatory
                column
              >
                <v-chip 
                  class="my-0 py-0 font-weight-medium"
                >
                  <v-icon left>
                    mdi-white-balance-sunny
                  </v-icon>
                  DIA
                </v-chip>

                <v-chip 
                  class="my-0 py-0 font-weight-medium"
                >
                  <v-icon left>
                    mdi-weather-night
                  </v-icon>
                  NOITE
                </v-chip>
              </v-chip-group>
            </div>
          </div>
        </v-card-text>
      </v-card>
    </div>

    <v-divider class="mx-2"> </v-divider>

    <look-list 
      :looks="looks"
      :selectedDay="selectedDay"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex"
import LookList from "./../components/looks/LookList.vue"
// import DailyLookSetup from "./../components/looks/DailyLookSetup.vue"
import * as models from "./../models.js"

export default {
  components: {
    LookList,
    // DailyLookSetup
  },
  data () {
    return {
      selectedCloset: 0,
      selectedPeriod: 0,
      week: [
        {
          dayWeek: "SEX",
          day: "27"
        },
        {
          dayWeek: "SAB",
          day: "28"
        },
        {
          dayWeek: "DOM",
          day: "29"
        },
        {
          dayWeek: "SEG",
          day: "30"
        },
        {
          dayWeek: "TER",
          day: "31"
        },
        {
          dayWeek: "QUA",
          day: "01"
        },
        {
          dayWeek: "QUI",
          day: "02"
        },
        {
          dayWeek: "SEX",
          day: "03"
        },
      ],
      selectedDay: null,
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
    }
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
      "socialLooks",
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
      "setSocialLooks",
      "setToolbarTitle"
    ]),
    generateLook () {
      const casualLooks = models.generateLook(this.categories, this.fetchCasualClothes)
      this.setCasualLooks(casualLooks)

      const socialLooks = models.generateLook(this.categories, this.fetchSocialClothes)
      this.setSocialLooks(socialLooks)
    },
  }
}
</script>

