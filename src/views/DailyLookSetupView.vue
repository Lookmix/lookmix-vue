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
          <v-expansion-panel-header>
            <span class="text-subtitle-1 font-weight-bold">
              {{ dayOfWeek }}
            </span>
          </v-expansion-panel-header>

          <v-expansion-panel-content>
            <div class="week-panel">
              <occasion-setup 
                v-for="(occasion, index) in occasions" 
                :key="index"
                :occasion="occasion"
              />
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card>
  </div>
</template>

<script>
import OccasionSetup from "./../components/looks/OccasionSetup.vue"

export default {
  components: {
    OccasionSetup
  },
  data () {
    return {
      selectedPanel: 0,
      selectedOccasionsDaySunday: [],
      selectedOccasionsNightSunday: [],
      selectedOccasionsDayMonday: [],
      selectedOccasionsNightMonday: [],
      selectedOccasionsDayTuesday: [],
      selectedOccasionsNightTuesday: [],
      selectedOccasionsDayWednesday: [],
      selectedOccasionsNightWednesday: [],
      selectedOccasionsDayThursday: [],
      selectedOccasionsNightThursday: [],
      selectedOccasionsDayFriday: [],
      selectedOccasionsNightFriday: [],
      selectedOccasionsDaySaturday: [],
      selectedOccasionsNightSaturday: [],
      occasions: [
        "Básico/comum", 
        "Trabalho", // uniforme, dress code
        "Curso/faculdade", // uniforme, atividades estudantis
        "Atividade física", // esportes, caminhada, academia
        "Prática religiosa",
      ],
      daysOfWeek: [
        "Domingo",
        "Segunda-feira",
        "Terça-feira",
        "Quarta-feira",
        "Quinta-feira",
        "Sexta-feira",
        "Sábado",
      ]
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