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
                size="large"
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
      <div class="my-4 mx-2">
        <v-card rounded="lg" elevation="3">
          <v-card-text>
            <div style="display:flex;">
              <div 
                style="margin: auto; flex: 1;" 
                class="font-weight-medium text-body-1 text-grey-darken-2"
              > 
                Temperatura hoje
              </div>

              <v-chip-group
                class="my-0 py-0"
                mandatory
                column
              >
                <v-chip
                  class="my-0 mx-0 py-0 font-weight-medium bg-indigo text-white"
                >
                  <v-icon start>
                    mdi-white-balance-sunny
                  </v-icon>
                  {{ dayTemperature }}  /  {{ eveningTemperature }}
                  <v-icon end>
                    mdi-weather-night
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
              <v-expansion-panel-title 
                class="px-4"
              >
                <span
                  class="font-weight-medium text-body-1 text-grey-darken-2"
                >
                  {{ !hasSelectedAllFilters && hasSelectedFilters && expansionPanelFilters === undefined ? 'Filtros selecionados' : 'Filtros' }}
                </span>
                <v-spacer></v-spacer>
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
                    mandatory
                    column
                  >
                    <v-chip
                      class="my-0 py-0 font-weight-medium text-uppercase"
                    >
                      <v-icon start>
                        {{ periodFilters[selectedPeriod].icon }}
                      </v-icon>
                      {{ periodFilters[selectedPeriod].name }}
                    </v-chip>
                  </v-chip-group>

                  <v-chip-group
                    v-if="selectedCloset !== undefined"
                    class="my-0 py-0"
                    selected-class="bg-indigo text-white"
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
                    class="text-body-2 text-grey-darken-2"
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
                    class="text-body-2 text-grey-darken-2"
                  >
                    Toque para aplicar/remover
                  </span>
                </div>
              </v-expansion-panel-title>

              <v-expansion-panel-text class="mx-n2">
                <div class="d-flex mt-3" style="justify-content: space-between;">
                  <span
                    style="margin: auto 0;" 
                    class="text-body-1 text-grey-darken-2"
                  >
                    Período
                  </span>

                  <div style="display: flex;">
                    <v-chip-group
                      class="my-0 py-0"
                      v-model="selectedPeriod"
                      selected-class="bg-indigo text-white"
                      column
                    >
                      <v-chip
                        v-for="(period, index) in periodFilters"
                        :key="index"
                        class="my-0 py-0 font-weight-medium text-uppercase"
                      >
                        <v-icon start>
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
                    class="text-body-1 text-grey-darken-2"
                  > 
                    Guarda-roupa
                  </span>

                  <div style="display: flex;">
                    <v-chip-group
                      class="my-0 py-0"
                      v-model="selectedCloset"
                      column
                      selected-class="bg-indigo text-white"
                    >
                      <v-chip
                        v-for="(closet, index) in closetFilters"
                        :key="index"
                        class="my-0 py-0 font-weight-medium text-uppercase"
                        :class="{'mr-1': index === 0, 'mr-0': index === 1}"
                      >
                        {{ closet }}
                      </v-chip>
                    </v-chip-group>
                  </div>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card>
      </div>

      <v-toolbar
        flat
        elevation="0"
        color="backgroundLighten3"
        class="my-4 py-0 px-0"
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
            <v-slide-group-item
              v-for="(item, index) in days"
              :key="item.day+item.dayWeek+index"
              v-slot="{ isSelected, toggle }"
            >
              <div
                class="px-5 text-center d-flex rounded-sm"
                :key="item.day+item.dayWeek+index+'div'"
                v-ripple
                @click="toggle"
                :style="{ 'border-right': (days.length - 1) !== index ? '1px solid #BDBDBD' : 'unset' }"
              >
                <div
                  :style="{'border-bottom': isSelected ? 'solid 4px #3F51B5' : 'solid 4px transparent'}"
                >
                  <span 
                    :class="{ 
                      'text-indigo': isSelected, 
                      'font-weight-bold': isSelected,
                      'font-weight-medium': !isSelected,
                      'text-uppercase': true
                    }"
                    style="font-size: 14px;"
                  >
                    {{ item.dayWeek }} <br/> {{ item.day }}
                  </span>
                </div>
              </div>
            </v-slide-group-item>
          </v-slide-group>
        </v-sheet>
      </v-toolbar>

      <!-- <v-divider class="mx-2"> </v-divider> -->

      <!-- TODO: '<template v-for>' cannot be keyed. Place the key on real elements instead. -->
      <template
        v-for="(look, index) of looks"
        :key="`${index}`"
      >
        <!-- TODO: <template v-for> key should be placed on the <template> tag.vue(33) -->
        <look 
          :look="look"
        />
          <!-- :key="`${index}-look`" -->
      </template>
      <br/>
    </template>

    <dialog-fetch-data-loading
      :showDialog="showDialog && selectedDay != undefined"
    />

    <v-snackbar
      v-model="errorSnackbar"
      color="error"
    >
      {{ errorMessage }}

      <template v-slot:actions="{ attrs }">
        <v-btn
          variant="text"
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
import * as utils from "./../utils.js"

