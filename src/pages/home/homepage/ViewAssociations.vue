<template>
  <div class="d-flex flex-grow-1 flex-column">
    <div class="align-center">
      <v-row class="align-center">
        <v-breadcrumbs :items="breadcrumbs" class="pa-3 py-2"></v-breadcrumbs>
        <v-spacer></v-spacer>
      </v-row>
    </div>
    <v-card class="theme-light" flat>
      <v-row>
        <!-- <template v-if="isGroupVersionId">
          <span class="text--secondary ma-3"
            >&nbsp;&nbsp; GroupVersionId: {{ paramId }}</span
          >
        </template>
        <template v-else> -->
        <template>
          <v-col class="ma-3">
            <v-expansion-panels v-model="panel">
              <v-expansion-panel>
                <v-expansion-panel-header class="title"
                  >Details:

                  <span class="text--secondary"
                    >&nbsp;&nbsp; Document {{ document.filename }}</span
                  >
                </v-expansion-panel-header>
                <v-expansion-panel-content class="body-2">
                  <v-row>
                    <v-col cols="4" class="child">
                      <v-simple-table>
                        <tbody>
                          <tr>
                            <td>DocId:</td>
                            <td class="pl-0 ml-0">{{ document.documentId }}</td>
                          </tr>
                          <tr>
                            <td>Doctype:</td>
                            <td class="pl-0 ml-0">{{ getDoctype }}</td>
                          </tr>
                        </tbody>
                      </v-simple-table>
                    </v-col>
                    <!-- <v-col cols="1" class="child"></v-col> -->
                    <v-col cols="3" class="child">
                      <v-simple-table>
                        <tbody>
                          <tr>
                            <td>Group-Version-Id:</td>
                            <td class="pl-0 ml-0">
                              {{ document.groupVersionId }}
                            </td>
                          </tr>
                          <tr>
                            <td>Repository:</td>
                            <td class="pl-0 ml-0">
                              {{ document.repositoryId }}
                            </td>
                          </tr>
                        </tbody>
                      </v-simple-table>
                    </v-col>
                    <v-col cols="1" class="child"></v-col>
                    <v-col cols="3" class="child">
                      <v-simple-table>
                        <tbody>
                          <tr>
                            <td>modification Date:</td>
                            <td class="pl-0 ml-0">
                              {{ document.modificationDate }}
                            </td>
                          </tr>
                          <tr>
                            <td>Language:</td>
                            <td class="pl-0 ml-0">{{ document.lang }}</td>
                          </tr>
                        </tbody>
                      </v-simple-table>
                    </v-col>
                    <v-col cols="1" class="child"></v-col>
                  </v-row>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-col>
        </template>
      </v-row>
      <v-row>
        <v-col class="d-flex justify-end ma-0 mr-10">
          <v-tooltip left>
            <template v-slot:activator="{ on, attrs }">
              <v-icon
                large
                color="#0D47A1"
                @click.stop="dialogAdd = true"
                v-bind="attrs"
                v-on="on"
                style="cursor: pointer"
              >
                mdi-map-marker-plus-outline
              </v-icon>
            </template>
            <span>{{ $t("common.associate") }}</span>
          </v-tooltip>
        </v-col>
        <dialog-assoc-add
          v-if="dialogAdd && !isGroupVersionId"
          @close="close"
          :document="document"
          :project="project"
        />
        <dialog-assoc-add
          v-if="dialogAdd && isGroupVersionId"
          @close="close"
          :groupVersionId="groupVersionId"
          :project="project"
        />
      </v-row>
      <v-row class="ma-0 pa-0">
        <v-col cols="12">
          <v-tabs
            v-model="tab"
            :show-arrows="false"
            background-color="transparent"
            class="ma-0"
          >
            <v-tab to="#tabs-layer">Layer Associations</v-tab>
            <v-tab to="#tabs-feature">Feature Associations</v-tab>
          </v-tabs>

          <v-tabs-items v-model="tab">
            <v-tab-item value="tabs-feature">
              <features-datatable :paramId="paramId" ref="tabs-feature" />
            </v-tab-item>
            <v-tab-item value="tabs-layer">
              <layers-datatable :paramId="paramId" ref="tabs-layer" />
            </v-tab-item>
          </v-tabs-items>
        </v-col>
      </v-row>
    </v-card>
    <!-- </template> -->
  </div>
