export function updateMetaTagTheme (isDarkTheme, color) {
  // const darkTheme = this.$vuetify.theme.dark
  if (!isDarkTheme) {
    const themeMetaTag = document.querySelector('head meta[name="theme-color"]');
    themeMetaTag.setAttribute('content', color);
  }
}

export function formatPhoneToOnlyDigits (phone) {
  const result = phone.replace(/\D/g, '')
  return result
}

export const seasons = [
  {
    name: "primavera",
    icon: "mdi-image-filter-vintage"
  },
  {
    name: "verão",
    icon: "mdi-white-balance-sunny"
  },
  {
    name: "outono",
    icon: "mdi-leaf-maple"
  },
  {
    name: "inverno",
    icon: "mdi-snowflake"
  },
]