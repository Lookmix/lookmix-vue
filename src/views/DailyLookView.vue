<template>
  <div>
    <template v-if="!showDialog && !dailyLookSetup">
      <div 
        :style="{
          'height': maxHeight+'px',
          'display': 'flex', 
          'flex-direction': 'column',
        }"
      >
        <v-card 
          elevation="0"
          :min-height="maxHeight"
          :max-height="maxHeight"
        >  
          <v-card-text style="text-align: center;">
            <br/>

            <span>
              Configure sua rotina semanal <br> para visualizar os looks
            </span>

            <br/>

            <div
              style="padding: 10px 5px; display: flex; justify-content: center;"
            >
              <v-btn
                color="primary"
                :elevation="2"
                rounded
                large
                @click="redirectToDailyLookSetup()"
              >
                <v-icon></v-icon>

                configurar
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </div>
    </template>

    <template v-if="dailyLookSetup">
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
            <div style="display:flex;">
              <span 
                style="margin: auto; flex: 1;" 
                class="font-weight-medium text-body-1 grey--text text--darken-2"
              > 
                Temperatura hoje
              </span>

              <v-chip-group
                class="my-0 py-0"
                mandatory
                column
                active-class="indigo white--text"
              >
                <v-chip
                  :color="'secondary'" 
                  class="my-0 py-0 font-weight-medium"
                >
                  <v-icon left>
                    mdi-menu-down
                  </v-icon>
                  18°  /  23°
                  <v-icon right>
                    mdi-menu-up
                  </v-icon>
                </v-chip>
              </v-chip-group>
            </div>
          </v-card-text>

          <v-divider> </v-divider>

          <v-expansion-panels 
            accordeon 
            flat
            tile
            v-model="expansionPanelFilters"
          >
            <v-expansion-panel>
              <v-expansion-panel-header 
                class="px-4"
              >
                <span
                  class="font-weight-medium text-body-1 grey--text text--darken-2"
                >
                  {{ !hasSelectedAllFilters && hasSelectedFilters && expansionPanelFilters === undefined ? 'Filtros selecionados' : 'Filtros' }}
                </span>

                <div
                  v-if="expansionPanelFilters === undefined"
                  class="d-flex" 
                  :style="{ 
                    'justify-content': hasSelectedFilters ? 'right' : 'left'
                  }"
                >
                  <v-chip-group
                    v-if="selectedPeriod !== undefined"
                    class="my-0 py-0"
                    active-class="indigo white--text"
                    mandatory
                    column
                  >
                    <v-chip
                      class="my-0 py-0 font-weight-medium text-uppercase"
                    >
                      <v-icon left>
                        {{ periodFilters[selectedPeriod].icon }}
                      </v-icon>
                      {{ periodFilters[selectedPeriod].name }}
                    </v-chip>
                  </v-chip-group>

                  <v-chip-group
                    v-if="selectedCloset !== undefined"
                    class="my-0 py-0"
                    active-class="indigo white--text"
                    mandatory
                    column
                  >
                    <v-chip
                      class="my-0 py-0 font-weight-medium text-uppercase"
                    >
                      {{ closetFilters[selectedCloset] }}
                    </v-chip>
                  </v-chip-group>

                  <span 
                    v-if="!hasSelectedFilters"
                    style="height: 40px; line-height: 40px;"
                    class="text-body-2 grey--text text--darken-2"
                  >
                    Nenhum filtro selecionado
                  </span>
                </div>

                <div 
                  v-else
                  class="d-flex" 
                  :style="{ 
                    'justify-content': 'left'
                  }"
                >
                  <span 
                    style="width: 204px; text-align: end; height: 40px; line-height: 40px;"
                    class="text-body-2 grey--text text--darken-2"
                  >
                    Toque para aplicar/remover
                  </span>
                </div>
              </v-expansion-panel-header>

              <v-expansion-panel-content class="mx-n2">
                <div class="d-flex mt-3" style="justify-content: space-between;">
                  <span
                    style="margin: auto 0;" 
                    class="text-body-1 grey--text text--darken-2"
                  >
                    Período
                  </span>

                  <div style="display: flex;">
                    <v-chip-group
                      class="my-0 py-0"
                      v-model="selectedPeriod"
                      active-class="indigo white--text"
                      column
                    >
                      <v-chip
                        v-for="(period, index) in periodFilters"
                        :key="index"
                        class="my-0 py-0 font-weight-medium text-uppercase"
                      >
                        <v-icon left>
                          {{ period.icon }}
                        </v-icon>
                        {{ period.name }}
                      </v-chip>
                    </v-chip-group>
                  </div>
                </div>

                <div class="mt-6" style="display:flex; justify-content: space-between;">
                  <span 
                    style="margin: auto 0;" 
                    class="text-body-1 grey--text text--darken-2"
                  > 
                    Guarda-roupa
                  </span>

                  <div style="display: flex;">
                    <v-chip-group
                      class="my-0 py-0"
                      v-model="selectedCloset"
                      column
                      active-class="indigo white--text"
                    >
                      <v-chip
                        v-for="(closet, index) in closetFilters"
                        :key="index"
                        class="my-0 py-0 font-weight-medium text-uppercase"
                      >
                        {{ closet }}
                      </v-chip>
                    </v-chip-group>
                  </div>
                </div>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card>
      </div>

      <v-divider class="mx-2"> </v-divider>

      <look 
        :look="looks[selectedDay]"
      />
    </template>

    <dialog-fetch-data-loading
      :showDialog="showDialog"
    />

    <v-snackbar
      v-model="errorSnackbar"
      color="error"
    >
      {{ errorMessage }}

      <template v-slot:action="{ attrs }">
        <v-btn
          text
          v-bind="attrs"
          @click="errorSnackbar = false"
        >
          OK
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex"
import Look from "./../components/looks/Look.vue"
import DialogFetchDataLoading from "./../components/DialogFetchDataLoading.vue"
import * as models from "./../models.js"

