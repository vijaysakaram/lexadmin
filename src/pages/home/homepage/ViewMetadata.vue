<template>
  <v-dialog
    :value="true"
    persistent
    @click:outside="$emit('close')"
    max-width="1000"
  >
    <v-card class="noscroll">
      <v-card-title class="text-h7">{{$t('common.custommetadata') }} </v-card-title>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr class="font-weight-bold">
              <th class="text-left text-h5" v-text="$t('common.metadata')"></th>
              <th class="text-left text-h5" v-text="$t('Value')"></th>
            </tr>
          </thead>
          <tbody class="font-weight-bold">
            <tr v-for="(item, index) in documentSelectedMetas" :key="index">
              <td>{{ item.name}}:</td>
              <td><span v-for="(value, index) in item.values" :key="index">{{ value }}<br/></span></td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
      <v-row>
        <v-col sm="10"></v-col>

        <v-col sm="2" align="center">
          <v-btn
          align="center"
            color="primary"
            @click="$emit('close')"
            v-text="$t('Close')"
          ></v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: ["document"],
  data() {
    return {
      documentSelectedMetas:[]
    };
    
  },

  computed: {
    // ...mapState("app", ["doctypes"]),

    ...mapState("app", ["selectedCustomMetas"]),
  },
  methods: {
    docCustomMetas() {
    this.document.customMetas.filter((d) => {
        this.selectedCustomMetas.forEach((scm) => {
          // console.log(scm.id);
          // console.log(d.key);
          if (scm.id == d.key) {
          console.log('c:',d);
            d.name = scm.name;  
            this.documentSelectedMetas.push(d)}
        });
      });
    },
  },
  mounted() {
    this.docCustomMetas();
    console.log("selectedCustomMetas: ", this.selectedCustomMetas);
    console.log("documentSelectedMetas: ",this.documentSelectedMetas);
  },
};
</script>
<style scoped>
.noscroll {
  overflow-y: hidden !important; /* Hide vertical scrollbar */
  overflow-x: hidden !important; /* Hide horizontal scrollbar */
}
</style>
