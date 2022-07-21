<template>
  <div>
    <v-toolbar
      flat
      elevation="0"
      color="backgroundLighten3"
      class="pt-1 px-2"
    >
      <!-- <v-sheet 
        rounded="lg" 
        elevation="1" 
        class="text-center" 
        :min-width="55" 
        :max-width="55"
        :min-height="48" 
        :max-height="48"
      > -->
      <span class="font-weight-medium text-center" style="font-size: 14px;">
        SEX <br/> 27
      </span>
      <!-- </v-sheet> -->
      <v-spacer/>

      <v-divider inset vertical></v-divider>

      <v-spacer/>

      <span class="font-weight-medium text-center" style="font-size: 14px;"> 
        SÁB <br/> 28
      </span>

      <v-spacer/>

      <v-divider inset vertical></v-divider>

      <v-spacer/>

      <span class="indigo--text font-weight-medium text-center" style="font-size: 14px;"> 
        DOM <br/> 29
      </span>

      <v-spacer/>

      <v-divider inset vertical></v-divider>

      <v-spacer/>

      <span class="font-weight-medium text-center" style="font-size: 14px;"> 
        SEG <br/> 30
      </span>

      <v-spacer/>

      <v-divider inset vertical></v-divider>

      <v-spacer/>

      <span class="font-weight-medium text-center" style="font-size: 14px;"> 
        TER <br/> 31
      </span>
    </v-toolbar>

    <div class="my-1 mx-2">
      <v-card rounded="lg" elevation="8">
        <v-card-title>
          Looks para o dia
        </v-card-title>

        <v-card-subtitle>
          Temperatura 27°
        </v-card-subtitle>

        <v-card-text>
          <div 
            style="color: black;"
            class="py-1 text-body-2 font-weight-medium" 
          >
            Casual
          </div>

          <v-row no-gutters>
            <v-col
              v-for="(value, index) in 4"
              :key="index"
              class="d-flex child-flex"
              cols="3"
            >
              <v-img
                style="border: 1px solid transparent; border-radius: 16px;"
                v-ripple
                :src="fetchCasualClothes.length > 0 ? fetchCasualClothes[getIndex()].image : ''"
                :lazy-src="fetchCasualClothes.length > 0 ? fetchCasualClothes[getIndex()].image : ''"
                aspect-ratio="1"
                :class="{
                  'grey': true, 
                  'lighten-2': true, 
                }"
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

          <v-row no-gutters>
            <v-col
              v-for="(value, index) in 4"
              :key="index"
              class="d-flex child-flex"
              cols="3"
            >
              <v-img
                style="border: 1px solid transparent; border-radius: 16px;"
                v-ripple
                :src="fetchCasualClothes.length > 0 ? fetchCasualClothes[getIndex()].image : ''"
                :lazy-src="fetchCasualClothes.length > 0 ? fetchCasualClothes[getIndex()].image : ''"
                aspect-ratio="1"
                :class="{
                  'grey': true, 
                  'lighten-2': true, 
                }"
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

          <br/>
          <v-divider></v-divider>

          <div 
            style="color: black;"
            class="mt-2 py-1 text-body-2 font-weight-medium" 
          >
            Social
          </div>

          <v-row no-gutters>
            <v-col
              v-for="(value, index) in 4"
              :key="index"
              class="d-flex child-flex"
              cols="3"
            >
              <v-img
                style="border: 1px solid transparent; border-radius: 16px;"
                v-ripple
                :src="fetchCasualClothes.length > 0 ? fetchCasualClothes[getIndex()].image : ''"
                :lazy-src="fetchCasualClothes.length > 0 ? fetchCasualClothes[getIndex()].image : ''"
                aspect-ratio="1"
                :class="{
                  'grey': true, 
                  'lighten-2': true, 
                }"
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

          <v-row no-gutters>
            <v-col
              v-for="(value, index) in 4"
              :key="index"
              class="d-flex child-flex"
              cols="3"
            >
              <v-img
                style="border: 1px solid transparent; border-radius: 16px;"
                v-ripple
                :src="fetchCasualClothes.length > 0 ? fetchCasualClothes[getIndex()].image : ''"
                :lazy-src="fetchCasualClothes.length > 0 ? fetchCasualClothes[getIndex()].image : ''"
                aspect-ratio="1"
                :class="{
                  'grey': true, 
                  'lighten-2': true, 
                }"
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

      <br/>

      <v-card rounded="lg" elevation="8">
        <v-card-title>
          Looks para a noite
        </v-card-title>
        <v-card-subtitle>
          Temperatura 20°
        </v-card-subtitle>

        <v-card-text>
          <div 
            style="color: black;"
            class="py-1 text-body-2 font-weight-medium" 
          >
            Casual
          </div>

          <v-row no-gutters>
            <v-col
              v-for="(value, index) in 4"
              :key="index"
              class="d-flex child-flex"
              cols="3"
            >
              <v-img
                style="border: 1px solid transparent; border-radius: 16px;"
                v-ripple
                :src="fetchCasualClothes.length > 0 ? fetchCasualClothes[getIndex()].image : ''"
                :lazy-src="fetchCasualClothes.length > 0 ? fetchCasualClothes[getIndex()].image : ''"
                aspect-ratio="1"
                :class="{
                  'grey': true, 
                  'lighten-2': true, 
                }"
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

          <v-row no-gutters>
            <v-col
              v-for="(value, index) in 4"
              :key="index"
              class="d-flex child-flex"
              cols="3"
            >
              <v-img
                style="border: 1px solid transparent; border-radius: 16px;"
                v-ripple
                :src="fetchCasualClothes.length > 0 ? fetchCasualClothes[getIndex()].image : ''"
                :lazy-src="fetchCasualClothes.length > 0 ? fetchCasualClothes[getIndex()].image : ''"
                aspect-ratio="1"
                :class="{
                  'grey': true, 
                  'lighten-2': true, 
                }"
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

          <br/>
          <v-divider></v-divider>

          <div 
            style="color: black;"
            class="mt-2 py-1 text-body-2 font-weight-medium" 
          >
            Social
          </div>

          <v-row no-gutters>
            <v-col
              v-for="(value, index) in 4"
              :key="index"
              class="d-flex child-flex"
              cols="3"
            >
              <v-img
                style="border: 1px solid transparent; border-radius: 16px;"
                v-ripple
                :src="fetchCasualClothes.length > 0 ? fetchCasualClothes[getIndex()].image : ''"
                :lazy-src="fetchCasualClothes.length > 0 ? fetchCasualClothes[getIndex()].image : ''"
                aspect-ratio="1"
                :class="{
                  'grey': true, 
                  'lighten-2': true, 
                }"
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

          <v-row no-gutters>
            <v-col
              v-for="(value, index) in 4"
              :key="index"
              class="d-flex child-flex"
              cols="3"
            >
              <v-img
                style="border: 1px solid transparent; border-radius: 16px;"
                v-ripple
                :src="fetchCasualClothes.length > 0 ? fetchCasualClothes[getIndex()].image : ''"
                :lazy-src="fetchCasualClothes.length > 0 ? fetchCasualClothes[getIndex()].image : ''"
                aspect-ratio="1"
                :class="{
                  'grey': true, 
                  'lighten-2': true, 
                }"
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

      <br/>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex"

export default {
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
      "categories"
    ]),
  },
  methods: {
    ...mapActions([
      "getClothes",
      "getCategories"
    ]),
    generateLook () {
      const result = []

      for (let category of this.categories) {
        const categoryId = category._id
        const clothes = this.fetchCasualClothes.filter(clothe => 
          clothe.category_id === categoryId
        )
        if (clothes.length > 0) {
          result.push({
            categoryId: categoryId,
            category: category.name,
            clothes: clothes
          })
        }
      }
      return result
    },
    getIndex() {
      const max = 12
      const min = 0
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  }
}
</script>
