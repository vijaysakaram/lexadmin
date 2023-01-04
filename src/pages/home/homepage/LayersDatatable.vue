<template>
  <div>
    <v-card>
      <v-col class="px-2 ma-0">
        {{ $t("common.searchresult") }}: {{ docsLayers.length }}
        {{ $t("common.layer") }}(s)
      </v-col>
    </v-card>
    <v-data-table
      :headers="headers"
      :items="docsLayers"
      :item-class="itemRowBackground"
      sort-by="name"
      sort-desc="true"
      hide-default-footer
      item-key="id"
      class="font-weight-bold"
    >
      <template v-slot:item.action="{ item }">
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
        <dialog-delete
          v-if="dialogs.delete"
          @close="close"
          :object="dialogDeleteItem"
          :message="deleteMessage"
          :dispatch="'app/deleteDocsLayer'"
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
      expanded: [],
      // singleExpand: true,
      dialogs: {
        delete: false,
        add: false,
      },
      dialogDeleteItem: {},
      rotate: true,
      deleteButton: { btn: "mdi-map-marker-remove", color: "orange" },
    };
  },
  computed: {
    ...mapState("app", ["docsLayers"]),
    ...mapState("app", ["docsJMAPLayers"]),

    deleteMessage() {
      var msg =
        this.dialogDeleteItem.repositoryId +
        ",  " +
        this.dialogDeleteItem.description;
      return {
        title: this.$t("common.delete"),
        body: msg,
      };
    },

    headers() {
      return [
        {
          text: "Project",
          value: "repositoryId",
          filter: this.projectIdFilter,
          class: "blue lighten-3 text",
        },

        {
          text: this.$t("common.name"),
          value: "name",
          filter: this.creation,
          class: "blue lighten-3  text",
        },
        {
          text: "Description",
          value: "description",
          filter: this.descriptionFilter,
          class: "blue lighten-3  text",
        },
        {
          text: this.$t("common.layerid"),
          value: "layerId",
          filter: this.layerIdFilter,
          class: "blue lighten-3  text",
        },
        // {
        //   text: this.$t("common.modificationDate"),
        //   value: "modificationDate",
        //   filter: this.modificationDateFilter,
        //   class: " blue lighten-3",
        // },
        // {
        //   text: this.$t("common.creationDate"),
        //   value: "creationDate",
        //   filter: this.creationDateFilter,
        //   class: "blue lighten-3",
        // },
        {
          text: "Actions",
          value: "action",
          sortable: false,
          class: "blue lighten-6 text",
        },
      ];
    },
  },
  mounted() {
    setTimeout(() => {
      this.rotate = false;
    }, 1500);
    // console.log("this.paramId:::layersDatatable: ", this.paramId);
    console.log("this.docsLayers", this.docsLayers);
  },
  created() {},
  methods: {
    handelDialogDelete(item) {
      this.dialogs.delete = true;
      this.dialogDeleteItem = item;

      this.dialogDeleteItem.documentId = this.paramId; // documentId is needed to dispatch delete function
    },

    close(isConfiremd) {
      if (this.dialogs.delete) this.dialogs.delete = false;

      if (isConfiremd) 
      this.$router.go(0); // to refresh the page
    },
    getdocsJMAPLayer(layer) {
      this.$store.dispatch("app/GetDocJMAPLayers", layer);
    },
    //to show broken linkes
    itemRowBackground(item) {
      //  console.log("mmmmmmmmmmmmmmmmmmmmmlayer:",item);
      if (!item.name) {
        item.name = " ?????????";
      }

      return item.name == " ?????????"
        ? "font-weight-bold red lighten-5 red--text"
        : "style-none";
    },
  },
};
</script>

<style>
.text {
  font-size: 0.9em !important;
}
.style-broken {
  background-color: #f7e4f3;
}
.style-none {
  background-color: #fff;
}
</style>