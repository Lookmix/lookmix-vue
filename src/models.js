const SPRING = "primavera"
const SUMMER = "verão"
const FALL = "outono"
const WINTER = "inverno"
export const DAY = "dia"
export const NIGHT = "noite"
export const CASUAL = "casual"
export const SOCIAL = "social"

export const seasonIcons = [
  {
    name: SPRING,
    icon: "mdi-image-filter-vintage"
  },
  {
    name: SUMMER,
    icon: "mdi-white-balance-sunny"
  },
  {
    name: FALL,
    icon: "mdi-leaf-maple"
  },
  {
    name: WINTER,
    icon: "mdi-snowflake"
  },
]

export const seasons = [
  SPRING, 
  WINTER,
  FALL,
  SUMMER
]

export const periodOfTime = [ DAY, NIGHT ]

export const closets = [
  CASUAL, SOCIAL
]

export const daysOfWeek = [
  "domingo",
  "segunda",
  "terça",
  "quarta",
  "quinta",
  "sexta",
  "sábado"
]

const occasion = {
  "_id": "4362adfgw",
  "name": "curso/faculdade",
  "type": "daily",
  "tags": ["uniforme", "atividades estudantis"],
  "cardLookTitle": "Look para curso/faculdade"
}

// DAILY LOOK DATAMODEL
// [
//   { // day of week,
//     "sort": 1, 
//     "weatherMax": 21,
//     "weatherMin": 18,
//     "occasions": {
//       "casual": [
//         {
//           "sort": 1,
//           "title": "Look para curso/faculdade",
//           "description": "uniforme, atividades estudantis",
//           "look": {
//             "629d286bec74d540eb5fb0e7": {
//               "_id":"62a7f1bf4ff9bba04173359a",
//               "category_id":"629d286bec74d540eb5fb0e7",
//               "closet_id":"72177720299676310",
//               "image":"https://live.bf6d6cab_n.jpg",
//               "occasions":["Shopping","Viagem"],
//               "seasons":["Primavera","Verão"],
//               "type":"casual"
//             },
//             "629d276bec74d540eb5fb0e7": {
//               "_id":"62a7f1bf4ff9bba04173359a",
//               "category_id":"629d286bec74d540eb5fb0e7",
//               "closet_id":"72177720299676310",
//               "image":"https://live.bf6d6cab_n.jpg",
//               "occasions":["Shopping","Viagem"],
//               "seasons":["Primavera","Verão"],
//               "type":"casual"
//             },
//             "629d284bec74d540eb5fb0e7": {
//               "_id":"62a7f1bf4ff9bba04173359a",
//               "category_id":"629d286bec74d540eb5fb0e7",
//               "closet_id":"72177720299676310",
//               "image":"https://live.bf6d6cab_n.jpg",
//               "occasions":["Shopping","Viagem"],
//               "seasons":["Primavera","Verão"],
//               "type":"casual"
//             },
//             "629d2816ec74d540eb5fb0e7": {
//               "_id":"62a7f1bf4ff9bba04173359a",
//               "category_id":"629d286bec74d540eb5fb0e7",
//               "closet_id":"72177720299676310",
//               "image":"https://live.bf6d6cab_n.jpg",
//               "occasions":["Shopping","Viagem"],
//               "seasons":["Primavera","Verão"],
//               "type":"casual"
//             },
//             "629d286b8c74d540eb5fb0e7": {
//               "_id":"62a7f1bf4ff9bba04173359a",
//               "category_id":"629d286bec74d540eb5fb0e7",
//               "closet_id":"72177720299676310",
//               "image":"https://live.bf6d6cab_n.jpg",
//               "occasions":["Shopping","Viagem"],
//               "seasons":["Primavera","Verão"],
//               "type":"casual"
//             },
//           }
//         },
//         {
//           "sort": 2,
//           "title": "Look para curso/faculdade",
//           "description": "uniforme, atividades estudantis",
//           "look": {
//             "629d286bec74d540eb5fb0e7": {
//               "_id":"62a7f1bf4ff9bba04173359a",
//               "category_id":"629d286bec74d540eb5fb0e7",
//               "closet_id":"72177720299676310",
//               "image":"https://live.bf6d6cab_n.jpg",
//               "occasions":["Shopping","Viagem"],
//               "seasons":["Primavera","Verão"],
//               "type":"casual"
//             },
//             "629d466bec74d540eb5fb0e7": {
//               "_id":"62a7f1bf4ff9bba04173359a",
//               "category_id":"629d286bec74d540eb5fb0e7",
//               "closet_id":"72177720299676310",
//               "image":"https://live.bf6d6cab_n.jpg",
//               "occasions":["Shopping","Viagem"],
//               "seasons":["Primavera","Verão"],
//               "type":"casual"
//             },
//             "6254286bec74d540eb5fb0e7": {
//               "_id":"62a7f1bf4ff9bba04173359a",
//               "category_id":"629d286bec74d540eb5fb0e7",
//               "closet_id":"72177720299676310",
//               "image":"https://live.bf6d6cab_n.jpg",
//               "occasions":["Shopping","Viagem"],
//               "seasons":["Primavera","Verão"],
//               "type":"casual"
//             },
//             "629dgf6bec74d540eb5fb0e7": {
//               "_id":"62a7f1bf4ff9bba04173359a",
//               "category_id":"629d286bec74d540eb5fb0e7",
//               "closet_id":"72177720299676310",
//               "image":"https://live.bf6d6cab_n.jpg",
//               "occasions":["Shopping","Viagem"],
//               "seasons":["Primavera","Verão"],
//               "type":"casual"
//             },
//             "629d286bec5kd540eb5fb0e7": {
//               "_id":"62a7f1bf4ff9bba04173359a",
//               "category_id":"629d286bec74d540eb5fb0e7",
//               "closet_id":"72177720299676310",
//               "image":"https://live.bf6d6cab_n.jpg",
//               "occasions":["Shopping","Viagem"],
//               "seasons":["Primavera","Verão"],
//               "type":"casual"
//             },
//           }
//         }
//       ],
//       "social": [
//         {
//           "sort": 1,
//           "title": "Look para curso/faculdade",
//           "description": "uniforme, atividades estudantis",
//           "look": {
//             "629d286bec74d540eb5fb0e7": {
//               "_id":"62a7f1bf4ff9bba04173359a",
//               "category_id":"629d286bec74d540eb5fb0e7",
//               "closet_id":"72177720299676310",
//               "image":"https://live.bf6d6cab_n.jpg",
//               "occasions":["Shopping","Viagem"],
//               "seasons":["Primavera","Verão"],
//               "type":"casual"
//             },
//             "629d276bec74d540eb5fb0e7": {
//               "_id":"62a7f1bf4ff9bba04173359a",
//               "category_id":"629d286bec74d540eb5fb0e7",
//               "closet_id":"72177720299676310",
//               "image":"https://live.bf6d6cab_n.jpg",
//               "occasions":["Shopping","Viagem"],
//               "seasons":["Primavera","Verão"],
//               "type":"casual"
//             },
//             "629d284bec74d540eb5fb0e7": {
//               "_id":"62a7f1bf4ff9bba04173359a",
//               "category_id":"629d286bec74d540eb5fb0e7",
//               "closet_id":"72177720299676310",
//               "image":"https://live.bf6d6cab_n.jpg",
//               "occasions":["Shopping","Viagem"],
//               "seasons":["Primavera","Verão"],
//               "type":"casual"
//             },
//             "629d2816ec74d540eb5fb0e7": {
//               "_id":"62a7f1bf4ff9bba04173359a",
//               "category_id":"629d286bec74d540eb5fb0e7",
//               "closet_id":"72177720299676310",
//               "image":"https://live.bf6d6cab_n.jpg",
//               "occasions":["Shopping","Viagem"],
//               "seasons":["Primavera","Verão"],
//               "type":"casual"
//             },
//             "629d286b8c74d540eb5fb0e7": {
//               "_id":"62a7f1bf4ff9bba04173359a",
//               "category_id":"629d286bec74d540eb5fb0e7",
//               "closet_id":"72177720299676310",
//               "image":"https://live.bf6d6cab_n.jpg",
//               "occasions":["Shopping","Viagem"],
//               "seasons":["Primavera","Verão"],
//               "type":"casual"
//             },
//           }
//         },
//         {
//           "sort": 2,
//           "title": "Look para curso/faculdade",
//           "description": "uniforme, atividades estudantis",
//           "look": {
//             "629d286bec74d540eb5fb0e7": {
//               "_id":"62a7f1bf4ff9bba04173359a",
//               "category_id":"629d286bec74d540eb5fb0e7",
//               "closet_id":"72177720299676310",
//               "image":"https://live.bf6d6cab_n.jpg",
//               "occasions":["Shopping","Viagem"],
//               "seasons":["Primavera","Verão"],
//               "type":"casual"
//             },
//             "629d466bec74d540eb5fb0e7": {
//               "_id":"62a7f1bf4ff9bba04173359a",
//               "category_id":"629d286bec74d540eb5fb0e7",
//               "closet_id":"72177720299676310",
//               "image":"https://live.bf6d6cab_n.jpg",
//               "occasions":["Shopping","Viagem"],
//               "seasons":["Primavera","Verão"],
//               "type":"casual"
//             },
//             "6254286bec74d540eb5fb0e7": {
//               "_id":"62a7f1bf4ff9bba04173359a",
//               "category_id":"629d286bec74d540eb5fb0e7",
//               "closet_id":"72177720299676310",
//               "image":"https://live.bf6d6cab_n.jpg",
//               "occasions":["Shopping","Viagem"],
//               "seasons":["Primavera","Verão"],
//               "type":"casual"
//             },
//             "629dgf6bec74d540eb5fb0e7": {
//               "_id":"62a7f1bf4ff9bba04173359a",
//               "category_id":"629d286bec74d540eb5fb0e7",
//               "closet_id":"72177720299676310",
//               "image":"https://live.bf6d6cab_n.jpg",
//               "occasions":["Shopping","Viagem"],
//               "seasons":["Primavera","Verão"],
//               "type":"casual"
//             },
//             "629d286bec5kd540eb5fb0e7": {
//               "_id":"62a7f1bf4ff9bba04173359a",
//               "category_id":"629d286bec74d540eb5fb0e7",
//               "closet_id":"72177720299676310",
//               "image":"https://live.bf6d6cab_n.jpg",
//               "occasions":["Shopping","Viagem"],
//               "seasons":["Primavera","Verão"],
//               "type":"casual"
//             },
//           }
//         }
//       ]
//     }
//   }
// ]


