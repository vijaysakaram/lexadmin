<template>
  <div class="d-flex flex-grow-1 flex-column overflow-hidden">
    <v-card >
      <v-row class="px-2 ma-0">       
        <v-col cols="12" sm="5">
          <v-select
            v-model="layerId"
            prepend-inner-icon="mdi-layers-triple "
            :placeholder="$t('common.selectLayer')"
            :items="layers"
            item-text="description"
            item-value="id"
            outlined
            dense
          ></v-select>
        </v-col>
        <v-col cols="12" sm="5">
          <v-autocomplete
            v-model="featureId"
            prepend-inner-icon="mdi-google-maps"
            :placeholder="$t('common.selectFeature')"
            :items="geoObjectsDoc"
            item-text="featurePropertie"
            item-value="featureId"
            clearable
            outlined
            dense
          >
            <template v-slot:selection="{ item }">
              {{ item.featurePropertie }}
            </template>
            <template v-slot:item="{ item }">
              <v-list-item-content>
                <v-list-item-title
                  >#
                  {{
                    item.featureId ? item.featurePropertie : "Layer Association"
                  }}</v-list-item-title
                >
              </v-list-item-content>
              <v-list-item-action v-if="item.docIds.length > 0">
                <v-badge
                  inline
                  color="primary"
                  class="font-weight-bold"
                  :content="item.docIds.length"
                >
                </v-badge>
              </v-list-item-action>
            </template>
          </v-autocomplete>
        </v-col>
      </v-row>
    </v-card>
    <div class="d-flex flex-grow-1 flex-row mt-2">     
      <v-card class="flex-grow-1">
        <router-view
          :key="$route.fullPath"
          @edit-number-doc="editNumberDoc"
        ></router-view>
      </v-card>
    </div>
  </div>
</template>
<script>
import http from "../../configs/http";
import { mapState, mapMutations } from "vuex";
export default {
  components: {},
  async created() {},
  data: () => ({
    showCompose: false,
    drawer: null,
    tab: null,
    panel: [1],
    breadcrumbs: [
      {
        text: "Geolocalisations",
        disabled: false,
        href: "#",
      },
      {
        text: "List",
      },
    ],
    layers: [],
    layerId: 0,
    featureId: "",
    geoObjectsDoc: [],
    isAddNewDocumentActive: false,
    data: null
  }),
  async mounted() {
    if (localStorage.sProjectId) {
      this.sProjectId = parseInt(localStorage.sProjectId);
    } else {
      this.sProjectId = this.projects[0].id;
    }
    this.layers = await this.getLayers(this.sProjectId);
    this.layerId = this.layers[0].id;
  },
  computed: {
    ...mapState("app", ["projects"]),
    ...mapState("app", ["sProjectId"]),
  },
  watch: {
    async sProjectId(newVal) {
      this.updateContext(newVal);
    },

    

    async layerId(newVal) {
      this.geoObjectsDoc = [];
      if (newVal) {
        this.geoObjectsDoc = await this.getgeoProjectsDoc(newVal);
        this.$router
          .push({
            path: "",
            query: {
              projectId: this.sProjectId,
              layerId: this.layerId,
              featureId: this.featureId? this.featureId:'',
            },
          })
          .catch(() => {});
      }
    },
    async featureId(newVal) {
       this.$router
          .push({
            path: "",
            query: {
              projectId: this.sProjectId,
              layerId: this.layerId,
              featureId: newVal?newVal:'',
            },
          })
          .catch(() => {});
      }

    
  },
  methods: {
    ...mapMutations("app", ["SET_SPROJECTID"]),
    async getProjects() {
      return await http.getURI(`/projects`);
    },
    async getLayers(newVal) {
      return await http.getURI(`/projects/` + newVal + `/layers`);
    },
    async getgeoProjectsDoc(layerId) {
      var geoObjectsDoc = [];
      geoObjectsDoc = await http.getURI(
        `/projects/` + this.sProjectId + `/layers/` + layerId + `/documents`
      );
      const newgeoObjectsDoc = [];

      geoObjectsDoc.forEach(async (element) => {
        const doc = await this.getInitializationDoc(element.docIds);
        element.doc = doc;
        newgeoObjectsDoc.push(element);
      });
      return newgeoObjectsDoc;
    },
    async getInitGeoObjects(geoObjectsDoc) {
      const newgeoObjectsDoc = [];
      geoObjectsDoc.forEach(async (element) => {
        const doc = await getInitializationDoc(element.docIds);
        element.doc = doc;
        newgeoObjectsDoc.push(element);
      });
      return newgeoObjectsDoc;
    },
    async getInitializationDoc(docIds) {
      return await http.getURI(`/API/Documents/Ids`, {
        params: {
          documentIds: docIds.join(","),
        },
      });
    },
    async getDocrepository(repositoryId) {
      return await http.getURI(`/API/Documents/repositoryId`, {
        params: {
          repositoryId: repositoryId,
        },
      });
    },
    async editNumberDoc() {
      this.geoObjectsDoc = await this.getgeoProjectsDoc(this.layerId);
    },

    async updateContext(newVal) {
      this.layers = await this.getLayers(newVal);
      localStorage.setItem("sProjectId", newVal);
      this.SET_SPROJECTID(parseInt(newVal));
      this.setLayer(newVal);
    },
    async setLayer(newVal) {
      this.layerId = 0;
      this.geoObjectsDoc = [];
      this.layerId = this.layers.length ? this.layers[0].id : 0;
      this.$router
        .push({
          path: "",
          query: {
            projectId: newVal,
            layerId: this.layerId,
            featureId: this.featureId,
          },
        })
        .catch(() => {});
    },
  },
};
</script>

<style lang="scss" scoped>
#document-list {
  .document-list-actions {
    max-width: 7.81rem;
  }
  .document-list-search {
    max-width: 10.625rem;
  }
  .document-list-status {
    max-width: 11.3rem;
  }
}
</style>
<style lang="sass">
.no-documents
  position: absolute
  left: 50%
  top: 50%
  transform: translate(-50%, -50%)
  opacity: 0.5
</style>
