import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:48574/'
// axios.defaults.externalURL = 'https://localhost:44367/' 

const showToast = ({ state, commit }, message) => {
  if (state.toast.show) commit('hideToast')

  setTimeout(() => {
    commit('showToast', {
      color: 'black',
      message,
      timeout: 3000
    })
  })
}


const showError = ({ state, commit }, { message = 'Failed!', error }) => {
  if (state.toast.show) commit('hideToast')

  setTimeout(() => {
    commit('showToast', {
      color: 'error',
      message: message + ' ' + error.message,
      timeout: 10000
    })
  })
}

const searchDocumentsByIds = ({ state }) => {
  return new Promise((resolve, reject) => {
    axios
      .get('/API/Documents/Ids', {
        params: {
          documentIds: state.selectedDocuments.join(','),
        },
      })
      .then(response => resolve(response))
      .catch(error => reject(error))
  })
}

const searchDocumentsDescriptionByIds = ({ state }) => {
  return new Promise((resolve, reject) => {
    axios
      .get('/API/Documents/Description', {
        params: {
          documentIds: state.selectedDocuments.join(','),
        },
      })
      .then(response => resolve(response))
      .catch(error => reject(error))
  })
}




const fetchDocuments = (commit) => {

  return new Promise((resolve, reject) => {

    axios.get('api/documents/')
      .then((response) => {
        resolve(response)

      })
      .catch((error) => {
        reject(error)
        commit('showSnackbar', 'Erreur de recuperation des données')
      })
  })
}

const addDocumentAssociation = ({ commit }, element) => {
  try {
    axios.post('api/documents/', element).then((response) => {
      commit('showSnackbar', 'succes d ajout')
    }).catch((error) => {

      commit('showSnackbar', 'succes d ajout')
    })
  } catch (err) {

    commit('showSnackbar', 'Error d ajout')
  }
}

const consultDocument = (commit, { id }) => {

  return new Promise((resolve, reject) => {

    axios.get('api/documents/' + id)
      .then((response) => { resolve(response) })
      .catch((error) => {
        reject(error)
      })
  })
}
const deletefeatureAssociation = (commit, { projectId, layerId, featureId, groupVersionId }) => {

  return new Promise((resolve, reject) => {

    axios.delete('api/associations/' + projectId + '/layers/' + layerId + '/features/' + featureId + '/documents/' + groupVersionId)
      .then((response) => {
        resolve(response)
        commit('showSnackbar', 'succes de delete')
      })
      .catch((error) => {
        reject(error)
      })
  })
}
const deletelayerAssociation = (commit, { projectId, layerId, groupVersionId }) => {

  return new Promise((resolve, reject) => {

    axios.delete('api/associations/' + projectId + '/layers/' + layerId + '/documents/' + groupVersionId)
      .then((response) => {
        resolve(response)
        commit('showSnackbar', 'succes de delete')
      })
      .catch((error) => {
        reject(error)
      })
  })
}
const GetDocsLayer = (commit, { projectId, layerId }) => {

  return new Promise((resolve, reject) => {

    axios.get('api/associations/' + projectId + '/layers/' + layerId)
      .then((response) => {
        resolve(response)
      })
      .catch((error) => {
        reject(error)
        commit('showSnackbar', 'Erreur de recuperation des données')
      })
  })
}
const GetDocsFeatures = (commit, { projectId, layerId, featureId }) => {
  return new Promise((resolve, reject) => {
    axios.get('api/associations/' + projectId + '/layers/' + layerId + '/features/' + featureId)
      .then((response) => {
        resolve(response)
      })
      .catch((error) => {
        reject(error)
        commit('showSnackbar', 'Erreur de recuperation des données')
      })
  })
}
const getFilteredDocuments = ({ commit }, payload) => {

  try {

    axios.get('api/document/getdocuments/' + payload).then((response) => {
      commit('SET_FILTERED_DOCUMENTS', response.data)
    }).catch(
      commit('showSnackbar', ' Erreur de recuperation des données')

    )
  } catch (err) {
    commit('showSnackbar', 'Erreur de recuperation des données')
  }
}
// const getLayersByDocumentId = async({ commit }, documentId) => {

