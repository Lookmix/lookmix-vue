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
              <v-chip :color="'secondary'" class="font-weight-medium">
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
                id="closet-chips"
                class="my-0 py-0"
                v-model="clotheTypeSelected"
                active-class="indigo white--text"
                mandatory
                column
                @change="changeCloset($event)"
              >
                <v-chip class="my-0 py-0 font-weight-medium">CASUAL</v-chip>

                <v-chip class="my-0 py-0 font-weight-medium">SOCIAL</v-chip>
              </v-chip-group>
            </div>
          </div>
        </v-card-text>
      </v-card>
    </div>

    <v-divider class="mx-2"> </v-divider>

    <div class="my-4 mx-2">
      <v-card rounded="lg" elevation="3">
        <v-card-title>
          Look para o dia
        </v-card-title>

        <v-card-subtitle>
          Perfeito para usar de dia
        </v-card-subtitle>

        <v-card-text>
          <v-row no-gutters>
            <v-col
              v-for="(value, key) in looks[selectedDay]"
              :key="key"
              :cols="value !== null ? 3 : 0"
              class="d-flex child-flex"
            >
              <v-img
                v-if="value !== null"
                style="border: 1px solid transparent; border-radius: 16px;"
                v-ripple
                :src="value.image"
                :lazy-src="value.image"
                aspect-ratio="1"
                :class="{
                  'grey': true, 
                  'lighten-2': true, 
                }"
                @click="openDetails(value)"
              >
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="grey lighten-5"
                    >
                    </v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </div>
    
    <div class="my-4 mx-2">
      <v-card rounded="lg" elevation="3">
        <v-card-title>
          Look para a noite
        </v-card-title>
        <v-card-subtitle>
          Ideal para usar de noite
        </v-card-subtitle>

        <v-card-text>
          <v-row no-gutters>
            <v-col
              v-for="(value, key) in looks[selectedDay+17]"
              :key="key"
              :cols="value !== null ? 3 : 0"
              class="d-flex child-flex"
            >
              <v-img
                v-if="value !== null"
                style="border: 1px solid transparent; border-radius: 16px;"
                v-ripple
                :src="value.image"
                :lazy-src="value.image"
                aspect-ratio="1"
                :class="{
                  'grey': true, 
                  'lighten-2': true, 
                }"
                @click="openDetails(value)"
              >
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="grey lighten-5"
                    >
                    </v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </div>

    <br/>

    <clothe-details
      :showDetails="showClotheDetails" 
      :clothe="clotheDetails"
      @closeDialog="showClotheDetails = false; clotheDetails = undefined;"
    />
  </div>
</template>

<script>
import ClotheDetails from "./../closet/ClotheDetails.vue"

export default {
  props: {
    looks: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  components: {
    ClotheDetails
  },
  data () {
    return {
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
      clotheTypeSelected: 0,
      showClotheDetails: false,
      clotheDetails: undefined
    }
  },
  computed: {
    width () {
      return window.innerWidth
    }
  },
  methods: {
    openDetails (clothe) {
      this.clotheDetails = clothe
      this.showClotheDetails = true
    },
    changeCloset (event) {
      this.$emit("changeCloset", event)
    }
  }
}
</script>

<style scoped>
::v-deep #closet-chips > div.v-slide-group__wrapper > div {
  padding-top: 0px !important;
  padding-bottom: 0px !important;
}
</style>