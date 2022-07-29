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
              class="px-5 text-center d-flex rounded-lg"
              :key="item.day+item.dayWeek+index+'div'"
              v-ripple
              @click="toggle"
            >
              <div>
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
              class="d-flex child-flex"
              cols="3"
              v-for="(value, key) in looks[0]"
              :key="key"
            >
              <v-img
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
              class="d-flex child-flex"
              cols="3"
              v-for="(value, key) in looks[35]"
              :key="key"
            >
              <v-img
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
      /*
      "roupasDeCima": false,
      "pernas": false,
      "pes":  false,
      "pecasSobrepostas": false,
      "pecasUnicas": false,
      "acessoriosDeCabeca": false,
      "acessoriosDePescoco": false,
      "acessoriosDeBracosEMaos": false,
      "cintura": false
      [
        "Roupas de cima",
        "Pernas",
        "Pés",
        "Peças sobrepostas",
        "Peças únicas",
        "Acessórios de cabeça",
        "Acessórios de pescoço",
        "Acessórios de braços e mãos",
        "Cintura"
      ]
      */
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
        for (let a of result[0].clothes) {
          if (result[1].totalClothes < 1) {
            const look = {}
            look[a.category_id] = a
            looks.push(look)
          } else {
            for (let b of result[1].clothes) {
              if (result[2].totalClothes < 1) {
                const look = {}
                look[a.category_id] = a
                look[b.category_id] = b
                looks.push(look)
              } else {
                for (let c of result[2].clothes) {
                  if (result[3].totalClothes < 1) {
                    const look = {}
                    look[a.category_id] = a
                    look[b.category_id] = b
                    look[c.category_id] = c
                    looks.push(look)
                  } else {
                    for (let d of result[3].clothes) {
                      if (result[4].totalClothes < 1) {
                        const look = {}
                        look[a.category_id] = a
                        look[b.category_id] = b
                        look[c.category_id] = c
                        look[d.category_id] = d
                        looks.push(look)
                      } else {
                        for (let e of result[4].clothes) {
                          if (result[5].totalClothes < 1) {
                            const look = {}
                            look[a.category_id] = a
                            look[b.category_id] = b
                            look[c.category_id] = c
                            look[d.category_id] = d
                            look[e.category_id] = e
                            looks.push(look)
                          } else {
                            for (let f of result[5].clothes) {
                              if (result[6].totalClothes < 1) {
                                const look = {}
                                look[a.category_id] = a
                                look[b.category_id] = b
                                look[c.category_id] = c
                                look[d.category_id] = d
                                look[e.category_id] = e
                                look[f.category_id] = f
                                looks.push(look)
                              } else {
                                for (let g of result[6].clothes) {
                                  if (result[7].totalClothes < 1) {
                                    const look = {}
                                    look[a.category_id] = a
                                    look[b.category_id] = b
                                    look[c.category_id] = c
                                    look[d.category_id] = d
                                    look[e.category_id] = e
                                    look[f.category_id] = f
                                    look[g.category_id] = g
                                    looks.push(look)
                                  } else {
                                    for (let h of result[7].clothes) {
                                      if (result[8].totalClothes < 1) {
                                        const look = {}
                                        look[a.category_id] = a
                                        look[b.category_id] = b
                                        look[c.category_id] = c
                                        look[d.category_id] = d
                                        look[e.category_id] = e
                                        look[f.category_id] = f
                                        look[g.category_id] = g
                                        look[h.category_id] = h
                                        looks.push(look)
                                      } else {
                                        for (let i of result[8].clothes) {
                                          const look = {}
                                          look[a.category_id] = a
                                          look[b.category_id] = b
                                          look[c.category_id] = c
                                          look[d.category_id] = d
                                          look[e.category_id] = e
                                          look[f.category_id] = f
                                          look[g.category_id] = g
                                          look[h.category_id] = h
                                          look[i.category_id] = i
                                          looks.push(look)
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
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
    },
    getIndex() {
      const max = 12
      const min = 0
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  }
}
</script>
