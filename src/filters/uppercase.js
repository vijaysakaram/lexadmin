import Vue from 'vue'

Vue.filter('uppercase', (value) => {
  return value ?  value.toString().toUpperCase() : ''
})
