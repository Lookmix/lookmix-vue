<template>
  <!--
  <div v-if="false">
    <v-tabs
      v-model="selectedTab"
      color="black"
      fixed-tabs
      background-color="transparent"
    >
      <v-tab>
        i86, looks87
      </v-tab>

      <v-tab>
        i87, looks87
      </v-tab>
    </v-tabs>

    <v-tabs-items 
      v-model="selectedTab"
    >
      <v-tab-item>
        <div>Quantidade: {{ looksi86.length }}</div>
        <br />
        <template v-for="(look, index) of looksi86">
          <look :key="index" :look="look" :lazy="true"> </look>
        </template>
        <br/>
        <br/>
      </v-tab-item>

      <v-tab-item>
        <div>Quantidade: {{ looksi87.length }}</div>
        <br />
        <template v-for="(look, index) of looksi87">
          <look :key="index" :look="look" :lazy="true"> </look>
        </template>
        <br/>
        <br/>
      </v-tab-item>
    </v-tabs-items>
  </div>
  -->
  <div class="d-flex flex-column">
    <v-card rounded="lg" class="ma-2" elevation="0" border="sm">
      <!--
      <v-sheet
        elevation="0" 
        rounded 
        class="d-flex flex-wrap pa-3"
        border="sm"
      >

      </v-sheet>
      -->
      <v-expansion-panels 
        accordeon 
        flat
        tile
        v-model="expansionPanelFilters"
      >
        <v-expansion-panel>
          <v-expansion-panel-title 
            class="px-4"
            style="overflow-x: auto;"
            :hide-actions="selectedOccasions.length > 0"
          >
            <!-- 
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
                  <v-icon start>
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
            -->
            <div class="d-flex">
              <template v-if="selectedOccasions.length > 0">
                <v-chip 
                  v-for="(selectedOccasionIndex, index) in selectedOccasions" 
                  :key="index"
                  class="text-capitalize mr-1"
                  color="primary"
                >
                  {{ occasions[selectedOccasionIndex].name }}
                </v-chip>
              </template>
              <template v-else>
                Nenhum filtro selecionado
              </template>
            </div>
          </v-expansion-panel-title>

          <v-expansion-panel-text>
            <v-divider></v-divider>
            <v-chip-group
              color="primary"
              multiple
              column
              v-model="selectedOccasions"
            >
              <v-chip 
                v-for="(occasion, index) in occasions" 
                :key="index"
                class="text-capitalize"
              >
                {{ occasion.name }}
              </v-chip>
            </v-chip-group>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card>

    <v-divider></v-divider>
    <div class="px-6 py-4">
      {{ looks.length }} looks
    </div>
    <v-divider></v-divider>
    <!-- <template v-for="(look, index) of looks"> -->
    <v-virtual-scroll
      :items="looks"
      :height="maxHeight-filtersHeight-looksCounterHeight"
      item-height="225"
    >
      <template v-slot:default="{ item, index }">
        <look 
          :look="item" 
          :lazy="true"
          :class="{'mb-16': index === looks.length - 1 }"
          @clotheClick="setFilteredClothe($event)"
        >
        </look>
      </template>
    </v-virtual-scroll>
    <!-- </template> -->
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import Look from "./../components/looks/Look.vue";
import * as models from "./../models.js";

