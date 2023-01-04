<template>
  <v-card class="mt-2">
    <div class="document-app-top px-2 py-1 d-flex align-center">
      <!-- <v-checkbox
        :value="selectAll"
        :indeterminate="selectAlmostAll"
        @click.stop="onSelectAll(selectAll)"
      ></v-checkbox> -->
      <v-btn
        v-show="selected.length === 0"
        icon
        :loading="isLoading"
        @click="$emit('refresh')"
      >
        <v-icon>mdi-refresh</v-icon>
      </v-btn>
      <div v-show="selected.length > 0">
        <v-btn icon @click="deleteItem">
          <v-icon>mdi-delete-outline</v-icon>
        </v-btn>
      </div>
       <v-btn
        v-show="docIdsInvalid.length > 0"
        icon        
       @click="synchronizeBroken"
      >
        <v-icon color="red darken-1">mdi-alert-decagram</v-icon>
      </v-btn>

      <v-spacer></v-spacer>
      <v-btn color="primary" @click="showCompose = true">
        {{ $t("common.add")
        }}<v-icon right> mdi-text-box-plus-outline </v-icon></v-btn
      >
    </div>
    <v-divider></v-divider>   
    <v-data-table
     v-model="selected"     
      min-width="1vh"
      :headers="showHeaders"
      :items="documents"
      fixed-header      
      show-select
      item-key="documentId"
      class="font-weight-bold elevation-1 pa-0"
      flat
      dense
      :disable-pagination="true"
      hide-default-footer
    >
      <template #[`item.filename`]="{ item }">
        <router-link
          class="font-weight-medium text-decoration-none"
          :to="`/associate/list/details/${item.documentId}`"
        >
          <span class="text-no-wrap">{{
            item.filename ? item.filename : item.documentId
          }}</span>
        </router-link>
      </template>

      <template #[`item.groupVersionId`]="{ item }">
        <!--  -->
        <span class="text-no-wrap">{{ item.groupVersionId }}</span>
        <span
          style="color: red"
          class="text-truncate me-4 ms-sm-2 ms-0"
          v-if="!item.repositoryId"
          >donnée non disponible</span
        >
      </template>
      <template #[`item.doctype`]="{ item }">
        <div>{{ item.doctype | propertieExtract }}</div>
      </template>
      <!-- date -->
      <template #[`item.creationDate`]="{ item }">
        <!--  -->
        <span class="text-no-wrap">{{
          item.creationDate | formatDate("lll")
        }}</span>
      </template>
      <template #[`item.modificationDate`]="{ item }">
        <span class="text-no-wrap">{{
          item.modificationDate | formatDate("lll")
        }}</span>
      </template>      
      <template v-slot:top> </template>
      <template v-slot:item.actions="{ item }">
        <div class="d-block d-sm-table-cell">
          <v-icon v-if="item.repositoryId" color="green lighten-1">
            mdi-check-circle
          </v-icon>
          <v-icon v-else color="red darken-1"
            >mdi-alert-octagon-outline
          </v-icon>
        </div>
      </template>
    </v-data-table>
    <v-overlay :value="isLoading" absolute>
      <v-progress-circular indeterminate size="32"></v-progress-circular>
    </v-overlay>

    <document-list-add-new
      :show-compose="showCompose"
      @close-dialog="closeDialog"
    />
    <v-dialog v-model="dialogDelete" max-width="500px">
      <v-card>
        <v-card-title class="text-h5">{{ $t("common.confirmDeleteAssoc") }}</v-card-title>
        <v-card-text>
          <div v-if="selected.length > 0">
            <div v-for="item in selected" :key="item">
              <span class="font-weight-bold">doocId :</span
              ><span class="text-truncate me-4 ms-sm-2 ms-0"> {{ item.documentId }} </span>
            </div>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeDelete">{{
            $t("common.cancel")
          }}</v-btn>
          <v-btn color="warning" text @click="deleteItemConfirm">
            <v-icon light>mdi-map-marker-remove-variant</v-icon>OK</v-btn
          >
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialogAsyncDelete" max-width="500px">
      <v-card>
        <v-card-title class="text-h5">{{ $t("common.confirmDeleteBrokenLink") }}</v-card-title>
        <v-card-text>
          <div v-if="docIdsInvalid.length > 0">
            <div v-for="item in docIdsInvalid" :key="item">
              <span class="font-weight-bold">doocId :</span
              ><span class="text-truncate me-4 ms-sm-2 ms-0"> {{ item.documentId }} </span>
            </div>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeAsyncDelete">{{
            $t("common.cancel")
          }}</v-btn>
          <v-btn color="warning" text @click="deleteAsyncItemConfirm">
            <v-icon light>mdi-map-marker-remove-variant</v-icon>OK</v-btn
          >
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
/*
|---------------------------------------------------------------------
| document List Component
|---------------------------------------------------------------------
|
| List to display documents
|
*/
import { mapState } from "vuex";
import http from "../../../configs/http";
import DocumentListAddNew from "./DocumentListAddNew";
export default {
  components: {
    DocumentListAddNew,
  },
  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
    geoObjectsDoc: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    ...mapState("app", ["displayedHeaders"]),
    docIdsInvalid(){
     if(this.documents)
     return this.documents.filter(x=> !x.repositoryId)
     else return []

    },
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
        },
        {
          text: "Status",
          value: "actions",
          sortable: false,

          class: "blue lighten-6",
        },
      ];
    },
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
  },
  data() {
    return {
      dialogDelete: false,
      dialogAsyncDelete:false,
      projectId: 0,
      layerId: 0,
      featureId: "",
      documents: [],
      selectedHeaders: [],
      selectAll: false,
      selectAlmostAll: false,
      selected: [],
      showCompose: false,
      menuSelection: [
        {
          title: "All",
          key: "all",
        },
        {
          title: "Delete",
          key: "delete",
        },
      ],
    };
  },
  async mounted() {
    await this.initialiser();

    if (this.displayedHeaders.length > 0) {
      this.selectedHeaders = this.displayedHeaders;
    } else {
      this.selectedHeaders = this.headers;
    }
  },
  watch: {
    dialogDelete(val) {
      val || this.closeDelete();
    },
    dialogAsyncDelete(val) {
      val || this.closeAsyncDelete();
    },
    selected(val) {
      // check selectAll intermediate state
      this.$nextTick(() => {
        if (this.selectAll) {
          if (val.length === 0) {
            this.selectAll = false;
            this.selectAlmostAll = false;
          } else {
            if (this.documents.length === val.length) {
              this.selectAlmostAll = false;
            } else {
              this.selectAlmostAll = true;
            }
          }
        }
      });
    },
  },
  methods: {
    closeDialog() {
      this.showCompose = false;
      this.initialiser();
      this.$emit("edit-number-doc");
    },
    async initialiser() {
      let documentIds = [];
      this.documents = [];
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
          documentIds = await http.getURI(
            `/api/associations/` + this.projectId + `/layers/` + this.layerId
          );
        } else {
          this.featureId = this.$route.query.featureId;
          documentIds = await http.getURI(
            `/api/associations/` +
              this.projectId +
              `/layers/` +
              this.layerId +
              `/features/` +
              this.featureId
          );
        }
      }
      this.documents = await this.getInitializationDoc(documentIds);
    },
    onMenuSelection(key) {
      switch (key) {
        case "all":
          this.selected = this.documents.map((i) => i.documentId);
          this.selectAll = true;
          this.selectAlmostAll = false;
      }
    },
    onSelectAll(selectAll) {
      if (this.selectAll) {
        this.selected = [];
      } else {
        this.selected = this.documents.map((i) => i.documentId);
      }

      this.selectAlmostAll = false;
      this.selectAll = !this.selectAll;
    },
    async getInitializationDoc(docIds) {
      return await http.getURI(`/API/Documents/IdsDoc`, {
        params: {
          documentIds: docIds ? docIds.join(",") : null,
        },
      });
    },
    deleteItem() {
      this.dialogDelete = true;
    },
    synchronizeBroken() {
      this.dialogAsyncDelete = true;
    },
    async deleteItemConfirm() {
      const projectId = this.projectId;
      const layerId = this.layerId;
      const featureId = this.featureId;

      const documentIds = this.selected.length ? this.selected.map(x=>x.documentId).join(",") : [];
      
      if (featureId) {
        await http
          .deleteURI(
            `api/associations/` +
              projectId +
              `/layers/` +
              layerId +
              `/features/` +
              featureId +
              `/documents/(` +
              documentIds +
              `)`
          )
          .then(() => {
            this.initialiser();
            this.$emit("edit-number-doc");
          });
      } else {
        await http
          .deleteURI(
            `api/associations/` +
              projectId +
              `/layers/` +
              layerId +
              `/documents/(` +
              documentIds +
              `)`
          )
          .then(() => {
            this.initialiser();
            this.$emit("edit-number-doc");
          });
      }

      this.closeDelete();
    },
     async deleteAsyncItemConfirm() {
      const projectId = this.projectId;
      const layerId = this.layerId;
      const featureId = this.featureId;
       console.log("im deleting", this.docIdsInvalid)
      const documentIds = this.docIdsInvalid.length ? this.docIdsInvalid.map(x=>x.documentId).join(",") : [];
      
      if (featureId) {
        await http
          .deleteURI(
            `api/associations/` +
              projectId +
              `/layers/` +
              layerId +
              `/features/` +
              featureId +
              `/documents/(` +
              documentIds +
              `)`
          )
          .then(() => {
            this.initialiser();
            this.$emit("edit-number-doc");
          });
      } else {
        await http
          .deleteURI(
            `api/associations/` +
              projectId +
              `/layers/` +
              layerId +
              `/documents/(` +
              documentIds +
              `)`
          )
          .then(() => {
            this.initialiser();
            this.$emit("edit-number-doc");
          });
      }

      this.closeAsyncDelete();
    },

    close() {
      this.dialog = false;
        this.selected= []
    },

    closeDelete() {
      this.dialogDelete = false;
      this.selected= []
    },
    closeAsyncDelete() {
      this.dialogAsyncDelete = false;      
    },
  },
};
</script>

<style lang="scss" scoped>
.document-app-top {
  height: 82px;
}
</style>
