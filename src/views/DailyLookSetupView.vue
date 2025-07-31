<template>
  <div>
    <v-card
      :elevation="0"
      tile
    >
      <v-card-text>
        Organize sua rotina semanal de looks 
        de acordo com as ocasiões, depois,
        salve tocando no 

        <div class="text-no-wrap">
          botão

          <v-icon class="ml-1" size="small">
            mdi-check-outline
          </v-icon>
        </div>
      </v-card-text>

      <v-expansion-panels 
        focusable
        accordeon 
        flat
        class="mb-7"
        v-model="selectedPanel"
      >
        <v-expansion-panel 
          v-for="(dayOfWeek, index) in daysOfWeek"
          :key="index"
        >
          <v-expansion-panel-title class="d-flex">
            <span style="flex: unset;" class="text-capitalize text-subtitle-1 font-weight-bold">
              {{ dayOfWeek }}
            </span>
            <span class="text-subtitle-1 font-weight-bold">
              {{ 
                dayOfWeek !== "sábado" && dayOfWeek !== "domingo" ? "-feira" : "" 
              }}
            </span>
          </v-expansion-panel-title>

          <v-expansion-panel-text>
            <div class="week-panel">
              <occasion-setup 
                v-for="(occasion, index) in filteredOccasions" 
                :key="index"
                :occasion="occasion.name"
                :social="occasion.social === false ? false : true"
                :initialCheckbox="getCheckboxValue(dayOfWeek, occasion._id)"
                :initialSelectedDay="getDayValue(dayOfWeek, occasion._id)"
                :initialSelectedNight="getNightValue(dayOfWeek, occasion._id)"
                @updateOccasion="updateOccasion(dayOfWeek, occasion._id, $event)"
                @removeOccasion="removeOccasion(dayOfWeek, $event)"
              />
            </div>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card>

    <dialog-fetch-data-loading
      :showDialog="showDialog"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex"
import OccasionSetup from "./../components/looks/OccasionSetup.vue"
import DialogFetchDataLoading from "./../components/DialogFetchDataLoading.vue"
import * as models from "./../models"

