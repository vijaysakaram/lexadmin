import time from './time'
import icons from './icons'
import theme from './theme'
import toolbar from './toolbar'
import locales from './locales'
import navigation from './navigation'
import http from './http'
import {version} from '../../package.json'
export default {
  // product display information
  product: {
    name: 'LexSmart Admin',
    version: version
  },
  contextjmap:{
    globalProjectName :'municipalites.qc.ca',
    globalLayerName :'Municipalites.Quebec',   
    layerFeatureKey :'http://ref.irosoft.com/proprietes/client#layerfeature'
  },
  // icon libraries
  icons,

  // theme configs
  theme,

  // toolbar configs
  toolbar,

  // locales configs
  locales,
  // time configs
  time,
  // navigation configs
  navigation,
  http
}
