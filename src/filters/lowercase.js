import Vue from 'vue'

Vue.filter('lowercase', (value) => {
   
  return  value ? value.toString().toLowerCase() : ''
})
