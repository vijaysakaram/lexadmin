<template>
  <v-dialog
    v-model="dialog"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
    scrollable
  >
    <v-card tile>
      <v-toolbar flat dark color="primary" max-height="60" class=" pl-4 " >       
        <v-toolbar-title>  {{ $t("common.selectDocument") }}</v-toolbar-title>
        <v-spacer></v-spacer>
         <v-btn
          icon
          dark
          @click="
            $emit('close-dialog');
            selectedTableData = [];
          "
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
        
      </v-toolbar>
      <v-card-text>
        <!-- search -->
        <v-card>
          <v-row class="d-flex justify-center mt-4 pa-3">
            <v-col cols="6">
              <v-btn  color="primary"  v-show="selectedTableData.length > 0" v-on="on"            
                
                @click="dialogSave = true"
                :disabled="Boolean(!selectedTableData.length)"
              >
                {{ $t("common.save")}}
              </v-btn>
            </v-col>

            <v-col cols="12" sm="5" md="3">
              <v-text-field
                v-model="searchQuery"
                single-line
                dense
                outlined
                hide-details
                placeholder="Search document"
                class="document-list-search me-3"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="5" md="3">
              <v-select
                v-model="doctypeFilter"
                :items="doctypeOptions"
                prepend-inner-icon="mdi-text-box-search "
                :placeholder="$t('common.doctype')"
                outlined
                dense
                clearable
                hide-details
                item-value="id"
                item-text="name"
                class="document-list-search me-3"
              ></v-select>
            </v-col>
          </v-row>
        </v-card>
        <!-- table -->
        <v-data-table
          min-width="1vh"
          v-model="selectedTableData"
          :headers="showHeaders"
          item-key="documentId"
          :items="documentListTable"
          :server-items-length="totaldocumentListTable"
          :loading="loading"
          show-select
          :search="searchQuery"
          class="font-weight-bold elevation-1 pa-0"
          flat
          dense
          :disable-pagination="true"
          hide-default-footer
        >
          <template v-slot:item.doctype="{ item }">
            <div>{{ item.doctype | propertieExtract }}</div>
          </template>
          <!-- date -->
          <template #[`item.creationDate`]="{ item }">
            <span class="text-no-wrap">{{
              item.creationDate | formatDate("lll")
            }}</span>
          </template>
          <template #[`item.modificationDate`]="{ item }">
            <span class="text-no-wrap">{{
              item.modificationDate | formatDate("lll")
            }}</span>
          </template>
        </v-data-table>
      </v-card-text>
      <div style="flex: 1 1 auto"></div>
    </v-card>
    <v-dialog v-model="dialogSave" max-width="500px">
      <v-card>
        <v-card-title class="text-h5">Confirm save association?</v-card-title>
        <v-card-text>
          <div v-if="selectedTableData.length > 0">
            <div v-for="item in selectedTableData" :key="item.documentId">
              <span class="font-weight-bold">docId :</span
              ><span class="text-truncate me-4 ms-sm-2 ms-0">
                {{ item.documentId }}
              </span>
            </div>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialogSave = false">{{
            $t("common.cancel")
          }}</v-btn>
          <v-btn color="warning" text @click="saveItemConfirm">
            <v-icon light>mdi-map-marker-remove-variant</v-icon>OK</v-btn
          >
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-dialog>
</template>

