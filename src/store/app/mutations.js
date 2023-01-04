export default {

  showSnackbar: (state, text) => {
    let timeout = 0

    if (state.snackbar.show) {
      state.snackbar.show = false
      timeout = 300
    }
    setTimeout(() => {
      state.snackbar.show = true
      state.snackbar.text = text
    }, timeout)
  },
  hideSnackbar(state) {
    state.snackbar.show = false
  },

  setProjectSearch(state, value) {
    if (!value) value = 0

    state.projectSearch = value


  },
  setLayerSearch(state, value) {
    if (!value) value = 0

    state.layerSearch = value

  },
  setGeoObjects(state, param) {
    console.log("Geo-Param: ", param);
    state.GeoObjects = param

  },

  /**
   * Main Toast
   */
  showToast: (state, toast) => {
    const { color, timeout, message } = toast

    state.toast = {
      message,
      color,
      timeout,
      show: true
    }
  },
  hideToast: (state) => {
    state.toast.show = false
  },
  resetToast: (state) => {
    state.toast = {
      show: false,
      color: 'black',
      message: '',
      timeout: 3000
    }
  },
  parsedocument: (state) => {
    state.parseddocuments = state.documentinfos
  },


  // SET_FILTERED_DOCUMENTS(state, param) {
  //   if (param !== {}) {
  //     state.filteredDocuments = param.map((p) => {
  //       p.creationDate = p.creationDate ? new Date(p.creationDate).toLocaleString().split(',')[0] : ''
  //       p.group = p.groupVersionId.split('-')[1]
  //       p.version = p.groupVersionId.split('-')[0]

  //       return p
  //     })

  //     state.filteredDocuments.sort((a, b) => {
  //       return b.group - a.group || b.version - a.version
  //     })

  //   }
  //   else state.filteredDocuments = param
  // },




  SET_FILTERED_DOCUMENTS_TO_Null(state) {
    state.filteredDocuments = []
  },
  SET_TOTAL_DOCUMENTS_NUMBER(state, param) {
    state.pagination.totalItems = param

  },


  SET_DOCUMENT(state, param) {
    state.document = param
    console.log(this.state.document)
  },
  SET_FEATURES(state, param) {
    state.featuresDoc = param
    console.log('Features: ', this.state.features)
    state.featureHeaders = Object.keys(this.state.featuresDoc[0])
  },
  SET_LAYERS(state, param) {
    state.layersDoc = param
    console.log('Layers: ', this.state.layers)

    //  state.layerHeaders= Object.keys( this.state.layers[0]); 

    state.layerHeaders = Object.keys(this.state.layers[0])

    console.log('layer-headers: ', state.layerHeaders)

  },
  SET_LAYERS_TO_Null(state) {
    state.layersDoc = []
  },
  SET_FEATURES_TO_Null(state) {
    state.featuresDoc = []
  },
  SET_FEATURES_FLAG(state, payload) {
    state.featureFlag = payload
  },
  SET_LAYERS_FLAG(state, payload) {
    state.layerFlag = payload
  },
  //////////Start new
  SET_FILTERED_DOCUMENTS_IDS(state, payload) {
    state.documentIds = payload
    console.log('DocumentIDs: ', state.documentIds);
  },

  SET_DOCS_FEATURES(state, param) {
    state.docsFeatures = param
    console.log('DocsFeatures: ', state.docsFeatures)
  },
  SET_DOCS_JMAP_FEATURES(state, param) {
    console.log("param from features: ",param);
    if (!param) state.docsJMAPFeatures = []
    else {
      state.docsJMAPFeature = param
      state.docsJMAPFeatures.push(param)
      console.log("state.docsJMAPFeatures: ", state.docsJMAPFeatures);
    }
  },
  SET_JMAP_LAYER(state, param){
    state.jmapLayer = param
  },
  SET_DOCS_JMAP_LAYERS(state, param) {
    console.log("param from layers: ",param);
    if (!param) {
      state.docsJMAPLayers = []
    }
    else 
    {
      // state.docsJMAPLayer = param
      state.docsJMAPLayers.push(param)
      console.log("state.docsJMAPLayers:::::::::::::::::::::: ", state.docsJMAPLayers);
    }
  },
  SET_DOCS_LAYERS(state, param) {
    state.docsLayers = param
    console.log('docsLayers: ', state.docsLayers)
  },

  setParamIsGroupVersionId(state, param) {
    state.paramIsGroupVersionId = param
    console.log("StateParamGroupVersionId: ", state.paramIsGroupVersionId);
  },

  setGroupVersionId(state, param) {
    state.groupVersionId = param
    console.log("State groupVersionId: ", state.groupVersionId);
  },

  setDocumentId(state, param) {
    state.documentId = param
  },

  setDeletingObject(state, param) {
    state.deletingObjet = param
    console.log("state deletingObject: ", state.deletingObjet);
  },
  SET_PROJECTS(state, param) {
    state.projects = param
    console.log("state projects: ", state.projects);
  },
  SET_PROJECTS_Layers(state, param) {
    state.layers = param
    console.log("state layers: ", state.layers);
  },
  SET_PROJECTS_FEATURES(state, param) {
    state.features = param
    console.log("state features: ", state.features);
  },
  setTabUrl(state, param){
    state.tabUrl = param
    console.log("state.tabUrl: ",param);
    },

  SET_HISTORY(state, payload) {
    state.history  = payload
  },
    
  SET_SEARCH_HISTORY(state, payload) {
    state.history  = payload
  },
  SET_SPROJECTID(state, param) {
    state.sProjectId = param
    console.log("state sProjectId: ", state.sProjectId);
  },
  setSelectedCustomMetas (state, param) {
    state.selectedCustomMetas = param
    console.log("state.selectedCustomMetas: ", state.selectedCustomMetas);
  },
  setDisplayedHeaders(state, param) {
    state.displayedHeaders = param
    console.log("state.setDisplayedHeaders: ", state.displayedHeaders);
  },
  setDateObject(state,param){
   state.dateObject = param
   
   console.log("state.dateObject: ", state.dateObject);
  },
  setIsDateRange(state,param){
    state.isDateRange = param
    
    console.log("llllllllllllllllllllllllllllllllllstate.dateObject: ", state.isDateRange);
   }
  
}