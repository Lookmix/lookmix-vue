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

          <v-icon class="ml-1" small>
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
          <v-expansion-panel-header class="d-flex">
            <span style="flex: unset;" class="text-capitalize text-subtitle-1 font-weight-bold">
              {{ dayOfWeek }}
            </span>
            <span class="text-subtitle-1 font-weight-bold">
              {{ 
                dayOfWeek !== "sábado" && dayOfWeek !== "domingo" ? "-feira" : "" 
              }}
            </span>
          </v-expansion-panel-header>

          <v-expansion-panel-content>
            <div class="week-panel">
              <occasion-setup 
                v-for="(occasion, index) in filteredOccasions" 
                :key="index"
                :occasion="occasion.name"
                :social="occasion.social === false ? false : true"
                @updateOccasion="updateOccasion(dayOfWeek, occasion._id, $event)"
                @removeOccasion="removeOccasion(dayOfWeek, $event)"
              />
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex"
import OccasionSetup from "./../components/looks/OccasionSetup.vue"

export default {
  components: {
    OccasionSetup
  },
  mounted () {
    if (this.occasions.length < 1) {
      this.getOccasions()
    }
  },
  data () {
    return {
      selectedPanel: 0,
      daysOfWeek: [
        "domingo",
        "segunda",
        "terça",
        "quarta",
        "quinta",
        "sexta",
        "sábado",
      ],
      payload: []
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
    }
  },
  methods: {
    ...mapMutations([
      "setDailyLookSetup"
    ]),
    ...mapActions([
      "getOccasions"
    ]),
    updateOccasion (dayOfWeek, occasionId, occasion) {
      occasion["_id"] = occasionId
      const payloadDayOfWeekIndex = this.payload.map(x => 
        x.day_of_week
      ).indexOf(dayOfWeek)
      if (payloadDayOfWeekIndex === -1) {
        this.payload.push({
          day_of_week: dayOfWeek,
          occasions: [
            occasion
          ]
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
    removeOccasion (dayOfWeek, card_look_title) {
      const payloadDayOfWeekIndex = this.payload.map(x => 
        x.day_of_week
      ).indexOf(dayOfWeek)
      const occasionIndex = this.payload[payloadDayOfWeekIndex].occasions.map(x => 
        x.card_look_title
      ).indexOf(card_look_title)
      this.payload[payloadDayOfWeekIndex].occasions.splice(occasionIndex, 1)
      this.setDailyLookSetup(this.payload)
    }
  }
}
</script>

<style scoped>
/* ::v-deep .v-expansion-panel-content__wrap {
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