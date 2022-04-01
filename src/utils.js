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