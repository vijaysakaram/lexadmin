<template>
  <div class="d-flex flex-grow-1 flex-column">
    <template>
      <v-card>
        <!-- <v-card-title> Search &amp; Filter </v-card-title> -->
        <v-row class="d-flex justify-center ma-4 mb-2">
          <v-col cols="2" class="row-col">
            <v-text-field
              id="history_txt_username_id"
              v-model="searchObject.username"
              prepend-inner-icon="mdi-file-search"
              :label="$t('history.username')"
              outlined
              clearable
              dense
              @input="searchHistory"
            />
          </v-col>
          <v-col cols="2" class="row-col">
            <v-text-field
              id="history_txt_filename_id"
              v-model="searchObject.fileName"
              prepend-inner-icon="mdi-file-search"
              :label="$t('common.filename')"
              outlined
              clearable
              dense
              @input="searchHistory"
            />
          </v-col>

          <v-col cols="2" class="row-col" id="history_ddl_eventtype_id">
            <v-select
              v-model="searchObject.eventtype"
              prepend-inner-icon="mdi-text-box-search "
              :placeholder="$t('history.historyEventTypes')"
              :items="historyEventTypes"
              outlined
              dense
              clearable
              hide-details
              item-value="id"
              item-text="name"
              @input="searchHistory"
            ></v-select>
          </v-col>

          <v-col cols="2" class="row-col timeduration" id="history_ddl_timeduration_id">
            <v-select
              v-model="searchObject.timeduration"
              prepend-inner-icon="mdi-text-box-search "
              :placeholder="$t('history.timeduration')"
              :items="timeduration"
              outlined
              dense
              clearable
              hide-details
              item-value="id"
              item-text="name"
              @input="timeSearchHistory"
            ></v-select>
          </v-col>
          <v-col cols="2" class="row-col bttn-date">
            <!-- <v-icon
              style="cursor: pointer"
              color="primary"
              v-if="!isDateRange || dateObject.startDate== null"
              @click.stop="openDialog"
              light
              >mdi-calendar-today</v-icon
            > -->

            <v-text-field
              :value="`${datefield}`"
              prepend-icon="mdi-calendar-today"
              class="shrink pt-0 datefield"
              style="cursor: pointer"
              color="primary"
              @click:prepend="openDialog"
              @click="openDialog"
              
              readonly
            ></v-text-field>
          </v-col>

          <v-col cols="1" class="row-col">
            <v-btn
              color="red"
              class="bttn"
              text
              @click.stop="deleteLastOperation"
              :disabled="!isSelected"
            >
              <v-icon style="cursor: pointer" light>mdi-close-octagon </v-icon
              >{{ this.$t("common.canceloperation") }}</v-btn
            >
          </v-col>

          <!-- <v-layout row wrap justify-end>
            <v-flex shrink class="mt-4 mr-8">
              <v-btn
                color="red"
                class="bttn"
                text
                @click.stop="deleteLastOperation"
                :disabled="!isSelected"
              >
                <v-icon light>mdi-close-octagon </v-icon
                >{{ this.$t("common.canceloperation") }}</v-btn
              >
            </v-flex>
          </v-layout> -->
        </v-row>
      </v-card>
    </template>
    <div>
      <v-data-table
        id="history_datatable_id"
        style="min-height: 38vh"
        :headers="headers"
        :items="updateHistory"
        :items-per-page="5"
        dense
        class="elevation-1 pa-0"
      >
        <!--To highlist selected coloum values with specific color based on a condition-->
        <!-- <template v-slot:item.eventType="{ item }">
        <v-chip
          :color="getColor(item.eventType)"
          dark
        >
          {{ item.eventType }}
        </v-chip>
      </template> -->
        <template v-slot:item="{ item }" id="table_inner_id">
          <tr
            :class="
              item == selectedItem && isSelected
                ? 'row-pointer font-weight-bold red lighten-5 red--text '
                : item.isLastOperation
                ? 'row-pointer indigo lighten-5'
                : ''
            "
            @click="rowClicked(item)"
          >
            <td>{{ item.logId }}</td>
            <td>{{ item.documentId }}</td>
            <td>{{ item.fileName }}</td>
            <td>{{ item.projectName }}</td>
            <td>{{ item.layerName }}</td>
            <td>{{ item.featureName }}</td>
            <td>{{ item.eventDate }}</td>
            <td id="dt_username_id">{{ item.loginName }}</td>
            <td>{{ item.eventType }}</td>
          </tr>
        </template>
      </v-data-table>
      <dialog-datepicker v-if="DialogDatepicker" @close="closeDate" />
      <dialog-cancel
        v-if="dialogCancel"
        :object="GeoObject"
        :message="deleteMessage"
        @close="close"
        :dispatch="dispatch"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
