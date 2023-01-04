<template>
  <div class="d-flex flex-grow-1 flex-column overflow-hidden">
    <div>
      <v-data-table
        min-width="1vh"
        id="documents"
        :headers="showHeaders"
        :items="filteredDocuments"
        :expanded.sync="expanded"
        fixed-header
        group-by="groupVersionId"
        group-asc
        name="datatable"
        class="font-weight-bold elevation-1 pa-0"
        flat
        dense
        :disable-pagination="true"
        hide-default-footer
        :height="myHight"
      >
        <template #[`item.doctype`]="{ item }">
          <div>{{ item.doctype | propertieExtract }}</div>
        </template>

        <!-- date -->
        <template #[`item.creationDate`]="{ item }">
          <!--  -->

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
        <template v-slot:group.header="{ group, headers, toggle, isOpen }">
          <td class="group-row">
            <v-btn @click="toggle" small icon :ref="group" :data-open="isOpen">
              <v-icon v-if="isOpen">mdi-minus</v-icon>
              <v-icon v-else>mdi-plus</v-icon>
            </v-btn>
            {{ group }}
            <v-btn class="add-assoc-btn ml-2" outlined fab small>
              <v-icon
                @click.stop="handelgroupVersion(group)"
                color="primary"
                style="cursor: pointer"
              >
                mdi-map-marker-plus-outline
              </v-icon>
            </v-btn>

            <dialog-assoc-add
              v-if="dialogAdd"
              @close="close"
              :groupVersionId="grpVersionId"
              :project="project"
            />
          </td>
          <td class="group-row" :colspan="headers.length - 1"></td>
        </template>

        <!--  -->

        <template slot="no-data">
          <div class="d-flex justify-center mt-4 mb-2" v-if="rotate">
            <loading-rotate />
          </div>
          <div class="d-flex justify-center mt-4 mb-2" v-else>
            <no-data
              :message="$t('common.notfound')"
              :iconName="'mdi-database-alert'"
            />
          </div>
        </template>
        <template v-slot:top>
          <!-- v-container, v-col and v-row are just for decoration purposes. -->
          <v-card>
            <v-container>
              <!-- <hr  class="mt-2" v-if="!selectColumn"/> -->
              <v-row class="d-flex">
                <v-col cols="1" class="row-col" v-if="selectColumn">
                  <v-btn
                    color="primary"
                    outlined
                    @click.stop="selectColumn = !selectColumn"
                    class="bttn pa-1 ml-4"
                  >
                    <v-icon color="primary" style="cursor: pointer">
                      mdi-cog
                    </v-icon>
                    {{ $t("common.settings") }}
                  </v-btn>
                </v-col>
                <v-col cols="1" class="row-col" v-if="selectColumn"></v-col>
                <v-col cols="1" class="row-col" v-if="!selectColumn">
                  <v-btn
                    color="primary"
                    outlined
                    @click.stop="selectColumn = !selectColumn"
                    class="pa-1 ml-4"
                  >
                    &nbsp;{{ $t("common.close") }}
                  </v-btn>
                </v-col>
                <v-col cols="2" class="row-col" v-if="!selectColumn">
                  <v-select
                    v-model="selectedHeaders"
                    :items="vSelectHeaders"
                    :label="$t('common.select')"
                    multiple
                    outlined
                    dense
                    autowidth
                    return-object
                    prepend-inner-icon="mdi-cog"
                    @blur="selectColumn = !selectColumn"
                  >
                    <template v-slot:selection="{ item, index }">
                      <!-- <v-chip v-if="index < 2">
                        <span>{{ item.text }}</span>
                      </v-chip>
                      <span v-if="index === 2" class="grey--text caption"
                        >(+{{ selectedHeaders.length - 2 }} others)</span
                      > -->
                      <span v-if="index === 0" class="grey--text caption">
                        --{{ $t("common.select") }} Columns--</span
                      >
                    </template>
                  </v-select>
                </v-col>
                <!-- End -Setting columns -->
                <v-col cols="2" class="row-col" v-if="!selectColumn">
                  <v-select
                    v-model="displayedCustomMetas"
                    :items="vSelectCustomMetas"
                    :label="$t('common.select')"
                    item-value="id"
                    item-text="name"
                    small
                    multiple
                    outlined
                    dense
                    return-object
                    prepend-inner-icon="mdi-cog"
                    @blur="selectColumn = !selectColumn"
                  >
                    <template v-slot:selection="{ item, index }">
                      <span v-if="index === 0" class="grey--text caption">
                        --{{ $t("common.select") }}
                        {{ $t("common.metadata") }}--</span
                      >
                    </template>
                  </v-select>
                </v-col>

                <v-col cols="2" class="row-col" v-if="selectColumn">
                  <v-text-field
                    v-model="searchObject.fileName"
                    prepend-inner-icon="mdi-file-search"
                    :label="$t('common.filename')"
                    outlined
                    clearable
                    dense
                    @input="setLocalVariables"
                  />
                </v-col>

                <v-col cols="2" class="row-col" v-if="selectColumn">
                  <v-select
                    v-model="searchObject.statusItem"
                    prepend-inner-icon="mdi-map-marker-question"
                    placeholder="Status"
                    :items="statusItem"
                    item-value="index"
                    item-text="value"
                    outlined
                    clearable
                    dense
                    hide-details
                    @input="setLocalVariables"
                  ></v-select>
                </v-col>
                <v-col offset="" cols="2" class="row-col" v-if="selectColumn">
                  <v-select
                    v-model="searchObject.doctype"
                    prepend-inner-icon="mdi-text-box-search "
                    :placeholder="$t('common.doctype')"
                    :items="doctype"
                    outlined
                    dense
                    clearable
                    hide-details
                    item-value="id"
                    item-text="name"
                    @input="setLocalVariables"
                  ></v-select>
                </v-col>
                <v-col cols="2" class="row-col" v-if="selectColumn">
                  <v-text-field
                    v-model="searchObject.numDays"
                    prepend-inner-icon="mdi-calendar-today"
                    :label="$t('common.numdays')"
                    :min="0"
                    :max="10"
                    type="number"
                    outlined
                    clearable
                    dense
                    @input="setLocalVariables"
                  />
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </template>
        <template v-slot:item.actions="{ item }">
          <div class="d-block d-sm-table-cell">
            <document-menu :document="item" />
          </div>
        </template>
      </v-data-table>
      <div class="d-flex justify-center mt-4 mb-2" v-if="rotate">
        <loading-rotate />
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
import DocumentMenu from "./DocumentMenu.vue";
import NoData from "./Shared/NoData.vue";
import LoadingRotate from "./Shared/LoadingRotate.vue";
import DialogAssocAdd from "./Dialogs/DialogAssocAdd.vue";