<script>
import { mapState } from "vuex";
import http from "../../../configs/http";
import axios from "axios";
export default {
  props: {
    showCompose: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      dialogSave: false,
      dialog: false,
      projectId: 0,
      layerId: 0,
      featureId: "",
      selectedTableData: [],
      selectedAction: "",
      searchQuery: "",
      doctypeOptions: [],
      doctypeFilter: "",
      documentListTable: [],
      totaldocumentListTable: 0,
      loading: true,
      geoObject: {},
      documentIds: [],
      selectedHeaders: [],
    };
  },
  computed: {
    ...mapState("app", ["displayedHeaders"]),
    showHeaders() {
      var x = [];

      this.headers.forEach((s) =>
        this.selectedHeaders.forEach((sh) => {
          if (sh.value == s.value) {
            x.push(s);
          }
        })
      );
      if (x.length > 0) {
        this.selectedHeaders = x;
        
      }
      return x;
    },
    headers() {
      return [
        {
          text: this.$t("common.filename"),
          value: "filename",
          filter: this.nameFilter,
          class: "blue lighten-3 font-weight-bold",
        },
        {
          text: this.$t("common.groupVersionId"),
          align: "left",
          value: "groupVersionId",

          class: "blue lighten-3",
        },

        {
          text: this.$t("common.doctype"),
          value: "doctype",
          filter: this.nameFilter,
          align: " d-none d-xl-table-cell",

          class: "blue lighten-3",
        },

        {
          text: this.$t("common.repository"),
          value: "repositoryId",
          filter: this.repositoryFilter,
          class: "blue lighten-3",
        },
        {
          text: this.$t("common.lang"),
          value: "lang",
          filter: this.langFilter,
          class: "blue lighten-3",
        },
        {
          text: this.$t("common.creationdate"),
          value: "creationDate",
          class: "blue lighten-3",
          align: " d-none d-sm-table-cell",
        },
        {
          text: this.$t("common.modificationDate"),
          value: "modificationDate",
          class: "blue lighten-3",
        },
        {
          text: "Mime Type",
          value: "mimetype",
          align: " d-none d-md-table-cell",
          class: "blue lighten-3",
        }
      ];
    },
  },
  watch: {
    showCompose(val) {
      this.dialog = val;
    },
  },
  async mounted() {
    this.documentListTable = [];
    this.dialog = this.showCompose;
    this.doctypeOptions = await this.getDoctypes();

    if (typeof this.$route.query.projectId !== "undefined") {
      this.projectId = parseInt(this.$route.query.projectId);
    } else {
      this.projectId = 0;
    }
    if (typeof this.$route.query.layerId !== "undefined") {
      this.layerId = parseInt(this.$route.query.layerId);
    } else {
      this.layerId = 0;
    }
    if (typeof this.$route.query.featureId !== "undefined") {
      if (
        this.$route.query.featureId === "null" ||
        this.$route.query.featureId === ""
      ) {
        this.geoObject = await http.getURI(
          `/projects/` + this.projectId + `/layers/` + this.layerId
        );
      } else {
        this.featureId = this.$route.query.featureId;
        this.geoObject = await http.getURI(
          `/projects/` +
            this.projectId +
            `/layers/` +
            this.layerId +
            `/features/` +
            this.featureId
        );
      }
    }
    this.documentListTable = await this.getInitializationDoc();
    this.loading = false;
    this.totaldocumentListTable = this.documentListTable.lenght;
    if (this.displayedHeaders.length > 0) {
      this.selectedHeaders = this.displayedHeaders;
    } else {
      this.selectedHeaders = this.headers;
    }
  },
  methods: {
    async saveItemConfirm() {
      const projectId = this.projectId;
      const layerId = this.layerId;
      const featureId = this.featureId;

      const documentIds = this.selectedTableData.length
        ? this.selectedTableData.map((x) => x.documentId)
        : [];

      if (featureId) {
        await axios
          .post(
            `api/associations/` +
              projectId +
              `/layers/` +
              layerId +
              `/features/` +
              featureId +
              `/documents`,
            documentIds
          )
          .then((response) => {
            this.$emit("close-dialog");
          });
      } else {
        await axios
          .post(
            `api/associations/` +
              projectId +
              `/layers/` +
              layerId +
              `/documents`,
            documentIds
          )
          .then((response) => {
            this.$emit("close-dialog");
          });
      }
      this.selectedTableData = [];
    },
    async getDoctypes() {
      return await http.getURI(`/API/DocTypes`);
    },
    async getInitializationDoc() {
      return await http.getURI(`/API/Documents/All`, {
        params: {
          repositoryId: this.geoObject ? this.geoObject.projectName : "",
        },
      });
    },
    statusFunction(value) {
      // If this filter has no value we just skip the entire filter.
      if (!this.doctypeFilter) {
        return true;
      }

      return value === this.doctypeFilter;
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