//   try {
//     await axios.get('DocumentAssociations/GetDocLayerAssociationsByDocumentId/' + documentId).then((response) => {

//       if (typeof(response.data) === typeof(''))  {
//         commit('SET_LAYERS_TO_Null')
//         commit('SET_LAYERS_FLAG',false)
//       }
//       else {
//         commit('SET_LAYERS', response.data)
//         commit('SET_LAYERS_FLAG',true)
//       }
//     })
//       .catch(

//         //commit('showSnackbar', '*****getLayersByDocumentId****Erreur de recuperation des données')
//       )
//   } catch (err) {
//     // commit('showSnackbar', 'Erreur de recuperation des données');
//   }
// }
// const getFeaturesByDocumentId = async ({ commit }, documentId) => {

//   try {
//     await axios.get('DocumentAssociations/GetDocFeatureAssociationsByDocumentId/' + documentId ).then((response) => {
//       console.log('********getFeaturesByDocumentId********* ',response.data)
//       if (typeof(response.data) === typeof(''))  {

//         commit('SET_FEATURES_TO_Null')
//         commit('SET_FEATURES_FLAG',false)

//       }
//       else {
//         commit('SET_FEATURES', response.data)
//         commit('SET_FEATURES_FLAG',true)
//       }
//     })
// .catch(function (e) {
//   commit('showSnackbar', `********getFeaturesByDocumentId********* Erreur de recuperation des données ${e}` );

// });
//   } catch (err) {
//     commit('showSnackbar', 'Erreur de recuperation des données');
//   }
// }

// const  getDocumentTypes = async  ({ commit }) => {
//   try {
//     console.log('Je suis la!')
//     await axios.get('DocumentType/GetAll').then((response) => {
//       commit('SET_DOCUMENT_TYPES', response.data)

//     })
//   } catch (err) { 
//     commit('showSnackbar', 'Erreur de recuperation des données')
//   }
// }
// const getDocumentRepositories =  async ({ commit } ) => {
//   try {
//     await axios.get('Document/GetAllRepositories').then((response) => {
//       commit('SET_REPOSITORIES', response.data)

//     })     

//   } catch (err) {

//     commit('showSnackbar', 'Erreur de recuperation des données')
//   }

// }


// const  GetDocumentByDocumentId = async ({ commit },documentId ) => {

//   try {
//     await  axios.get('/Document/GetDocumentByDocumentId/' + documentId ).then((response) => {

//       commit('SET_DOCUMENT', response.data)
//     })
//   } catch (err) {
//     commit('showSnackbar', 'Erreur de recuperation des données')
//   }
// }
// const GetDocumentAssociationsByDocumentId = async ({ commit },documentId ) => {

//   try {
//     await axios.get('/DocumentAssociations/GetDocumentAssociationsByDocumentId/' + documentId).then((response) => {

//       commit('SET_DOCUMENTS_ASSOCIATIONS', response.data)
//     })
//   } catch (err) {
//     commit('showSnackbar', 'Erreur de recuperation des données')
//   }
// }
// const getTotalNumberOfRecords = async ({ commit } ) => {

//   try {
//     await axios.get('Document/GetTotalOfRecordsWithFilters').then((response) => {

//       commit('SET_TOTAL_DOCUMENTS_NUMBER', response.data)
//     })
//   } catch (err) {
//     commit('showSnackbar', 'Erreur de recuperation des données')
//   }
// }
// const getSearchDocsByMetadataWithPagination = ({ state, commit }, payload ) => {
//   try {
//     axios.post('Document/SearchDocByMetadataWithPagination?Count=' + state.pagination.itemsPerPage + '&PageNumber=' + state.pagination.page, payload)     
//       .then((response) => {
//         console.log('response.data.item2',response.data.item1)
//         if (typeof(response.data) === typeof(''))  {

