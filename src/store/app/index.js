import configs from '../../configs'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import {version} from '../../../package.json'
const { product, contextjmap, theme, time } = configs

const { globalTheme } = theme

// state initial values
const state = {
  //Home Page Version 0 data
  // documentHeaders: {},
  // documents: [],
  sProjectId:0,
  filteredDocuments: [],
  docsFeatures: [],
  docsLayers: [],
  appVersion:version,
  // layerFlag:true,
  // featureFlag:true,
  // documentsSoft: [],

  // mimeTypeItems: [],
  documentSearch: {},
  // documentAssociationView: {},
  document: {},
  // cursor: 0,
  // groupversion: [],
  // pagination: {
  //   itemsPerPage: 10,
  //   page: 1,
  //   totalItems: 0
  // },

  //History
  history: [],
  dateObject:{
    endDate: "",
    startDate: "",
  },
  isDateRange:false,
  //History Event types
  historyEventTypes: [

    { id: "Create Association Doc - Feature", name: "Create Association Doc - Feature" },
    { id: "Create Association Doc - Layer", name: "Create Association Doc - Layer" },
    { id: "Delete Association Doc - Layer", name: "Delete Association Doc - Layer" },
    { id: "Delete Association Doc - Feature", name: "Delete Association Doc - Feature" },
  ],

projects:[],
  // docTypes
  // doctypes: [
  //   { id: "http://ref.irosoft.com/profil_metadonnees/reglement_codifie", name: "Règlements codifiés" },
  //   { id: "http://ref.irosoft.com/profil_metadonnees/reglement_annuel", name: "Règlements annuels" }
  // ],
  //documentIds of associated documents
  documentIds: [],
  documentId: "",
  layersDoc: [],
  docsJMAPLayer: [],
  docsJMAPLayers: [],
  featuresDoc: [],
  docsJMAPFeature: [],
  docsJMAPFeatures: [],
  layerSearch: 0,
  projectSearch: 0,
  addFeatureSearch: "",
  featureSearch: {},
  tabUrl: "",
  selectedCustomMetas:[],
  displayedHeaders:[],
  customMetas: [
    {
      'id': 'http://ref.irosoft.com/proprietes/docutheque#titre',
      'name': 'Titre'
    },
    {
      'id': 'http://ref.irosoft.com/proprietes/docutheque#type_document',
      'name': 'Type document'
    },
    {
      'id': 'http://ref.irosoft.com/proprietes_systeme/docutheque#numero',
      'name': 'Numero'
    },
    {
      'id': 'http://ref.irosoft.com/proprietes/juridique#ordre_de_tri',
      'name': 'Ordre de tri'
    },
    {
      'id': 'http://ref.irosoft.com/proprietes/juridique#derniere_version',
      'name': 'Derniere version'
    },
    {
      'id': 'http://ref.irosoft.com/proprietes/juridique#date_avis_de_motion',
      'name': 'Date avis de motion'
    },
    {
      'id': 'http://ref.irosoft.com/proprietes/juridique#date_entree_en_vigueur',
      'name':'Date entree en vigueur'
    },
    {
      'id': 'http://ref.irosoft.com/proprietes/client#featureid',
      'name': 'featureid'
    },
    {
      'id': 'http://ref.irosoft.com/proprietes/juridique#derniere_mise_a_jour',
      'name': 'Derniere mise a jour'
    },
    {
      'id': 'http://ref.irosoft.com/proprietes_systeme/docutheque#display_format',
      'name': 'Display format'
    },
    {
      'id': 'http://ref.irosoft.com/proprietes_systeme/docutheque#filename',
      'name': 'filename'
    },
    {
      'id': 'http://ref.irosoft.com/proprietes_systeme/docutheque#formattedLabel',
      'name':'formattedLabel'
    },
    {
      'id': 'http://ref.irosoft.com/proprietes/juridique#numero_de_reglement',
      'name': 'Numero de reglement'
    },
    {
      'id': 'http://ref.irosoft.com/proprietes/client#derniere version',
      'name':'Derniere version'
    },
    {
      'id': 'http://ref.irosoft.com/proprietes/client#layerid',
      'name':'layerid'
    },
    {
      'id': 'http://ref.irosoft.com/proprietes_systeme/docutheque#usager_modification',
      'name': 'Usager modification'
    },
    {
      'id': 'http://ref.irosoft.com/proprietes/docutheque#mot_clef',
      'name': 'Mot clef'
    },
    {
      'id': 'http://ref.irosoft.com/proprietes/juridique#sujet_reglement',
      'name':'Sujet reglement'
    },
    {
      'id': 'http://ref.irosoft.com/proprietes_systeme/docutheque#md5_source',
      'name':'Md5 source'
    },
    {
      'id': 'http://ref.irosoft.com/proprietes/docutheque#description',
      'name': 'Description'
    },
    {
      'id': 'http://ref.irosoft.com/proprietes_systeme/docutheque#md5_pdf',
      'name': 'Md5 pdf'
    },
    {
      'id': 'http://ref.irosoft.com/proprietes/docutheque#confidentiel',
      'name': 'Confidentiel'
    },
    {
      'id': 'http://ref.irosoft.com/proprietes_systeme/docutheque#downloadable',
      'name':'Downloadable'
    },
    {
      'id': 'http://ref.irosoft.com/proprietes/client#layerfeature',
      'name': 'layerfeature'
    },
    {
      'id': 'http://ref.irosoft.com/proprietes/docutheque#date_adoption',
      'name': 'Date adoption'
    },
    {
      'id': 'http://ref.irosoft.com/proprietes/juridique#statut',
      'name': 'Statut'
    },
    {
      'id': 'http://ref.irosoft.com/proprietes_systeme/docutheque#canWrite',
      'name': 'canWrite'
    },
    {
      'id': 'http://ref.irosoft.com/proprietes_systeme/docutheque#canChangePermission',
      'name':'canChangePermission'
    }
  ],
  documentinfos: [  
    {
      'documentId': '56b41e31-bee4-4632-8eea-d8cc7db5a686',
      'groupVersionId': '0707-2022',
      'repositoryId': 'granby.qc.ca',
      'filename': '0707-2022_20200801.pdf',
      'doctype': 'http://ref.irosoft.com/profil_metadonnees/reglement_annuel',
      'mimetype': 'application/pdf',
      'lang': 'fr',
      'authorId': 'patrick',
      'size': '759361',
      'modificationDate': '2022-04-25T11:00:09',
      'creationDate': '2020-06-01T10:55:44',
      'customMetas': [
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#titre',
          'values': [
            'Règlement sur les pesticides'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#type_document',
          'values': [
            'Règlement codifié'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#numero',
          'values': [
            '452'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#ordre_de_tri',
          'values': [
            '2019-0802'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#derniere_version',
          'values': [
            'true'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#date_avis_de_motion',
          'values': [
            '2019-09-02'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#date_entree_en_vigueur',
          'values': [
            '2019-10-31'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/client#featureid',
          'values': [
            '987',
            '100'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#derniere_mise_a_jour',
          'values': [
            '2020-01-10'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#display_format',
          'values': [
            'html'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#filename',
          'values': [
            '0802-2019_20191031.pdf'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#formattedLabel',
          'values': [
            'Règlement sur les pesticides'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#numero_de_reglement',
          'values': [
            '0802-2019'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/client#derniere_version',
          'values': [
            'true'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/client#layerid',
          'values': [
            'Demo_Quartier',
            'Zonage'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#usager_modification',
          'values': [
            'ppaquette'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#mot_clef',
          'values': [
            'Pesticides; produits nocifs; contamination; environnement'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#sujet_reglement',
          'values': [
            'http://ref.irosoft.com/listSkos/sujets_des_reglements#environnement'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#md5_source',
          'values': [
            'ACAFDD7199C3AFD54B3B816EAB64AF7C'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#description',
          'values': [
            'Le présent règlement s’applique à toute personne qui procède à l’application extérieure de pesticides, incluant les pesticides à faible impact, ainsi qu’à tout entrepreneur qui procède à l’application extérieure de pesticides, de pesticides à faible impact, d’agents de lutte biologique ainsi qu’à l’épandage d’engrais et de suppléments.'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#md5_pdf',
          'values': [
            '3F8F32D09E44FE2CA94DE5F4651173DD'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#confidentiel',
          'values': [
            'false'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#downloadable',
          'values': [
            'true'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/client#layerfeature',
          'values': [
            'Municipalites.Quebec-987',
            'Zonage-100'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#date_adoption',
          'values': [
            '2019-10-15'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#statut',
          'values': [
            'http://ref.irosoft.com/listSkos/statut#actif'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#canWrite',
          'values': [
            'false'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#canChangePermission',
          'values': [
            'false'
          ]
        }
      ]
    }
    ,

    {
      'documentId': '1b903d14-5ba3-4381-a864-86233ab04b7d',
      'groupVersionId': '0907-2022',
      'repositoryId': 'granby.qc.ca',
      'filename': '0907-2022_20200701.pdf',
      'doctype': 'http://ref.irosoft.com/profil_metadonnees/reglement_codifie',
      'mimetype': 'application/pdf',
      'lang': 'fr',
      'authorId': 'patrick',
      'size': '759361',
      'modificationDate': '2020-12-09T11:56:09',
      'creationDate': '2020-06-01T10:55:44',
      'customMetas': [
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#titre',
          'values': [
            'Règlement sur les pesticides'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#type_document',
          'values': [
            'Règlement codifié'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#numero',
          'values': [
            '452'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#ordre_de_tri',
          'values': [
            '2019-0802'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#derniere_version',
          'values': [
            'true'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#date_avis_de_motion',
          'values': [
            '2019-09-02'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#date_entree_en_vigueur',
          'values': [
            '2019-10-31'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/client#featureid',
          'values': [
            '987',
            '100'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#derniere_mise_a_jour',
          'values': [
            '2020-01-10'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#display_format',
          'values': [
            'html'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#filename',
          'values': [
            '0802-2019_20191031.pdf'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#formattedLabel',
          'values': [
            'Règlement sur les pesticides'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#numero_de_reglement',
          'values': [
            '0802-2019'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/client#derniere_version',
          'values': [
            'true'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/client#layerid',
          'values': [
            'Demo_Quartier',
            'Zonage'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#usager_modification',
          'values': [
            'ppaquette'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#mot_clef',
          'values': [
            'Pesticides; produits nocifs; contamination; environnement'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#sujet_reglement',
          'values': [
            'http://ref.irosoft.com/listSkos/sujets_des_reglements#environnement'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#md5_source',
          'values': [
            'ACAFDD7199C3AFD54B3B816EAB64AF7C'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#description',
          'values': [
            'Le présent règlement s’applique à toute personne qui procède à l’application extérieure de pesticides, incluant les pesticides à faible impact, ainsi qu’à tout entrepreneur qui procède à l’application extérieure de pesticides, de pesticides à faible impact, d’agents de lutte biologique ainsi qu’à l’épandage d’engrais et de suppléments.'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#md5_pdf',
          'values': [
            '3F8F32D09E44FE2CA94DE5F4651173DD'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#confidentiel',
          'values': [
            'false'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#downloadable',
          'values': [
            'true'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/client#layerfeature',
          'values': [
            'Municipalites.Quebec-987',
            'Zonage-100'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#date_adoption',
          'values': [
            '2019-10-15'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#statut',
          'values': [
            'http://ref.irosoft.com/listSkos/statut#actif'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#canWrite',
          'values': [
            'false'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#canChangePermission',
          'values': [
            'false'
          ]
        }
      ]
    }
    ,
    {
      'documentId': 'ec0b7248-059d-492c-9c4f-5fcf4f6449f2',
      'groupVersionId': '0707-2020',
      'repositoryId': 'granby.qc.ca',
      'filename': '0707-2020_20200301.pdf',
      'doctype': 'http://ref.irosoft.com/profil_metadonnees/reglement_codifie',
      'mimetype': 'application/pdf',
      'lang': 'fr',
      'authorId': 'patrick',
      'size': '759361',
      'modificationDate': '2020-12-09T11:56:09',
      'creationDate': '2020-06-01T10:55:44',
      'customMetas': [
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#titre',
          'values': [
            'Règlement sur les pesticides'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#type_document',
          'values': [
            'Règlement codifié'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#numero',
          'values': [
            '452'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#ordre_de_tri',
          'values': [
            '2019-0802'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#derniere_version',
          'values': [
            'true'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#date_avis_de_motion',
          'values': [
            '2019-09-02'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#date_entree_en_vigueur',
          'values': [
            '2019-10-31'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/client#featureid',
          'values': [
            '987',
            '100'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#derniere_mise_a_jour',
          'values': [
            '2020-01-10'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#display_format',
          'values': [
            'html'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#filename',
          'values': [
            '0802-2019_20191031.pdf'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#formattedLabel',
          'values': [
            'Règlement sur les pesticides'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#numero_de_reglement',
          'values': [
            '0802-2019'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/client#derniere_version',
          'values': [
            'true'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/client#layerid',
          'values': [
            'Demo_Quartier',
            'Zonage'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#usager_modification',
          'values': [
            'ppaquette'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#mot_clef',
          'values': [
            'Pesticides; produits nocifs; contamination; environnement'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#sujet_reglement',
          'values': [
            'http://ref.irosoft.com/listSkos/sujets_des_reglements#environnement'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#md5_source',
          'values': [
            'ACAFDD7199C3AFD54B3B816EAB64AF7C'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#description',
          'values': [
            'Le présent règlement s’applique à toute personne qui procède à l’application extérieure de pesticides, incluant les pesticides à faible impact, ainsi qu’à tout entrepreneur qui procède à l’application extérieure de pesticides, de pesticides à faible impact, d’agents de lutte biologique ainsi qu’à l’épandage d’engrais et de suppléments.'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#md5_pdf',
          'values': [
            '3F8F32D09E44FE2CA94DE5F4651173DD'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#confidentiel',
          'values': [
            'false'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#downloadable',
          'values': [
            'true'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/client#layerfeature',
          'values': [
            'Municipalites.Quebec-987',
            'Zonage-100'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#date_adoption',
          'values': [
            '2019-10-15'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#statut',
          'values': [
            'http://ref.irosoft.com/listSkos/statut#actif'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#canWrite',
          'values': [
            'false'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#canChangePermission',
          'values': [
            'false'
          ]
        }
      ]
    }

    , {
      'documentId': '0329ca9c-5922-4941-8aaf-12d7ca5e4987',
      'groupVersionId': '0707-2020',
      'repositoryId': 'granby.qc.ca',
      'filename': '0707-2020_20200601.pdf',
      'doctype': 'http://ref.irosoft.com/profil_metadonnees/reglement_codifie',
      'mimetype': 'application/pdf',
      'lang': 'fr',
      'authorId': 'patrick',
      'size': '759361',
      'modificationDate': '2020-12-09T11:56:09',
      'creationDate': '2020-06-01T10:55:44',
      'customMetas': [
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#titre',
          'values': [
            'Règlement sur les pesticides'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#type_document',
          'values': [
            'Règlement codifié'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#numero',
          'values': [
            '452'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#ordre_de_tri',
          'values': [
            '2019-0802'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#derniere_version',
          'values': [
            'true'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#date_avis_de_motion',
          'values': [
            '2019-09-02'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#date_entree_en_vigueur',
          'values': [
            '2019-10-31'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/client#featureid',
          'values': [
            '987',
            '100'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#derniere_mise_a_jour',
          'values': [
            '2020-01-10'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#display_format',
          'values': [
            'html'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#filename',
          'values': [
            '0802-2019_20191031.pdf'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#formattedLabel',
          'values': [
            'Règlement sur les pesticides'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#numero_de_reglement',
          'values': [
            '0802-2019'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/client#derniere_version',
          'values': [
            'true'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/client#layerid',
          'values': [
            'Demo_Quartier',
            'Zonage'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#usager_modification',
          'values': [
            'ppaquette'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#mot_clef',
          'values': [
            'Pesticides; produits nocifs; contamination; environnement'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#sujet_reglement',
          'values': [
            'http://ref.irosoft.com/listSkos/sujets_des_reglements#environnement'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#md5_source',
          'values': [
            'ACAFDD7199C3AFD54B3B816EAB64AF7C'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#description',
          'values': [
            'Le présent règlement s’applique à toute personne qui procède à l’application extérieure de pesticides, incluant les pesticides à faible impact, ainsi qu’à tout entrepreneur qui procède à l’application extérieure de pesticides, de pesticides à faible impact, d’agents de lutte biologique ainsi qu’à l’épandage d’engrais et de suppléments.'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#md5_pdf',
          'values': [
            '3F8F32D09E44FE2CA94DE5F4651173DD'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#confidentiel',
          'values': [
            'false'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#downloadable',
          'values': [
            'true'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/client#layerfeature',
          'values': [
            'Municipalites.Quebec-987',
            'Zonage-100'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#date_adoption',
          'values': [
            '2019-10-15'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#statut',
          'values': [
            'http://ref.irosoft.com/listSkos/statut#actif'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#canWrite',
          'values': [
            'false'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#canChangePermission',
          'values': [
            'false'
          ]
        }
      ]
    }

    ,
    {
      'documentId': 'd7aa41d5-1dc1-4691-8434-0e7cb59bbd62',
      'groupVersionId': '0707-2020',
      'repositoryId': 'granby.qc.ca',
      'filename': '0707-2020_20200528.pdf',
      'doctype': 'http://ref.irosoft.com/profil_metadonnees/reglement_codifie',
      'mimetype': 'application/pdf',
      'lang': 'fr',
      'authorId': 'patrick',
      'size': '759361',
      'modificationDate': '2020-12-09T11:56:09',
      'creationDate': '2020-05-22T10:55:44',
      'customMetas': [
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#titre',
          'values': [
            'Règlement sur les pesticides'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#type_document',
          'values': [
            'Règlement codifié'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#numero',
          'values': [
            '452'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#ordre_de_tri',
          'values': [
            '2019-0802'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#derniere_version',
          'values': [
            'true'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#date_avis_de_motion',
          'values': [
            '2019-09-02'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#date_entree_en_vigueur',
          'values': [
            '2019-10-31'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/client#featureid',
          'values': [
            '987',
            '100'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#derniere_mise_a_jour',
          'values': [
            '2020-01-10'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#display_format',
          'values': [
            'html'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#filename',
          'values': [
            '0802-2019_20191031.pdf'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#formattedLabel',
          'values': [
            'Règlement sur les pesticides'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#numero_de_reglement',
          'values': [
            '0802-2019'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/client#derniere_version',
          'values': [
            'true'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/client#layerid',
          'values': [
            'Demo_Quartier',
            'Zonage'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#usager_modification',
          'values': [
            'ppaquette'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#mot_clef',
          'values': [
            'Pesticides; produits nocifs; contamination; environnement'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#sujet_reglement',
          'values': [
            'http://ref.irosoft.com/listSkos/sujets_des_reglements#environnement'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#md5_source',
          'values': [
            'ACAFDD7199C3AFD54B3B816EAB64AF7C'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#description',
          'values': [
            'Le présent règlement s’applique à toute personne qui procède à l’application extérieure de pesticides, incluant les pesticides à faible impact, ainsi qu’à tout entrepreneur qui procède à l’application extérieure de pesticides, de pesticides à faible impact, d’agents de lutte biologique ainsi qu’à l’épandage d’engrais et de suppléments.'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#md5_pdf',
          'values': [
            '3F8F32D09E44FE2CA94DE5F4651173DD'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#confidentiel',
          'values': [
            'false'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#downloadable',
          'values': [
            'true'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/client#layerfeature',
          'values': [
            'Municipalites.Quebec-987',
            'Zonage-100'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#date_adoption',
          'values': [
            '2019-10-15'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#statut',
          'values': [
            'http://ref.irosoft.com/listSkos/statut#actif'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#canWrite',
          'values': [
            'false'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#canChangePermission',
          'values': [
            'false'
          ]
        }
      ]
    }
    ,
    {
      'documentId': '71d8da23-0b5a-405d-a2d8-5af96b8e5117',
      'groupVersionId': '0707-2020',
      'repositoryId': 'granby.qc.ca',
      'filename': '0707-2020_2020031.pdf',
      'doctype': 'http://ref.irosoft.com/profil_metadonnees/reglement_codifie',
      'mimetype': 'application/pdf',
      'lang': 'fr',
      'authorId': 'patrick',
      'size': '759361',
      'modificationDate': '2020-12-09T11:56:09',
      'creationDate': '2020-05-22T10:55:44',
      'customMetas': [
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#titre',
          'values': [
            'Règlement sur les pesticides'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#type_document',
          'values': [
            'Règlement codifié'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#numero',
          'values': [
            '452'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#ordre_de_tri',
          'values': [
            '2019-0802'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#derniere_version',
          'values': [
            'true'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#date_avis_de_motion',
          'values': [
            '2019-09-02'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#date_entree_en_vigueur',
          'values': [
            '2019-10-31'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/client#featureid',
          'values': [
            '987',
            '100'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#derniere_mise_a_jour',
          'values': [
            '2020-01-10'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#display_format',
          'values': [
            'html'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#filename',
          'values': [
            '0802-2019_20191031.pdf'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#formattedLabel',
          'values': [
            'Règlement sur les pesticides'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#numero_de_reglement',
          'values': [
            '0802-2019'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/client#derniere_version',
          'values': [
            'true'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/client#layerid',
          'values': [
            'Municipalites.Quebec',
            'Zonage'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#usager_modification',
          'values': [
            'ppaquette'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#mot_clef',
          'values': [
            'Pesticides; produits nocifs; contamination; environnement'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#sujet_reglement',
          'values': [
            'http://ref.irosoft.com/listSkos/sujets_des_reglements#environnement'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#md5_source',
          'values': [
            'ACAFDD7199C3AFD54B3B816EAB64AF7C'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#description',
          'values': [
            'Le présent règlement s’applique à toute personne qui procède à l’application extérieure de pesticides, incluant les pesticides à faible impact, ainsi qu’à tout entrepreneur qui procède à l’application extérieure de pesticides, de pesticides à faible impact, d’agents de lutte biologique ainsi qu’à l’épandage d’engrais et de suppléments.'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#md5_pdf',
          'values': [
            '3F8F32D09E44FE2CA94DE5F4651173DD'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#confidentiel',
          'values': [
            'false'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#downloadable',
          'values': [
            'true'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/client#layerfeature',
          'values': [
            'Municipalites.Quebec-987',
            'Zonage-100'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#date_adoption',
          'values': [
            '2019-10-15'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#statut',
          'values': [
            'http://ref.irosoft.com/listSkos/statut#actif'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#canWrite',
          'values': [
            'false'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#canChangePermission',
          'values': [
            'false'
          ]
        }
      ]
    },
    {
      'documentId': 'b90706db-7e62-4ff9-911a-8d65dcf127de',
      'groupVersionId': '0802-2017',
      'repositoryId': 'shawinigan.qc.ca',
      'filename': '0802-2017_20170228.pdf',
      'doctype': 'http://ref.irosoft.com/profil_metadonnees/reglement_codifie',
      'mimetype': 'application/pdf',
      'lang': 'fr',
      'authorId': 'robert',
      'size': '759361',
      'modificationDate': '2020-11-09T11:56:09',
      'creationDate': '2017-02-22T10:55:44',
      'customMetas': [
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#titre',
          'values': [
            'Règlement sur les pesticides'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#type_document',
          'values': [
            'Règlement codifié'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#numero',
          'values': [
            '452'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#ordre_de_tri',
          'values': [
            '2019-0802'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#derniere_version',
          'values': [
            'true'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#date_avis_de_motion',
          'values': [
            '2019-09-02'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#date_entree_en_vigueur',
          'values': [
            '2019-10-31'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/client#featureid',
          'values': [
            '987',
            '120'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#derniere_mise_a_jour',
          'values': [
            '2020-01-10'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#display_format',
          'values': [
            'html'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#filename',
          'values': [
            '0802-2019_20191031.pdf'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#formattedLabel',
          'values': [
            'Règlement sur les pesticides'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#numero_de_reglement',
          'values': [
            '0802-2019'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/client#derniere_version',
          'values': [
            'true'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/client#layerid',
          'values': [
            'Municipalites.Quebec',
            'Zonage'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#usager_modification',
          'values': [
            'ppaquette'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#mot_clef',
          'values': [
            'Pesticides; produits nocifs; contamination; environnement'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#sujet_reglement',
          'values': [
            'http://ref.irosoft.com/listSkos/sujets_des_reglements#environnement'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#md5_source',
          'values': [
            'ACAFDD7199C3AFD54B3B816EAB64AF7C'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#description',
          'values': [
            'Le présent règlement s’applique à toute personne qui procède à l’application extérieure de pesticides, incluant les pesticides à faible impact, ainsi qu’à tout entrepreneur qui procède à l’application extérieure de pesticides, de pesticides à faible impact, d’agents de lutte biologique ainsi qu’à l’épandage d’engrais et de suppléments.'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#md5_pdf',
          'values': [
            '3F8F32D09E44FE2CA94DE5F4651173DD'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#confidentiel',
          'values': [
            'false'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#downloadable',
          'values': [
            'true'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/client#layerfeature',
          'values': [
            'Municipalites.Quebec-987',
            'Zonage-120'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#date_adoption',
          'values': [
            '2019-10-15'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#statut',
          'values': [
            'http://ref.irosoft.com/listSkos/statut#actif'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#canWrite',
          'values': [
            'false'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#canChangePermission',
          'values': [
            'false'
          ]
        }
      ]
    } ,
    {
      'documentId': '1e09428d-e752-48dd-b646-40b3fd5cc2d4',
      'groupVersionId': '0802-2017',
      'repositoryId': 'shawinigan.qc.ca',
      'filename': '0802-2017_20170928.pdf',
      'doctype': 'http://ref.irosoft.com/profil_metadonnees/reglement_codifie',
      'mimetype': 'application/pdf',
      'lang': 'fr',
      'authorId': 'robert',
      'size': '759361',
      'modificationDate': '2020-11-09T11:56:09',
      'creationDate': '2017-08-22T10:55:44',
      'customMetas': [
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#titre',
          'values': [
            'Règlement sur les pesticides'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#type_document',
          'values': [
            'Règlement codifié'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#numero',
          'values': [
            '452'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#ordre_de_tri',
          'values': [
            '2019-0802'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#derniere_version',
          'values': [
            'true'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#date_avis_de_motion',
          'values': [
            '2019-09-02'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#date_entree_en_vigueur',
          'values': [
            '2019-10-31'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/client#featureid',
          'values': [
            '987',
            '120'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#derniere_mise_a_jour',
          'values': [
            '2020-01-10'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#display_format',
          'values': [
            'html'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#filename',
          'values': [
            '0802-2019_20191031.pdf'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#formattedLabel',
          'values': [
            'Règlement sur les pesticides'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#numero_de_reglement',
          'values': [
            '0802-2019'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/client#derniere_version',
          'values': [
            'true'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/client#layerid',
          'values': [
            'Municipalites.Quebec',
            'Zonage'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#usager_modification',
          'values': [
            'ppaquette'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#mot_clef',
          'values': [
            'Pesticides; produits nocifs; contamination; environnement'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#sujet_reglement',
          'values': [
            'http://ref.irosoft.com/listSkos/sujets_des_reglements#environnement'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#md5_source',
          'values': [
            'ACAFDD7199C3AFD54B3B816EAB64AF7C'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#description',
          'values': [
            'Le présent règlement s’applique à toute personne qui procède à l’application extérieure de pesticides, incluant les pesticides à faible impact, ainsi qu’à tout entrepreneur qui procède à l’application extérieure de pesticides, de pesticides à faible impact, d’agents de lutte biologique ainsi qu’à l’épandage d’engrais et de suppléments.'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#md5_pdf',
          'values': [
            '3F8F32D09E44FE2CA94DE5F4651173DD'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#confidentiel',
          'values': [
            'false'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#downloadable',
          'values': [
            'true'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/client#layerfeature',
          'values': [
            'Municipalites.Quebec-987',
            'Zonage-120'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#date_adoption',
          'values': [
            '2019-10-15'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#statut',
          'values': [
            'http://ref.irosoft.com/listSkos/statut#actif'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#canWrite',
          'values': [
            'false'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#canChangePermission',
          'values': [
            'false'
          ]
        }
      ]
    },
    {
      'documentId': '06501372-b28c-48d7-bada-1635a614f4e3',
      'groupVersionId': '0802-2017',
      'repositoryId': 'shawinigan.qc.ca',
      'filename': '0802-2017_20170428.pdf',
      'doctype': 'http://ref.irosoft.com/profil_metadonnees/reglement_codifie',
      'mimetype': 'application/pdf',
      'lang': 'fr',
      'authorId': 'robert',
      'size': '759361',
      'modificationDate': '2020-11-09T11:56:09',
      'creationDate': '2017-04-22T10:55:44',
      'customMetas': [
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#titre',
          'values': [
            'Règlement sur les pesticides'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#type_document',
          'values': [
            'Règlement codifié'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#numero',
          'values': [
            '452'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#ordre_de_tri',
          'values': [
            '2019-0802'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#derniere_version',
          'values': [
            'true'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#date_avis_de_motion',
          'values': [
            '2019-09-02'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#date_entree_en_vigueur',
          'values': [
            '2019-10-31'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/client#featureid',
          'values': [
            '987',
            '120'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#derniere_mise_a_jour',
          'values': [
            '2020-01-10'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#display_format',
          'values': [
            'html'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#filename',
          'values': [
            '0802-2019_20191031.pdf'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#formattedLabel',
          'values': [
            'Règlement sur les pesticides'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#numero_de_reglement',
          'values': [
            '0802-2019'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/client#derniere_version',
          'values': [
            'true'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/client#layerid',
          'values': [
            'Municipalites.Quebec',
            'Zonage'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#usager_modification',
          'values': [
            'ppaquette'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#mot_clef',
          'values': [
            'Pesticides; produits nocifs; contamination; environnement'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#sujet_reglement',
          'values': [
            'http://ref.irosoft.com/listSkos/sujets_des_reglements#environnement'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#md5_source',
          'values': [
            'ACAFDD7199C3AFD54B3B816EAB64AF7C'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#description',
          'values': [
            'Le présent règlement s’applique à toute personne qui procède à l’application extérieure de pesticides, incluant les pesticides à faible impact, ainsi qu’à tout entrepreneur qui procède à l’application extérieure de pesticides, de pesticides à faible impact, d’agents de lutte biologique ainsi qu’à l’épandage d’engrais et de suppléments.'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#md5_pdf',
          'values': [
            '3F8F32D09E44FE2CA94DE5F4651173DD'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#confidentiel',
          'values': [
            'false'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#downloadable',
          'values': [
            'true'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/client#layerfeature',
          'values': [
            'Municipalites.Quebec-987',
            'Zonage-120'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#date_adoption',
          'values': [
            '2019-10-15'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#statut',
          'values': [
            'http://ref.irosoft.com/listSkos/statut#actif'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#canWrite',
          'values': [
            'false'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#canChangePermission',
          'values': [
            'false'
          ]
        }
      ]
    },


    
    {
      'documentId': '334dba03-c270-4b31-8e86-554514e7676f',
      'groupVersionId': '0820-2010',
      'repositoryId': 'municipalites.qc.ca',
      'filename': '0820-20100131.pdf',
      'doctype': 'http://ref.irosoft.com/profil_metadonnees/reglement_codifie',
      'mimetype': 'application/pdf',
      'lang': 'fr',
      'authorId': 'robert',
      'size': '759361',
      'modificationDate': '2016-12-09T11:56:09',
      'creationDate': '2010-01-22T10:55:44',
      'customMetas': [
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#titre',
          'values': [
            'Règlement sur les pesticides'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#type_document',
          'values': [
            'Règlement codifié'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#numero',
          'values': [
            '452'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#ordre_de_tri',
          'values': [
            '2019-0802'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#derniere_version',
          'values': [
            'true'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#date_avis_de_motion',
          'values': [
            '2019-09-02'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#date_entree_en_vigueur',
          'values': [
            '2019-10-31'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/client#featureid',
          'values': [
            '987',
            '120'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#derniere_mise_a_jour',
          'values': [
            '2020-01-10'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#display_format',
          'values': [
            'html'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#filename',
          'values': [
            '0802-2019_20191031.pdf'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#formattedLabel',
          'values': [
            'Règlement sur les pesticides'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#numero_de_reglement',
          'values': [
            '0802-2019'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/client#derniere_version',
          'values': [
            'true'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/client#layerid',
          'values': [
            'Municipalites.Quebec',
            'Zonage'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#usager_modification',
          'values': [
            'ppaquette'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#mot_clef',
          'values': [
            'Pesticides; produits nocifs; contamination; environnement'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#sujet_reglement',
          'values': [
            'http://ref.irosoft.com/listSkos/sujets_des_reglements#environnement'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#md5_source',
          'values': [
            'ACAFDD7199C3AFD54B3B816EAB64AF7C'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#description',
          'values': [
            'Le présent règlement s’applique à toute personne qui procède à l’application extérieure de pesticides, incluant les pesticides à faible impact, ainsi qu’à tout entrepreneur qui procède à l’application extérieure de pesticides, de pesticides à faible impact, d’agents de lutte biologique ainsi qu’à l’épandage d’engrais et de suppléments.'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#md5_pdf',
          'values': [
            '3F8F32D09E44FE2CA94DE5F4651173DD'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#confidentiel',
          'values': [
            'false'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#downloadable',
          'values': [
            'true'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/client#layerfeature',
          'values': [
            'Municipalites.Quebec-987',
            'Zonage-120'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#date_adoption',
          'values': [
            '2019-10-15'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#statut',
          'values': [
            'http://ref.irosoft.com/listSkos/statut#actif'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#canWrite',
          'values': [
            'false'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#canChangePermission',
          'values': [
            'false'
          ]
        }
      ]
    }
    ,
    {
      'documentId': '02ed830a-cf74-4bbf-8c02-ff49558b4101',
      'groupVersionId': '0820-2010',
      'repositoryId': 'municipalites.qc.ca',
      'filename': '0820-20100321.pdf',
      'doctype': 'http://ref.irosoft.com/profil_metadonnees/reglement_codifie',
      'mimetype': 'application/pdf',
      'lang': 'fr',
      'authorId': 'robert',
      'size': '759361',
      'modificationDate': '2016-12-09T11:56:09',
      'creationDate': '2010-03-22T10:55:44',
      'customMetas': [
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#titre',
          'values': [
            'Règlement sur les pesticides'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#type_document',
          'values': [
            'Règlement codifié'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#numero',
          'values': [
            '452'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#ordre_de_tri',
          'values': [
            '2019-0802'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#derniere_version',
          'values': [
            'true'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#date_avis_de_motion',
          'values': [
            '2019-09-02'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#date_entree_en_vigueur',
          'values': [
            '2019-10-31'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/client#featureid',
          'values': [
            '987',
            '120'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#derniere_mise_a_jour',
          'values': [
            '2020-01-10'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#display_format',
          'values': [
            'html'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#filename',
          'values': [
            '0802-2019_20191031.pdf'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#formattedLabel',
          'values': [
            'Règlement sur les pesticides'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#numero_de_reglement',
          'values': [
            '0802-2019'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/client#derniere_version',
          'values': [
            'true'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/client#layerid',
          'values': [
            'Municipalites.Quebec',
            'Zonage'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#usager_modification',
          'values': [
            'ppaquette'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#mot_clef',
          'values': [
            'Pesticides; produits nocifs; contamination; environnement'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#sujet_reglement',
          'values': [
            'http://ref.irosoft.com/listSkos/sujets_des_reglements#environnement'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#md5_source',
          'values': [
            'ACAFDD7199C3AFD54B3B816EAB64AF7C'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#description',
          'values': [
            'Le présent règlement s’applique à toute personne qui procède à l’application extérieure de pesticides, incluant les pesticides à faible impact, ainsi qu’à tout entrepreneur qui procède à l’application extérieure de pesticides, de pesticides à faible impact, d’agents de lutte biologique ainsi qu’à l’épandage d’engrais et de suppléments.'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#md5_pdf',
          'values': [
            '3F8F32D09E44FE2CA94DE5F4651173DD'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#confidentiel',
          'values': [
            'false'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#downloadable',
          'values': [
            'true'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/client#layerfeature',
          'values': [
            'Municipalites.Quebec-987',
            'Zonage-120'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#date_adoption',
          'values': [
            '2019-10-15'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#statut',
          'values': [
            'http://ref.irosoft.com/listSkos/statut#actif'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#canWrite',
          'values': [
            'false'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#canChangePermission',
          'values': [
            'false'
          ]
        }
      ]
    }
    ,
    {
      'documentId': 'bc7d3c49-a101-4b2d-b396-d766ba32ee47',
      'groupVersionId': '0820-2010',
      'repositoryId': 'municipalites.qc.ca',
      'filename': '0820-20100323.pdf',
      'doctype': 'http://ref.irosoft.com/profil_metadonnees/reglement_codifie',
      'mimetype': 'application/pdf',
      'lang': 'fr',
      'authorId': 'robert',
      'size': '759361',
      'modificationDate': '2016-12-09T11:56:09',
      'creationDate': '2010-03-22T10:55:44',
      'customMetas': [
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#titre',
          'values': [
            'Règlement sur les pesticides'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#type_document',
          'values': [
            'Règlement codifié'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#numero',
          'values': [
            '452'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#ordre_de_tri',
          'values': [
            '2019-0802'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#derniere_version',
          'values': [
            'true'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#date_avis_de_motion',
          'values': [
            '2019-09-02'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#date_entree_en_vigueur',
          'values': [
            '2019-10-31'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/client#featureid',
          'values': [
            '987',
            '120'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#derniere_mise_a_jour',
          'values': [
            '2020-01-10'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#display_format',
          'values': [
            'html'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#filename',
          'values': [
            '0802-2019_20191031.pdf'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#formattedLabel',
          'values': [
            'Règlement sur les pesticides'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#numero_de_reglement',
          'values': [
            '0802-2019'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/client#derniere_version',
          'values': [
            'true'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/client#layerid',
          'values': [
            'Municipalites.Quebec',
            'Zonage'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#usager_modification',
          'values': [
            'ppaquette'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#mot_clef',
          'values': [
            'Pesticides; produits nocifs; contamination; environnement'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#sujet_reglement',
          'values': [
            'http://ref.irosoft.com/listSkos/sujets_des_reglements#environnement'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#md5_source',
          'values': [
            'ACAFDD7199C3AFD54B3B816EAB64AF7C'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#description',
          'values': [
            'Le présent règlement s’applique à toute personne qui procède à l’application extérieure de pesticides, incluant les pesticides à faible impact, ainsi qu’à tout entrepreneur qui procède à l’application extérieure de pesticides, de pesticides à faible impact, d’agents de lutte biologique ainsi qu’à l’épandage d’engrais et de suppléments.'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#md5_pdf',
          'values': [
            '3F8F32D09E44FE2CA94DE5F4651173DD'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#confidentiel',
          'values': [
            'false'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#downloadable',
          'values': [
            'true'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/client#layerfeature',
          'values': [
            'Municipalites.Quebec-987',
            'Zonage-120'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#date_adoption',
          'values': [
            '2019-10-15'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#statut',
          'values': [
            'http://ref.irosoft.com/listSkos/statut#actif'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#canWrite',
          'values': [
            'false'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#canChangePermission',
          'values': [
            'false'
          ]
        }
      ]
    },
    {
      'documentId': '4c10fa6b-d76b-4953-be43-872e1d491dd4',
      'groupVersionId': '0820-2010',
      'repositoryId': 'municipalites.qc.ca',
      'filename': '0820-20100335.pdf',
      'doctype': 'http://ref.irosoft.com/profil_metadonnees/reglement_codifie',
      'mimetype': 'application/pdf',
      'lang': 'fr',
      'authorId': 'robert',
      'size': '759361',
      'modificationDate': '2016-12-09T11:56:09',
      'creationDate': '2010-03-22T10:55:44',
      'customMetas': [
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#titre',
          'values': [
            'Règlement sur les pesticides'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#type_document',
          'values': [
            'Règlement codifié'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#numero',
          'values': [
            '452'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#ordre_de_tri',
          'values': [
            '2019-0802'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#derniere_version',
          'values': [
            'true'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#date_avis_de_motion',
          'values': [
            '2019-09-02'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#date_entree_en_vigueur',
          'values': [
            '2019-10-31'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/client#featureid',
          'values': [
            '987',
            '120'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#derniere_mise_a_jour',
          'values': [
            '2020-01-10'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#display_format',
          'values': [
            'html'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#filename',
          'values': [
            '0802-2019_20191031.pdf'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#formattedLabel',
          'values': [
            'Règlement sur les pesticides'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#numero_de_reglement',
          'values': [
            '0802-2019'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/client#derniere_version',
          'values': [
            'true'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/client#layerid',
          'values': [
            'Municipalites.Quebec',
            'Zonage'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#usager_modification',
          'values': [
            'ppaquette'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#mot_clef',
          'values': [
            'Pesticides; produits nocifs; contamination; environnement'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#sujet_reglement',
          'values': [
            'http://ref.irosoft.com/listSkos/sujets_des_reglements#environnement'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#md5_source',
          'values': [
            'ACAFDD7199C3AFD54B3B816EAB64AF7C'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#description',
          'values': [
            'Le présent règlement s’applique à toute personne qui procède à l’application extérieure de pesticides, incluant les pesticides à faible impact, ainsi qu’à tout entrepreneur qui procède à l’application extérieure de pesticides, de pesticides à faible impact, d’agents de lutte biologique ainsi qu’à l’épandage d’engrais et de suppléments.'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#md5_pdf',
          'values': [
            '3F8F32D09E44FE2CA94DE5F4651173DD'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#confidentiel',
          'values': [
            'false'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#downloadable',
          'values': [
            'true'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/client#layerfeature',
          'values': [
            'Municipalites.Quebec-987',
            'Zonage-120'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#date_adoption',
          'values': [
            '2019-10-15'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#statut',
          'values': [
            'http://ref.irosoft.com/listSkos/statut#actif'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#canWrite',
          'values': [
            'false'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#canChangePermission',
          'values': [
            'false'
          ]
        }
      ]
    },
    {
      'documentId': '80cc9fbe-4d90-4571-b7f8-2c3e55395319',
      'groupVersionId': '0820-2010',
      'repositoryId': 'municipalites.qc.ca',
      'filename': '0820-20100325.pdf',
      'doctype': 'http://ref.irosoft.com/profil_metadonnees/reglement_codifie',
      'mimetype': 'application/pdf',
      'lang': 'fr',
      'authorId': 'robert',
      'size': '759361',
      'modificationDate': '2016-12-09T11:56:09',
      'creationDate': '2010-03-22T10:55:44',
      'customMetas': [
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#titre',
          'values': [
            'Règlement sur les pesticides'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#type_document',
          'values': [
            'Règlement codifié'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#numero',
          'values': [
            '452'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#ordre_de_tri',
          'values': [
            '2019-0802'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#derniere_version',
          'values': [
            'true'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#date_avis_de_motion',
          'values': [
            '2019-09-02'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#date_entree_en_vigueur',
          'values': [
            '2019-10-31'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/client#featureid',
          'values': [
            '987',
            '120'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#derniere_mise_a_jour',
          'values': [
            '2020-01-10'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#display_format',
          'values': [
            'html'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#filename',
          'values': [
            '0802-2019_20191031.pdf'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#formattedLabel',
          'values': [
            'Règlement sur les pesticides'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#numero_de_reglement',
          'values': [
            '0802-2019'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/client#derniere_version',
          'values': [
            'true'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/client#layerid',
          'values': [
            'Municipalites.Quebec',
            'Zonage'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#usager_modification',
          'values': [
            'ppaquette'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#mot_clef',
          'values': [
            'Pesticides; produits nocifs; contamination; environnement'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#sujet_reglement',
          'values': [
            'http://ref.irosoft.com/listSkos/sujets_des_reglements#environnement'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#md5_source',
          'values': [
            'ACAFDD7199C3AFD54B3B816EAB64AF7C'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#description',
          'values': [
            'Le présent règlement s’applique à toute personne qui procède à l’application extérieure de pesticides, incluant les pesticides à faible impact, ainsi qu’à tout entrepreneur qui procède à l’application extérieure de pesticides, de pesticides à faible impact, d’agents de lutte biologique ainsi qu’à l’épandage d’engrais et de suppléments.'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#md5_pdf',
          'values': [
            '3F8F32D09E44FE2CA94DE5F4651173DD'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#confidentiel',
          'values': [
            'false'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#downloadable',
          'values': [
            'true'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/client#layerfeature',
          'values': [
            'Municipalites.Quebec-987',
            'Zonage-120'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#date_adoption',
          'values': [
            '2019-10-15'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#statut',
          'values': [
            'http://ref.irosoft.com/listSkos/statut#actif'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#canWrite',
          'values': [
            'false'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#canChangePermission',
          'values': [
            'false'
          ]
        }
      ]
    },
    {
      'documentId': 'd19af565-75b7-4e59-8ffc-229a44e25c4a',
      'groupVersionId': '0820-2010',
      'repositoryId': 'municipalites.qc.ca',
      'filename': '0820-20100326.pdf',
      'doctype': 'http://ref.irosoft.com/profil_metadonnees/reglement_codifie',
      'mimetype': 'application/pdf',
      'lang': 'fr',
      'authorId': 'Patrick',
      'size': '759361',
      'modificationDate': '2016-12-09T11:56:09',
      'creationDate': '2010-03-22T10:55:44',
      'customMetas': [
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#titre',
          'values': [
            'Règlement sur les pesticides'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#type_document',
          'values': [
            'Règlement codifié'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#numero',
          'values': [
            '452'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#ordre_de_tri',
          'values': [
            '2019-0802'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#derniere_version',
          'values': [
            'true'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#date_avis_de_motion',
          'values': [
            '2019-09-02'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#date_entree_en_vigueur',
          'values': [
            '2019-10-31'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/client#featureid',
          'values': [
            '987',
            '120'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#derniere_mise_a_jour',
          'values': [
            '2020-01-10'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#display_format',
          'values': [
            'html'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#filename',
          'values': [
            '0802-2019_20191031.pdf'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#formattedLabel',
          'values': [
            'Règlement sur les pesticides'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#numero_de_reglement',
          'values': [
            '0802-2019'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/client#derniere_version',
          'values': [
            'true'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/client#layerid',
          'values': [
            'Municipalites.Quebec',
            'Zonage'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#usager_modification',
          'values': [
            'ppaquette'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#mot_clef',
          'values': [
            'Pesticides; produits nocifs; contamination; environnement'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#sujet_reglement',
          'values': [
            'http://ref.irosoft.com/listSkos/sujets_des_reglements#environnement'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#md5_source',
          'values': [
            'ACAFDD7199C3AFD54B3B816EAB64AF7C'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#description',
          'values': [
            'Le présent règlement s’applique à toute personne qui procède à l’application extérieure de pesticides, incluant les pesticides à faible impact, ainsi qu’à tout entrepreneur qui procède à l’application extérieure de pesticides, de pesticides à faible impact, d’agents de lutte biologique ainsi qu’à l’épandage d’engrais et de suppléments.'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#md5_pdf',
          'values': [
            '3F8F32D09E44FE2CA94DE5F4651173DD'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#confidentiel',
          'values': [
            'false'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#downloadable',
          'values': [
            'true'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/client#layerfeature',
          'values': [
            'Municipalites.Quebec-987',
            'Zonage-120'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#date_adoption',
          'values': [
            '2019-10-15'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#statut',
          'values': [
            'http://ref.irosoft.com/listSkos/statut#actif'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#canWrite',
          'values': [
            'false'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#canChangePermission',
          'values': [
            'false'
          ]
        }
      ]
    },  {
      'documentId': 'b4eaf6c2-5a4b-47cf-8b3d-b0d85bbc47c3',
      'groupVersionId': '0820-2010',
      'repositoryId': 'municipalites.qc.ca',
      'filename': '0820-20100327.pdf',
      'doctype': 'http://ref.irosoft.com/profil_metadonnees/reglement_codifie',
      'mimetype': 'application/pdf',
      'lang': 'fr',
      'authorId': 'robert',
      'size': '759361',
      'modificationDate': '2016-12-09T11:56:09',
      'creationDate': '2010-03-22T10:55:44',
      'customMetas': [
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#titre',
          'values': [
            'Règlement sur les pesticides'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#type_document',
          'values': [
            'Règlement codifié'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#numero',
          'values': [
            '452'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#ordre_de_tri',
          'values': [
            '2019-0802'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#derniere_version',
          'values': [
            'true'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#date_avis_de_motion',
          'values': [
            '2019-09-02'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#date_entree_en_vigueur',
          'values': [
            '2019-10-31'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/client#featureid',
          'values': [
            '987',
            '120'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#derniere_mise_a_jour',
          'values': [
            '2020-01-10'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#display_format',
          'values': [
            'html'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#filename',
          'values': [
            '0802-2019_20191031.pdf'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#formattedLabel',
          'values': [
            'Règlement sur les pesticides'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#numero_de_reglement',
          'values': [
            '0802-2019'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/client#derniere_version',
          'values': [
            'true'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/client#layerid',
          'values': [
            'Municipalites.Quebec',
            'Zonage'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#usager_modification',
          'values': [
            'ppaquette'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#mot_clef',
          'values': [
            'Pesticides; produits nocifs; contamination; environnement'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#sujet_reglement',
          'values': [
            'http://ref.irosoft.com/listSkos/sujets_des_reglements#environnement'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#md5_source',
          'values': [
            'ACAFDD7199C3AFD54B3B816EAB64AF7C'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#description',
          'values': [
            'Le présent règlement s’applique à toute personne qui procède à l’application extérieure de pesticides, incluant les pesticides à faible impact, ainsi qu’à tout entrepreneur qui procède à l’application extérieure de pesticides, de pesticides à faible impact, d’agents de lutte biologique ainsi qu’à l’épandage d’engrais et de suppléments.'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#md5_pdf',
          'values': [
            '3F8F32D09E44FE2CA94DE5F4651173DD'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#confidentiel',
          'values': [
            'false'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#downloadable',
          'values': [
            'true'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/client#layerfeature',
          'values': [
            'Municipalites.Quebec-987',
            'Zonage-120'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#date_adoption',
          'values': [
            '2019-10-15'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#statut',
          'values': [
            'http://ref.irosoft.com/listSkos/statut#actif'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#canWrite',
          'values': [
            'false'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#canChangePermission',
          'values': [
            'false'
          ]
        }
      ]
    },  {
      'documentId': '172a1d51-195f-4635-94be-4afde21974e6',
      'groupVersionId': '0820-2010',
      'repositoryId': 'municipalites.qc.ca',
      'filename': '0820-20100328.pdf',
      'doctype': 'http://ref.irosoft.com/profil_metadonnees/reglement_codifie',
      'mimetype': 'application/pdf',
      'lang': 'fr',
      'authorId': 'robert',
      'size': '759361',
      'modificationDate': '2016-12-09T11:56:09',
      'creationDate': '2010-03-22T10:55:44',
      'customMetas': [
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#titre',
          'values': [
            'Règlement sur les pesticides'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#type_document',
          'values': [
            'Règlement codifié'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#numero',
          'values': [
            '452'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#ordre_de_tri',
          'values': [
            '2019-0802'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#derniere_version',
          'values': [
            'true'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#date_avis_de_motion',
          'values': [
            '2019-09-02'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#date_entree_en_vigueur',
          'values': [
            '2019-10-31'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/client#featureid',
          'values': [
            '987',
            '120'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#derniere_mise_a_jour',
          'values': [
            '2020-01-10'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#display_format',
          'values': [
            'html'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#filename',
          'values': [
            '0802-2019_20191031.pdf'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#formattedLabel',
          'values': [
            'Règlement sur les pesticides'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#numero_de_reglement',
          'values': [
            '0802-2019'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/client#derniere_version',
          'values': [
            'true'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/client#layerid',
          'values': [
            'Municipalites.Quebec',
            'Zonage'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#usager_modification',
          'values': [
            'ppaquette'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#mot_clef',
          'values': [
            'Pesticides; produits nocifs; contamination; environnement'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#sujet_reglement',
          'values': [
            'http://ref.irosoft.com/listSkos/sujets_des_reglements#environnement'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#md5_source',
          'values': [
            'ACAFDD7199C3AFD54B3B816EAB64AF7C'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#description',
          'values': [
            'Le présent règlement s’applique à toute personne qui procède à l’application extérieure de pesticides, incluant les pesticides à faible impact, ainsi qu’à tout entrepreneur qui procède à l’application extérieure de pesticides, de pesticides à faible impact, d’agents de lutte biologique ainsi qu’à l’épandage d’engrais et de suppléments.'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#md5_pdf',
          'values': [
            '3F8F32D09E44FE2CA94DE5F4651173DD'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#confidentiel',
          'values': [
            'false'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#downloadable',
          'values': [
            'true'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/client#layerfeature',
          'values': [
            'Municipalites.Quebec-987',
            'Zonage-120'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#date_adoption',
          'values': [
            '2019-10-15'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#statut',
          'values': [
            'http://ref.irosoft.com/listSkos/statut#actif'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#canWrite',
          'values': [
            'false'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#canChangePermission',
          'values': [
            'false'
          ]
        }
      ]
    },  {
      'documentId': '87f171f7-2922-45d2-9b15-3866cfe04cc9',
      'groupVersionId': '0820-2010',
      'repositoryId': 'municipalites.qc.ca',
      'filename': '0820-20100329.pdf',
      'doctype': 'http://ref.irosoft.com/profil_metadonnees/reglement_codifie',
      'mimetype': 'application/pdf',
      'lang': 'fr',
      'authorId': 'robert',
      'size': '759361',
      'modificationDate': '2016-12-09T11:56:09',
      'creationDate': '2010-03-22T10:55:44',
      'customMetas': [
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#titre',
          'values': [
            'Règlement sur les pesticides'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#type_document',
          'values': [
            'Règlement codifié'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#numero',
          'values': [
            '452'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#ordre_de_tri',
          'values': [
            '2019-0802'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#derniere_version',
          'values': [
            'true'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#date_avis_de_motion',
          'values': [
            '2019-09-02'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#date_entree_en_vigueur',
          'values': [
            '2019-10-31'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/client#featureid',
          'values': [
            '987',
            '120'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#derniere_mise_a_jour',
          'values': [
            '2020-01-10'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#display_format',
          'values': [
            'html'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#filename',
          'values': [
            '0802-2019_20191031.pdf'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#formattedLabel',
          'values': [
            'Règlement sur les pesticides'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#numero_de_reglement',
          'values': [
            '0802-2019'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/client#derniere_version',
          'values': [
            'true'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/client#layerid',
          'values': [
            'Municipalites.Quebec',
            'Zonage'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#usager_modification',
          'values': [
            'ppaquette'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#mot_clef',
          'values': [
            'Pesticides; produits nocifs; contamination; environnement'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#sujet_reglement',
          'values': [
            'http://ref.irosoft.com/listSkos/sujets_des_reglements#environnement'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#md5_source',
          'values': [
            'ACAFDD7199C3AFD54B3B816EAB64AF7C'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#description',
          'values': [
            'Le présent règlement s’applique à toute personne qui procède à l’application extérieure de pesticides, incluant les pesticides à faible impact, ainsi qu’à tout entrepreneur qui procède à l’application extérieure de pesticides, de pesticides à faible impact, d’agents de lutte biologique ainsi qu’à l’épandage d’engrais et de suppléments.'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#md5_pdf',
          'values': [
            '3F8F32D09E44FE2CA94DE5F4651173DD'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#confidentiel',
          'values': [
            'false'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#downloadable',
          'values': [
            'true'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/client#layerfeature',
          'values': [
            'Municipalites.Quebec-987',
            'Zonage-120'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#date_adoption',
          'values': [
            '2019-10-15'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#statut',
          'values': [
            'http://ref.irosoft.com/listSkos/statut#actif'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#canWrite',
          'values': [
            'false'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#canChangePermission',
          'values': [
            'false'
          ]
        }
      ]
    },  {
      'documentId': 'b3a295a7-6715-4aea-bcc6-9d5947a57515',
      'groupVersionId': '0820-2010',
      'repositoryId': 'municipalites.qc.ca',
      'filename': '0820-20100330.pdf',
      'doctype': 'http://ref.irosoft.com/profil_metadonnees/reglement_codifie',
      'mimetype': 'application/pdf',
      'lang': 'fr',
      'authorId': 'robert',
      'size': '759361',
      'modificationDate': '2016-12-09T11:56:09',
      'creationDate': '2010-03-22T10:55:44',
      'customMetas': [
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#titre',
          'values': [
            'Règlement sur les pesticides'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#type_document',
          'values': [
            'Règlement codifié'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#numero',
          'values': [
            '452'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#ordre_de_tri',
          'values': [
            '2019-0802'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#derniere_version',
          'values': [
            'true'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#date_avis_de_motion',
          'values': [
            '2019-09-02'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#date_entree_en_vigueur',
          'values': [
            '2019-10-31'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/client#featureid',
          'values': [
            '987',
            '120'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#derniere_mise_a_jour',
          'values': [
            '2020-01-10'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#display_format',
          'values': [
            'html'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#filename',
          'values': [
            '0802-2019_20191031.pdf'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#formattedLabel',
          'values': [
            'Règlement sur les pesticides'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#numero_de_reglement',
          'values': [
            '0802-2019'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/client#derniere_version',
          'values': [
            'true'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/client#layerid',
          'values': [
            'Municipalites.Quebec',
            'Zonage'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#usager_modification',
          'values': [
            'ppaquette'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#mot_clef',
          'values': [
            'Pesticides; produits nocifs; contamination; environnement'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#sujet_reglement',
          'values': [
            'http://ref.irosoft.com/listSkos/sujets_des_reglements#environnement'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#md5_source',
          'values': [
            'ACAFDD7199C3AFD54B3B816EAB64AF7C'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#description',
          'values': [
            'Le présent règlement s’applique à toute personne qui procède à l’application extérieure de pesticides, incluant les pesticides à faible impact, ainsi qu’à tout entrepreneur qui procède à l’application extérieure de pesticides, de pesticides à faible impact, d’agents de lutte biologique ainsi qu’à l’épandage d’engrais et de suppléments.'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#md5_pdf',
          'values': [
            '3F8F32D09E44FE2CA94DE5F4651173DD'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#confidentiel',
          'values': [
            'false'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#downloadable',
          'values': [
            'true'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/client#layerfeature',
          'values': [
            'Municipalites.Quebec-987',
            'Zonage-120'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#date_adoption',
          'values': [
            '2019-10-15'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#statut',
          'values': [
            'http://ref.irosoft.com/listSkos/statut#actif'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#canWrite',
          'values': [
            'false'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#canChangePermission',
          'values': [
            'false'
          ]
        }
      ]
    },  {
      'documentId': 'eb852a4b-789c-48d4-855e-3fce756379fa',
      'groupVersionId': '0820-2010',
      'repositoryId': 'municipalites.qc.ca',
      'filename': '0820-20100331.pdf',
      'doctype': 'http://ref.irosoft.com/profil_metadonnees/reglement_codifie',
      'mimetype': 'application/pdf',
      'lang': 'fr',
      'authorId': 'robert',
      'size': '759361',
      'modificationDate': '2016-12-09T11:56:09',
      'creationDate': '2010-03-22T10:55:44',
      'customMetas': [
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#titre',
          'values': [
            'Règlement sur les pesticides'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#type_document',
          'values': [
            'Règlement codifié'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#numero',
          'values': [
            '452'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#ordre_de_tri',
          'values': [
            '2019-0802'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#derniere_version',
          'values': [
            'true'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#date_avis_de_motion',
          'values': [
            '2019-09-02'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#date_entree_en_vigueur',
          'values': [
            '2019-10-31'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/client#featureid',
          'values': [
            '987',
            '120'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#derniere_mise_a_jour',
          'values': [
            '2020-01-10'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#display_format',
          'values': [
            'html'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#filename',
          'values': [
            '0802-2019_20191031.pdf'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#formattedLabel',
          'values': [
            'Règlement sur les pesticides'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#numero_de_reglement',
          'values': [
            '0802-2019'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/client#derniere_version',
          'values': [
            'true'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/client#layerid',
          'values': [
            'Municipalites.Quebec',
            'Zonage'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#usager_modification',
          'values': [
            'ppaquette'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#mot_clef',
          'values': [
            'Pesticides; produits nocifs; contamination; environnement'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#sujet_reglement',
          'values': [
            'http://ref.irosoft.com/listSkos/sujets_des_reglements#environnement'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#md5_source',
          'values': [
            'ACAFDD7199C3AFD54B3B816EAB64AF7C'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#description',
          'values': [
            'Le présent règlement s’applique à toute personne qui procède à l’application extérieure de pesticides, incluant les pesticides à faible impact, ainsi qu’à tout entrepreneur qui procède à l’application extérieure de pesticides, de pesticides à faible impact, d’agents de lutte biologique ainsi qu’à l’épandage d’engrais et de suppléments.'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#md5_pdf',
          'values': [
            '3F8F32D09E44FE2CA94DE5F4651173DD'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#confidentiel',
          'values': [
            'false'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#downloadable',
          'values': [
            'true'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/client#layerfeature',
          'values': [
            'Municipalites.Quebec-987',
            'Zonage-120'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#date_adoption',
          'values': [
            '2019-10-15'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#statut',
          'values': [
            'http://ref.irosoft.com/listSkos/statut#actif'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#canWrite',
          'values': [
            'false'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#canChangePermission',
          'values': [
            'false'
          ]
        }
      ]
    },  {
      'documentId': '4898ec3e-620c-4925-91a5-3216fdab3ec0',
      'groupVersionId': '0820-2010',
      'repositoryId': 'municipalites.qc.ca',
      'filename': '0820-20100332.pdf',
      'doctype': 'http://ref.irosoft.com/profil_metadonnees/reglement_codifie',
      'mimetype': 'application/pdf',
      'lang': 'fr',
      'authorId': 'robert',
      'size': '759361',
      'modificationDate': '2016-12-09T11:56:09',
      'creationDate': '2010-03-22T10:55:44',
      'customMetas': [
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#titre',
          'values': [
            'Règlement sur les pesticides'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#type_document',
          'values': [
            'Règlement codifié'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#numero',
          'values': [
            '452'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#ordre_de_tri',
          'values': [
            '2019-0802'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#derniere_version',
          'values': [
            'true'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#date_avis_de_motion',
          'values': [
            '2019-09-02'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#date_entree_en_vigueur',
          'values': [
            '2019-10-31'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/client#featureid',
          'values': [
            '987',
            '120'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#derniere_mise_a_jour',
          'values': [
            '2020-01-10'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#display_format',
          'values': [
            'html'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#filename',
          'values': [
            '0802-2019_20191031.pdf'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#formattedLabel',
          'values': [
            'Règlement sur les pesticides'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#numero_de_reglement',
          'values': [
            '0802-2019'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/client#derniere_version',
          'values': [
            'true'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/client#layerid',
          'values': [
            'Municipalites.Quebec',
            'Zonage'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#usager_modification',
          'values': [
            'ppaquette'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#mot_clef',
          'values': [
            'Pesticides; produits nocifs; contamination; environnement'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#sujet_reglement',
          'values': [
            'http://ref.irosoft.com/listSkos/sujets_des_reglements#environnement'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#md5_source',
          'values': [
            'ACAFDD7199C3AFD54B3B816EAB64AF7C'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#description',
          'values': [
            'Le présent règlement s’applique à toute personne qui procède à l’application extérieure de pesticides, incluant les pesticides à faible impact, ainsi qu’à tout entrepreneur qui procède à l’application extérieure de pesticides, de pesticides à faible impact, d’agents de lutte biologique ainsi qu’à l’épandage d’engrais et de suppléments.'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#md5_pdf',
          'values': [
            '3F8F32D09E44FE2CA94DE5F4651173DD'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#confidentiel',
          'values': [
            'false'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#downloadable',
          'values': [
            'true'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/client#layerfeature',
          'values': [
            'Municipalites.Quebec-987',
            'Zonage-120'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#date_adoption',
          'values': [
            '2019-10-15'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#statut',
          'values': [
            'http://ref.irosoft.com/listSkos/statut#actif'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#canWrite',
          'values': [
            'false'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#canChangePermission',
          'values': [
            'false'
          ]
        }
      ]
    },  {
      'documentId': 'ded0e22c-3001-4143-aa69-cfc8633dcd87',
      'groupVersionId': '0820-2010',
      'repositoryId': 'municipalites.qc.ca',
      'filename': '0820-20100333.pdf',
      'doctype': 'http://ref.irosoft.com/profil_metadonnees/reglement_codifie',
      'mimetype': 'application/pdf',
      'lang': 'fr',
      'authorId': 'robert',
      'size': '759361',
      'modificationDate': '2016-12-09T11:56:09',
      'creationDate': '2010-03-22T10:55:44',
      'customMetas': [
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#titre',
          'values': [
            'Règlement sur les pesticides'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#type_document',
          'values': [
            'Règlement codifié'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#numero',
          'values': [
            '452'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#ordre_de_tri',
          'values': [
            '2019-0802'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#derniere_version',
          'values': [
            'true'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#date_avis_de_motion',
          'values': [
            '2019-09-02'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#date_entree_en_vigueur',
          'values': [
            '2019-10-31'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/client#featureid',
          'values': [
            '987',
            '120'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#derniere_mise_a_jour',
          'values': [
            '2020-01-10'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#display_format',
          'values': [
            'html'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#filename',
          'values': [
            '0802-2019_20191031.pdf'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#formattedLabel',
          'values': [
            'Règlement sur les pesticides'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#numero_de_reglement',
          'values': [
            '0802-2019'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/client#derniere_version',
          'values': [
            'true'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/client#layerid',
          'values': [
            'Municipalites.Quebec',
            'Zonage'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#usager_modification',
          'values': [
            'ppaquette'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#mot_clef',
          'values': [
            'Pesticides; produits nocifs; contamination; environnement'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#sujet_reglement',
          'values': [
            'http://ref.irosoft.com/listSkos/sujets_des_reglements#environnement'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#md5_source',
          'values': [
            'ACAFDD7199C3AFD54B3B816EAB64AF7C'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#description',
          'values': [
            'Le présent règlement s’applique à toute personne qui procède à l’application extérieure de pesticides, incluant les pesticides à faible impact, ainsi qu’à tout entrepreneur qui procède à l’application extérieure de pesticides, de pesticides à faible impact, d’agents de lutte biologique ainsi qu’à l’épandage d’engrais et de suppléments.'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#md5_pdf',
          'values': [
            '3F8F32D09E44FE2CA94DE5F4651173DD'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#confidentiel',
          'values': [
            'false'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#downloadable',
          'values': [
            'true'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/client#layerfeature',
          'values': [
            'Municipalites.Quebec-987',
            'Zonage-120'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#date_adoption',
          'values': [
            '2019-10-15'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#statut',
          'values': [
            'http://ref.irosoft.com/listSkos/statut#actif'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#canWrite',
          'values': [
            'false'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#canChangePermission',
          'values': [
            'false'
          ]
        }
      ]
    },  {
      'documentId': '5599f3df-9a86-4176-b406-07c95776b4f3',
      'groupVersionId': '0820-2010',
      'repositoryId': 'municipalites.qc.ca',
      'filename': '0820-20100334.pdf',
      'doctype': 'http://ref.irosoft.com/profil_metadonnees/reglement_codifie',
      'mimetype': 'application/pdf',
      'lang': 'fr',
      'authorId': 'robert',
      'size': '759361',
      'modificationDate': '2016-12-09T11:56:09',
      'creationDate': '2010-03-22T10:55:44',
      'customMetas': [
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#titre',
          'values': [
            'Règlement sur les pesticides'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#type_document',
          'values': [
            'Règlement codifié'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#numero',
          'values': [
            '452'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#ordre_de_tri',
          'values': [
            '2019-0802'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#derniere_version',
          'values': [
            'true'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#date_avis_de_motion',
          'values': [
            '2019-09-02'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#date_entree_en_vigueur',
          'values': [
            '2019-10-31'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/client#featureid',
          'values': [
            '987',
            '120'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#derniere_mise_a_jour',
          'values': [
            '2020-01-10'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#display_format',
          'values': [
            'html'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#filename',
          'values': [
            '0802-2019_20191031.pdf'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#formattedLabel',
          'values': [
            'Règlement sur les pesticides'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#numero_de_reglement',
          'values': [
            '0802-2019'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/client#derniere_version',
          'values': [
            'true'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/client#layerid',
          'values': [
            'Municipalites.Quebec',
            'Zonage'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#usager_modification',
          'values': [
            'ppaquette'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#mot_clef',
          'values': [
            'Pesticides; produits nocifs; contamination; environnement'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#sujet_reglement',
          'values': [
            'http://ref.irosoft.com/listSkos/sujets_des_reglements#environnement'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#md5_source',
          'values': [
            'ACAFDD7199C3AFD54B3B816EAB64AF7C'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#description',
          'values': [
            'Le présent règlement s’applique à toute personne qui procède à l’application extérieure de pesticides, incluant les pesticides à faible impact, ainsi qu’à tout entrepreneur qui procède à l’application extérieure de pesticides, de pesticides à faible impact, d’agents de lutte biologique ainsi qu’à l’épandage d’engrais et de suppléments.'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#md5_pdf',
          'values': [
            '3F8F32D09E44FE2CA94DE5F4651173DD'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#confidentiel',
          'values': [
            'false'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#downloadable',
          'values': [
            'true'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/client#layerfeature',
          'values': [
            'Municipalites.Quebec-987',
            'Zonage-120'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#date_adoption',
          'values': [
            '2019-10-15'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#statut',
          'values': [
            'http://ref.irosoft.com/listSkos/statut#actif'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#canWrite',
          'values': [
            'false'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#canChangePermission',
          'values': [
            'false'
          ]
        }
      ]
    },  {
      'documentId': '5117e5f2-c2bb-4c7a-8399-02081372a29c',
      'groupVersionId': '0820-2010',
      'repositoryId': 'municipalites.qc.ca',
      'filename': '0820-20100322.pdf',
      'doctype': 'http://ref.irosoft.com/profil_metadonnees/reglement_codifie',
      'mimetype': 'application/pdf',
      'lang': 'fr',
      'authorId': 'robert',
      'size': '759361',
      'modificationDate': '2016-12-09T11:56:09',
      'creationDate': '2010-03-22T10:55:44',
      'customMetas': [
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#titre',
          'values': [
            'Règlement sur les pesticides'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#type_document',
          'values': [
            'Règlement codifié'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#numero',
          'values': [
            '452'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#ordre_de_tri',
          'values': [
            '2019-0802'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#derniere_version',
          'values': [
            'true'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#date_avis_de_motion',
          'values': [
            '2019-09-02'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#date_entree_en_vigueur',
          'values': [
            '2019-10-31'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/client#featureid',
          'values': [
            '987',
            '120'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#derniere_mise_a_jour',
          'values': [
            '2020-01-10'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#display_format',
          'values': [
            'html'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#filename',
          'values': [
            '0802-2019_20191031.pdf'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#formattedLabel',
          'values': [
            'Règlement sur les pesticides'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#numero_de_reglement',
          'values': [
            '0802-2019'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/client#derniere_version',
          'values': [
            'true'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/client#layerid',
          'values': [
            'Municipalites.Quebec',
            'Zonage'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#usager_modification',
          'values': [
            'ppaquette'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#mot_clef',
          'values': [
            'Pesticides; produits nocifs; contamination; environnement'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#sujet_reglement',
          'values': [
            'http://ref.irosoft.com/listSkos/sujets_des_reglements#environnement'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#md5_source',
          'values': [
            'ACAFDD7199C3AFD54B3B816EAB64AF7C'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#description',
          'values': [
            'Le présent règlement s’applique à toute personne qui procède à l’application extérieure de pesticides, incluant les pesticides à faible impact, ainsi qu’à tout entrepreneur qui procède à l’application extérieure de pesticides, de pesticides à faible impact, d’agents de lutte biologique ainsi qu’à l’épandage d’engrais et de suppléments.'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#md5_pdf',
          'values': [
            '3F8F32D09E44FE2CA94DE5F4651173DD'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#confidentiel',
          'values': [
            'false'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#downloadable',
          'values': [
            'true'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/client#layerfeature',
          'values': [
            'Municipalites.Quebec-987',
            'Zonage-120'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/docutheque#date_adoption',
          'values': [
            '2019-10-15'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes/juridique#statut',
          'values': [
            'http://ref.irosoft.com/listSkos/statut#actif'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#canWrite',
          'values': [
            'false'
          ]
        },
        {
          'key': 'http://ref.irosoft.com/proprietes_systeme/docutheque#canChangePermission',
          'values': [
            'false'
          ]
        }
      ]
    }
  ],
  // projects: [
  //   {
  //     'id': 42,
  //     'name': 'municipalites.qc.ca',
  //     'description': 'Municipalités du Québec'

  //   },
  //   {
  //     'id': 36,
  //     'name': 'granby.qc.ca',
  //     'description': 'Granby'

  //   },
  //   {
  //     'id': 56,
  //     'name': 'shawinigan.qc.ca',
  //     'description': 'Shawinigan'

  //   },
  //   {
  //     'id': 24,
  //     'name': 'saintbarnard.qc.ca',
  //     'description': 'Saint Bernard'

  //   },
  //   {
  //     'id': 96,
  //     'name': 'warwick.qc.ca',
  //     'description': 'Ville de Warwick'

  //   },
  //   {
  //     'id': 87,
  //     'name': 'saintphilippe.qc.ca',
  //     'description': 'ville de Saint Philippe'

  //   },
  //   {
  //     'id': 12,
  //     'name': 'mun-ndm.qc.ca',
  //     'description': 'Notre Dame de la Merci'
  //   },
  //   {
  //     'id': 60,
  //     'name': 'varennes.qc.ca',
  //     'description': 'Ville de Varennes'
  //   }

  // ],
  // layers: [

  //   //One Layer For General Context
  //   {
  //     'id': 30,
  //     'name': 'Municipalites.Quebec',
  //     'description': 'Municipalités du Québec',
  //     'projectId': 42
  //   },
  //   //Layer For Granby
  //   {
  //     'id': 36,
  //     'name': 'Demo_Quartier',
  //     'description': 'Demo Quartier',
  //     'projectId': 36
  //   },
  //   //Layer shawinigan.qc.ca
  //   {
  //     'id': 50,
  //     'name': 'limites',
  //     'description': 'Limites',
  //     'projectId': 56
  //   },
  //   {
  //     'id': 51,
  //     'name': 'Zonage',
  //     'description': 'Zonage',
  //     'projectId': 56
  //   },
  //   // Layer saintbarnard.qc.ca
  //   {
  //     'id': 888,
  //     'name': 'Parcs',
  //     'description': 'Parcs',
  //     'projectId': 24
  //   },
  //   {
  //     'id': 889,
  //     'name': 'Piscines',
  //     'description': 'Piscines',
  //     'projectId': 24
  //   },
  //   {
  //     'id': 840,
  //     'name': 'Zonage',
  //     'description': 'Zonage',
  //     'projectId': 24
  //   },
  //   //Layers Ville de Warwick
  //   {
  //     'id': 961,
  //     'name': 'Rives',
  //     'description': 'Rives',
  //     'projectId': 96
  //   },
  //   {
  //     'id': 621,
  //     'name': 'Zonage',
  //     'description': 'Zonage',
  //     'projectId': 96
  //   },
  //   {
  //     'id': 901,
  //     'name': 'limites',
  //     'description': 'limites',
  //     'projectId': 96
  //   },
  //   //saintphilippe.qc.ca
  //   {
  //     'id': 400,
  //     'name': 'Limites',
  //     'description': 'Limites',
  //     'projectId': 87
  //   },
  //   {
  //     'id': 993,
  //     'name': 'Zonage',
  //     'description': 'Zonage',
  //     'projectId': 87
  //   }

  // ],
  // features: [
  //   //Feature for Municipalités de Quebec
  //   {
  //     'id': '987',
  //     'layerid': 30,
  //     'propertie': 'shawingan.qc.ca',
  //     'projectId': 42
  //   },
  //   {
  //     'id': '442',
  //     'layerid': 30,
  //     'propertie': 'granby.qc.ca',
  //     'projectId': 42
  //   },
  //   {
  //     'id': '665',
  //     'layerid': 30,
  //     'propertie': 'warwick.qc.ca',
  //     'projectId': 42
  //   },
  //   {
  //     'id': '998',
  //     'layerid': 30,
  //     'propertie': 'saintphilippe.qc.ca',
  //     'projectId': 42
  //   },
  //   //Gramby
  //   {
  //     'id': '58',
  //     'layerid': 36,
  //     'propertie': 'Rue Quartier',
  //     'projectId': 36
  //   },
  //   {
  //     'id': '756',
  //     'layerid': 36,
  //     'propertie': 'Rue Terrace',
  //     'projectId': 36
  //   },
  //   {
  //     'id': '229',
  //     'layerid': 888,
  //     'propertie': 'Parc Jean-Drapeau',
  //     'projectId': 24
  //   },
  //   {
  //     'id': '111',
  //     'layerid': 888,
  //     'propertie': 'Parc Victoria',
  //     'projectId': 24
  //   },
  //   //feature For Shawingan
  //   {
  //     'id': '100',
  //     'layerid': 51,
  //     'propertie': 'Zone Victoria',
  //     'projectId': 56
  //   },
  //   {
  //     'id': '120',
  //     'layerid': 51,
  //     'propertie': 'Zone Talus',
  //     'projectId': 56
  //   }

  // ],
  parseddocuments: [],
  snackbar: {
    show: false,
    text: ''
  },
  product,
  contextjmap,
  time,
  // themes and layout configurations
  globalTheme,

  // App.vue main toast
  toast: {
    show: false,
    color: 'black',
    message: '',
    timeout: 3000
  },
  GeoObjects: [],
  deletingObject: {},
  paramIsGroupVersionId: false,
  groupVersionId: "",
  
  features: [],
  layers: []
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}