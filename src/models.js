const SPRING = "primavera"
const SUMMER = "verão"
const FALL = "outono"
const WINTER = "inverno"
const DAY = "dia"
const NIGHT = "noite"

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

export const occasions = [
  // rotina // cotidiano // daily
  DAY, // para usar de dia
  NIGHT, // para usar de noite
  "básico/comum", 
  "trabalho", // uniforme, dress code
  "curso/faculdade", // uniforme, atividades estudantis
  "atividade física", // esportes, caminhada, academia

  // esporádico // eventual //
  "festa/evento", // shows de músicas, comemorações, baladas.
  "restaurante", // barzinho, alta gastronomia
  "shopping", // compras, 
  "viagem", // 
  "praia/piscina", // roupas de banho, sol
  "natureza", // trilhas, acampamentos, sítios
  "encontro/date", // 
  "reunião religiosa", // templos religiosos, ar livre
  "entretenimento" // cinema, teatro, museu, estádio de futebol
]

const occasion = {
  "_id": "4362adfgw",
  "name": "curso/faculdade",
  "type": "daily",
  "description": "",
  "cardLookTitle": "Look para curso/faculdade"
}

export function generateLook (categories, fetchClothes) {
  const looks = []

  if (categories.length > 0 && fetchClothes.length > 0) {
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
    if (result[0].totalClothes < 1) {
      return;
    }
    const categoryIds = categories.map(category => category._id)
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