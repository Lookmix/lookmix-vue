<template>
  <div>
    <v-toolbar
      flat
      elevation="0"
      color="backgroundLighten3"
      class="pt-1 px-2"
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
                  :class="{ 'indigo--text': active }"
                  class="font-weight-medium"
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

    <v-chip-group
      style="background: #eeeeee;"
      class="pb-3 pt-5 px-2"
      v-model="clotheTypeSelected"
      active-class="indigo white--text"
      mandatory
      column
    >
      <v-chip>CASUAL</v-chip>

      <v-chip>SOCIAL</v-chip>
    </v-chip-group>

    <div class="my-1 mx-2">
      <v-card rounded="lg" elevation="6">
        <v-card-title>
          Look para o dia
        </v-card-title>

        <v-card-subtitle>
          Temperatura 27° / 24°
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

      <v-card rounded="lg" elevation="6">
        <v-card-title>
          Look para a noite
        </v-card-title>
        <v-card-subtitle>
          Temperatura 18°
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
import { mapActions, mapGetters, mapMutations } from "vuex"

export default {
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
      clotheTypeSelected: 0
    }
  },
  watch: {
    categories: {
      handler (value, oldValue) {
        this.generateLook()
      }
    },
    fetchCasualClothes: {
      handler (value, oldValue) {
        this.generateLook()
      }
    },
    fetchSocialClothes: {
      handler (value, oldValue) {
        this.generateLook()
      }
    },
  },
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
    if (this.looks.length < 1) {
      this.generateLook()
    }
  },
  computed: {
    ...mapGetters([
      "fetchCasualClothes",
      "fetchSocialClothes",
      "categories",
      "looks"
    ]),
    width () {
      return window.innerWidth
    }
  },
  methods: {
    ...mapActions([
      "getClothes",
      "getCategories"
    ]),
    ...mapMutations([
      "setLooks"
    ]),
    generateLook () {
      if (this.categories.length > 0 && this.fetchCasualClothes.length > 0) {
        const result = []
        for (let category of this.categories) {
          const categoryId = category._id
          const clothes = this.fetchCasualClothes.filter(clothe => 
            clothe.category_id === categoryId
          )
          const totalClothes = clothes.length

          result.push({
            categoryId: categoryId,
            category: category.name,
            totalClothes: totalClothes,
            clothes: clothes
          })
        }
        result.sort(function (a, b) {
          if (a.totalClothes < b.totalClothes) {
            return 1;
          }
          if (a.totalClothes > b.totalClothes) {
            return -1;
          }
          return 0;
        })
        const looks = []

        if (result[0].totalClothes < 1) {
          return;
        }
        const categoryIds = this.categories.map(category => category._id)
        const lookTemplate = {}

        for (let categoryId of categoryIds) {
          lookTemplate[categoryId] = null
        }
        for (let a of result[0].clothes) {
          if (result[1].totalClothes < 1) {
            const look = JSON.parse(JSON.stringify(lookTemplate))
            look[result[0].categoryId] = a
            looks.push(look)
            continue;
          }
          for (let b of result[1].clothes) {
            if (result[2].totalClothes < 1) {
              const look = JSON.parse(JSON.stringify(lookTemplate))
              look[result[0].categoryId] = a
              look[result[1].categoryId] = b
              looks.push(look)
              continue;
            }
            for (let c of result[2].clothes) {
              if (result[3].totalClothes < 1) {
                const look = JSON.parse(JSON.stringify(lookTemplate))
                look[result[0].categoryId] = a
                look[result[1].categoryId] = b
                look[result[2].categoryId] = c
                looks.push(look)
                continue;
              }
              for (let d of result[3].clothes) {
                if (result[4].totalClothes < 1) {
                  const look = JSON.parse(JSON.stringify(lookTemplate))
                  look[result[0].categoryId] = a
                  look[result[1].categoryId] = b
                  look[result[2].categoryId] = c
                  look[result[3].categoryId] = d
                  looks.push(look)
                  continue;
                }
                for (let e of result[4].clothes) {
                  if (result[5].totalClothes < 1) {
                    const look = JSON.parse(JSON.stringify(lookTemplate))
                    look[result[0].categoryId] = a
                    look[result[1].categoryId] = b
                    look[result[2].categoryId] = c
                    look[result[3].categoryId] = d
                    look[result[4].categoryId] = e
                    looks.push(look)
                    continue;
                  }
                  for (let f of result[5].clothes) {
                    if (result[6].totalClothes < 1) {
                      const look = JSON.parse(JSON.stringify(lookTemplate))
                      look[result[0].categoryId] = a
                      look[result[1].categoryId] = b
                      look[result[2].categoryId] = c
                      look[result[3].categoryId] = d
                      look[result[4].categoryId] = e
                      look[result[5].categoryId] = f
                      looks.push(look)
                      continue;
                    }
                    for (let g of result[6].clothes) {
                      if (result[7].totalClothes < 1) {
                        const look = JSON.parse(JSON.stringify(lookTemplate))
                        look[result[0].categoryId] = a
                        look[result[1].categoryId] = b
                        look[result[2].categoryId] = c
                        look[result[3].categoryId] = d
                        look[result[4].categoryId] = e
                        look[result[5].categoryId] = f
                        look[result[6].categoryId] = g
                        looks.push(look)
                        continue;
                      }
                      for (let h of result[7].clothes) {
                        if (result[8].totalClothes < 1) {
                          const look = JSON.parse(JSON.stringify(lookTemplate))
                          look[result[0].categoryId] = a
                          look[result[1].categoryId] = b
                          look[result[2].categoryId] = c
                          look[result[3].categoryId] = d
                          look[result[4].categoryId] = e
                          look[result[5].categoryId] = f
                          look[result[6].categoryId] = g
                          look[result[7].categoryId] = h
                          looks.push(look)
                          continue;
                        }
                        for (let i of result[8].clothes) {
                          const look = JSON.parse(JSON.stringify(lookTemplate))
                          look[result[0].categoryId] = a
                          look[result[1].categoryId] = b
                          look[result[2].categoryId] = c
                          look[result[3].categoryId] = d
                          look[result[4].categoryId] = e
                          look[result[5].categoryId] = f
                          look[result[6].categoryId] = g
                          look[result[7].categoryId] = h
                          look[result[8].categoryId] = i
                          looks.push(look)
                          continue;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        this.setLooks(looks)
      }
      /*
      const clotheModelA = {
        "roupasDeCima": false,
        "pernas": false,
        "pes":  false,
        "pecasSobrepostas": false,
        "acessoriosDeCabeca": false,
        "acessoriosDePescoco": false,
        "acessoriosDeBracosEMaos": false,
        "cintura": false
      }
      const clotheModelB = {
        "pes":  false,
        "pecasSobrepostas": false,
        "pecasUnicas": false,
        "acessoriosDeCabeca": false,
        "acessoriosDePescoco": false,
        "acessoriosDeBracosEMaos": false,
        "cintura": false
      }
      */
    }
  }
}
</script>
