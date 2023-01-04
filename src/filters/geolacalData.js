import Vue from 'vue'

Vue.filter('geolacalData', (value) => {
  if (!value) return ''

  const geoDataValues =  value.filter((item) => item.key === 'http://ref.irosoft.com/proprietes/client#layerfeature')[0].values
  const result = [] 
  
  geoDataValues.forEach((element) => {
    const myArray = element.split('-')
    const newGeo = {

      layerId:myArray[0],
      featureId:myArray[1],
      isValid :true
    }

    result.push(newGeo)
  })

  return result
})