const PROCEDURAL = []

export const RECURSIVE = [
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62a413f966724c5f403cf981",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137741934_a4a99fcabf_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d09503521c"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62cf9c58c973e41fdbfde779",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52215124508_6fab503a0f_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d09503521c",
                  "6315604bdaf4e3d09503521d"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": null
      },
      "occasion": "6315604bdaf4e3d09503521c",
      "period": "6315604bdaf4e3d095035213",
      "sort": 0,
      "season": [
          "primavera",
          "ver\u00e3o"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "s\u00e1bado"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62a413f666724c5f403cf980",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137525213_e856c41ae9_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035212"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62a7f1bf4ff9bba04173359a",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52145403355_86bf6d6cab_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4140866724c5f403cf986",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137503691_33070fd125_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035213",
      "sort": 2,
      "season": [
          "primavera"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "segunda"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62a413f666724c5f403cf980",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137525213_e856c41ae9_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035212"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "6316c43f9ae66942d36d846e",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52338066380_7dbb9a9274_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d09503521e"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4140866724c5f403cf986",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137503691_33070fd125_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035212",
      "period": "6315604bdaf4e3d095035213",
      "sort": 4,
      "season": [
          "primavera",
          "ver\u00e3o"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quarta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": null,
          "629d286bec74d540eb5fb0e7": {
              "_id": "62c9c91d336080751568ceae",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52204773396_8dcc9479d5_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "inverno",
                  "outono"
              ],
              "type": "social"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": {
              "_id": "62fc629e98e43430688253f9",
              "category_id": "629d286bec74d540eb5fb0ee",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52291448274_69f0ca273c_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "inverno",
                  "outono"
              ],
              "type": "social"
          },
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": null
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 4,
      "season": [
          "inverno",
          "outono"
      ],
      "type": "social",
      "repeat_count": 0,
      "day_of_week": "quarta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62a413f666724c5f403cf980",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137525213_e856c41ae9_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035212"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62a7f1bf4ff9bba04173359a",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52145403355_86bf6d6cab_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4140866724c5f403cf986",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137503691_33070fd125_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 5,
      "season": [
          "primavera"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62a413f666724c5f403cf980",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137525213_e856c41ae9_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035212"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62a7f1bf4ff9bba04173359a",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52145403355_86bf6d6cab_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4169a66724c5f403cf987",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137515811_b8022953f4_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035213",
      "sort": 6,
      "season": [
          "primavera"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "sexta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62a413f966724c5f403cf981",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137741934_a4a99fcabf_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d09503521c"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62a7f1bf4ff9bba04173359a",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52145403355_86bf6d6cab_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4140866724c5f403cf986",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137503691_33070fd125_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035213",
      "sort": 9,
      "season": [
          "primavera"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "segunda"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62a413f666724c5f403cf980",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137525213_e856c41ae9_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035212"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": null,
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4140866724c5f403cf986",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137503691_33070fd125_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035212",
      "period": "6315604bdaf4e3d095035213",
      "sort": 11,
      "season": [
          "primavera",
          "ver\u00e3o",
          "outono"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quarta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62a413f666724c5f403cf980",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137525213_e856c41ae9_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035212"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62a7f1bf4ff9bba04173359a",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52145403355_86bf6d6cab_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4169a66724c5f403cf987",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137515811_b8022953f4_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 12,
      "season": [
          "primavera"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62a413f966724c5f403cf981",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137741934_a4a99fcabf_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d09503521c"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62a7f1bf4ff9bba04173359a",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52145403355_86bf6d6cab_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4169a66724c5f403cf987",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137515811_b8022953f4_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035213",
      "sort": 13,
      "season": [
          "primavera"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "sexta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62e8872913adc71d29f9a0f7",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52257861670_1c20994936_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "inverno",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62a7f1bf4ff9bba04173359a",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52145403355_86bf6d6cab_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4140866724c5f403cf986",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137503691_33070fd125_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035213",
      "sort": 16,
      "season": [
          "primavera"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "segunda"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62a413f666724c5f403cf980",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137525213_e856c41ae9_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035212"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62c9d85bd168f9c20acb7950",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52205398840_b6e41d506c_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4140866724c5f403cf986",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137503691_33070fd125_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 19,
      "season": [
          "primavera",
          "ver\u00e3o"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62e8872913adc71d29f9a0f7",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52257861670_1c20994936_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "inverno",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62a7f1bf4ff9bba04173359a",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52145403355_86bf6d6cab_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4169a66724c5f403cf987",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137515811_b8022953f4_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035213",
      "sort": 20,
      "season": [
          "primavera"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "sexta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62a413f666724c5f403cf980",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137525213_e856c41ae9_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035212"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62c9d85bd168f9c20acb7950",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52205398840_b6e41d506c_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4140866724c5f403cf986",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137503691_33070fd125_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035213",
      "sort": 23,
      "season": [
          "primavera",
          "ver\u00e3o"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "segunda"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62a413f666724c5f403cf980",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137525213_e856c41ae9_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035212"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62c9d85bd168f9c20acb7950",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52205398840_b6e41d506c_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4169a66724c5f403cf987",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137515811_b8022953f4_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 26,
      "season": [
          "primavera",
          "ver\u00e3o"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62a413f666724c5f403cf980",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137525213_e856c41ae9_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035212"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62c9d85bd168f9c20acb7950",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52205398840_b6e41d506c_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4169a66724c5f403cf987",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137515811_b8022953f4_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035213",
      "sort": 27,
      "season": [
          "primavera",
          "ver\u00e3o"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "sexta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62a413f966724c5f403cf981",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137741934_a4a99fcabf_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d09503521c"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62c9d85bd168f9c20acb7950",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52205398840_b6e41d506c_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4140866724c5f403cf986",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137503691_33070fd125_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035213",
      "sort": 30,
      "season": [
          "primavera",
          "ver\u00e3o"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "segunda"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62a413f666724c5f403cf980",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137525213_e856c41ae9_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035212"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62c9e3fbd168f9c20acb795a",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52205256934_2cfce4c495_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d095035219"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4140866724c5f403cf986",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137503691_33070fd125_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 33,
      "season": [
          "primavera",
          "ver\u00e3o"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62a413f966724c5f403cf981",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137741934_a4a99fcabf_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d09503521c"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62c9d85bd168f9c20acb7950",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52205398840_b6e41d506c_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4169a66724c5f403cf987",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137515811_b8022953f4_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035213",
      "sort": 34,
      "season": [
          "primavera",
          "ver\u00e3o"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "sexta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62e8872913adc71d29f9a0f7",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52257861670_1c20994936_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "inverno",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62c9d85bd168f9c20acb7950",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52205398840_b6e41d506c_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4140866724c5f403cf986",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137503691_33070fd125_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035213",
      "sort": 37,
      "season": [
          "primavera",
          "ver\u00e3o"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "segunda"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62a413f666724c5f403cf980",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137525213_e856c41ae9_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035212"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62c9e3fbd168f9c20acb795a",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52205256934_2cfce4c495_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d095035219"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4169a66724c5f403cf987",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137515811_b8022953f4_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 40,
      "season": [
          "primavera",
          "ver\u00e3o"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62e8872913adc71d29f9a0f7",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52257861670_1c20994936_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "inverno",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62c9d85bd168f9c20acb7950",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52205398840_b6e41d506c_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4169a66724c5f403cf987",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137515811_b8022953f4_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035213",
      "sort": 41,
      "season": [
          "primavera",
          "ver\u00e3o"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "sexta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62a413f666724c5f403cf980",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137525213_e856c41ae9_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035212"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62c9e3fbd168f9c20acb795a",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52205256934_2cfce4c495_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d095035219"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4140866724c5f403cf986",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137503691_33070fd125_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035213",
      "sort": 44,
      "season": [
          "primavera",
          "ver\u00e3o"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "segunda"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62a413f666724c5f403cf980",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137525213_e856c41ae9_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035212"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "6316c43f9ae66942d36d846e",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52338066380_7dbb9a9274_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d09503521e"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4140866724c5f403cf986",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137503691_33070fd125_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 47,
      "season": [
          "primavera",
          "ver\u00e3o"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62a413f666724c5f403cf980",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137525213_e856c41ae9_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035212"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62c9e3fbd168f9c20acb795a",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52205256934_2cfce4c495_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d095035219"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4169a66724c5f403cf987",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137515811_b8022953f4_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035213",
      "sort": 48,
      "season": [
          "primavera",
          "ver\u00e3o"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "sexta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62a413f966724c5f403cf981",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137741934_a4a99fcabf_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d09503521c"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62c9e3fbd168f9c20acb795a",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52205256934_2cfce4c495_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d095035219"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4140866724c5f403cf986",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137503691_33070fd125_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035213",
      "sort": 51,
      "season": [
          "primavera",
          "ver\u00e3o"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "segunda"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62a413f666724c5f403cf980",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137525213_e856c41ae9_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035212"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "6316c43f9ae66942d36d846e",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52338066380_7dbb9a9274_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d09503521e"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4169a66724c5f403cf987",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137515811_b8022953f4_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 54,
      "season": [
          "primavera",
          "ver\u00e3o"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62a413f966724c5f403cf981",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137741934_a4a99fcabf_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d09503521c"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62c9e3fbd168f9c20acb795a",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52205256934_2cfce4c495_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d095035219"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4169a66724c5f403cf987",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137515811_b8022953f4_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035213",
      "sort": 55,
      "season": [
          "primavera",
          "ver\u00e3o"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "sexta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62e8872913adc71d29f9a0f7",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52257861670_1c20994936_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "inverno",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62c9e3fbd168f9c20acb795a",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52205256934_2cfce4c495_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d095035219"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4140866724c5f403cf986",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137503691_33070fd125_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035213",
      "sort": 58,
      "season": [
          "primavera",
          "ver\u00e3o"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "segunda"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62a413f966724c5f403cf981",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137741934_a4a99fcabf_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d09503521c"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62a7f1bf4ff9bba04173359a",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52145403355_86bf6d6cab_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4140866724c5f403cf986",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137503691_33070fd125_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 61,
      "season": [
          "primavera"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62e8872913adc71d29f9a0f7",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52257861670_1c20994936_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "inverno",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62c9e3fbd168f9c20acb795a",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52205256934_2cfce4c495_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d095035219"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4169a66724c5f403cf987",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137515811_b8022953f4_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035213",
      "sort": 62,
      "season": [
          "primavera",
          "ver\u00e3o"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "sexta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62a413f666724c5f403cf980",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137525213_e856c41ae9_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035212"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "6316c43f9ae66942d36d846e",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52338066380_7dbb9a9274_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d09503521e"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4140866724c5f403cf986",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137503691_33070fd125_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035213",
      "sort": 65,
      "season": [
          "primavera",
          "ver\u00e3o"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "segunda"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62a413f966724c5f403cf981",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137741934_a4a99fcabf_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d09503521c"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62a7f1bf4ff9bba04173359a",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52145403355_86bf6d6cab_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4169a66724c5f403cf987",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137515811_b8022953f4_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 68,
      "season": [
          "primavera"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62a413f666724c5f403cf980",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137525213_e856c41ae9_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035212"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "6316c43f9ae66942d36d846e",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52338066380_7dbb9a9274_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d09503521e"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4169a66724c5f403cf987",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137515811_b8022953f4_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035213",
      "sort": 69,
      "season": [
          "primavera",
          "ver\u00e3o"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "sexta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62a413f966724c5f403cf981",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137741934_a4a99fcabf_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d09503521c"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "6316c43f9ae66942d36d846e",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52338066380_7dbb9a9274_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d09503521e"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4140866724c5f403cf986",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137503691_33070fd125_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035213",
      "sort": 72,
      "season": [
          "primavera",
          "ver\u00e3o"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "segunda"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62a413f966724c5f403cf981",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137741934_a4a99fcabf_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d09503521c"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62c9d85bd168f9c20acb7950",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52205398840_b6e41d506c_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4140866724c5f403cf986",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137503691_33070fd125_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 75,
      "season": [
          "primavera",
          "ver\u00e3o"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62a413f966724c5f403cf981",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137741934_a4a99fcabf_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d09503521c"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "6316c43f9ae66942d36d846e",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52338066380_7dbb9a9274_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d09503521e"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4169a66724c5f403cf987",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137515811_b8022953f4_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035213",
      "sort": 76,
      "season": [
          "primavera",
          "ver\u00e3o"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "sexta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62e8872913adc71d29f9a0f7",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52257861670_1c20994936_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "inverno",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "6316c43f9ae66942d36d846e",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52338066380_7dbb9a9274_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d09503521e"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4140866724c5f403cf986",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137503691_33070fd125_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035213",
      "sort": 79,
      "season": [
          "primavera",
          "ver\u00e3o"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "segunda"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62a413f966724c5f403cf981",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137741934_a4a99fcabf_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d09503521c"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62c9d85bd168f9c20acb7950",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52205398840_b6e41d506c_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4169a66724c5f403cf987",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137515811_b8022953f4_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 82,
      "season": [
          "primavera",
          "ver\u00e3o"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62e8872913adc71d29f9a0f7",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52257861670_1c20994936_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "inverno",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "6316c43f9ae66942d36d846e",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52338066380_7dbb9a9274_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d09503521e"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4169a66724c5f403cf987",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137515811_b8022953f4_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035213",
      "sort": 83,
      "season": [
          "primavera",
          "ver\u00e3o"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "sexta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62a413f666724c5f403cf980",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137525213_e856c41ae9_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035212"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": null,
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4140866724c5f403cf986",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137503691_33070fd125_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035213",
      "sort": 86,
      "season": [
          "primavera",
          "ver\u00e3o",
          "outono"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "segunda"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62a413f966724c5f403cf981",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137741934_a4a99fcabf_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d09503521c"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62c9e3fbd168f9c20acb795a",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52205256934_2cfce4c495_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d095035219"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4140866724c5f403cf986",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137503691_33070fd125_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 89,
      "season": [
          "primavera",
          "ver\u00e3o"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62a413f666724c5f403cf980",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137525213_e856c41ae9_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035212"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": null,
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4169a66724c5f403cf987",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137515811_b8022953f4_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035213",
      "sort": 90,
      "season": [
          "primavera",
          "ver\u00e3o",
          "outono"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "sexta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62a413f966724c5f403cf981",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137741934_a4a99fcabf_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d09503521c"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": null,
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4140866724c5f403cf986",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137503691_33070fd125_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035213",
      "sort": 93,
      "season": [
          "primavera",
          "ver\u00e3o",
          "outono",
          "inverno"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "segunda"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62a413f966724c5f403cf981",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137741934_a4a99fcabf_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d09503521c"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62c9e3fbd168f9c20acb795a",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52205256934_2cfce4c495_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d095035219"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4169a66724c5f403cf987",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137515811_b8022953f4_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 96,
      "season": [
          "primavera",
          "ver\u00e3o"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62a413f966724c5f403cf981",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137741934_a4a99fcabf_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d09503521c"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": null,
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4169a66724c5f403cf987",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137515811_b8022953f4_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035213",
      "sort": 97,
      "season": [
          "primavera",
          "ver\u00e3o",
          "outono",
          "inverno"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "sexta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62e8872913adc71d29f9a0f7",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52257861670_1c20994936_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "inverno",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": null,
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4140866724c5f403cf986",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137503691_33070fd125_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035213",
      "sort": 100,
      "season": [
          "primavera",
          "ver\u00e3o",
          "outono",
          "inverno"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "segunda"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62a413f966724c5f403cf981",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137741934_a4a99fcabf_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d09503521c"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "6316c43f9ae66942d36d846e",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52338066380_7dbb9a9274_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d09503521e"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4140866724c5f403cf986",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137503691_33070fd125_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 103,
      "season": [
          "primavera",
          "ver\u00e3o"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62e8872913adc71d29f9a0f7",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52257861670_1c20994936_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "inverno",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": null,
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4169a66724c5f403cf987",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137515811_b8022953f4_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035213",
      "sort": 104,
      "season": [
          "primavera",
          "ver\u00e3o",
          "outono",
          "inverno"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "sexta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62a413f966724c5f403cf981",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137741934_a4a99fcabf_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d09503521c"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "6316c43f9ae66942d36d846e",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52338066380_7dbb9a9274_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d09503521e"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4169a66724c5f403cf987",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137515811_b8022953f4_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 110,
      "season": [
          "primavera",
          "ver\u00e3o"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62cf902d501ba2742df1fa91",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52215069973_f7bf69327f_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035214"
              ],
              "seasons": [
                  "primavera",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62a7f1bf4ff9bba04173359a",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52145403355_86bf6d6cab_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4140866724c5f403cf986",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137503691_33070fd125_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 117,
      "season": [
          "primavera"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62cf902d501ba2742df1fa91",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52215069973_f7bf69327f_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035214"
              ],
              "seasons": [
                  "primavera",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62a7f1bf4ff9bba04173359a",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52145403355_86bf6d6cab_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4169a66724c5f403cf987",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137515811_b8022953f4_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 124,
      "season": [
          "primavera"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62cf902d501ba2742df1fa91",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52215069973_f7bf69327f_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035214"
              ],
              "seasons": [
                  "primavera",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62c9d85bd168f9c20acb7950",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52205398840_b6e41d506c_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4140866724c5f403cf986",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137503691_33070fd125_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 131,
      "season": [
          "primavera",
          "ver\u00e3o"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62cf902d501ba2742df1fa91",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52215069973_f7bf69327f_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035214"
              ],
              "seasons": [
                  "primavera",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62c9d85bd168f9c20acb7950",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52205398840_b6e41d506c_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4169a66724c5f403cf987",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137515811_b8022953f4_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 138,
      "season": [
          "primavera",
          "ver\u00e3o"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62cf902d501ba2742df1fa91",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52215069973_f7bf69327f_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035214"
              ],
              "seasons": [
                  "primavera",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62c9e3fbd168f9c20acb795a",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52205256934_2cfce4c495_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d095035219"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4140866724c5f403cf986",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137503691_33070fd125_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 145,
      "season": [
          "primavera",
          "ver\u00e3o"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62cf902d501ba2742df1fa91",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52215069973_f7bf69327f_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035214"
              ],
              "seasons": [
                  "primavera",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62c9e3fbd168f9c20acb795a",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52205256934_2cfce4c495_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d095035219"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4169a66724c5f403cf987",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137515811_b8022953f4_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 152,
      "season": [
          "primavera",
          "ver\u00e3o"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62cf902d501ba2742df1fa91",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52215069973_f7bf69327f_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035214"
              ],
              "seasons": [
                  "primavera",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "6316c43f9ae66942d36d846e",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52338066380_7dbb9a9274_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d09503521e"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4140866724c5f403cf986",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137503691_33070fd125_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 159,
      "season": [
          "primavera",
          "ver\u00e3o"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62cf902d501ba2742df1fa91",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52215069973_f7bf69327f_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035214"
              ],
              "seasons": [
                  "primavera",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "6316c43f9ae66942d36d846e",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52338066380_7dbb9a9274_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d09503521e"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4169a66724c5f403cf987",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137515811_b8022953f4_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 166,
      "season": [
          "primavera",
          "ver\u00e3o"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62e8872913adc71d29f9a0f7",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52257861670_1c20994936_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "inverno",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62a7f1bf4ff9bba04173359a",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52145403355_86bf6d6cab_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4140866724c5f403cf986",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137503691_33070fd125_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 173,
      "season": [
          "primavera"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62e8872913adc71d29f9a0f7",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52257861670_1c20994936_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "inverno",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62a7f1bf4ff9bba04173359a",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52145403355_86bf6d6cab_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4169a66724c5f403cf987",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137515811_b8022953f4_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 180,
      "season": [
          "primavera"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62e8872913adc71d29f9a0f7",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52257861670_1c20994936_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "inverno",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62c9d85bd168f9c20acb7950",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52205398840_b6e41d506c_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4140866724c5f403cf986",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137503691_33070fd125_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 187,
      "season": [
          "primavera",
          "ver\u00e3o"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62e8872913adc71d29f9a0f7",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52257861670_1c20994936_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "inverno",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62c9d85bd168f9c20acb7950",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52205398840_b6e41d506c_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4169a66724c5f403cf987",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137515811_b8022953f4_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 194,
      "season": [
          "primavera",
          "ver\u00e3o"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62e8872913adc71d29f9a0f7",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52257861670_1c20994936_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "inverno",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62c9e3fbd168f9c20acb795a",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52205256934_2cfce4c495_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d095035219"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4140866724c5f403cf986",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137503691_33070fd125_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 201,
      "season": [
          "primavera",
          "ver\u00e3o"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62e8872913adc71d29f9a0f7",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52257861670_1c20994936_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "inverno",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62c9e3fbd168f9c20acb795a",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52205256934_2cfce4c495_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d095035219"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4169a66724c5f403cf987",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137515811_b8022953f4_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 208,
      "season": [
          "primavera",
          "ver\u00e3o"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62e8872913adc71d29f9a0f7",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52257861670_1c20994936_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "inverno",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "6316c43f9ae66942d36d846e",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52338066380_7dbb9a9274_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d09503521e"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4140866724c5f403cf986",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137503691_33070fd125_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 215,
      "season": [
          "primavera",
          "ver\u00e3o"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62e8872913adc71d29f9a0f7",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52257861670_1c20994936_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "inverno",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "6316c43f9ae66942d36d846e",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52338066380_7dbb9a9274_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d09503521e"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4169a66724c5f403cf987",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137515811_b8022953f4_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 222,
      "season": [
          "primavera",
          "ver\u00e3o"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62a413f666724c5f403cf980",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137525213_e856c41ae9_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035212"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62d0d70867f3eaba19fd0b53",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52217114716_edc4eae397_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4140866724c5f403cf986",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137503691_33070fd125_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 229,
      "season": [
          "outono"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62a413f666724c5f403cf980",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137525213_e856c41ae9_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035212"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62d0d70867f3eaba19fd0b53",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52217114716_edc4eae397_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4169a66724c5f403cf987",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137515811_b8022953f4_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 236,
      "season": [
          "outono"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62a413f666724c5f403cf980",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137525213_e856c41ae9_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035212"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62d0d70867f3eaba19fd0b53",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52217114716_edc4eae397_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62cce00abce9ce70a9a56914",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52210782224_9c450ceac7_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "inverno",
                  "outono"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 243,
      "season": [
          "outono"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62a413f966724c5f403cf981",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137741934_a4a99fcabf_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d09503521c"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62d0d70867f3eaba19fd0b53",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52217114716_edc4eae397_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4140866724c5f403cf986",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137503691_33070fd125_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 250,
      "season": [
          "outono"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62a413f966724c5f403cf981",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137741934_a4a99fcabf_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d09503521c"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62d0d70867f3eaba19fd0b53",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52217114716_edc4eae397_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4169a66724c5f403cf987",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137515811_b8022953f4_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 257,
      "season": [
          "outono"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62a413f966724c5f403cf981",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137741934_a4a99fcabf_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d09503521c"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62d0d70867f3eaba19fd0b53",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52217114716_edc4eae397_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62cce00abce9ce70a9a56914",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52210782224_9c450ceac7_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "inverno",
                  "outono"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 264,
      "season": [
          "outono"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62cf902d501ba2742df1fa91",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52215069973_f7bf69327f_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035214"
              ],
              "seasons": [
                  "primavera",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62d0d70867f3eaba19fd0b53",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52217114716_edc4eae397_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4140866724c5f403cf986",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137503691_33070fd125_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 271,
      "season": [
          "outono"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62cf902d501ba2742df1fa91",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52215069973_f7bf69327f_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035214"
              ],
              "seasons": [
                  "primavera",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62d0d70867f3eaba19fd0b53",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52217114716_edc4eae397_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4169a66724c5f403cf987",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137515811_b8022953f4_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 278,
      "season": [
          "outono"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62cf902d501ba2742df1fa91",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52215069973_f7bf69327f_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035214"
              ],
              "seasons": [
                  "primavera",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62d0d70867f3eaba19fd0b53",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52217114716_edc4eae397_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62cce00abce9ce70a9a56914",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52210782224_9c450ceac7_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "inverno",
                  "outono"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 285,
      "season": [
          "outono"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62e8872913adc71d29f9a0f7",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52257861670_1c20994936_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "inverno",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62d0d70867f3eaba19fd0b53",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52217114716_edc4eae397_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4140866724c5f403cf986",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137503691_33070fd125_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 292,
      "season": [
          "outono"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62e8872913adc71d29f9a0f7",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52257861670_1c20994936_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "inverno",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62d0d70867f3eaba19fd0b53",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52217114716_edc4eae397_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4169a66724c5f403cf987",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137515811_b8022953f4_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 299,
      "season": [
          "outono"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62e8872913adc71d29f9a0f7",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52257861670_1c20994936_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "inverno",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62d0d70867f3eaba19fd0b53",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52217114716_edc4eae397_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62cce00abce9ce70a9a56914",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52210782224_9c450ceac7_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "inverno",
                  "outono"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 306,
      "season": [
          "outono"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62a413f966724c5f403cf981",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137741934_a4a99fcabf_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d09503521c"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": null,
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4140866724c5f403cf986",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137503691_33070fd125_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 313,
      "season": [
          "primavera",
          "ver\u00e3o",
          "outono",
          "inverno"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62e8872913adc71d29f9a0f7",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52257861670_1c20994936_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "inverno",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": null,
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4140866724c5f403cf986",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137503691_33070fd125_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 320,
      "season": [
          "primavera",
          "ver\u00e3o",
          "outono",
          "inverno"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62a413f966724c5f403cf981",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137741934_a4a99fcabf_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d09503521c"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": null,
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4169a66724c5f403cf987",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137515811_b8022953f4_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 327,
      "season": [
          "primavera",
          "ver\u00e3o",
          "outono",
          "inverno"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62e8872913adc71d29f9a0f7",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52257861670_1c20994936_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "inverno",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": null,
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4169a66724c5f403cf987",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137515811_b8022953f4_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 334,
      "season": [
          "primavera",
          "ver\u00e3o",
          "outono",
          "inverno"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62a413f966724c5f403cf981",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137741934_a4a99fcabf_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d09503521c"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": null,
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62cce00abce9ce70a9a56914",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52210782224_9c450ceac7_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "inverno",
                  "outono"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 341,
      "season": [
          "inverno",
          "outono"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62e8872913adc71d29f9a0f7",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52257861670_1c20994936_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "inverno",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": null,
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62cce00abce9ce70a9a56914",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52210782224_9c450ceac7_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "inverno",
                  "outono"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 348,
      "season": [
          "inverno",
          "outono"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  }
]

export const RECURSIVE2 = [
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62a413f666724c5f403cf980",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137525213_e856c41ae9_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035212"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62a7f1bf4ff9bba04173359a",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52145403355_86bf6d6cab_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4140866724c5f403cf986",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137503691_33070fd125_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035213",
      "sort": 1,
      "season": [
          "primavera"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "segunda"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62a413f666724c5f403cf980",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137525213_e856c41ae9_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035212"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "6316c43f9ae66942d36d846e",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52338066380_7dbb9a9274_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d09503521e"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4140866724c5f403cf986",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137503691_33070fd125_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035212",
      "period": "6315604bdaf4e3d095035213",
      "sort": 3,
      "season": [
          "primavera",
          "ver\u00e3o"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quarta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": null,
          "629d286bec74d540eb5fb0e7": {
              "_id": "62c9c91d336080751568ceae",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52204773396_8dcc9479d5_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "inverno",
                  "outono"
              ],
              "type": "social"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": {
              "_id": "62fc629e98e43430688253f9",
              "category_id": "629d286bec74d540eb5fb0ee",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52291448274_69f0ca273c_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "inverno",
                  "outono"
              ],
              "type": "social"
          },
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": null
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 3,
      "season": [
          "inverno",
          "outono"
      ],
      "type": "social",
      "repeat_count": 0,
      "day_of_week": "quarta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62a413f666724c5f403cf980",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137525213_e856c41ae9_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035212"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62a7f1bf4ff9bba04173359a",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52145403355_86bf6d6cab_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4140866724c5f403cf986",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137503691_33070fd125_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 4,
      "season": [
          "primavera"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62a413f666724c5f403cf980",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137525213_e856c41ae9_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035212"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62a7f1bf4ff9bba04173359a",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52145403355_86bf6d6cab_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4169a66724c5f403cf987",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137515811_b8022953f4_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035213",
      "sort": 5,
      "season": [
          "primavera"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "sexta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62a413f966724c5f403cf981",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137741934_a4a99fcabf_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d09503521c"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62cf9c58c973e41fdbfde779",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52215124508_6fab503a0f_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d09503521c",
                  "6315604bdaf4e3d09503521d"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": null
      },
      "occasion": "6315604bdaf4e3d09503521c",
      "period": "6315604bdaf4e3d095035213",
      "sort": 6,
      "season": [
          "primavera",
          "ver\u00e3o"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "s\u00e1bado"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62a413f966724c5f403cf981",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137741934_a4a99fcabf_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d09503521c"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62a7f1bf4ff9bba04173359a",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52145403355_86bf6d6cab_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4140866724c5f403cf986",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137503691_33070fd125_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035213",
      "sort": 8,
      "season": [
          "primavera"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "segunda"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62a413f666724c5f403cf980",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137525213_e856c41ae9_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035212"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": null,
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4140866724c5f403cf986",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137503691_33070fd125_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035212",
      "period": "6315604bdaf4e3d095035213",
      "sort": 10,
      "season": [
          "primavera",
          "ver\u00e3o",
          "outono"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quarta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62a413f666724c5f403cf980",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137525213_e856c41ae9_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035212"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62a7f1bf4ff9bba04173359a",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52145403355_86bf6d6cab_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4169a66724c5f403cf987",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137515811_b8022953f4_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 11,
      "season": [
          "primavera"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62a413f966724c5f403cf981",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137741934_a4a99fcabf_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d09503521c"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62a7f1bf4ff9bba04173359a",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52145403355_86bf6d6cab_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4169a66724c5f403cf987",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137515811_b8022953f4_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035213",
      "sort": 12,
      "season": [
          "primavera"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "sexta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62e8872913adc71d29f9a0f7",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52257861670_1c20994936_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "inverno",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62a7f1bf4ff9bba04173359a",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52145403355_86bf6d6cab_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4140866724c5f403cf986",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137503691_33070fd125_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035213",
      "sort": 15,
      "season": [
          "primavera"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "segunda"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62a413f666724c5f403cf980",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137525213_e856c41ae9_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035212"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62c9d85bd168f9c20acb7950",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52205398840_b6e41d506c_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4140866724c5f403cf986",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137503691_33070fd125_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 18,
      "season": [
          "primavera",
          "ver\u00e3o"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62e8872913adc71d29f9a0f7",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52257861670_1c20994936_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "inverno",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62a7f1bf4ff9bba04173359a",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52145403355_86bf6d6cab_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4169a66724c5f403cf987",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137515811_b8022953f4_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035213",
      "sort": 19,
      "season": [
          "primavera"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "sexta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62a413f666724c5f403cf980",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137525213_e856c41ae9_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035212"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62c9d85bd168f9c20acb7950",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52205398840_b6e41d506c_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4140866724c5f403cf986",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137503691_33070fd125_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035213",
      "sort": 22,
      "season": [
          "primavera",
          "ver\u00e3o"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "segunda"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62a413f666724c5f403cf980",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137525213_e856c41ae9_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035212"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62c9d85bd168f9c20acb7950",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52205398840_b6e41d506c_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4169a66724c5f403cf987",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137515811_b8022953f4_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 25,
      "season": [
          "primavera",
          "ver\u00e3o"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62a413f666724c5f403cf980",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137525213_e856c41ae9_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035212"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62c9d85bd168f9c20acb7950",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52205398840_b6e41d506c_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4169a66724c5f403cf987",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137515811_b8022953f4_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035213",
      "sort": 26,
      "season": [
          "primavera",
          "ver\u00e3o"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "sexta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62a413f966724c5f403cf981",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137741934_a4a99fcabf_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d09503521c"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62c9d85bd168f9c20acb7950",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52205398840_b6e41d506c_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4140866724c5f403cf986",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137503691_33070fd125_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035213",
      "sort": 29,
      "season": [
          "primavera",
          "ver\u00e3o"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "segunda"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62a413f666724c5f403cf980",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137525213_e856c41ae9_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035212"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62c9e3fbd168f9c20acb795a",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52205256934_2cfce4c495_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d095035219"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4140866724c5f403cf986",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137503691_33070fd125_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 32,
      "season": [
          "primavera",
          "ver\u00e3o"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62a413f966724c5f403cf981",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137741934_a4a99fcabf_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d09503521c"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62c9d85bd168f9c20acb7950",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52205398840_b6e41d506c_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4169a66724c5f403cf987",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137515811_b8022953f4_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035213",
      "sort": 33,
      "season": [
          "primavera",
          "ver\u00e3o"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "sexta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62e8872913adc71d29f9a0f7",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52257861670_1c20994936_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "inverno",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62c9d85bd168f9c20acb7950",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52205398840_b6e41d506c_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4140866724c5f403cf986",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137503691_33070fd125_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035213",
      "sort": 36,
      "season": [
          "primavera",
          "ver\u00e3o"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "segunda"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62a413f666724c5f403cf980",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137525213_e856c41ae9_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035212"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62c9e3fbd168f9c20acb795a",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52205256934_2cfce4c495_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d095035219"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4169a66724c5f403cf987",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137515811_b8022953f4_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 39,
      "season": [
          "primavera",
          "ver\u00e3o"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62e8872913adc71d29f9a0f7",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52257861670_1c20994936_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "inverno",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62c9d85bd168f9c20acb7950",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52205398840_b6e41d506c_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4169a66724c5f403cf987",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137515811_b8022953f4_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035213",
      "sort": 40,
      "season": [
          "primavera",
          "ver\u00e3o"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "sexta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62a413f666724c5f403cf980",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137525213_e856c41ae9_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035212"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62c9e3fbd168f9c20acb795a",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52205256934_2cfce4c495_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d095035219"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4140866724c5f403cf986",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137503691_33070fd125_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035213",
      "sort": 43,
      "season": [
          "primavera",
          "ver\u00e3o"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "segunda"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62a413f666724c5f403cf980",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137525213_e856c41ae9_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035212"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "6316c43f9ae66942d36d846e",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52338066380_7dbb9a9274_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d09503521e"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4140866724c5f403cf986",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137503691_33070fd125_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 46,
      "season": [
          "primavera",
          "ver\u00e3o"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62a413f666724c5f403cf980",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137525213_e856c41ae9_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035212"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62c9e3fbd168f9c20acb795a",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52205256934_2cfce4c495_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d095035219"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4169a66724c5f403cf987",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137515811_b8022953f4_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035213",
      "sort": 47,
      "season": [
          "primavera",
          "ver\u00e3o"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "sexta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62a413f966724c5f403cf981",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137741934_a4a99fcabf_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d09503521c"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62c9e3fbd168f9c20acb795a",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52205256934_2cfce4c495_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d095035219"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4140866724c5f403cf986",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137503691_33070fd125_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035213",
      "sort": 50,
      "season": [
          "primavera",
          "ver\u00e3o"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "segunda"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62a413f666724c5f403cf980",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137525213_e856c41ae9_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035212"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "6316c43f9ae66942d36d846e",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52338066380_7dbb9a9274_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d09503521e"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4169a66724c5f403cf987",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137515811_b8022953f4_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 53,
      "season": [
          "primavera",
          "ver\u00e3o"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62a413f966724c5f403cf981",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137741934_a4a99fcabf_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d09503521c"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62c9e3fbd168f9c20acb795a",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52205256934_2cfce4c495_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d095035219"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4169a66724c5f403cf987",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137515811_b8022953f4_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035213",
      "sort": 54,
      "season": [
          "primavera",
          "ver\u00e3o"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "sexta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62e8872913adc71d29f9a0f7",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52257861670_1c20994936_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "inverno",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62c9e3fbd168f9c20acb795a",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52205256934_2cfce4c495_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d095035219"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4140866724c5f403cf986",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137503691_33070fd125_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035213",
      "sort": 57,
      "season": [
          "primavera",
          "ver\u00e3o"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "segunda"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62a413f966724c5f403cf981",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137741934_a4a99fcabf_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d09503521c"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62a7f1bf4ff9bba04173359a",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52145403355_86bf6d6cab_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4140866724c5f403cf986",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137503691_33070fd125_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 60,
      "season": [
          "primavera"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62e8872913adc71d29f9a0f7",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52257861670_1c20994936_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "inverno",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62c9e3fbd168f9c20acb795a",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52205256934_2cfce4c495_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d095035219"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4169a66724c5f403cf987",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137515811_b8022953f4_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035213",
      "sort": 61,
      "season": [
          "primavera",
          "ver\u00e3o"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "sexta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62a413f666724c5f403cf980",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137525213_e856c41ae9_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035212"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "6316c43f9ae66942d36d846e",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52338066380_7dbb9a9274_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d09503521e"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4140866724c5f403cf986",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137503691_33070fd125_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035213",
      "sort": 64,
      "season": [
          "primavera",
          "ver\u00e3o"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "segunda"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62a413f966724c5f403cf981",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137741934_a4a99fcabf_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d09503521c"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62a7f1bf4ff9bba04173359a",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52145403355_86bf6d6cab_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4169a66724c5f403cf987",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137515811_b8022953f4_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 67,
      "season": [
          "primavera"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62a413f666724c5f403cf980",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137525213_e856c41ae9_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035212"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "6316c43f9ae66942d36d846e",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52338066380_7dbb9a9274_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d09503521e"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4169a66724c5f403cf987",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137515811_b8022953f4_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035213",
      "sort": 68,
      "season": [
          "primavera",
          "ver\u00e3o"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "sexta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62a413f966724c5f403cf981",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137741934_a4a99fcabf_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d09503521c"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "6316c43f9ae66942d36d846e",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52338066380_7dbb9a9274_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d09503521e"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4140866724c5f403cf986",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137503691_33070fd125_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035213",
      "sort": 71,
      "season": [
          "primavera",
          "ver\u00e3o"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "segunda"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62a413f966724c5f403cf981",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137741934_a4a99fcabf_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d09503521c"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62c9d85bd168f9c20acb7950",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52205398840_b6e41d506c_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4140866724c5f403cf986",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137503691_33070fd125_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 74,
      "season": [
          "primavera",
          "ver\u00e3o"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62a413f966724c5f403cf981",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137741934_a4a99fcabf_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d09503521c"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "6316c43f9ae66942d36d846e",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52338066380_7dbb9a9274_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d09503521e"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4169a66724c5f403cf987",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137515811_b8022953f4_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035213",
      "sort": 75,
      "season": [
          "primavera",
          "ver\u00e3o"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "sexta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62e8872913adc71d29f9a0f7",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52257861670_1c20994936_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "inverno",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "6316c43f9ae66942d36d846e",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52338066380_7dbb9a9274_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d09503521e"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4140866724c5f403cf986",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137503691_33070fd125_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035213",
      "sort": 78,
      "season": [
          "primavera",
          "ver\u00e3o"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "segunda"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62a413f966724c5f403cf981",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137741934_a4a99fcabf_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d09503521c"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62c9d85bd168f9c20acb7950",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52205398840_b6e41d506c_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4169a66724c5f403cf987",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137515811_b8022953f4_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 81,
      "season": [
          "primavera",
          "ver\u00e3o"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62e8872913adc71d29f9a0f7",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52257861670_1c20994936_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "inverno",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "6316c43f9ae66942d36d846e",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52338066380_7dbb9a9274_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d09503521e"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4169a66724c5f403cf987",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137515811_b8022953f4_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035213",
      "sort": 82,
      "season": [
          "primavera",
          "ver\u00e3o"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "sexta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62a413f666724c5f403cf980",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137525213_e856c41ae9_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035212"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": null,
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4140866724c5f403cf986",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137503691_33070fd125_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035213",
      "sort": 85,
      "season": [
          "primavera",
          "ver\u00e3o",
          "outono"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "segunda"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62a413f966724c5f403cf981",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137741934_a4a99fcabf_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d09503521c"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62c9e3fbd168f9c20acb795a",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52205256934_2cfce4c495_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d095035219"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4140866724c5f403cf986",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137503691_33070fd125_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 88,
      "season": [
          "primavera",
          "ver\u00e3o"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62a413f666724c5f403cf980",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137525213_e856c41ae9_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035212"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": null,
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4169a66724c5f403cf987",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137515811_b8022953f4_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035213",
      "sort": 89,
      "season": [
          "primavera",
          "ver\u00e3o",
          "outono"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "sexta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62a413f966724c5f403cf981",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137741934_a4a99fcabf_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d09503521c"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": null,
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4140866724c5f403cf986",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137503691_33070fd125_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035213",
      "sort": 92,
      "season": [
          "primavera",
          "ver\u00e3o",
          "outono",
          "inverno"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "segunda"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62a413f966724c5f403cf981",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137741934_a4a99fcabf_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d09503521c"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62c9e3fbd168f9c20acb795a",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52205256934_2cfce4c495_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d095035219"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4169a66724c5f403cf987",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137515811_b8022953f4_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 95,
      "season": [
          "primavera",
          "ver\u00e3o"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62a413f966724c5f403cf981",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137741934_a4a99fcabf_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d09503521c"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": null,
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4169a66724c5f403cf987",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137515811_b8022953f4_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035213",
      "sort": 96,
      "season": [
          "primavera",
          "ver\u00e3o",
          "outono",
          "inverno"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "sexta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62e8872913adc71d29f9a0f7",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52257861670_1c20994936_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "inverno",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": null,
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4140866724c5f403cf986",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137503691_33070fd125_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035213",
      "sort": 99,
      "season": [
          "primavera",
          "ver\u00e3o",
          "outono",
          "inverno"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "segunda"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62a413f966724c5f403cf981",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137741934_a4a99fcabf_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d09503521c"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "6316c43f9ae66942d36d846e",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52338066380_7dbb9a9274_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d09503521e"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4140866724c5f403cf986",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137503691_33070fd125_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 102,
      "season": [
          "primavera",
          "ver\u00e3o"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62e8872913adc71d29f9a0f7",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52257861670_1c20994936_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "inverno",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": null,
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4169a66724c5f403cf987",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137515811_b8022953f4_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035213",
      "sort": 103,
      "season": [
          "primavera",
          "ver\u00e3o",
          "outono",
          "inverno"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "sexta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62a413f966724c5f403cf981",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137741934_a4a99fcabf_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d09503521c"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "6316c43f9ae66942d36d846e",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52338066380_7dbb9a9274_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d09503521e"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4169a66724c5f403cf987",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137515811_b8022953f4_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 109,
      "season": [
          "primavera",
          "ver\u00e3o"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62cf902d501ba2742df1fa91",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52215069973_f7bf69327f_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035214"
              ],
              "seasons": [
                  "primavera",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62a7f1bf4ff9bba04173359a",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52145403355_86bf6d6cab_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4140866724c5f403cf986",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137503691_33070fd125_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 116,
      "season": [
          "primavera"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62cf902d501ba2742df1fa91",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52215069973_f7bf69327f_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035214"
              ],
              "seasons": [
                  "primavera",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62a7f1bf4ff9bba04173359a",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52145403355_86bf6d6cab_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4169a66724c5f403cf987",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137515811_b8022953f4_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 123,
      "season": [
          "primavera"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62cf902d501ba2742df1fa91",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52215069973_f7bf69327f_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035214"
              ],
              "seasons": [
                  "primavera",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62c9d85bd168f9c20acb7950",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52205398840_b6e41d506c_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4140866724c5f403cf986",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137503691_33070fd125_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 130,
      "season": [
          "primavera",
          "ver\u00e3o"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62cf902d501ba2742df1fa91",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52215069973_f7bf69327f_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035214"
              ],
              "seasons": [
                  "primavera",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62c9d85bd168f9c20acb7950",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52205398840_b6e41d506c_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4169a66724c5f403cf987",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137515811_b8022953f4_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 137,
      "season": [
          "primavera",
          "ver\u00e3o"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62cf902d501ba2742df1fa91",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52215069973_f7bf69327f_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035214"
              ],
              "seasons": [
                  "primavera",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62c9e3fbd168f9c20acb795a",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52205256934_2cfce4c495_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d095035219"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4140866724c5f403cf986",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137503691_33070fd125_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 144,
      "season": [
          "primavera",
          "ver\u00e3o"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62cf902d501ba2742df1fa91",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52215069973_f7bf69327f_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035214"
              ],
              "seasons": [
                  "primavera",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62c9e3fbd168f9c20acb795a",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52205256934_2cfce4c495_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d095035219"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4169a66724c5f403cf987",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137515811_b8022953f4_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 151,
      "season": [
          "primavera",
          "ver\u00e3o"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62cf902d501ba2742df1fa91",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52215069973_f7bf69327f_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035214"
              ],
              "seasons": [
                  "primavera",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "6316c43f9ae66942d36d846e",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52338066380_7dbb9a9274_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d09503521e"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4140866724c5f403cf986",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137503691_33070fd125_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 158,
      "season": [
          "primavera",
          "ver\u00e3o"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62cf902d501ba2742df1fa91",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52215069973_f7bf69327f_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035214"
              ],
              "seasons": [
                  "primavera",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "6316c43f9ae66942d36d846e",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52338066380_7dbb9a9274_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d09503521e"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4169a66724c5f403cf987",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137515811_b8022953f4_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 165,
      "season": [
          "primavera",
          "ver\u00e3o"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62e8872913adc71d29f9a0f7",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52257861670_1c20994936_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "inverno",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62a7f1bf4ff9bba04173359a",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52145403355_86bf6d6cab_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4140866724c5f403cf986",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137503691_33070fd125_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 172,
      "season": [
          "primavera"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62e8872913adc71d29f9a0f7",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52257861670_1c20994936_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "inverno",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62a7f1bf4ff9bba04173359a",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52145403355_86bf6d6cab_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4169a66724c5f403cf987",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137515811_b8022953f4_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 179,
      "season": [
          "primavera"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62e8872913adc71d29f9a0f7",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52257861670_1c20994936_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "inverno",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62c9d85bd168f9c20acb7950",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52205398840_b6e41d506c_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4140866724c5f403cf986",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137503691_33070fd125_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 186,
      "season": [
          "primavera",
          "ver\u00e3o"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62e8872913adc71d29f9a0f7",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52257861670_1c20994936_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "inverno",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62c9d85bd168f9c20acb7950",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52205398840_b6e41d506c_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4169a66724c5f403cf987",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137515811_b8022953f4_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 193,
      "season": [
          "primavera",
          "ver\u00e3o"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62e8872913adc71d29f9a0f7",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52257861670_1c20994936_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "inverno",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62c9e3fbd168f9c20acb795a",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52205256934_2cfce4c495_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d095035219"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4140866724c5f403cf986",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137503691_33070fd125_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 200,
      "season": [
          "primavera",
          "ver\u00e3o"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62e8872913adc71d29f9a0f7",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52257861670_1c20994936_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "inverno",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62c9e3fbd168f9c20acb795a",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52205256934_2cfce4c495_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d095035219"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4169a66724c5f403cf987",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137515811_b8022953f4_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 207,
      "season": [
          "primavera",
          "ver\u00e3o"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62e8872913adc71d29f9a0f7",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52257861670_1c20994936_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "inverno",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "6316c43f9ae66942d36d846e",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52338066380_7dbb9a9274_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d09503521e"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4140866724c5f403cf986",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137503691_33070fd125_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 214,
      "season": [
          "primavera",
          "ver\u00e3o"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62e8872913adc71d29f9a0f7",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52257861670_1c20994936_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "inverno",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "6316c43f9ae66942d36d846e",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52338066380_7dbb9a9274_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d09503521e"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4169a66724c5f403cf987",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137515811_b8022953f4_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 221,
      "season": [
          "primavera",
          "ver\u00e3o"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62a413f666724c5f403cf980",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137525213_e856c41ae9_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035212"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62d0d70867f3eaba19fd0b53",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52217114716_edc4eae397_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4140866724c5f403cf986",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137503691_33070fd125_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 228,
      "season": [
          "outono"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62a413f666724c5f403cf980",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137525213_e856c41ae9_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035212"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62d0d70867f3eaba19fd0b53",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52217114716_edc4eae397_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4169a66724c5f403cf987",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137515811_b8022953f4_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 235,
      "season": [
          "outono"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62a413f666724c5f403cf980",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137525213_e856c41ae9_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035212"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62d0d70867f3eaba19fd0b53",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52217114716_edc4eae397_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62cce00abce9ce70a9a56914",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52210782224_9c450ceac7_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "inverno",
                  "outono"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 242,
      "season": [
          "outono"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62a413f966724c5f403cf981",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137741934_a4a99fcabf_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d09503521c"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62d0d70867f3eaba19fd0b53",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52217114716_edc4eae397_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4140866724c5f403cf986",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137503691_33070fd125_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 249,
      "season": [
          "outono"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62a413f966724c5f403cf981",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137741934_a4a99fcabf_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d09503521c"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62d0d70867f3eaba19fd0b53",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52217114716_edc4eae397_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4169a66724c5f403cf987",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137515811_b8022953f4_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 256,
      "season": [
          "outono"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62a413f966724c5f403cf981",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137741934_a4a99fcabf_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d09503521c"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62d0d70867f3eaba19fd0b53",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52217114716_edc4eae397_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62cce00abce9ce70a9a56914",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52210782224_9c450ceac7_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "inverno",
                  "outono"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 263,
      "season": [
          "outono"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62cf902d501ba2742df1fa91",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52215069973_f7bf69327f_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035214"
              ],
              "seasons": [
                  "primavera",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62d0d70867f3eaba19fd0b53",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52217114716_edc4eae397_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4140866724c5f403cf986",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137503691_33070fd125_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 270,
      "season": [
          "outono"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62cf902d501ba2742df1fa91",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52215069973_f7bf69327f_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035214"
              ],
              "seasons": [
                  "primavera",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62d0d70867f3eaba19fd0b53",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52217114716_edc4eae397_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4169a66724c5f403cf987",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137515811_b8022953f4_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 277,
      "season": [
          "outono"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62cf902d501ba2742df1fa91",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52215069973_f7bf69327f_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035214"
              ],
              "seasons": [
                  "primavera",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62d0d70867f3eaba19fd0b53",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52217114716_edc4eae397_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62cce00abce9ce70a9a56914",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52210782224_9c450ceac7_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "inverno",
                  "outono"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 284,
      "season": [
          "outono"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62e8872913adc71d29f9a0f7",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52257861670_1c20994936_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "inverno",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62d0d70867f3eaba19fd0b53",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52217114716_edc4eae397_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4140866724c5f403cf986",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137503691_33070fd125_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 291,
      "season": [
          "outono"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62e8872913adc71d29f9a0f7",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52257861670_1c20994936_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "inverno",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62d0d70867f3eaba19fd0b53",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52217114716_edc4eae397_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4169a66724c5f403cf987",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137515811_b8022953f4_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 298,
      "season": [
          "outono"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62e8872913adc71d29f9a0f7",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52257861670_1c20994936_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "inverno",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": {
              "_id": "62d0d70867f3eaba19fd0b53",
              "category_id": "629d286bec74d540eb5fb0e7",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52217114716_edc4eae397_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62cce00abce9ce70a9a56914",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52210782224_9c450ceac7_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "inverno",
                  "outono"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 305,
      "season": [
          "outono"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62a413f966724c5f403cf981",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137741934_a4a99fcabf_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d09503521c"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": null,
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4140866724c5f403cf986",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137503691_33070fd125_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 312,
      "season": [
          "primavera",
          "ver\u00e3o",
          "outono",
          "inverno"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62e8872913adc71d29f9a0f7",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52257861670_1c20994936_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "inverno",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": null,
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4140866724c5f403cf986",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137503691_33070fd125_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035212",
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 319,
      "season": [
          "primavera",
          "ver\u00e3o",
          "outono",
          "inverno"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62a413f966724c5f403cf981",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137741934_a4a99fcabf_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d09503521c"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": null,
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4169a66724c5f403cf987",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137515811_b8022953f4_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 326,
      "season": [
          "primavera",
          "ver\u00e3o",
          "outono",
          "inverno"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62e8872913adc71d29f9a0f7",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52257861670_1c20994936_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "inverno",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": null,
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62a4169a66724c5f403cf987",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137515811_b8022953f4_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 333,
      "season": [
          "primavera",
          "ver\u00e3o",
          "outono",
          "inverno"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62a413f966724c5f403cf981",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52137741934_a4a99fcabf_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a",
                  "6315604bdaf4e3d09503521c"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "outono",
                  "inverno"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": null,
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62cce00abce9ce70a9a56914",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52210782224_9c450ceac7_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "inverno",
                  "outono"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 340,
      "season": [
          "inverno",
          "outono"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  },
  {
      "data": {
          "629d286bec74d540eb5fb0ea": null,
          "629d286bec74d540eb5fb0e9": {
              "_id": "62e8872913adc71d29f9a0f7",
              "category_id": "629d286bec74d540eb5fb0e9",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52257861670_1c20994936_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035213",
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "primavera",
                  "ver\u00e3o",
                  "inverno",
                  "outono"
              ],
              "type": "casual"
          },
          "629d286bec74d540eb5fb0e7": null,
          "629d286bec74d540eb5fb0eb": null,
          "629d286bec74d540eb5fb0ec": null,
          "629d286bec74d540eb5fb0ed": null,
          "629d286bec74d540eb5fb0ee": null,
          "629d286bec74d540eb5fb0ef": null,
          "629d286bec74d540eb5fb0e8": {
              "_id": "62cce00abce9ce70a9a56914",
              "category_id": "629d286bec74d540eb5fb0e8",
              "closet_id": "72177720299676310",
              "image": "https://live.staticflickr.com/65535/52210782224_9c450ceac7_n.jpg",
              "occasions": [
                  "6315604bdaf4e3d095035214",
                  "6315604bdaf4e3d095035216",
                  "6315604bdaf4e3d095035215",
                  "6315604bdaf4e3d095035217",
                  "6315604bdaf4e3d095035218",
                  "6315604bdaf4e3d095035219",
                  "6315604bdaf4e3d09503521a"
              ],
              "seasons": [
                  "inverno",
                  "outono"
              ],
              "type": "casual"
          }
      },
      "occasion": "6315604bdaf4e3d095035215",
      "period": "6315604bdaf4e3d095035214",
      "sort": 347,
      "season": [
          "inverno",
          "outono"
      ],
      "type": "casual",
      "repeat_count": 0,
      "day_of_week": "quinta"
  }
]

export const LOOKSET = {
    "user_id": "4gh360442Caf4e3d09ab35151",
    "looks": RECURSIVE,
    "created_at": "2023-03-04 16:21:36.051408",
    "days_count": 0,
    "total_days": 120
}

export const LOOKSET2 = {
  "user_id": "4gh360442Caf4e3d09ab35151",
  "looks": RECURSIVE2,
  "created_at": "2023-03-04 16:21:36.051408",
  "days_count": 0,
  "total_days": 120
}

export const DAILY_LOOK_SETUP = {
    "_id": "634e227711217434f4f266a8",
    "days_of_week": [
        {
            "day_of_week": "domingo",
            "occasions": [
                {
                    "casual": [
                        "6315604bdaf4e3d095035213" // "dia"
                    ],
                    "occasion_id": "6315604bdaf4e3d095035220",
                    "social": [
                        "6315604bdaf4e3d095035214" // "noite"
                    ]
                }
            ],
            "sort": 0
        },
        {
            "day_of_week": "segunda",
            "occasions": [
                {
                    "casual": [
                        "6315604bdaf4e3d095035213" // "dia"
                    ],
                    "occasion_id": "6315604bdaf4e3d095035215",
                    "social": []
                }
            ],
            "sort": 1
        },
        {
            "day_of_week": "terça",
            "occasions": [
                {
                    "casual": [
                        "6315604bdaf4e3d095035213" // "dia"
                    ],
                    "occasion_id": "6315604bdaf4e3d095035215",
                    "social": []
                },
                {
                    "casual": [
                        "6315604bdaf4e3d095035214" // "noite"
                    ],
                    "occasion_id": "6315604bdaf4e3d09503521c",
                    "social": []
                }
            ],
            "sort": 2
        },
        {
            "day_of_week": "quarta",
            "occasions": [
                {
                    "casual": [
                        "6315604bdaf4e3d095035213" // "dia"
                    ],
                    "occasion_id": "6315604bdaf4e3d095035215",
                    "social": []
                },
                {
                    "casual": [
                        "6315604bdaf4e3d095035214" // "noite"
                    ],
                    "occasion_id": "6315604bdaf4e3d095035212",
                    "social": []
                }
            ],
            "sort": 3
        },
        {
            "day_of_week": "quinta",
            "occasions": [],
            "sort": 4
        },
        {
            "day_of_week": "sexta",
            "occasions": [
                {
                    "casual": [
                        "6315604bdaf4e3d095035213" // "dia"
                    ],
                    "occasion_id": "6315604bdaf4e3d095035212",
                    "social": []
                }
            ],
            "sort": 5
        },
        {
            "day_of_week": "sábado",
            "occasions": [],
            "sort": 6
        }
    ],
    "user_id": "6298301fed1909971532ca92"
}

const proceduralData = PROCEDURAL.map(item => JSON.stringify(item.data))
const recursiveData = RECURSIVE.map(item => JSON.stringify(item.data))

export function testProcedural() {
  let existCount = 0
  let notFoundCount = 0
  const notFoundList = []
  for (let item of proceduralData) {
    if (recursiveData.includes(item)) {
      existCount+=1
      continue
    }
    notFoundList.push(JSON.parse(item))
    notFoundCount+=1
  }
  console.log("BUSCANDO ITENS PROCEDURAIS DENTRO DE recursiveData")
  console.log("QUANTIDADE ENCONTRADA:", existCount)
  console.log("QUANTIDADE NÃO ENCONTRADA:", notFoundCount)
  console.log(notFoundList)
  return notFoundList.map(item => { return { "data": item } })
}

export function testRecursive() {
  let existCount = 0
  let notFoundCount = 0
  const notFoundList = []
  for (let item of recursiveData) {
    if (proceduralData.includes(item)) {
      existCount+=1
      continue
    }
    notFoundList.push(JSON.parse(item))
    notFoundCount+=1
  }
  console.log("BUSCANDO ITENS RECURSIVOS DENTRO DE proceduralData")
  console.log("QUANTIDADE ENCONTRADA:", existCount)
  console.log("QUANTIDADE NÃO ENCONTRADA:", notFoundCount)
  console.log(notFoundList)
  return notFoundList.map(item => { return { "data": item } })
}
