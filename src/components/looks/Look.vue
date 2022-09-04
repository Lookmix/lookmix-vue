<template>
  <div>
    <div class="my-4 mx-2">
      <v-card 
        rounded="lg" 
        :elevation="3"
      >
        <div class="d-flex">
          <div style="flex: 1;">
            <v-card-subtitle class="pb-0">
              <div 
                class="d-flex" 
                style="flex-wrap: wrap; margin-left: -2px;"
              >
                <v-chip 
                  small
                  :color="'grey lighten-3'"
                  :text-color="'grey darken-2'"
                  class="mr-1 mb-1 mt-1 font-weight-medium text-uppercase"
                >
                  dia
                </v-chip>

                <v-chip 
                  small
                  :color="'grey lighten-3'"
                  :text-color="'grey darken-2'"
                  class="mr-1 mb-1 mt-1 font-weight-medium text-uppercase"
                >
                  casual
                </v-chip>

                <v-chip 
                  small
                  :color="'grey lighten-3'"
                  :text-color="'grey darken-2'"
                  class="mr-1 mb-1 mt-1 font-weight-medium text-uppercase"
                >
                  inverno
                </v-chip>
              </div>
            </v-card-subtitle>

            <div 
              style="font-size: 18px;"
              class="pt-2 pb-4 px-4 font-weight-medium"
            >
              Look básico/comum
            </div>
          </div>

          <v-bottom-sheet 
            v-model="showLookOptions"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn 
                class="ma-4"
                elevation="0"
                fab
                small
                v-bind="attrs"
                v-on="on"
              >
                <v-icon
                >
                  mdi-dots-vertical
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

        <v-card-text class="mt-n4">
          <v-row no-gutters>
            <v-col
              v-for="(value, key) in look"
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
    look: {
      type: Object,
      default: function () {
        return {}
      }
    }
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