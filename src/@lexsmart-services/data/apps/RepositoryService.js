import mock from '@/@lexsmart-services/mock'
const docTypes = [
    { id: "http://ref.irosoft.com/profil_metadonnees/reglement_codifie", name: "Règlements codifiés" },
    { id: "http://ref.irosoft.com/profil_metadonnees/reglement_annuel:", name: "Règlements annuels" }
]

// ------------------------------------------------
// GET: Return All Documents
// ------------------------------------------------
mock.onGet('/API/DocTypes').reply(() => [200, docTypes])