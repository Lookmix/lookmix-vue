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
  // rotina 
  DAY,
  NIGHT,
  "básico/comum",
  "trabalho",
  "curso/faculdade",
  "atividade física",

  // exporádico
  "festa/evento",
  "restaurante",
  "shopping",
  "viagem",
  "praia",
  "natureza"
]
