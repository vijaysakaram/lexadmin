import Vue from 'vue'

Vue.filter('propertieExtract', (value) => {
  
  return value ? value.toString().substring(value.toString().lastIndexOf('/') + 1) : ''
})