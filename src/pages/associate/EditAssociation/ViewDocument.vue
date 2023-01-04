<template>
  <v-card class="min-w-0">
    <div class="email-app-top px-2 py-1 d-flex align-center">
      <v-btn icon @click="$router.go(-1)">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>

      <div class="mx-3">
        <!-- <v-btn icon>
          <v-icon>mdi-delete-outline</v-icon>
        </v-btn> -->
      </div>
    </div>
    <v-divider></v-divider>
    <div class="pa-2">
      <v-expansion-panels v-model="panel" multiple>
        <v-expansion-panel v-if="docInfo">
          <v-expansion-panel-header class="title">
            {{ $t("common.infobasique") }}
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <span class="font-weight-bold"
              >{{ $t("common.documentId") }} :</span
            >
            {{ docInfo.documentId }}
            <br />
            <span class="font-weight-bold">Repository Id :</span>
            {{ docInfo.repositoryId }}
            <br />
            <span class="font-weight-bold">{{ $t("common.filename") }} :</span>
            {{ docInfo.filename }}
            <br />
            <span class="font-weight-bold"
              >{{ $t("common.creationDate") }} :</span
            >
            {{ docInfo.creationDate | formatDate("lll") }}
            <br />
            <span class="font-weight-bold">
              {{ $t("common.modificationDate") }} :</span
            >
            {{ docInfo.modificationDate | formatDate("lll") }}
            <br />
            <br />
          </v-expansion-panel-content>
        </v-expansion-panel>
<!-- 
        <v-expansion-panel>
          <v-expansion-panel-header class="title">{{
            $t("common.viewassoc")
          }}</v-expansion-panel-header>
          <v-expansion-panel-content> </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header class="title">
            {{ $t("menu.history") }}</v-expansion-panel-header
          >
          <v-expansion-panel-content class="body-2">
          </v-expansion-panel-content>
        </v-expansion-panel> -->
        <v-expansion-panel v-if="docInfo">
          <v-expansion-panel-header class="title">{{
            $t("common.viewmetadata")
          }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <pre class="body-2">{{ docInfo }}</pre>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </v-card>
</template>

<script>
import http from "../../../configs/http";
export default {
  components: {},
  data() {
    return {
      panel: [0],
      docId: "",
      docInfo: {},
    };
  },
  async mounted() {
    if (typeof this.$router.currentRoute.params.id !== "undefined") {
      this.docId = this.$router.currentRoute.params.id;
      this.docInfo = await this.getInitializationDoc(this.docId);
    }
  },
  methods: {
    async getInitializationDoc(docId) {
      return await http.getURI(`/API/Documents/Id`, {
        params: {
          documentId: docId,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.email-app-top {
  height: 82px;
}
</style>