export default {
  components: {
    Look,
    DialogFetchDataLoading
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
      expansionPanelFilters: undefined,
      closetFilters: [ "casual", "social" ],
      periodFilters: [ 
        { name: "dia", icon: "mdi-white-balance-sunny" }, 
        { name: "noite", icon: "mdi-weather-night" } 
      ],
      errorSnackbar: false,
      errorMessage: "",
      dailyLookSetup: undefined,
      showDialog: false
    }
  },
  watch: {
    categories: {
      handler (value, oldValue) {
        if (this.dailyLookSetup) {
          this.generateLook()
        }
      }
    },
    fetchCasualClothes: {
      handler (value, oldValue) {
        if (this.dailyLookSetup) {
          this.generateLook()
        }
      }
    },
    fetchSocialClothes: {
      handler (value, oldValue) {
        if (this.dailyLookSetup) {
          this.generateLook()
        }
      }
    },
    dailyLookSetup: {
      handler (value, oldValue) {
        if (value) {
          this.generateLook()
        }
        this.showDialog = false
      }
    }
  },
  mounted () {
    this.showDialog = true
    if (this.categories.length < 1) {
      this.getCategories()
    }
    if (this.fetchCasualClothes.length < 1) {
      this.getClothes("casual")
    }
    if (this.fetchSocialClothes.length < 1) {
      this.getClothes("social")
    }
    this.getDailyLookSetup()
      .then((response) => {
        const data = response.data
        if (!data) {
          // this.$router.push("/daily-look-setup")
        }
        this.setDailyLookSetup(data)
        this.dailyLookSetup = data
      })
      .catch((error) => {
        this.errorSnackbar = true
        this.errorMessage = "Erro ao tentar recuperar rotina de looks"
        console.log(error)
      })
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
      if (this.selectedCloset === undefined) {
        return this.socialLooks.concat(this.casualLooks)
      }
      if (this.selectedCloset === 1) {
        return this.socialLooks
      }
      return this.casualLooks
    },
    hasSelectedFilters () {
      return this.selectedCloset !== undefined || this.selectedPeriod !== undefined
    },
    hasSelectedAllFilters () {
      return this.selectedCloset !== undefined && this.selectedPeriod !== undefined
    },
    maxHeight () {
      const header = 56
      const footer = 56
      let innerHeight = window.innerHeight
      innerHeight = innerHeight - header - footer
      return innerHeight
    },
  },
  methods: {
    ...mapActions([
      "getClothes",
      "getCategories",
      "getDailyLookSetup"
    ]),
    ...mapMutations([
      "setCasualLooks",
      "setSocialLooks",
      "setToolbarTitle",
      "setDailyLookSetup"
    ]),
    generateLook () {
      const casualLooks = models.generateLook(
        this.categories, 
        this.fetchCasualClothes,
        this.dailyLookSetup.days_of_week
      )
      this.setCasualLooks(casualLooks)

      const socialLooks = models.generateLook(
        this.categories, 
        this.fetchSocialClothes,
        this.dailyLookSetup.days_of_week
      )
      this.setSocialLooks(socialLooks)
    },
    redirectToDailyLookSetup () {
      this.$router.push("/daily-look-setup")
    }
  }
}
</script>

