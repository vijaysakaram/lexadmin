<template>
  <div>
    <v-card>
      <v-col class="px-2 ma-0">
        {{ $t("common.searchresult") }}: {{ docsFeatures.length }} Feature(s)
      </v-col>
    </v-card>
    <v-data-table
      :headers="headers"
      :items="docsFeatures"
      :item-class="itemRowBackground"
      sort-by="description"
      sort-desc="true"
      hide-default-footer
      item-key="id"
      class="font-weight-bold"
    >
      <template v-slot:item.action="{ item }">
        <v-row>
          <v-col class="d-flex align-center justify-center">
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-icon
                  color="orange"
                  @click="handelDialogDelete(item)"
                  dark
                  v-bind="attrs"
                  v-on="on"
                >
                  mdi-map-marker-remove
                </v-icon>
              </template>
              <span>{{ $t("common.deleteassociation") }}</span>
            </v-tooltip>
          </v-col>
        </v-row>
        <dialog-delete
          v-if="dialogs.delete"
          :object="dialogDeleteItem"
          :message="deleteMessage"
          @close="close"
          :dispatch="'app/deleteDocsFeature'"
        />
      </template>
      <template slot="no-data">
        <div class="d-flex justify-center mt-4 mb-2" v-if="rotate">
          <loading-rotate />
        </div>
        <div class="d-flex justify-center mt-4 mb-2" v-else>
          <no-data
            :message="$t('common.notfound')"
            :iconName="'mdi-map-marker-off'"
          />
        </div>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: ["paramId"],
  components: {
    "no-data": require("./Shared/NoData.vue").default,
    "dialog-delete": require("./Dialogs/DialogDelete.vue").default,
    "loading-rotate": require("./Shared/LoadingRotate.vue").default,
  },
  data() {
    return {
      dialogs: {
        delete: false,
        add: false,
      },
      dialogDeleteItem: {},
      expanded: [],
      rotate: true,
    };
  },
  computed: {
    ...mapState("app", ["docsFeatures"]),
    ...mapState("app", ["docsJMAPFeatures"]),

    deleteMessage() {
      var msg =
        " " + this.dialogDeleteItem.projectName + ", " + this.dialogDeleteItem.layerName;
      return{
        title:  this.$t("common.delete"),
        body: this.dialogDeleteItem.featureId
        ? msg + ", " + this.dialogDeleteItem.description
        : msg,
        }
    },

    headers() {
      return [
        {
          text: "Project",
          value: "projectName",
          filter: this.projectIdFilter,
          class: "blue lighten-3 text",
        },
        {
          text: this.$t("common.layer"),
          value: "layerName",
          filter: this.layerIdFilter,
          class: "blue lighten-3  text",
        },
        {
          text: "feature",
          value: "description",
          filter: this.layerDescriptionFilter,
          class: "blue lighten-3",
        },
        {
          text: "Feature Id",
          value: "featureId",
          filter: this.featurerIdFilter,
          class: "blue lighten-3",
        },
        // {
        //   text: "Project Id",
        //   value: "projectId",
        //   filter: this.projectIdFilter,
        //   class: "blue lighten-3",
        // },
        // {
        //   text: this.$t("common.layerid"),
        //   value: "layerId",
        //   filter: this.layerIdFilter,
        //   class: "blue lighten-3",
        // },

        // {
        //   text: this.$t("common.layername"),
        //   value: "layerName",
        //   filter: this.layerNameFilter,
        //   class: "blue lighten-3",
        // },

        // {
        //   text: this.$t("common.creationDate"),
        //   value: "creationDate",
        //   filter: this.creationDateFilter,
        //   class: "blue lighten-3",
        // },
        // {
        //   text: this.$t("common.modificationDate"),
        //   value: "modificationDate",
        //   filter: this.modificationDateFilter,
        //   class: "blue lighten-3",
        // },
        {
          text: "Actions",
          value: "action",
          sortable: false,
          class: "blue lighten-6",
        },
      ];
    },
  },
  mounted() {
    setTimeout(() => {
      this.rotate = false;
    }, 1500);
  },
  created() {},
  methods: {
    handelDialogDelete(item) {
      this.dialogs.delete = true;
      this.dialogDeleteItem = item;
      this.dialogDeleteItem.documentId = this.paramId; // documentId is needed to dispatch delete function
    },
    close(isConfiremd) {
    
      this.dialogs.delete = false;

      if (isConfiremd) this.$router.go(0); // to refresh the page
    },
    getdocsJMAPFeature(feature) {
      this.$store.dispatch("app/GetDocJMAPFeatures", feature);
    },
    //to show broken linkes
    itemRowBackground(item) {
     
      if(!item.description ) {item.description =" ?????????"}
      return item.description ==" ?????????" ? "font-weight-bold red lighten-5 red--text" : "style-none";
    },
  },
};
</script>

<style scoped>
.v-data-table__wrapper {
  overflow-y: hidden !important; /* Hide vertical scrollbar */
  overflow-x: hidden !important; /* Hide horizontal scrollbar */
}

.style-none {
  background-color: #fff;
}
</style>