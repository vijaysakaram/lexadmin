import Vue from 'vue'

import Vuetify from 'vuetify/lib/framework'
import * as directives from 'vuetify/lib/directives'
import i18n from './vue-i18n'
import config from '../configs'

/**
 * Vuetify Plugin
 * Main components library
 *
 * https://vuetifyjs.com/
 *
 */
Vue.use(Vuetify, {
  directives
})

export default new Vuetify({
 
  theme: {   
    options: config.theme.options,
    themes: config.theme.themes
  },
  lang: {
    current: config.locales.locale,
    // To use Vuetify own translations without Vue-i18n comment the next line
    t: (key, ...params) => i18n.t(key, params)
  }
})