export default {
  components: {
    OccasionSetup,
    DialogFetchDataLoading
  },
  mounted () {
    this.showDialog = true
    this.getOccasions()
  },
  data () {
    return {
      selectedPanel: undefined,
      payload: [],
      initialValues: [],
      showDialog: false
    }
  },
  watch: {
    initialValues: {
      handler (newValue, oldValue) {
        const initialValuesCopy = JSON.parse(JSON.stringify(newValue))
        this.payload = initialValuesCopy
        const idOccasions = {} 
        for (let occasion of this.occasions){
          idOccasions[occasion._id] = occasion.card_look_title
        }
        for (let [index, day] of initialValuesCopy.entries()) {
          const result = day.occasions.map(x => {
            const occasion = {
              _id: x.occasion_id,
              card_look_title: idOccasions[x.occasion_id],
              casual: x.casual,
              social: x.social
            }
            return occasion
          })
          this.payload[index].occasions = result
        }
        this.selectedPanel = 0
      },
      deep: true
    },
    occasions: {
      handler (newValue, oldValue) {
        if (newValue) {
          this.getDailyLookSetup()
            .then((response) => {
              const data = response.data
              if (data) {
                this.initialValues = data.days_of_week
                return;
              }
              this.initialValues = []
            })
            .catch((error) => {
              console.log(error)
            })
            .finally(() => {
              this.showDialog = false
            })
        }
      }
    }
  },
  computed: {
    ...mapGetters([
      "occasions"
    ]),
    filteredOccasions () {
      if (this.occasions.length < 1) {
        return []
      }
      const filteredOccasions = this.occasions.filter(occasion => 
        occasion.type && occasion.type === "rotina"
      )
      return filteredOccasions.map(occasion => { 
        const result = { name: occasion.card_look_title, _id: occasion._id }
        if (occasion.name === "atividade física") {
          result["social"] = false
        }
        return result
      })
    },
    daysOfWeek () {
      return models.daysOfWeek
    }
  },
  methods: {
    ...mapMutations([
      "setDailyLookSetup"
    ]),
    ...mapActions([
      "getOccasions",
      "getDailyLookSetup"
    ]),
    updateOccasion (dayOfWeek, occasionId, occasion) {
      occasion["_id"] = occasionId
      const payloadDayOfWeekIndex = this.payload.map(x => 
        x.day_of_week
      ).indexOf(dayOfWeek)
      if (payloadDayOfWeekIndex === -1) {
        const dayOfWeekIndex = this.daysOfWeek.indexOf(dayOfWeek)
        this.payload.push({
          day_of_week: dayOfWeek,
          occasions: [ occasion ],
          sort: dayOfWeekIndex
        })
        this.setDailyLookSetup(this.payload)
        return;
      }
      const occasionIndex = this.payload[payloadDayOfWeekIndex].occasions.map(x => 
        x.card_look_title
      ).indexOf(occasion.card_look_title)
      if (occasionIndex !== -1) {
        this.payload[payloadDayOfWeekIndex].occasions[occasionIndex] = occasion
        this.setDailyLookSetup(this.payload)
        return;
      }
      this.payload[payloadDayOfWeekIndex].occasions.push(occasion)
      this.setDailyLookSetup(this.payload)
    },
    removeOccasion (dayOfWeek, cardLookTitle) {
      const payloadDayOfWeekIndex = this.payload.map(x => 
        x.day_of_week
      ).indexOf(dayOfWeek)
      const occasionIndex = this.payload[payloadDayOfWeekIndex].occasions.map(x => 
        x.card_look_title
      ).indexOf(cardLookTitle)
      this.payload[payloadDayOfWeekIndex].occasions.splice(occasionIndex, 1)
      this.setDailyLookSetup(this.payload)
    },
    getCheckboxValue (dayOfWeek, occasionId) {
      const dayOfWeekIndex = this.initialValues.map(x => 
        x.day_of_week
      ).indexOf(dayOfWeek)
      if (dayOfWeekIndex === -1) {
        return false
      }
      const occasion = this.initialValues[dayOfWeekIndex].occasions.filter(x => 
        x.occasion_id === occasionId
      )[0]
      if (occasion) {
        return true
      }
      return false
    },
    getDayValue (dayOfWeek, occasionId) { // casual/social
      const dayOfWeekIndex = this.initialValues.map(x => 
        x.day_of_week
      ).indexOf(dayOfWeek)
      if (dayOfWeekIndex === -1) {
        return undefined
      }
      const occasion = this.initialValues[dayOfWeekIndex].occasions.filter(x => 
        x.occasion_id === occasionId
      )[0]
      if (!occasion) {
        return undefined
      }
      const dayValue = this.occasions.filter(x => 
        x.name.toLocaleLowerCase() === models.DAY
      )[0]._id
      const casualCheck = occasion.casual.includes(dayValue)
      const socialCheck = occasion.social.includes(dayValue)
      if (casualCheck) {
        return models.closets.indexOf(models.CASUAL) // 0 "casual"
      }
      if (socialCheck) {
        return models.closets.indexOf(models.SOCIAL) // "social"
      }
      return undefined
    },
    getNightValue (dayOfWeek, occasionId) { // casual/social
      const dayOfWeekIndex = this.initialValues.map(x => 
        x.day_of_week
      ).indexOf(dayOfWeek)
      if (dayOfWeekIndex === -1) {
        return undefined
      }
      const occasion = this.initialValues[dayOfWeekIndex].occasions.filter(x => 
        x.occasion_id === occasionId
      )[0]
      if (!occasion) {
        return undefined
      }
      const nightValue = this.occasions.filter(x => 
        x.name.toLocaleLowerCase() === models.NIGHT
      )[0]._id
      const casualCheck = occasion.casual.includes(nightValue)
      const socialCheck = occasion.social.includes(nightValue)
      if (casualCheck) {
        return models.closets.indexOf(models.CASUAL) // 0 "casual"
      }
      if (socialCheck) {
        return models.closets.indexOf(models.SOCIAL) // 1 "social"
      }
      return undefined
    }
  }
}
</script>

<style scoped>
/* TODO: Some components have structural changes in their markup */
/* :deep(.v-expansion-panel-content__wrap) {
  flex-wrap: wrap !important; 
  justify-content: space-between !important;
  padding-top: 4px !important; 
  display: flex !important;
  flex-direction: column;
} */
.week-panel {
  flex-wrap: wrap !important; 
  justify-content: space-between !important;
  padding-top: 4px !important; 
  display: flex !important;
  flex-direction: column;
}
</style>