export default {
  components: {
    Look,
    DialogFetchDataLoading
  },
  data () {
    return {
      selectedCloset: 0,
      selectedPeriod: 0,
      selectedDay: undefined,
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
          // this.generateLook()
        }
      }
    },
    fetchCasualClothes: {
      handler (value, oldValue) {
        if (this.dailyLookSetup) {
          // this.generateLook()
        }
      }
    },
    fetchSocialClothes: {
      handler (value, oldValue) {
        if (this.dailyLookSetup) {
          // this.generateLook()
        }
      }
    },
    dailyLookSetup: {
      handler (value, oldValue) {
        if (value) {
          // this.generateLook()
        }
        this.showDialog = false
      }
    }
  },
  mounted () {
    // navigator.geolocation.getCurrentPosition((position) => {
    //   let lat = position.coords.latitude
    //   let long = position.coords.longitude
    //   console.log("lat", lat)
    //   console.log("long", long)
    // })
    this.showDialog = true
    if (this.categories.length < 1) {
      // this.getCategories()
    }
    if (this.fetchCasualClothes.length < 1) {
      // this.getClothes("casual")
    }
    if (this.fetchSocialClothes.length < 1) {
      // this.getClothes("social")
    }
    this.getTodayTemperatures()
    this.getDailyLookSetup()
      .then((response) => {
        const data = response.data
        if (!data) {
          // this.$router.push("/daily-look-setup")
        }
        this.setDailyLookSetup(data)
        this.dailyLookSetup = data
        this.getLookset()
          .then((response) => {
            const data = response.data
            this.selectedDay = data.days_count
            this.setLookset(data)
          })
          .catch((error) => {
            console.log(error)
          })
      })
      .catch((error) => {
        this.errorSnackbar = true
        this.errorMessage = "Erro ao tentar recuperar rotina de looks"
        console.log(error)
      })
  },
  computed: {
    ...mapGetters({
      fetchCasualClothes: "fetchCasualClothes",
      fetchSocialClothes: "fetchSocialClothes",
      categories: "categories",
      casualLooks: "casualLooks",
      socialLooks: "socialLooks",
      dailyLookSetupGetter: "dailyLookSetup",
      lookset: "lookset",
      todayTemperatures: "todayTemperatures"
    }),
    width () {
      return window.innerWidth
    },
    looks () {
      const looks = this.lookset.looks.filter(look => look.sort === this.selectedDay)
      return looks
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
    daysOfWeek () {
      return this.dailyLookSetupGetter.days_of_week
    },
    occasions () {
      if (this.days[this.selectedDay] !== undefined && this.days[this.selectedDay] !== null) {
        const day = this.days[this.selectedDay].dayWeekInt // new Date().getDay()
        const days = this.daysOfWeek.map(day => day.sort)
        const indexOfDay = days.indexOf(day)
        const occasions = this.daysOfWeek[indexOfDay].occasions
        return occasions
      } return []
    },
    days () {
      const daysCount = this.lookset.days_count
      let totalDays = this.lookset.total_days
      let index = 0
      if (daysCount > 0) {
        totalDays -= daysCount
        index -= daysCount
      }
      const days = []
      for (let i=index; i < totalDays; i++) {
        const date = utils.sumDaysAndGetDate(i)
        const dayInt = date.getDay()
        if (this.daysOfWeek[dayInt]) {
          let dayOfWeek = {
            dayWeek: this.daysOfWeek[dayInt].day_of_week.slice(0, 3), // dom, seg, ter, qua, qui, sex, sab
            day: date.getDate()+"",
            dayWeekInt: dayInt
          }
          days.push(dayOfWeek)
        }
      }
      return days
    },
    dayTemperature () {
      if (this.todayTemperatures) {
        return `${this.todayTemperatures.day}°`
      } return "-"
    },
    eveningTemperature () {
      if (this.todayTemperatures) {
        return `${this.todayTemperatures.eve}°`
      } return "-"
    }
  },
  methods: {
    ...mapActions([
      // "getClothes",
      "getCategories",
      "getDailyLookSetup",
      // "getCasualLooks",
      // "getSocialLooks",
      "getLookset",
      "getTodayTemperatures"
    ]),
    ...mapMutations([
      "setCasualLooks",
      "setSocialLooks",
      "setToolbarTitle",
      "setDailyLookSetup",
      "setLookset"
    ]),
    generateLook () {
      // this.getCasualLooks()
      //   .then((response) => {
      //     const data = response.data
      //     this.setCasualLooks(data)
      //   })
      //   .catch((error) => {
      //     console.log(error)
      //   })
      // this.getSocialLooks()
      //   .then((response) => {
      //     const data = response.data
      //     this.setSocialLooks(data)
      //   })
      //   .catch((error) => {
      //     console.log(error)
      //   })
    },
    redirectToDailyLookSetup () {
      this.$router.push("/daily-look-setup")
    },
  }
}
</script>

