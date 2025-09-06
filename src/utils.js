export function updateMetaTagTheme (color) {
  // const darkTheme = this.$vuetify.theme.dark
  const themeMetaTag = document.querySelector("head meta[name='theme-color']")
  if (themeMetaTag) {
    themeMetaTag.setAttribute("content", color)
  }
}

export function formatPhoneToOnlyDigits (phone) {
  const result = phone.replace(/\D/g, '')
  return result
}

export function getImageId (imageUrl) {
  const result = imageUrl.substring(30)
  let splited = result.split("/")
  splited = splited[1].split("_")
  const id = splited[0]
  return id
}

export function sumDaysAndGetDate (daysToSum) {
  Date.prototype.addDays = function(days) {
    const date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  }
  let date = new Date();
  return date.addDays(daysToSum);
}

export function subtractDaysAndGetDate (daysToSubtract) {
  Date.prototype.subtractDays = function(days) {
    const date = new Date(this.valueOf());
    date.setDate(date.getDate() - days);
    return date;
  }
  let date = new Date();
  return date.subtractDays(daysToSubtract);
}

export function isMobileDevice () {
  return /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);
}