import DialogCancel from "./DialogCancel.vue";
import DialogDatepicker from "./DialogDatepicker.vue";
export default {
  components: {
    "dialog-cancel": DialogCancel,
    "dialog-datepicker": DialogDatepicker,
  },
  data() {
    return {
      ...mapMutations("app", ["setGeoObjects"]),
      ...mapMutations("app", ["SET_HISTORY"]),
      ...mapMutations("app", ["setDateObject"]),
      ...mapMutations("app", ["setIsDateRange"]),
      // isShowDate: false,
      GeoObject: {},
      dispath: "",
      dialogCancel: false,
      DialogDatepicker: false,
      selectedItem: {},
      selectedRows: [],
      isSelected: false,
      rowClass: "",
      searchObject: {
        username: null,
        timeduration: null,
        eventtype: null,
        
      },

      breadcrumbs: [
        {
          text: "History",
          disabled: false,
          href: "#",
        },
        {
          text: "List",
        },
      ],
    }; //return
  }, //data()

  mounted() {
    // this.$store.dispatch("app/getHistory");

    console.log("/////////searchObject.timeduration://////////:",this.searchObject.timeduration);
     console.log("/////////searchObject.dateObject://////////:",this.dateObject);
   
    // let isSearchAll = true;
    if (localStorage.eventtype) {
      // isSearchAll = false;
      this.searchObject.eventtype = localStorage.eventtype;
    }
    if (localStorage.timeduration) {
      // isSearchAll = false;

      this.searchObject.timeduration = localStorage.timeduration;
    } else if (localStorage.startDate && localStorage.timeduration == "") {
      this.setIsDateRange(true);
     this.dateObject.startDate = localStorage.startDate;
     this.dateObject.endDate = localStorage.endDate;
     
    }
 

    if (localStorage.username) {
      // isSearchAll = false;

      this.searchObject.username = localStorage.username;
    }
    if (localStorage.historyfilename) {
      // isSearchAll = false;
      this.searchObject.fileName = localStorage.historyfilename;
    }
    console.log("searchObject.timeduration://////////:",this.searchObject.timeduration);
       console.log("this.dateObject://////////:",this.dateObject);
    this.searchHistory();
    // isSearchAll ? this.history : this.searchHistory();
  },

  methods: {
    openDialog() {
      this.DialogDatepicker = true;
    },
    timeSearchHistory() {
      // this.isShowDate = false;
      this.searchHistory();
    },

    searchHistory() {
      // let username=this.searchObject.username;
      // let timeduration=this.searchObject.timeduration;
      // let eventtype=this.searchObject.eventtype;
      // alert("Inside function "+ username +" "+ timeduration +" "+ eventtype);
      //alert("Inside function--------- "+ username +" "+ timeduration +" "+ eventtype);

      // var dateOb = {
      //   startDate: null,
      //   endDate: null,
      // };
      if (localStorage.timeduration != this.searchObject.timeduration) {
        localStorage.timeduration = this.searchObject.timeduration;
      }

      // if (!this.isDateRange) {
      //   this.setDateObject(dateOb);
      // }

      localStorage.eventtype = this.searchObject.eventtype;
      if (this.searchObject.username)
        localStorage.username = this.searchObject.username;
      else localStorage.username = "";
      if (this.searchObject.fileName) {
        localStorage.historyfilename = this.searchObject.fileName;
      } else {
        localStorage.historyfilename = "";
      }

      if (this.searchObject.username == "") this.searchObject.username = null;
      if (
        this.searchObject.timeduration == "" ||
        this.searchObject.timeduration == "null"
      )
        this.searchObject.timeduration = null;
      console.log(
        "this.searchObject.timeduration:",
        this.searchObject.timeduration
      );
      if (this.searchObject.timeduration != null) {
        this.setIsDateRange(false);
      } else if (localStorage.startDate != "" || localStorage != "null")
        this.setIsDateRange(true);

      if (this.searchObject.eventtype == "") this.searchObject.eventtype = null;

      this.$store.dispatch("app/getSearchHistory", this.searchObject);
    },

    getColor(calories) {
      // if (calories > 400) return 'red'
      // else if (calories > 200) return 'orange'
      // else return 'green'
      return "green";
    },
    rowClicked(item) {
      if (item.isLastOperation) {
        this.toggleSelection(item.logId);
        this.selectedItem = item;
      }
    },
    toggleSelection(keyID) {
      if (this.selectedRows.includes(keyID)) {
        this.selectedRows = this.selectedRows.filter(
          (selectedKeyID) => selectedKeyID !== keyID
        );
        this.isSelected = false;
      } else {
        // this.selectedRows.push(keyID);  // uncomment this line for multiple selection
        this.selectedRows = [keyID];
        this.isSelected = true;
      }
    },

    deleteLastOperation() {
      this.GeoObject.projectId = this.selectedItem.projectId;
      this.GeoObject.IsLayer = this.selectedItem.featureId == "--";
      this.GeoObject.layerId = this.selectedItem.layerId;
      this.GeoObject.featureId = this.GeoObject.IsLayer
        ? ""
        : this.selectedItem.featureId;
      this.GeoObject.documentId = this.selectedItem.documentId;
      // this.GeoObject.isUndoOperation =true;

      let listOFGeos = []; // that is because in the backend features are list of objects.
      listOFGeos.push(this.GeoObject);

      this.setGeoObjects(listOFGeos);
      if (this.selectedItem.eventType.toLowerCase().includes("delete")) {
        this.dispatch = "app/CreateDocumentAssociation";
      } else if (this.selectedItem.eventType.toLowerCase().includes("create")) {
        if (this.selectedItem.featureId == "--")
          this.dispatch = "app/deleteDocsLayer";
        else this.dispatch = "app/deleteDocsFeature";
      }
      this.dialogCancel = true;
    },
    close() {
      this.dialogCancel = false;
      this.$router.go(0);
    },
    closeDate() {
      this.DialogDatepicker = false;
      // this.isShowDate = true;
      if (this.isDateRange) {
        this.searchObject.timeduration = "";
        localStorage.timeduration = "";
      }
      this.searchHistory();
    },
  },

  computed: {
    // ...mapState("app", ["history"]),
    ...mapState("app", ["historyEventTypes"]),
    ...mapState("app", ["isDateRange"]),
    ...mapState("app", ["dateObject"]),
    ...mapState("app", ["sProjectId"]),
    ...mapGetters("app", ["getHistoryWithDocName"]),
    datefield() {
    
      
      return this.dateObject.startDate != null && this.isDateRange
        ? `${this.dateObject.startDate}...${this.dateObject.endDate}`
        : "";
    },
    history() {
      console.log("++++++++++++++++++++",this.getHistoryWithDocName)
      return this.getHistoryWithDocName;
    },
    timeduration() {
      return [
        { id: "1", name: this.$t("history.durationoption1") },
        { id: "2", name: this.$t("history.durationoption2") },
        { id: "3", name: this.$t("history.durationoption3") },
        { id: "4", name: this.$t("history.durationoption4") },
        { id: "7", name: this.$t("history.durationoption_oneweek") },
        { id: "30", name: this.$t("history.durationoption_onemonth") },
        { id: "All", name: this.$t("history.durationoption_all") },
      ];
    },
    updateHistory() {
      var x = this.sProjectId
        ? this.history.filter((h) => h.projectId == this.sProjectId)
        : this.history;

      var y = !this.searchObject.fileName
        ? x
        : x.filter((h) => {
            if (h.fileName)
              if (h.fileName.includes(this.searchObject.fileName)) return h;
          });
      return y;
    },
    deleteMessage() {
      return {
        title: this.$t("common.canceloperation"),
        body:
          this.selectedItem.eventType +
          "  pour le document:  " +
          this.selectedItem.documentId +
          "  ",
      };
    },

    headers() {
      return [
        {
          text: this.$t("history.logid"),
          value: "logId",
          class: "blue lighten-3",
        },
        {
          text: this.$t("history.documentid"),
          value: "documentId",
          class: "blue lighten-3",
        },
        {
          text: this.$t("common.filename"),
          value: "fileName",
          class: "blue lighten-3",
        },

        {
          text: this.$t("history.projectname"),
          value: "projectName",
          class: "blue lighten-3",
        },
        {
          text: this.$t("history.layername"),
          value: "layerName",
          class: "blue lighten-3",
        },
        {
          text: this.$t("history.featurename"),
          value: "featureName",
          class: "blue lighten-3",
        },
        {
          text: this.$t("history.eventdate"),
          value: "eventDate",
          class: "blue lighten-3",
        },
        {
          text: this.$t("history.loginname"),
          value: "loginName",
          class: "blue lighten-3",
        },
        {
          text: this.$t("history.eventtype"),
          value: "eventType",
          class: "blue lighten-3",
        },
      ];
    },
  }, //computed
};
</script>

<style scoped>
tbody tr:nth-of-type(odd) {
  background-color: rgba(0, 0, 0, 0.02);
}
.row-pointer:hover {
  cursor: pointer !important;
}
.bttn {
  font-size: 75% !important;
}
.bttn-date {
  font-size: 75% !important;
  margin-left: 0 !important;
  margin-top: 4px !important;
  padding-left: 0 !important;
}

/* .bttn-date{
  font-size: 75% !important;
  margin-left:0 !important;
  padding-left: 0 !important;
  border: 2px red solid !important;

}
.timeduration{
  margin-right:0 !important;
  padding-right:0 !important;
  border: 2px red solid !important;
} */
.row-col {
  margin-right: 0 !important;
  padding-right: 0 !important;
  margin-left: 8px !important;
  padding-left: 0 !important;
  margin-bottom: 0 !important;
  padding-bottom: 0 !important;
}
.v-text-field.datefield{
      width: 170px !important;
}
</style>