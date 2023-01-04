<!--Vijay: Project selection dropdown list. top left cornor   -->
<template>
  <!--  -->
  <div class="d-flex flex-grow-1">
    <!-- Navigation -->
    <v-navigation-drawer v-model="drawer" app floating class="elevation-1">
      <!-- Navigation menu info -->
      <template v-slot:prepend>
        <div class="pa-1">
          <div class="title font-weight-bold primary--text">
            {{ product.name }} <v-icon>mdi-tools</v-icon>
          </div>
          <div class="overline grey--text">v-{{ product.version }}</div>
         
        </div>
      </template>
      <div id="projectselection_ddl_id">
         <v-select
            :value="sProjectId"          
            placeholder="Select Context"
            :items="projects"
            item-text="description"
            item-value="id"           
            hide-details
            @input="updateContext"
            class=" pl-2"
            dense
            flat
            solo
          >
          <template v-slot:prepend>
              <v-icon color="orange">mdi-map-marker-radius</v-icon>
            </template></v-select>
          <v-divider></v-divider>
      </div>

      <!-- Navigation menu -->
      <main-menu :menu="navigation.menu" />

      <!-- Navigation menu footer -->
      <template v-slot:append>
        <!-- Footer navigation links -->
        <div class="pa-1 text-center">
          <v-btn
            v-for="(item, index) in navigation.footer"
            :key="index"
            :href="item.href"
            :target="item.target"
            small
            text
          >
            {{ item.key ? $t(item.key) : item.text }}
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <!-- Toolbar -->
    <v-app-bar app>
      <v-card class="flex-grow-1 d-flex" flat>
        <div class="d-flex flex-grow-1 align-center">
          <!-- search input mobile -->
          <v-text-field
            v-if="showSearch"
            append-icon="mdi-close"
            placeholder="Search"
            prepend-inner-icon="mdi-magnify"
            hide-details
            solo
            flat
            autofocus
            @click:append="showSearch = false"
          ></v-text-field>

          <div v-else class="d-flex flex-grow-1 align-center">
            <v-app-bar-nav-icon
              @click.stop="drawer = !drawer"
            ></v-app-bar-nav-icon>

            <v-spacer class="d-none d-lg-block"></v-spacer>

            <!-- search input desktop -->
            <v-text-field
              ref="search"
              class="mx-1 hidden-xs-only"
              :placeholder="$t('menu.search')"
              prepend-inner-icon="mdi-magnify"
              hide-details
              filled
              rounded
              dense
            ></v-text-field>

            <v-spacer class="d-block d-sm-none"></v-spacer>

            <v-btn class="d-block d-sm-none" icon @click="showSearch = true">
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
            <toolbar-apps />

            <toolbar-language />
          </div>
        </div>
      </v-card>
    </v-app-bar>

    <v-main >
      <div  class ="ma-1 pa-1" >
        <v-layout >
          <slot></slot>
        </v-layout>
      </div>
      <v-footer app inset>
        <v-spacer></v-spacer>
        <div class="overline mb-3 mr-3">LabGo-IroSoft</div>
      </v-footer>
    </v-main>
  </div>
</template>

<script>
import { mapState } from "vuex";

// navigation menu configurations
import config from "../configs";
import MainMenu from "../components/navigation/MainMenu";
import ToolbarApps from "../components/toolbar/ToolbarApps";
import ToolbarLanguage from "../components/toolbar/ToolbarLanguage";
import http from "../configs/http";
import { mapMutations } from "vuex";

export default {
  components: {
    MainMenu,
    ToolbarApps,
    ToolbarLanguage,
  },
  data() {
    return {
      drawer: null,
      showSearch: false,
      navigation: config.navigation,
      projects: [],
    };
  },
  computed: {
    ...mapState("app", ["product"]),
    ...mapState("app", ["sProjectId"]),
  },

  async mounted() {
    this.projects = await this.getProjects();
    this.SET_PROJECTS(this.projects);

    var newVal = 0;
    if (parseInt(localStorage.sProjectId)) {
      newVal = parseInt(localStorage.sProjectId);
    } else {
      newVal = this.projects[0].id;
    }
    this.updateContext(newVal);
  },
  methods: {
    ...mapMutations("app", ["SET_PROJECTS"]),
    ...mapMutations("app", ["SET_SPROJECTID"]),
    async getProjects() {
      return await http.getURI(`/projects`);
    },
    updateContext(newValue) {
      localStorage.setItem("sProjectId", newValue);
      this.SET_SPROJECTID(parseInt(newValue));
    },
  },
};
</script>