//           commit('SET_FILTERED_DOCUMENTS_TO_Null')
//         }
//         else {   

//           commit('SET_FILTERED_DOCUMENTS', response.data.item2)
//           commit('SET_TOTAL_DOCUMENTS_NUMBER', response.data.item1)

//         }

//       }).catch()
//   } catch (err) {
//     commit('showSnackbar', 'Erreur de recuperation des données')
//   }
// }

// const getAllWithPagination = ({ commit },cursor) => {
//   //Count=5&PageNumber=1

//   try {
//     axios.get('Document/GetAll?Count=' + state.pagination.itemsPerPage + '&Cursor=' + cursor) 
//       .then((response) => {
//         commit('SET_FILTERED_DOCUMENTS', response.data)
//         commit('SET_TOTAL_DOCUMENTS_NUMBER', response.data.length)

//         commit('SET_CURSOR_FROM_HEADER', response.headers)
//         commit('SET_TOTALITEMS_FROM_HEADER', response.headers)
//       }).catch(

//         commit('showSnackbar', ' Erreur de recuperation des données')

//       )
//   } catch (err) {
//     commit('showSnackbar', 'Erreur de recuperation des données')
//   }
// }
// const  getAllSoft = ({ commit }) => {
//   try {
//     axios.get('document/getallSoft').then((response) => {
//       commit('SET_DOCUMENTSSoft', response.data)
//     }).catch(
//       commit('showSnackbar', ' Erreur de recuperation des données')

//     )
//   } catch (err) {
//     commit('showSnackbar', 'Erreur de recuperation des données')
//   }
// }
const showSuccess = ({ state, commit }, message) => {
  if (state.toast.show) commit('hideToast')

  setTimeout(() => {
    commit('showToast', {
      color: 'success',
      message,
      timeout: 3000
    })
  })
}
// start new Version
const GetProjects = ({ commit }) => {
  try {

    axios.get(`/projects`)
      .then((response) => {


        commit('SET_PROJECTS', response.data)
      })
    // .catch(commit('showSnackbar', ' Erreur de recuperation des données'))

  } catch (err) {
    commit('showSnackbar', 'Erreur de recuperation des données')
  }
}
//https://localhost:44367/projects/42/layers
const GetProjectByProjectId = ({ commit }) => {
  try {
    console.log(`https://localhost:44367/projects/${projectId}/layers`);
    axios.get(`/projects/${projectId}/layers`)
      .then((response) => {

        console.log('response.data:::projects', response.data);
        return response.data
        // commit('SET_PROJECT', response.data)
      })
    // .catch(commit('showSnackbar', ' Erreur de recuperation des données'))

  } catch (err) {
    commit('showSnackbar', 'Erreur de recuperation des données')
  }
}
const GetLayers = ({ commit }, projectId) => {
  try {
    console.log(`https://localhost:44367/projects/${projectId}/layers`);
    axios.get(`/projects/${projectId}/layers`)
      .then((response) => {
        console.log('Hello projectId:' + projectId);
        console.log('response.data:::projects::layers', response.data);
        commit('SET_PROJECTS_Layers', response.data)
      })
    // .catch(commit('showSnackbar', ' Erreur de recuperation des données'))

  } catch (err) {
    commit('showSnackbar', 'Erreur de recuperation des données')
  }
}
const GetFeatures = ({ commit }, GeoObject) => {
  try {

    console.log(`/projects/${GeoObject.projectId}/layers/${GeoObject.layerId}/features`);
    axios.get(`/projects/${GeoObject.projectId}/layers/${GeoObject.layerId}/features`)
      .then((response) => {

        console.log('response.data:::projects::layers::features', response.data);
        commit('SET_PROJECTS_FEATURES', response.data)
      })
    // .catch(commit('showSnackbar', ' Erreur de recuperation des données'))

  } catch (err) {
    commit('showSnackbar', 'Erreur de recuperation des données')
  }
}

