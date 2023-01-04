<template>
  <v-dialog :value="true" persistent width="60%">
    <v-card class="noscroll">
      <v-card-title v-if="document">
        {{ $t("common.dialogAssocAddTitle") }}:&nbsp;
        {{ document.filename }}</v-card-title
      >
      <v-card-title v-else> GroupVersionId: {{ groupVersionId }}</v-card-title>
      <v-row class="px-2 ma-0">
        <v-col cols="12">
          <!-- <v-select
            v-model="GeObject.projectId"
            prepend-inner-icon="mdi-map-search "
            placeholder="Select Context"
            :items="projects"
            item-text="description"
            item-value="id"
            outlined
            clearable
            dense
            hide-details
            @click="handelProjectSearch()"
            @input="handelProjectSearch()"
          ></v-select> -->
          <v-text-field
            prepend-inner-icon="mdi-map"
            :value="repositoryId"
            filled
            readonly
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-select
            v-model="GeObject.layerId"
            prepend-inner-icon="mdi-layers-triple "
             :placeholder="$t('common.selectLayer')"
            :items="layers"
            item-text="description"
            item-value="id"
            outlined
            dense
            clearable
            hide-details
            @input="handelLayerSearch()"
          ></v-select>
        </v-col>
        <v-col cols="12">
          <v-autocomplete
            v-model="GeObject.featureId"
            prepend-inner-icon="mdi-billboard"
            :placeholder="$t('common.selectFeature')"
            :items="features"
            item-text="properties"
            item-value="id"
            outlined
            dense
            clearable
            hide-details
            :disabled="!GeObject.layerId"
          ></v-autocomplete>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-container  fluid>
            <v-checkbox
              v-model="checked"
              color="warning"
             
              :label="$t('common.PleaseConfirmAssoc')"
            ></v-checkbox>
          </v-container>
        </v-col>
      </v-row>
      <v-row>
        <!-- <v-col v-if="projectId && layerId" cols="12" sm="2"> -->

        <v-col cols="5" class="d-flex justify-end ml-9"
          ><v-btn
            @click="$emit('close', false)"
            outlined
            large
            color="primary"
            class="mb-2"
          >
            {{ $t("common.cancel") }}
          </v-btn></v-col
        >
        <v-col cols="5" class="d-flex justify-start">
          <v-btn
            outlined
            large
            color="red"
            class="mb-2"
            :disabled="!GeObject.layerId || !checked"
            @click.stop="handleAddClick"
            >{{ $t("common.add") }}
            <v-icon right> mdi-map-marker-plus-outline </v-icon></v-btn
          >
        </v-col>
      </v-row>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
export default {
  props: ["document", "groupVersionId", "project"],
  data() {
    return {
      GeObject: {
        projectId: 0,
        layerId: 0,
        featureId: "",
      },
      checked: false,
      repositoryId: "",
      projectsOfTheRpository: {},
    };
  },
  mounted() {
    // this.$store.dispatch("app/GetProjects"); // fetches and sets all the projects
    if (this.document) this.repositoryId = this.document.repositoryId;
    else
      this.repositoryId = this.documentinfos.find(
        (item) => item.groupVersionId === this.groupVersionId
      ).repositoryId;
    this.GeObject.projectId = this.project.id;
    this.setProjectSearch(this.project.id);
    this.$store.dispatch("app/GetLayers", this.project.id);
  },
  computed: {
    title() {
      return this.$t("common.dialogAssocAddTitle");
    },
    ...mapState("app", ["documentinfos"]),
    ...mapState("app", ["projects"]),
    ...mapState("app", ["GeoObjects"]),
    ...mapState("app", ["layers"]),
    ...mapState("app", ["features"]),
    // projectsOfTheRpository() {
    //   return this.projects.find(
    //     async (p) =>
    //       (await p.name.toLowerCase()) === this.repositoryId.toLowerCase()
    //   ).projectId;
    // },
  },
  methods: {
    ...mapMutations("app", ["setProjectSearch"]),
    ...mapMutations("app", ["setLayerSearch"]),
    ...mapMutations("app", ["setGeoObjects"]),
    ...mapMutations("app", ["setTabUrl"]),

    // handelProjectSearch() {
    //   // console.log("projectsOfTheRpository***: ");
    //   // console.log(this.projectsOfTheRpository);
    //   // if (this.GeObject.projectId !== null)
    //   //   this.setProjectSearch(this.GeObject.projectId);
    //   // this.$store.dispatch("app/GetLayers", this.GeObject.projectId);
    //   this.GeObject.projectId = this.project.id;
    //   this.setProjectSearch(this.project.id);
    //   this.$store.dispatch("app/GetLayers", this.project.id);
    // },

    handelLayerSearch() {
      if (this.GeObject.layerId !== null) {
        this.setLayerSearch(this.GeObject.layerId);
      }
      this.$store.dispatch("app/GetFeatures", this.GeObject);
    },

    handleAddClick() {
      if (!this.GeObject.featureId) {
        this.GeObject.featureId = "";

        this.setTabUrl("#tabs-layer");
      } else {
        this.setTabUrl("#tabs-feature");
      }
      let listOFGeos = []; // that is because in the backend features are list of objects.
      listOFGeos.push(this.GeObject);
      this.setGeoObjects(listOFGeos);
      // console.log("state.GeObject: ",this.GeoObjects);

      this.document
        ? console.log("add-Document:", this.document)
        : console.log("add-groupVersionId:", this.groupVersionId);

      if (this.document) {
        this.$store.dispatch(
          "app/CreateDocumentAssociation",
          this.document.documentId
        );
      } else {
        this.documentinfos.forEach(async (item) => {
          if (item.groupVersionId === this.groupVersionId) {
            await this.$store.dispatch(
              "app/CreateDocumentAssociation",
              item.documentId
            );
          }
        });
      }
      setTimeout(() => {
        this.$emit("close", true);
      }, 500);
    },
  },
};
</script>

<style scoped >
.noscroll {
  overflow-y: hidden !important; /* Hide vertical scrollbar */
  overflow-x: hidden !important; /* Hide horizontal scrollbar */
}
.confirm_check .theme--light.v-label {
  color: #ff8e00 !important;
  /* letter-spacing: -1px; */
}
.v-input--selection-controls__input {
  margin-left: 3em !important;
}
label.v-label{
    font-size: 50px !important;
    color: #ff8e00 !important;
  }
</style>