import { h } from "@vue/composition-api"

export default {
  layersFiltered({ layers, projectSearch }) {
    if (projectSearch === 0) {

      return layers
    }

    return layers.filter((item) => item.projectId === projectSearch)
  },

  featuresFiltered({ features, projectSearch, layerSearch }) {

    if (projectSearch === 0 || layerSearch === 0) {
      return null
    }

    return features.filter((item) => item.projectId === projectSearch && item.layerid === layerSearch)
  },

  getDocumentByDocumentId({ documentinfos, documentId }) {

    return documentinfos.filter(doc => doc.documentId == documentId)[0]

  },
  getDocumentsByGroupVersionId({ documentinfos, groupVersionId }) {

    return documentinfos.filter(doc => doc.groupVersionId == groupVersionId)

  },
   getHistoryWithDocName({ documentinfos, history }) {
    documentinfos.forEach(d => {
      history.forEach(h => {
        if (h.documentId == d.documentId) { h.fileName = d.filename 
      
        }
      })
    })
    return  history;
  }

}