export default {
  components: {
    DocumentMenu,
    DialogAssocAdd,
    NoData,
    LoadingRotate,
  },

  data() {
    return {
      expanded: [],
      rotate: false,
      grpVersionId: "",
      oldIndex: 0,
      newIndex: 3,
      breadcrumbs: [
        {
          text: "Documents",
          disabled: false,
          href: "#",
        },
        {
          text: "List",
        },
      ],
      dialog: false,
      dialogDelete: false,
      oldScroll: 0,
      dialogAdd: false,
      searchObject: {
        statusItem: "",
        doctype: "",
        fileName: "",
        numDays: "",
      },

      project: {},
      repositoryId: "",
      lazyDocuments: [],

      lazyFilteredDocuments: [],
      selectedHeaders: [],
      // selectedCustomMetas: [],
      displayedCustomMetas: [],
      loadedElements: 8,
      myHight: "38vh",
      datatableY: 38,
      count: 0,
      projectName: "",
      selectColumn: true,
      // selectCustom: true,
    };
  },

  computed: {
    ...mapState("app", ["documentinfos"]),
    ...mapState("app", ["customMetas"]),
    ...mapState("app", ["documentIds"]),
    ...mapState("app", ["projects"]),
    ...mapState("app", ["sProjectId"]),
    ...mapState("app", ["selectedCustomMetas"]),
    ...mapState("app", ["displayedHeaders"]),

    vSelectCustomMetas() {
      return this.customMetas;
    },
    /////////headers items to select from
    vSelectHeaders() {
      return this.headers.filter(
        (
          h /////default headers which are not selectable
        ) =>
          h.value.toLowerCase() != "groupversionid" &&
          h.value.toLowerCase() != "actions" &&
          h.value.toLowerCase() != "filename"
      );
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
        this.setDisplayedHeaders(this.selectedHeaders);
      }
      return x;
    },
    // showMetas(){
    //   return this.selectedCustomMetas;
    // },
    //this method doesn't work when switching between En, Fr
    //  showHeaders() {
    //   return this.headers.filter(s =>
    //     this.selectedHeaders.includes(s)
    //     );
    // },

    statusItem() {
      return [
        { index: "0", value: this.$t("common.associated") },
        { index: "1", value: this.$t("common.nonassociated") },
      ];
    },
    doctype() {
      return [
        {
          id: "http://ref.irosoft.com/profil_metadonnees/reglement_codifie",
          name: this.$t("common.codifiedregulations"),
        },
        {
          id: "http://ref.irosoft.com/profil_metadonnees/reglement_annuel",
          name: this.$t("common.annualregulations"),
        },
      ];
    },
    //Search by status, doctype and filename and sorted by groupVersionId
    filteredDocuments() {
      let status =
        this.searchObject.statusItem == null
          ? -1
          : this.searchObject.statusItem; //Sets the status to -1 if it is not defined

      var filteredDocuments = [];
      let me = this;
      // filtering by status
      filteredDocuments =
        status == -1 // all documents
          ? me.documentinfos
          : this.findAssociatedOrNotAssociatedDocs(status == 0); // Associated  status == 0 or not Associated status == 1

      if (this.searchObject.fileName) {
        filteredDocuments = filteredDocuments.filter((item) => {
          if (item.filename.includes(this.searchObject.fileName)) return item; // partial searching of fileName
        });
      }
      if (this.searchObject.doctype) {
        filteredDocuments = filteredDocuments.filter((item) => {
          if (item.doctype === this.searchObject.doctype) return item;
        });
      }

      if (this.searchObject.numDays) {
        var currentDate = new Date();
        filteredDocuments = filteredDocuments.filter((item) => {
          var itemDate = new Date(item.modificationDate);
          var timeDiff = Math.round(
            (currentDate - itemDate) / (24 * 3600 * 1000)
          );
          if (timeDiff < this.searchObject.numDays) return item;
        });
      }
      if (this.sProjectId) {
        filteredDocuments = filteredDocuments.filter((item) => {
          if (item.repositoryId.toLowerCase() == this.projectName.toLowerCase())
            return item;
        });
      }

      this.lazyFilteredDocuments = this.sortByGroupVersionId(filteredDocuments);

      return this.lazyFilteredDocuments.slice(0, this.loadedElements);
    },

    //document data table headers
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
          text: "Actions",
          value: "actions",
          sortable: false,

          class: "blue lighten-6",
        },
      ];
    },
  },
  watch: {
    sProjectId(newVal) {
      this.projectName = this.projects.filter((p) => p.id == newVal)[0].name;
    },
    displayedCustomMetas(newVal) {
      this.setSelectedCustomMetas(newVal);
    },
  },
  mounted() {
    setTimeout(() => {
      if (parseInt(localStorage.sProjectId)) {
        this.projectName = this.projects.filter(
          (p) => p.id == localStorage.sProjectId
        )[0].name;
      }
    }, 500);

    //////////////////////////////// Start-initializing for Lazy Loading

    const dataTable = document.querySelector("#documents");
    dataTable.addEventListener("wheel", this.onScroll);
    //////////////////////////////// End-initializing for Lazy Loading
    ////////////////intial selected headers
    //  this.selectedHeaders = this.headers;
    if (this.displayedHeaders.length > 0) {
      this.selectedHeaders = this.displayedHeaders;
    } else {
      this.selectedHeaders = this.headers;
    }

    ////////////////intial selected CustomMetas

    if (this.selectedCustomMetas.length > 0) {
      this.displayedCustomMetas = this.selectedCustomMetas;
    } else {
      // this.setSelectedCustomMetas(this.vSelectCustomMetas);
      this.displayedCustomMetas = this.vSelectCustomMetas;
    }
    ////////////////////////////////////////////
    if (this.sProjectId)
      this.projectName = this.projects.filter(
        (p) => p.id == this.sProjectId
      )[0].name;
    // const footer_select = document.querySelector(".v-data-footer__select");
    // footer_select.remove();
    if (localStorage.fileName != null)
      this.searchObject.fileName = localStorage.fileName;
    if (localStorage.numDays != null)
      this.searchObject.numDays = localStorage.numDays;

    if (localStorage.doctype != null)
      this.searchObject.doctype = localStorage.doctype;
    if (localStorage.statusItem != "null")
      this.searchObject.statusItem = localStorage.statusItem;
    else this.searchObject.statusItem = -1; //  sets the document data table to all Documents(Associated and nonAssociated)

    this.$store.dispatch("app/getAssociatedDocs"); // fetches and sets the associated documentIds
    setTimeout(() => {
      this.rotate = false;
    }, 500);
    // this.$store.dispatch("app/GetProjects"); // fetches and sets all the projects
  },

  methods: {
    ...mapMutations("app", ["setParamIsGroupVersionId"]),
    ...mapMutations("app", ["setSelectedCustomMetas"]),
    ...mapMutations("app", ["setDisplayedHeaders"]),
    showHeader() {
      this.selectColumn = !this.selectColumn;
      console.log("selectColumn:", this.selectColumn);
      console.log("selectedHeaders:", this.selectedHeaders);
      // this.setDisplayedHeaders(this.selectedHeaders);
    },
    setLocalVariables() {
      if (this.searchObject.doctype != null)
        localStorage.doctype = this.searchObject.doctype;
      else localStorage.doctype = "";
      if (this.searchObject.fileName != null)
        localStorage.fileName = this.searchObject.fileName;
      else localStorage.fileName = "";
      if (this.searchObject.numDays != null)
        localStorage.numDays = this.searchObject.numDays;
      else localStorage.numDays = "";
      localStorage.statusItem = this.searchObject.statusItem;
    },
    // scrollWin(e) {
    //   console.log("event: ", e);

    //   // if there is still more data  to load
    //   if (this.loadedElements <= this.documentinfos.length) {
    //     if (this.oldScroll < window.scrollY) {
    //       if (window.scrollY - this.oldScroll > 50) {
    //         this.loadedElements += 1;
    //         this.oldScroll = window.scrollY;
    //       }
    //     }
    //   }
    // },
    onScroll(e) {
      if (e.deltaY > 0) {
        //scrolling down
        // if there is still more data  to load
        if (this.loadedElements <= this.documentinfos.length) {
          this.datatableY += 0.01;
          this.myHight = this.datatableY + "vh";
          this.loadedElements += 1;
        }
      }
    },

    close(isConfirmed) {
      this.dialogAdd = false;
      if (isConfirmed) this.$router.go(0); // to reload the page if close was not called from "cancel" button
    },
    handelgroupVersion(group) {
      this.grpVersionId = group;
      this.repositoryId = this.documentinfos.find(
        (item) => item.groupVersionId === group
      ).repositoryId;

      let me = this;
      setTimeout(() => {
        this.projects.forEach(async (p) => {
          if (
            (await p.name.toLowerCase()) === this.repositoryId.toLowerCase()
          ) {
            me.project = p;
          }
        });
        this.dialogAdd = true;
      }, 500);
      //this.$router.push(`/ViewAssociations/document/${group}`);
      this.setParamIsGroupVersionId(true);
    },

    findAssociatedOrNotAssociatedDocs(isAsssociated) {
      let me = this;
      var filtereddocuments = me.documentinfos.filter((item) => {
        var documentIdfound = !isAsssociated;
        me.documentIds.forEach((id) => {
          if (item.documentId === id) {
            documentIdfound = isAsssociated;
            return;
          }
        });
        if (documentIdfound) return item;
      });
      return filtereddocuments;
    },

    sortByGroupVersionId(listOfDocuments) {
      return listOfDocuments.sort((a, b) =>
        a.groupVersionId.split("-")[1] < b.groupVersionId.split("-")[1]
          ? 1
          : a.groupVersionId.split("-")[1] > b.groupVersionId.split("-")[1]
          ? -1
          : a.groupVersionId.split("-")[0] < b.groupVersionId.split("-")[0]
          ? 1
          : a.groupVersionId.split("-")[0] > b.groupVersionId.split("-")[0]
          ? -1
          : 0
      );
    },
    getDoctype(item) {
      let doctype = item.doctype.split("/");
      return doctype[doctype.length - 1];
    },
  },
};
</script>
<style>
.add-assoc-btn {
  border: 2px solid transparent !important;
}
.group-row {
  background: #d6e3fa !important;
  color: #00215e !important;
}
.v-data-footer__pagination {
  font-size: 1em;
}
.container {
  margin: 0 !important;
  padding: 2em !important;
}
.container .row {
  height: 8vh !important;
}
/*.v-data-footer__icons-before{
    display:none!important;
}
.v-data-footer__icons-after{
    display:none!important;
}


.v-data-footer__select {
    display: none !important;
} */
.v-data-footer {
  display: flex !important;
  line-height: 1em !important;
  padding-bottom: 1em !important;
  font-size: 1em !important;
}
.row-col {
  margin-right: 0 !important;
  padding-right: 0 !important;
  margin-left: 8px !important;
  padding-left: 0 !important;
  margin-bottom: 0 !important;
  padding-bottom: 0 !important;
}
.bttn {
  font-size: 80% !important;

  min-width: 12% !important;
  margin-right: 20px !important;
  padding-right: 20px !important;
}
/* .row-col.col{
  padding:0 !important;
  margin:1%!important;
}
.row-col.col-2 {
    flex: 0 0 18% !important;
    max-width: 18% !important;
}
.row-col.col-1 {
    flex: 0 0 10%!important;
    max-width: 10%!important;
    margin-left:0 !important;
}
.bttn{
  font-size:80% !important;
  
    min-width:12%!important;
} */
/* .v-btn.v-size--default {
    font-size: 90%;
} */
/* .text-start {
  width:.7vw !important;
 
} */
</style>
