import mock from '@/@lexsmart-services/mock'
const documentinfos = [
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
  },
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
  },
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
  }, 
  {
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
  },
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
  },
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
  }, 
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
  },
  {
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
  }, 
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },  
  {
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
  },
  {
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
  },
  
]


// ------------------------------------------------
// GET: Return All Documents
// ------------------------------------------------
mock.onGet('/API/Documents/All').reply(config => {
  
  const repositoryId = config.params.repositoryId 
 
  let filteredData = documentinfos.filter(
    doc => doc.repositoryId === (repositoryId || doc.repositoryId))
  return [
    200,
    filteredData
  ]
})
// ------------------------------------------------
// GET: Return Single Document
// ------------------------------------------------
mock.onGet(/\/API\/Documents\/\d+/).reply(config => { 
  let documentId = config.url.substring(config.url.lastIndexOf('/') + 1)
  const documentIndex = documentinfos.findIndex(e => e.documentId === documentId)
  const document = documentinfos[documentIndex]

  if (document) return [200, document]
  return [404]
})
mock.onGet('/API/Documents').reply(config => {
 
  const { q = '', options = {}, doctype = null, groupVersionId = null } = config.params 
  const { sortBy = [], sortDesc = [], page = 0, itemsPerPage = 0 } = options 
  const queryLowered = q.toLowerCase()

  let filteredData = documentinfos.filter(
    doc =>   
      (doc.filename.toLowerCase().includes(queryLowered) || doc.filename.toLowerCase().includes(queryLowered)) &&
      doc.groupVersionId === (groupVersionId || doc.groupVersionId) &&    
      doc.doctype === (doctype || docdoc.doctype),
  )
  
  if (sortBy.length === 1 && sortDesc.length === 1) {
    filteredData = filteredData.sort((a, b) => {
      const sortA = a[sortBy[0]]
      const sortB = b[sortBy[0]]

      if (sortDesc[0]) {
        if (sortA < sortB) return 1
        if (sortA > sortB) return -1

        return 0
      }

      if (sortA < sortB) return -1
      if (sortA > sortB) return 1

      return 0
    })
  }

  return [
    200,
    {
      filteredData:
        itemsPerPage !== -1 ? filteredData.slice((page - 1) * itemsPerPage, page * itemsPerPage) : filteredData,
      total: filteredData.length,
    },
  ]
})
// ------------------------------------------------
// GET: Return Documents by DocIds
// ------------------------------------------------
mock.onGet('/API/Documents/repositoryId').reply(config => {
  
  const repositoryId = config.params.repositoryId  
  const documentIds = config.params.documentIds?config.params.documentIds.split(','):[] 
  let filteredData = documentinfos.filter(
    doc => doc.repositoryId === repositoryId )
  return [
    200,
    {
      documentsInfo: filteredData      
    },
  ]
})

mock.onGet('/API/Documents').reply(config => {
 
  const { q = '', options = {}, doctype = null, groupVersionId = null } = config.params 
  const { sortBy = [], sortDesc = [], page = 0, itemsPerPage = 0 } = options 
  const queryLowered = q.toLowerCase()

  let filteredData = documentinfos.filter(
    doc =>   
      (doc.filename.toLowerCase().includes(queryLowered) || doc.filename.toLowerCase().includes(queryLowered)) &&
      doc.groupVersionId === (groupVersionId || doc.groupVersionId) &&    
      doc.doctype === (doctype || docdoc.doctype),
  )
  
  if (sortBy.length === 1 && sortDesc.length === 1) {
    filteredData = filteredData.sort((a, b) => {
      const sortA = a[sortBy[0]]
      const sortB = b[sortBy[0]]

      if (sortDesc[0]) {
        if (sortA < sortB) return 1
        if (sortA > sortB) return -1

        return 0
      }

      if (sortA < sortB) return -1
      if (sortA > sortB) return 1

      return 0
    })
  }

  return [
    200,
    {
      filteredData:
        itemsPerPage !== -1 ? filteredData.slice((page - 1) * itemsPerPage, page * itemsPerPage) : filteredData,
      total: filteredData.length,
    },
  ]
})
// ------------------------------------------------
// GET: Return Documents by DocIds
// ------------------------------------------------
mock.onGet('/API/Documents/Ids').reply(config => {
  // Get requested docIds as Array
  const documentIds = config.params.documentIds?config.params.documentIds.split(','):[] 
  const docToRender =[]
  const docNonValidToRender =[]
  documentIds.forEach(docId => {
   if (docId!=="") 
   {
    const documentInfo = documentinfos.find(c => c.documentId === docId)
    if (documentInfo) docToRender.push(documentInfo)
    else docNonValidToRender.push(docId)
  }
  }); 
  return [
    200,
    {
      docValid: docToRender,
      docNonValid :docNonValidToRender,
    },
  ]
})

mock.onGet('/API/Documents/IdsDoc').reply(config => {
  // Get requested docIds as Array
  const documentIds = config.params.documentIds?config.params.documentIds.split(','):[] 

  let docToRender =[]
  documentIds.forEach(docId => {
  
   if (docId!=="") 
   {
    let documentInfo = documentinfos.find(c => c.documentId === docId)      
    if (documentInfo) docToRender.push(documentInfo)
    else     
    { 
      const documentDefaultItem ={
        documentId: '',
        groupVersionId: '',
        repositoryId: '',
        filename: '',
        doctype: '',
        mimetype: '',
        lang: null,
        authorId: '',
        size: '',
        modificationDate: '',
        creationDate: '',
        customMetas: [
          
        ]
      }
      documentDefaultItem.documentId = docId
      docToRender.push(documentDefaultItem)
    }
  }
  }); 
  docToRender= docToRender.sort((a, b) => a.repositoryId < b.repositoryId ? 1 : -1);
  return [
    200,
    docToRender
  ]
})

mock.onGet('/API/Documents/Id').reply(config => {
  // Get event id from URL
  const documentId = config.params.documentId


  const documentIndex = documentinfos.findIndex(e => e.documentId === documentId)
  const docInfo = documentinfos[documentIndex]  
  return [200, docInfo]
})
// ------------------------------------------------
// GET: Return Description reglementaire of doctype
// ------------------------------------------------
mock.onGet('/API/Documents/Description').reply(config => {
  // Get requested docIds as Array
  const documentIds = config.params.documentIds?config.params.documentIds.split(','):[] 
  const documentMeta = {
    reglement_codifie: documentinfos.filter(doc => documentIds.includes(doc.documentId) && doc.doctype.toLowerCase().includes("reglement_codifie")).length,
    reglement_annuel: documentinfos.filter(doc => documentIds.includes(doc.documentId) && doc.doctype.toLowerCase().includes("reglement_annuel")).length,
    
  }

  return [200, documentMeta]
})