</template>

<script>
import router from "@/router";
import { mapState, mapMutations, mapGetters } from "vuex";
export default {
  components: {
    "dialog-assoc-add": require("./Dialogs/DialogAssocAdd.vue").default,
    "layers-datatable": require("./LayersDatatable.vue").default,
    "features-datatable": require("./FeaturesDatatable.vue").default,
  },

  data() {
    return {
      panel: [1],
      tab: null,
      breadcrumbs: [
        {
          text: "Documents",
          to: "/home/documents",
          exact: true,
        },
        {
          text: "Edit Associations",
        },
      ],

      documentId: "",
      commonLayers: [],
      commonFeatures: [],
      dialogDelete: false,
      layerLength: 0,
      featureLength: 0,
      dialogAdd: false,
      project: {},
    };
  },
  computed: {
    ...mapGetters("app", ["getDocumentByDocumentId"]),
    ...mapGetters("app", ["getDocumentsByGroupVersionId"]),
    ...mapState("app", ["tabUrl"]),
    ...mapState("app", ["docsLayers"]),
    ...mapState("app", ["docsFeatures"]),
    ...mapState("app", ["projects"]),
    ...mapState("app", ["jmapLayer"]),
    //  GetJMAPLayerByLayerId

    document() {
      return this.getDocumentByDocumentId;
    },

    paramId() {
      return router.currentRoute.params.id.split("#")[0];
    },

    isGroupVersionId() {
      return this.paramId.split("-").length == 2;
    },

    groupVersionId() {
      return this.isGroupVersionId ? this.paramId : "";
    },

    getDoctype() {
      let doctypes = this.document.doctype.split("/");
      return doctypes[doctypes.length - 1];
    },
  },

  mounted() {
    this.$store.dispatch("app/GetProjects"); // fetches and sets all the projects
    let me = this;
    setTimeout(() => {
      this.projects.forEach(async (p) => {
        if (
          (await p.name.toLowerCase()) ===
          me.document.repositoryId.toLowerCase()
        ) {
          me.project = p;
        }
      });
    }, 1000);

    this.setDocumentId(this.paramId);
    this.$store.dispatch("app/GetDocFeatures", this.paramId);
    this.$store.dispatch("app/GetDocLayers", this.paramId);
    setTimeout(() => {
      this.docsFeatures.forEach(async (feature) => {
       
        this.$store.dispatch("app/GetJMAPLayerByLayerId", feature);
        console.log("docsFeatures ->feature: ",feature);
        // feature.projectName = await this.jmapLayer.projectName;
        // feature.layerName = await this.jmapLayer.name;
        await this.getdocsJMAPFeature(feature);
      });
      this.docsLayers.forEach(async (layer) => {
         layer.repositoryId = this.document.repositoryId;
        await this.getdocsJMAPLayer(layer);
      });
    }, 1000);
  },

  methods: {
    ...mapMutations("app", ["setDocumentId"]),
    ...mapMutations("app", ["setGroupVersionId"]),
    ...mapMutations("app", ["SET_DOCS_LAYERS"]),
    ...mapMutations("app", ["SET_DOCS_FEATURES"]),

    close(isConfiremd) {
      this.dialogAdd = false;
     this.$router.push(window.location.pathname + this.tabUrl);
     console.log("this.$router.push(window.location.pathname + this.tabUrl);");
      if (isConfiremd) this.$router.go(0); // to refresh the page
    },

    notClickable(e) {
      e.stopPropagation();
    },

    getdocsJMAPFeature(feature) {
      console.log(" getdocsJMAPFeature(feature):", feature);
      this.$store.dispatch("app/GetDocJMAPFeatures", feature);
    },

    getdocsJMAPLayer(layer) {
      this.$store.dispatch("app/GetDocJMAPLayers", layer);
    },
  },
};
</script>

<style scoped>
.theme-light {
  background: #f2f5f8;
}
</style>
