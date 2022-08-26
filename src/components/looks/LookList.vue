<template>
  <div>
    <div class="my-4 mx-2">
      <v-card 
        rounded="lg" 
        :elevation="3"
      >
      <!-- :style="{ 'border': showLookOptions ? 'solid 2px #BDBDBD' : 'initial' }" -->
      <!-- #3f51b5 #ff4081 -->
        <div class="d-flex">
          <div>
            <v-card-title>
              Look básico/comum
            </v-card-title>

            <v-card-subtitle>
              Perfeito para usar de dia
            </v-card-subtitle>
          </div>

          <v-spacer/>

          <v-bottom-sheet 
            v-model="showLookOptions"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn 
                icon
                class="ma-3"
                color="primary"
                large
                v-bind="attrs"
                v-on="on"
              >
                <!-- color="primary" color="secondary"-->
                <v-icon>
                  mdi-dots-vertical
                  <!-- mdi-dots-vertical-circle-outline -->
                </v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item 
                link
                @click="showLookOptions = false"
              >
                <v-list-item-icon>
                  <v-icon>
                    mdi-heart-outline
                  </v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>
                    FAVORITAR LOOK
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-list-item 
                link
                @click="showLookOptions = false"
              >
                <v-list-item-icon>
                  <v-icon>
                    mdi-swap-horizontal
                  </v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>
                    TROCAR LOOK
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-list-item 
                link
                @click="showLookOptions = false"
              >
                <v-list-item-icon>
                  <v-icon>
                    mdi-delete-outline
                  </v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>
                    DESCARTAR LOOK
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-bottom-sheet>
        </div>

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
          Look para o trabalho
        </v-card-title>

        <v-card-subtitle>
          Ideal para usar de noite
        </v-card-subtitle>

        <v-card-text>
          <v-row no-gutters>
            <v-col
              v-for="(value, key) in looks[selectedDay+67]"
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
    },
    selectedDay: null
  },
  components: {
    ClotheDetails
  },
  data () {
    return {
      showClotheDetails: false,
      clotheDetails: undefined,
      showLookOptions: false
    }
  },
  methods: {
    openDetails (clothe) {
      this.clotheDetails = clothe
      this.showClotheDetails = true
    }
  }
}
</script>