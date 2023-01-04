import en from '../translations/en'
import fr from '../translations/fr'
const supported = ['en','fr']
let locale = 'fr'

try {
  // get browser default language
  const { 0: browserLang } = navigator.language.split('-')

  if (supported.includes(browserLang)) locale = browserLang
} catch (e) {
  console.log(e)
}

export default {
  // current locale
  locale,

  // when translation is not available fallback to that locale
  fallbackLocale: 'fr',

  // availabled locales for user selection
  availableLocales: [
    {
      code: 'fr',
      flag: 'fr',
      label: 'FR',
      messages: fr
    },
    {
      code: 'en',
      flag: 'us',
      label: 'EN',
      messages: en
    }
  ]
}