export default {
  components: {
    Look,
  },
  mounted () {
    // this.notFoundProcedural = models.testProcedural()
    // this.notFoundRecursive = models.testRecursive()
    // this.getAll()
    // this.setLookset()
    // this.setLookset2()
    if (this.occasions.length === 0) {
      this.getOccasions()
    }
  },
  data () {
    return {
      /*
      lookset: {
        looks: [
          {'data': {'629d286bec74d540eb5fb0ea': null, '629d286bec74d540eb5fb0e9': {'_id': '62a413f666724c5f403cf980', 'category_id': '629d286bec74d540eb5fb0e9', 'type': 'casual', 'occasions': ['6315604bdaf4e3d095035213', '6315604bdaf4e3d095035214', '6315604bdaf4e3d095035216', '6315604bdaf4e3d095035215', '6315604bdaf4e3d095035212'], 'seasons': ['primavera', 'verão', 'outono'], 'image': 'https://live.staticflickr.com/65535/52137525213_e856c41ae9_n.jpg', 'closet_id': '72177720299676310'}, '629d286bec74d540eb5fb0e7': {'_id': '62e881a9d778ffcff674dace', 'category_id': '629d286bec74d540eb5fb0e7', 'type': 'casual', 'occasions': ['6315604bdaf4e3d095035213', '6315604bdaf4e3d095035214', '6315604bdaf4e3d095035212', '6315604bdaf4e3d095035216'], 'seasons': ['inverno', 'outono'], 'image': 'https://live.staticflickr.com/65535/52257353078_592981c715_n.jpg', 'closet_id': '72177720299676310'}, '629d286bec74d540eb5fb0eb': null, '629d286bec74d540eb5fb0ec': null, '629d286bec74d540eb5fb0ed': null, '629d286bec74d540eb5fb0ee': null, '629d286bec74d540eb5fb0ef': null, '629d286bec74d540eb5fb0e8': {'_id': '62a4140866724c5f403cf986', 'category_id': '629d286bec74d540eb5fb0e8', 'type': 'casual', 'occasions': ['6315604bdaf4e3d095035212', '6315604bdaf4e3d095035213', '6315604bdaf4e3d095035214', '6315604bdaf4e3d095035215', '6315604bdaf4e3d095035216', '6315604bdaf4e3d095035217', '6315604bdaf4e3d095035218', '6315604bdaf4e3d095035219', '6315604bdaf4e3d09503521a'], 'seasons': ['primavera', 'verão', 'outono', 'inverno'], 'image': 'https://live.staticflickr.com/65535/52137503691_33070fd125_n.jpg', 'closet_id': '72177720299676310'}}, 'occasion': '6315604bdaf4e3d095035212', 'period': '6315604bdaf4e3d095035213', 'sort': null, 'season': ['inverno', 'outono'], 'type': 'casual', 'repeat_count': 0}
          ,
          {'data': {'629d286bec74d540eb5fb0ea': null, '629d286bec74d540eb5fb0e9': null, '629d286bec74d540eb5fb0e7': {'_id': '62e881a9d778ffcff674dace', 'category_id': '629d286bec74d540eb5fb0e7', 'type': 'casual', 'occasions': ['6315604bdaf4e3d095035213', '6315604bdaf4e3d095035214', '6315604bdaf4e3d095035212', '6315604bdaf4e3d095035216'], 'seasons': ['inverno', 'outono'], 'image': 'https://live.staticflickr.com/65535/52257353078_592981c715_n.jpg', 'closet_id': '72177720299676310'}, '629d286bec74d540eb5fb0eb': null, '629d286bec74d540eb5fb0ec': null, '629d286bec74d540eb5fb0ed': null, '629d286bec74d540eb5fb0ee': null, '629d286bec74d540eb5fb0ef': null, '629d286bec74d540eb5fb0e8': {'_id': '62a4140866724c5f403cf986', 'category_id': '629d286bec74d540eb5fb0e8', 'type': 'casual', 'occasions': ['6315604bdaf4e3d095035212', '6315604bdaf4e3d095035213', '6315604bdaf4e3d095035214', '6315604bdaf4e3d095035215', '6315604bdaf4e3d095035216', '6315604bdaf4e3d095035217', '6315604bdaf4e3d095035218', '6315604bdaf4e3d095035219', '6315604bdaf4e3d09503521a'], 'seasons': ['primavera', 'verão', 'outono', 'inverno'], 'image': 'https://live.staticflickr.com/65535/52137503691_33070fd125_n.jpg', 'closet_id': '72177720299676310'}}, 'occasion': '6315604bdaf4e3d095035212', 'period': '6315604bdaf4e3d095035213', 'sort': null, 'season': ['inverno', 'outono'], 'type': 'casual', 'repeat_count': 0}
          ,
          {'data': {'629d286bec74d540eb5fb0ea': null, '629d286bec74d540eb5fb0e9': {'_id': '62a413f666724c5f403cf980', 'category_id': '629d286bec74d540eb5fb0e9', 'type': 'casual', 'occasions': ['6315604bdaf4e3d095035213', '6315604bdaf4e3d095035214', '6315604bdaf4e3d095035216', '6315604bdaf4e3d095035215', '6315604bdaf4e3d095035212'], 'seasons': ['primavera', 'verão', 'outono'], 'image': 'https://live.staticflickr.com/65535/52137525213_e856c41ae9_n.jpg', 'closet_id': '72177720299676310'}, '629d286bec74d540eb5fb0e7': {'_id': '62e881a9d778ffcff674dace', 'category_id': '629d286bec74d540eb5fb0e7', 'type': 'casual', 'occasions': ['6315604bdaf4e3d095035213', '6315604bdaf4e3d095035214', '6315604bdaf4e3d095035212', '6315604bdaf4e3d095035216'], 'seasons': ['inverno', 'outono'], 'image': 'https://live.staticflickr.com/65535/52257353078_592981c715_n.jpg', 'closet_id': '72177720299676310'}, '629d286bec74d540eb5fb0eb': null, '629d286bec74d540eb5fb0ec': null, '629d286bec74d540eb5fb0ed': null, '629d286bec74d540eb5fb0ee': null, '629d286bec74d540eb5fb0ef': null, '629d286bec74d540eb5fb0e8': {'_id': '62a4140866724c5f403cf986', 'category_id': '629d286bec74d540eb5fb0e8', 'type': 'casual', 'occasions': ['6315604bdaf4e3d095035212', '6315604bdaf4e3d095035213', '6315604bdaf4e3d095035214', '6315604bdaf4e3d095035215', '6315604bdaf4e3d095035216', '6315604bdaf4e3d095035217', '6315604bdaf4e3d095035218', '6315604bdaf4e3d095035219', '6315604bdaf4e3d09503521a'], 'seasons': ['primavera', 'verão', 'outono', 'inverno'], 'image': 'https://live.staticflickr.com/65535/52137503691_33070fd125_n.jpg', 'closet_id': '72177720299676310'}}, 'occasion': '6315604bdaf4e3d095035212', 'period': '6315604bdaf4e3d095035214', 'sort': null, 'season': ['inverno', 'outono'], 'type': 'casual', 'repeat_count': 0}
          ,
          {'data': {'629d286bec74d540eb5fb0ea': null, '629d286bec74d540eb5fb0e9': {'_id': '62cf902d501ba2742df1fa91', 'category_id': '629d286bec74d540eb5fb0e9', 'type': 'casual', 'occasions': ['6315604bdaf4e3d095035212', '6315604bdaf4e3d095035215', '6315604bdaf4e3d095035216', '6315604bdaf4e3d095035214'], 'seasons': ['primavera', 'outono'], 'image': 'https://live.staticflickr.com/65535/52215069973_f7bf69327f_n.jpg', 'closet_id': '72177720299676310'}, '629d286bec74d540eb5fb0e7': {'_id': '62e881a9d778ffcff674dace', 'category_id': '629d286bec74d540eb5fb0e7', 'type': 'casual', 'occasions': ['6315604bdaf4e3d095035213', '6315604bdaf4e3d095035214', '6315604bdaf4e3d095035212', '6315604bdaf4e3d095035216'], 'seasons': ['inverno', 'outono'], 'image': 'https://live.staticflickr.com/65535/52257353078_592981c715_n.jpg', 'closet_id': '72177720299676310'}, '629d286bec74d540eb5fb0eb': null, '629d286bec74d540eb5fb0ec': null, '629d286bec74d540eb5fb0ed': null, '629d286bec74d540eb5fb0ee': null, '629d286bec74d540eb5fb0ef': null, '629d286bec74d540eb5fb0e8': {'_id': '62a4140866724c5f403cf986', 'category_id': '629d286bec74d540eb5fb0e8', 'type': 'casual', 'occasions': ['6315604bdaf4e3d095035212', '6315604bdaf4e3d095035213', '6315604bdaf4e3d095035214', '6315604bdaf4e3d095035215', '6315604bdaf4e3d095035216', '6315604bdaf4e3d095035217', '6315604bdaf4e3d095035218', '6315604bdaf4e3d095035219', '6315604bdaf4e3d09503521a'], 'seasons': ['primavera', 'verão', 'outono', 'inverno'], 'image': 'https://live.staticflickr.com/65535/52137503691_33070fd125_n.jpg', 'closet_id': '72177720299676310'}}, 'occasion': '6315604bdaf4e3d095035212', 'period': '6315604bdaf4e3d095035214', 'sort': null, 'season': ['inverno', 'outono'], 'type': 'casual', 'repeat_count': 0}
          ,
          {'data': {'629d286bec74d540eb5fb0ea': null, '629d286bec74d540eb5fb0e9': null, '629d286bec74d540eb5fb0e7': {'_id': '62e881a9d778ffcff674dace', 'category_id': '629d286bec74d540eb5fb0e7', 'type': 'casual', 'occasions': ['6315604bdaf4e3d095035213', '6315604bdaf4e3d095035214', '6315604bdaf4e3d095035212', '6315604bdaf4e3d095035216'], 'seasons': ['inverno', 'outono'], 'image': 'https://live.staticflickr.com/65535/52257353078_592981c715_n.jpg', 'closet_id': '72177720299676310'}, '629d286bec74d540eb5fb0eb': null, '629d286bec74d540eb5fb0ec': null, '629d286bec74d540eb5fb0ed': null, '629d286bec74d540eb5fb0ee': null, '629d286bec74d540eb5fb0ef': null, '629d286bec74d540eb5fb0e8': {'_id': '62a4140866724c5f403cf986', 'category_id': '629d286bec74d540eb5fb0e8', 'type': 'casual', 'occasions': ['6315604bdaf4e3d095035212', '6315604bdaf4e3d095035213', '6315604bdaf4e3d095035214', '6315604bdaf4e3d095035215', '6315604bdaf4e3d095035216', '6315604bdaf4e3d095035217', '6315604bdaf4e3d095035218', '6315604bdaf4e3d095035219', '6315604bdaf4e3d09503521a'], 'seasons': ['primavera', 'verão', 'outono', 'inverno'], 'image': 'https://live.staticflickr.com/65535/52137503691_33070fd125_n.jpg', 'closet_id': '72177720299676310'}}, 'occasion': '6315604bdaf4e3d095035212', 'period': '6315604bdaf4e3d095035214', 'sort': null, 'season': ['inverno', 'outono'], 'type': 'casual', 'repeat_count': 0}
        ]
      },
      */
      selectedOccasions: [],
      selectedTab: undefined,
      expansionPanelFilters: undefined,
      clotheFiltered: undefined,
      looksCounterHeight: 56
    }
  },
  computed: {
    ...mapGetters([
      "lookset",
      "occasions",
      "maxHeight"
      // "lookset2"
    ]),
    looks () {
      const looks = this.lookset.looks
      if (this.selectedOccasions.length === 0 && !this.clotheFiltered) {
        return looks
      }
      if (this.selectedOccasions.length === 0 && this.clotheFiltered) {
        const category = this.clotheFiltered.category_id
        return looks.filter(look => look.data[category] && look.data[category]._id === this.clotheFiltered._id)
      }
      const occasions = JSON.parse(JSON.stringify(this.selectedOccasions.map(index => this.occasions[index]._id)))
      if (this.selectedOccasions.length > 0 && this.clotheFiltered) {
        const category = this.clotheFiltered.category_id
        return looks.filter(look => look.data[category] && look.data[category]._id === this.clotheFiltered._id && occasions.includes(look.occasion))
      }
      return looks.filter(look => occasions.includes(look.occasion))
    },
    filtersHeight () {
      if (this.expansionPanelFilters !== undefined) {
        return 390 // height + margin top/bottom
      } return 83 // height + margin top/bottom
    },
    // looksi86 () {
    //   return this.lookset.looks
    // },
    // looksi87 () {
    //   return this.lookset2.looks
    // },
  },
  methods: {
    ...mapActions([
      "getLookset",
      "getOccasions"
    ]),
    ...mapMutations([
      "setLookset",
      "setLookset2"
    ]),
    getAll() {
      this.getLookset()
        .then((response) => {
          this.lookset = response.data.looks;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    setFilteredClothe(event) {//console.log(clothe)
      const clothe = JSON.parse(JSON.stringify(event))
      if (!this.clotheFiltered) {
        this.clotheFiltered = clothe
        return
      }
      if (clothe._id === this.clotheFiltered._id) {
        this.clotheFiltered = undefined
        return
      }
      this.clotheFiltered = clothe
    }
  },
};
</script>

<style scoped>
</style>