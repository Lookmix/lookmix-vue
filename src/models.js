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

export function generateLook (categories, fetchClothes, dailyLookSetup) {
  const looks = {}
  if (categories.length > 0 && fetchClothes.length > 0) {
    let occasionIds = dailyLookSetup.map(day => day.occasions)
    .map(occasionList => occasionList.map(occasion => occasion.occasion_id))
    .reduce((previous, current) => previous.concat(current), [])
    occasionIds = new Set(occasionIds)
    const result = []
    for (let category of categories) {
      const categoryId = category._id
      const clothes = fetchClothes.filter(clothe => 
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
    if (result[0].totalClothes === 0) {
      return;
    }
    const categoryIds = categories.map(category => category._id)
    const lookTemplate = {}
    for (let categoryId of categoryIds) {
      lookTemplate[categoryId] = null
    }
    for (let occasionId of occasionIds) {
      looks[occasionId] = []
    }
    for (let a of result[0].clothes) { // para cada peça na categoria 0 faça
      if (result[1].totalClothes === 0) { // se categoria 1 não tiver peças
        for (let occasionId of occasionIds) { // para cada ocasião cadastrada na rotina semanal
          const look = JSON.parse(JSON.stringify(lookTemplate))
          if (a.occasions.includes(occasionId)) {
            look[result[0].categoryId] = a
          }
          const looksString = JSON.stringify(looks)
          const lookString = JSON.stringify(look)
          if (!looksString.includes(lookString)) {
            let keyValues = Object.entries(look)
            keyValues = keyValues.filter(x => x[1] !== null && x[1] !== undefined)
            if (keyValues.length > 0) {
              looks[occasionId].push(look) 
            }
          }
        }
        continue;
      }
      for (let b of result[1].clothes) {
        if (result[2].totalClothes === 0) {
          for (let occasionId of occasionIds) {
            const look = JSON.parse(JSON.stringify(lookTemplate))
            if (a.occasions.includes(occasionId)) {
              look[result[0].categoryId] = a
            }
            if (b.occasions.includes(occasionId)) {
              look[result[1].categoryId] = b
            }
            const looksString = JSON.stringify(looks)
            const lookString = JSON.stringify(look)
            if (!looksString.includes(lookString)) {
              let keyValues = Object.entries(look)
              keyValues = keyValues.filter(x => x[1] !== null && x[1] !== undefined)
              if (keyValues.length > 0) {
                looks[occasionId].push(look) 
              }
            }
          }
          continue;
        }
        for (let c of result[2].clothes) {
          if (result[3].totalClothes === 0) {
            for (let occasionId of occasionIds) {
              const look = JSON.parse(JSON.stringify(lookTemplate))
              if (a.occasions.includes(occasionId)) {
                look[result[0].categoryId] = a
              }
              if (b.occasions.includes(occasionId)) {
                look[result[1].categoryId] = b
              }
              if (c.occasions.includes(occasionId)) {
                look[result[2].categoryId] = c
              }
              const looksString = JSON.stringify(looks)
              const lookString = JSON.stringify(look)
              if (!looksString.includes(lookString)) {
                let keyValues = Object.entries(look)
                keyValues = keyValues.filter(x => x[1] !== null && x[1] !== undefined)
                if (keyValues.length > 0) {
                  looks[occasionId].push(look) 
                }
              }
            }
            continue;
          }
          for (let d of result[3].clothes) {
            if (result[4].totalClothes === 0) {
              for (let occasionId of occasionIds) {
                const look = JSON.parse(JSON.stringify(lookTemplate))
                if (a.occasions.includes(occasionId)) {
                  look[result[0].categoryId] = a
                }
                if (b.occasions.includes(occasionId)) {
                  look[result[1].categoryId] = b
                }
                if (c.occasions.includes(occasionId)) {
                  look[result[2].categoryId] = c
                }
                if (d.occasions.includes(occasionId)) {
                  look[result[3].categoryId] = d
                }
                const looksString = JSON.stringify(looks)
                const lookString = JSON.stringify(look)
                if (!looksString.includes(lookString)) {
                  let keyValues = Object.entries(look)
                  keyValues = keyValues.filter(x => x[1] !== null && x[1] !== undefined)
                  if (keyValues.length > 0) {
                    looks[occasionId].push(look) 
                  } 
                }
              }
              continue;
            }
            for (let e of result[4].clothes) {
              if (result[5].totalClothes === 0) {
                for (let occasionId of occasionIds) {
                  const look = JSON.parse(JSON.stringify(lookTemplate))
                  if (a.occasions.includes(occasionId)) {
                    look[result[0].categoryId] = a
                  }
                  if (b.occasions.includes(occasionId)) {
                    look[result[1].categoryId] = b
                  }
                  if (c.occasions.includes(occasionId)) {
                    look[result[2].categoryId] = c
                  }
                  if (d.occasions.includes(occasionId)) {
                    look[result[3].categoryId] = d
                  }
                  if (e.occasions.includes(occasionId)) {
                    look[result[4].categoryId] = e
                  }
                  const looksString = JSON.stringify(looks)
                  const lookString = JSON.stringify(look)
                  if (!looksString.includes(lookString)) {
                    let keyValues = Object.entries(look)
                    keyValues = keyValues.filter(x => x[1] !== null && x[1] !== undefined)
                    if (keyValues.length > 0) {
                      looks[occasionId].push(look) 
                    }
                  }
                }
                continue;
              }
              for (let f of result[5].clothes) {
                if (result[6].totalClothes === 0) {
                  for (let occasionId of occasionIds) {
                    const look = JSON.parse(JSON.stringify(lookTemplate))
                    if (a.occasions.includes(occasionId)) {
                      look[result[0].categoryId] = a
                    }
                    if (b.occasions.includes(occasionId)) {
                      look[result[1].categoryId] = b
                    }
                    if (c.occasions.includes(occasionId)) {
                      look[result[2].categoryId] = c
                    }
                    if (d.occasions.includes(occasionId)) {
                      look[result[3].categoryId] = d
                    }
                    if (e.occasions.includes(occasionId)) {
                      look[result[4].categoryId] = e
                    }
                    if (f.occasions.includes(occasionId)) {
                      look[result[5].categoryId] = f
                    }
                    const looksString = JSON.stringify(looks)
                    const lookString = JSON.stringify(look)
                    if (!looksString.includes(lookString)) {
                      let keyValues = Object.entries(look)
                      keyValues = keyValues.filter(x => x[1] !== null && x[1] !== undefined)
                      if (keyValues.length > 0) {
                        looks[occasionId].push(look) 
                      } 
                    }
                  }
                  continue;
                }
                for (let g of result[6].clothes) {
                  if (result[7].totalClothes === 0) {
                    for (let occasionId of occasionIds) {
                      const look = JSON.parse(JSON.stringify(lookTemplate))
                      if (a.occasions.includes(occasionId)) {
                        look[result[0].categoryId] = a
                      }
                      if (b.occasions.includes(occasionId)) {
                        look[result[1].categoryId] = b
                      }
                      if (c.occasions.includes(occasionId)) {
                        look[result[2].categoryId] = c
                      }
                      if (d.occasions.includes(occasionId)) {
                        look[result[3].categoryId] = d
                      }
                      if (e.occasions.includes(occasionId)) {
                        look[result[4].categoryId] = e
                      }
                      if (f.occasions.includes(occasionId)) {
                        look[result[5].categoryId] = f
                      }
                      if (g.occasions.includes(occasionId)) {
                        look[result[6].categoryId] = g
                      }
                      const looksString = JSON.stringify(looks)
                      const lookString = JSON.stringify(look)
                      if (!looksString.includes(lookString)) {
                        let keyValues = Object.entries(look)
                        keyValues = keyValues.filter(x => x[1] !== null && x[1] !== undefined)
                        if (keyValues.length > 0) {
                          looks[occasionId].push(look) 
                        }
                      }
                    }
                    continue;
                  }
                  for (let h of result[7].clothes) {
                    if (result[8].totalClothes === 0) {
                      for (let occasionId of occasionIds) {
                        const look = JSON.parse(JSON.stringify(lookTemplate))
                        if (a.occasions.includes(occasionId)) {
                          look[result[0].categoryId] = a
                        }
                        if (b.occasions.includes(occasionId)) {
                          look[result[1].categoryId] = b
                        }
                        if (c.occasions.includes(occasionId)) {
                          look[result[2].categoryId] = c
                        }
                        if (d.occasions.includes(occasionId)) {
                          look[result[3].categoryId] = d
                        }
                        if (e.occasions.includes(occasionId)) {
                          look[result[4].categoryId] = e
                        }
                        if (f.occasions.includes(occasionId)) {
                          look[result[5].categoryId] = f
                        }
                        if (g.occasions.includes(occasionId)) {
                          look[result[6].categoryId] = g
                        }
                        if (h.occasions.includes(occasionId)) {
                          look[result[7].categoryId] = h
                        }
                        const looksString = JSON.stringify(looks)
                        const lookString = JSON.stringify(look)
                        if (!looksString.includes(lookString)) {
                          let keyValues = Object.entries(look)
                          keyValues = keyValues.filter(x => x[1] !== null && x[1] !== undefined)
                          if (keyValues.length > 0) {
                            looks[occasionId].push(look) 
                          }
                        }
                      }
                      continue;
                    }
                    for (let i of result[8].clothes) {
                      for (let occasionId of occasionIds) {
                        const look = JSON.parse(JSON.stringify(lookTemplate))
                        if (a.occasions.includes(occasionId)) {
                          look[result[0].categoryId] = a
                        }
                        if (b.occasions.includes(occasionId)) {
                          look[result[1].categoryId] = b
                        }
                        if (c.occasions.includes(occasionId)) {
                          look[result[2].categoryId] = c
                        }
                        if (d.occasions.includes(occasionId)) {
                          look[result[3].categoryId] = d
                        }
                        if (e.occasions.includes(occasionId)) {
                          look[result[4].categoryId] = e
                        }
                        if (f.occasions.includes(occasionId)) {
                          look[result[5].categoryId] = f
                        }
                        if (g.occasions.includes(occasionId)) {
                          look[result[6].categoryId] = g
                        }
                        if (h.occasions.includes(occasionId)) {
                          look[result[7].categoryId] = h
                        }
                        if (i.occasions.includes(occasionId)) {
                          look[result[8].categoryId] = i
                        }
                        const looksString = JSON.stringify(looks)
                        const lookString = JSON.stringify(look)
                        if (!looksString.includes(lookString)) {
                          let keyValues = Object.entries(look)
                          keyValues = keyValues.filter(x => x[1] !== null && x[1] !== undefined)
                          if (keyValues.length > 0) {
                            looks[occasionId].push(look) 
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
  return looks

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

// DAILY LOOK DATAMODEL
[
  { // day of week,
    "sort": 1, 
    "weatherMax": 21,
    "weatherMin": 18,
    "occasions": {
      "casual": [
        {
          "sort": 1,
          "title": "Look para curso/faculdade",
          "description": "uniforme, atividades estudantis",
          "look": {
            "629d286bec74d540eb5fb0e7": {
              "_id":"62a7f1bf4ff9bba04173359a",
              "category_id":"629d286bec74d540eb5fb0e7",
              "closet_id":"72177720299676310",
              "image":"https://live.bf6d6cab_n.jpg",
              "occasions":["Shopping","Viagem"],
              "seasons":["Primavera","Verão"],
              "type":"casual"
            },
            "629d276bec74d540eb5fb0e7": {
              "_id":"62a7f1bf4ff9bba04173359a",
              "category_id":"629d286bec74d540eb5fb0e7",
              "closet_id":"72177720299676310",
              "image":"https://live.bf6d6cab_n.jpg",
              "occasions":["Shopping","Viagem"],
              "seasons":["Primavera","Verão"],
              "type":"casual"
            },
            "629d284bec74d540eb5fb0e7": {
              "_id":"62a7f1bf4ff9bba04173359a",
              "category_id":"629d286bec74d540eb5fb0e7",
              "closet_id":"72177720299676310",
              "image":"https://live.bf6d6cab_n.jpg",
              "occasions":["Shopping","Viagem"],
              "seasons":["Primavera","Verão"],
              "type":"casual"
            },
            "629d2816ec74d540eb5fb0e7": {
              "_id":"62a7f1bf4ff9bba04173359a",
              "category_id":"629d286bec74d540eb5fb0e7",
              "closet_id":"72177720299676310",
              "image":"https://live.bf6d6cab_n.jpg",
              "occasions":["Shopping","Viagem"],
              "seasons":["Primavera","Verão"],
              "type":"casual"
            },
            "629d286b8c74d540eb5fb0e7": {
              "_id":"62a7f1bf4ff9bba04173359a",
              "category_id":"629d286bec74d540eb5fb0e7",
              "closet_id":"72177720299676310",
              "image":"https://live.bf6d6cab_n.jpg",
              "occasions":["Shopping","Viagem"],
              "seasons":["Primavera","Verão"],
              "type":"casual"
            },
          }
        },
        {
          "sort": 2,
          "title": "Look para curso/faculdade",
          "description": "uniforme, atividades estudantis",
          "look": {
            "629d286bec74d540eb5fb0e7": {
              "_id":"62a7f1bf4ff9bba04173359a",
              "category_id":"629d286bec74d540eb5fb0e7",
              "closet_id":"72177720299676310",
              "image":"https://live.bf6d6cab_n.jpg",
              "occasions":["Shopping","Viagem"],
              "seasons":["Primavera","Verão"],
              "type":"casual"
            },
            "629d466bec74d540eb5fb0e7": {
              "_id":"62a7f1bf4ff9bba04173359a",
              "category_id":"629d286bec74d540eb5fb0e7",
              "closet_id":"72177720299676310",
              "image":"https://live.bf6d6cab_n.jpg",
              "occasions":["Shopping","Viagem"],
              "seasons":["Primavera","Verão"],
              "type":"casual"
            },
            "6254286bec74d540eb5fb0e7": {
              "_id":"62a7f1bf4ff9bba04173359a",
              "category_id":"629d286bec74d540eb5fb0e7",
              "closet_id":"72177720299676310",
              "image":"https://live.bf6d6cab_n.jpg",
              "occasions":["Shopping","Viagem"],
              "seasons":["Primavera","Verão"],
              "type":"casual"
            },
            "629dgf6bec74d540eb5fb0e7": {
              "_id":"62a7f1bf4ff9bba04173359a",
              "category_id":"629d286bec74d540eb5fb0e7",
              "closet_id":"72177720299676310",
              "image":"https://live.bf6d6cab_n.jpg",
              "occasions":["Shopping","Viagem"],
              "seasons":["Primavera","Verão"],
              "type":"casual"
            },
            "629d286bec5kd540eb5fb0e7": {
              "_id":"62a7f1bf4ff9bba04173359a",
              "category_id":"629d286bec74d540eb5fb0e7",
              "closet_id":"72177720299676310",
              "image":"https://live.bf6d6cab_n.jpg",
              "occasions":["Shopping","Viagem"],
              "seasons":["Primavera","Verão"],
              "type":"casual"
            },
          }
        }
      ],
      "social": [
        {
          "sort": 1,
          "title": "Look para curso/faculdade",
          "description": "uniforme, atividades estudantis",
          "look": {
            "629d286bec74d540eb5fb0e7": {
              "_id":"62a7f1bf4ff9bba04173359a",
              "category_id":"629d286bec74d540eb5fb0e7",
              "closet_id":"72177720299676310",
              "image":"https://live.bf6d6cab_n.jpg",
              "occasions":["Shopping","Viagem"],
              "seasons":["Primavera","Verão"],
              "type":"casual"
            },
            "629d276bec74d540eb5fb0e7": {
              "_id":"62a7f1bf4ff9bba04173359a",
              "category_id":"629d286bec74d540eb5fb0e7",
              "closet_id":"72177720299676310",
              "image":"https://live.bf6d6cab_n.jpg",
              "occasions":["Shopping","Viagem"],
              "seasons":["Primavera","Verão"],
              "type":"casual"
            },
            "629d284bec74d540eb5fb0e7": {
              "_id":"62a7f1bf4ff9bba04173359a",
              "category_id":"629d286bec74d540eb5fb0e7",
              "closet_id":"72177720299676310",
              "image":"https://live.bf6d6cab_n.jpg",
              "occasions":["Shopping","Viagem"],
              "seasons":["Primavera","Verão"],
              "type":"casual"
            },
            "629d2816ec74d540eb5fb0e7": {
              "_id":"62a7f1bf4ff9bba04173359a",
              "category_id":"629d286bec74d540eb5fb0e7",
              "closet_id":"72177720299676310",
              "image":"https://live.bf6d6cab_n.jpg",
              "occasions":["Shopping","Viagem"],
              "seasons":["Primavera","Verão"],
              "type":"casual"
            },
            "629d286b8c74d540eb5fb0e7": {
              "_id":"62a7f1bf4ff9bba04173359a",
              "category_id":"629d286bec74d540eb5fb0e7",
              "closet_id":"72177720299676310",
              "image":"https://live.bf6d6cab_n.jpg",
              "occasions":["Shopping","Viagem"],
              "seasons":["Primavera","Verão"],
              "type":"casual"
            },
          }
        },
        {
          "sort": 2,
          "title": "Look para curso/faculdade",
          "description": "uniforme, atividades estudantis",
          "look": {
            "629d286bec74d540eb5fb0e7": {
              "_id":"62a7f1bf4ff9bba04173359a",
              "category_id":"629d286bec74d540eb5fb0e7",
              "closet_id":"72177720299676310",
              "image":"https://live.bf6d6cab_n.jpg",
              "occasions":["Shopping","Viagem"],
              "seasons":["Primavera","Verão"],
              "type":"casual"
            },
            "629d466bec74d540eb5fb0e7": {
              "_id":"62a7f1bf4ff9bba04173359a",
              "category_id":"629d286bec74d540eb5fb0e7",
              "closet_id":"72177720299676310",
              "image":"https://live.bf6d6cab_n.jpg",
              "occasions":["Shopping","Viagem"],
              "seasons":["Primavera","Verão"],
              "type":"casual"
            },
            "6254286bec74d540eb5fb0e7": {
              "_id":"62a7f1bf4ff9bba04173359a",
              "category_id":"629d286bec74d540eb5fb0e7",
              "closet_id":"72177720299676310",
              "image":"https://live.bf6d6cab_n.jpg",
              "occasions":["Shopping","Viagem"],
              "seasons":["Primavera","Verão"],
              "type":"casual"
            },
            "629dgf6bec74d540eb5fb0e7": {
              "_id":"62a7f1bf4ff9bba04173359a",
              "category_id":"629d286bec74d540eb5fb0e7",
              "closet_id":"72177720299676310",
              "image":"https://live.bf6d6cab_n.jpg",
              "occasions":["Shopping","Viagem"],
              "seasons":["Primavera","Verão"],
              "type":"casual"
            },
            "629d286bec5kd540eb5fb0e7": {
              "_id":"62a7f1bf4ff9bba04173359a",
              "category_id":"629d286bec74d540eb5fb0e7",
              "closet_id":"72177720299676310",
              "image":"https://live.bf6d6cab_n.jpg",
              "occasions":["Shopping","Viagem"],
              "seasons":["Primavera","Verão"],
              "type":"casual"
            },
          }
        }
      ]
    }
  }
]