const GetDocLayers = ({ commit }, documentId) => {
  try {
    axios.get(`api/Document/${documentId}/layers`)
      .then((response) => {
        console.log('response.data:::layers', response.data);
        commit('SET_DOCS_LAYERS', response.data)
        commit('SET_DOCS_JMAP_LAYERS', null)
      })
    // .catch(commit('showSnackbar', ' Erreur de recuperation des données'))

  } catch (err) {
    commit('showSnackbar', 'Erreur de recuperation des données')
  }
}
const GetDocJMAPLayers = ({ commit }, layer) => {
  try {

    console.log(`/projects/${layer.projectId}/layers/`);
    axios.get(`/projects/${layer.projectId}/layers/`)
      .then((response) => {
        console.log('response.data:::layers', response.data);
        var param = response.data.find(s => s.id === layer.layerId)
        layer.description = param.description;
        layer.name = param.name;
        layer.projectName = param.projectName
        console.log("actionLayer: ", layer);
        commit('SET_DOCS_JMAP_LAYERS', param)

      })
    // .catch(commit('showSnackbar', ' Erreur de recuperation des données'))
  } catch (err) {
    commit('showSnackbar', 'Erreur de recuperation des données')
  }
}
const GetDocFeatures = ({ commit }, documentId) => {
  try {
    axios.get(`api/Document/${documentId}/features`)
      .then((response) => {
        console.log('response.data:::feautres', response.data);
        commit('SET_DOCS_FEATURES', response.data)
        commit('SET_DOCS_JMAP_FEATURES', null)
      })
    // .catch(commit('showSnackbar', ' Erreur de recuperation des données'))

  } catch (err) {
    commit('showSnackbar', 'Erreur de recuperation des données')
  }
}
const GetJMAPLayerByLayerId = ({ commit }, layer) => {
  try {

    console.log(`/projects/${layer.projectId}/layers/${layer.layerId}`);
    axios.get(`/projects/${layer.projectId}/layers/${layer.layerId}`)
      .then((response) => {
        layer.projectName = response.data.projectName;
        layer.layerName = response.data.name;
        commit('SET_JMAP_LAYER', response.data)
      })
    // .catch(commit('showSnackbar', ' Erreur de recuperation des données'))
  } catch (err) {
    commit('showSnackbar', 'Erreur de recuperation des données')
  }
}
const GetDocJMAPFeatures = ({ commit }, feature) => {
  try {

    // console.log(`/projects/${feature.projectId}/layers/${feature.layerId}/features`);
    axios.get(`/projects/${feature.projectId}/layers/${feature.layerId}/features`)
      .then((response) => {

        var param = response.data.find(s => s.id === feature.featureId)
        feature.description = param.properties
        commit('SET_DOCS_JMAP_FEATURES', param)

      })
    // .catch(commit('showSnackbar', ' Erreur de recuperation des données'))
  } catch (err) {
    commit('showSnackbar', 'Erreur de recuperation des données')
  }
}
const getAssociatedDocs = ({ commit }) => {
  try {
    axios.get('api/Document')
      .then((response) => {
        console.log('response.data:::', response.data);
        commit('SET_FILTERED_DOCUMENTS_IDS', response.data)
      })
    // .catch(commit('showSnackbar', ' Erreur de recuperation des données'))

  } catch (err) {
    commit('showSnackbar', 'Erreur de recuperation des données')
  }
}
const CreateDocumentAssociation = ({ state, commit }, payload) => {
  try {
    let query = payload.isUndoOperation ? 'api/Document/' + payload.documentId + '?isUndoOperation=true' : 'api/Document/' + payload
    console.log('query: ',query);
    console.log('state.GeoObjects:',state.GeoObjects);
    axios.post(query, state.GeoObjects).then((response) => {
      console.log("post: ", payload, response.data);
      commit('showSnackbar', 'succes d ajout')
    }).catch((error) => {
      console.log("error:", error);
      // commit('showSnackbar','succes d ajout') 
    })
  } catch (err) {

    commit('showSnackbar', 'Error d ajout')
  }
}
const deleteDocsFeature = ({ commit }, deletingObject) => {
  console.log("Hello from deleteDocsFeature!");
  console.log("URL: ", '/associations/' + deletingObject.projectId + '/layers/' + deletingObject.layerId + '/features/' + deletingObject.featureId + '/documents/' + deletingObject.documentId + query);
  let query = deletingObject.isUndoOperation ? '?isUndoOperation=true' : ''
  return new Promise((resolve, reject) => {

    axios.delete('api/associations/' + deletingObject.projectId + '/layers/' + deletingObject.layerId + '/features/' + deletingObject.featureId + '/documents/' + deletingObject.documentId + query)//?isUndoOperation=true'
      .then((response) => {
        resolve(response)
        commit('showSnackbar', 'succes de delete')
      })
      .catch((error) => {
        reject(error)
      })
  })
}

