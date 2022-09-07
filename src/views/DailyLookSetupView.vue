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
import { mapGetters, mapActions } from "vuex"
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
      payload: {}
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
    ...mapActions([
      "getOccasions"
    ]),
    updateOccasion (dayOfWeek, occasionId, occasion) {
      occasion["_id"] = occasionId
      const payloadDayOfWeek = this.payload[dayOfWeek]
      if (!payloadDayOfWeek) {
        this.payload[dayOfWeek] = [occasion]
        return;
      }
      const occasionFiltered = payloadDayOfWeek.filter(o => 
        o.card_look_title === occasion.card_look_title
      )[0]
      if (occasionFiltered) {
        const index = payloadDayOfWeek.indexOf(occasionFiltered)
        this.payload[dayOfWeek][index] = occasion
        return;
      }
      this.payload[dayOfWeek].push(occasion)
    },
    removeOccasion (dayOfWeek, card_look_title) {
      const payloadDayOfWeek = this.payload[dayOfWeek]
      const occasionFiltered = payloadDayOfWeek.filter(o => 
        o.card_look_title === card_look_title
      )[0]
      const index = payloadDayOfWeek.indexOf(occasionFiltered)
      this.payload[dayOfWeek].splice(index, 1)
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