const deleteDocsLayer = ({ commit }, deletingObject) => {
  console.log("Hello from deleteDocsLayer!", deletingObject);
  let query = deletingObject.isUndoOperation ? '?isUndoOperation=true' : ''
  console.log("URL: ", '/associations/' + deletingObject.projectId + '/layers/' + deletingObject.layerId + '/documents/' + deletingObject.documentId + query);
  return new Promise((resolve, reject) => {


    axios.delete('api/associations/' + deletingObject.projectId + '/layers/' + deletingObject.layerId + '/documents/' + deletingObject.documentId + query)
      .then((response) => {
        resolve(response)
        commit('showSnackbar', 'succes de delete')
      })
      .catch((error) => {
        reject(error)
      })
  })
}

//History
const getHistorybyDateRange = ({ commit },dateObject) => {
  try {
    axios.get(`api/ChangeLog/GetLogforPeriodTime?startDate=${dateObject.startDate}&endDate=${dateObject.endDate}`)
      .then((response) => {
        
        commit('SET_HISTORY', response.data);
      })
  } catch (err) {
    commit('showSnackbar', 'Erreur de recuperation des données')
  }
}//

const getHistory = ({ commit }) => {
  try {
    axios.get('api/ChangeLog')
      .then((response) => {
        
        commit('SET_HISTORY', response.data);
      })
  } catch (err) {
    commit('showSnackbar', 'Erreur de recuperation des données')
  }
}//

const getSearchHistory = ({ commit,state }, searchObject) => {
  try {
    var endDate = state.dateObject.endDate;
    var startDate = state.dateObject.startDate
    if(!state.dateObject.startDate){
        
      endDate = null;
      startDate = null;
   }
   // alert("Inside AXIOS : "+ searchObject.username +" "+ searchObject.timeduration +" "+ searchObject.eventtype +" "+ dateObject.startDate+" "+dateObject.endDate);
    
    axios.get(`api/ChangeLog/searchHistory/${searchObject.username}/${searchObject.timeduration}/${searchObject.eventtype}/${startDate}/${endDate}`)
      .then((response) => {
        console.log("Vijay-----------------", response.data);
        commit('SET_SEARCH_HISTORY', response.data)
      })

  } catch (err) {
    commit('showSnackbar', 'Erreur de recuperation des données')
  }
}

export default {
  showToast,
  showError,
  showSuccess,
  searchDocumentsByIds,
  searchDocumentsDescriptionByIds,


  addDocumentAssociation,
  fetchDocuments,
  consultDocument,
  GetDocsLayer,
  GetDocsFeatures,
  deletefeatureAssociation,
  deletelayerAssociation,
  getFilteredDocuments,

  //Start New Version
  GetProjects,
  GetProjectByProjectId,
  GetLayers,
  GetFeatures,
  CreateDocumentAssociation,
  getAssociatedDocs,
  GetDocLayers,
  GetDocJMAPLayers,
  GetDocFeatures,
  GetDocJMAPFeatures,
  deleteDocsFeature,
  deleteDocsLayer,
  getHistory,
  getSearchHistory,
  GetJMAPLayerByLayerId,
  getHistorybyDateRange
}