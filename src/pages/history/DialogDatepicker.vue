<template>
  <v-dialog :value="true" persistent max-width="800">
    <v-card>
      <v-card-title class="text-h7"
        >{{ $t("history.datepicker") }}:
      </v-card-title>
      <!-- <v-card-text class="font-weight-bold"
        > 
         </v-card-text
      > -->
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-col cols="4" class="row-col">
          <v-menu
            v-model="menu1"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="dateObject.startDate"
                :label="$t('history.startdate')"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              no-title
              v-model="dateObject.startDate"
              @input="menu1 = false"
              :max="nowDate"
            ></v-date-picker>
          </v-menu>
        </v-col>
        <v-col cols="4" class="row-col">
          <v-menu
            v-model="menu2"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="dateObject.endDate"
                :label="$t('history.enddate')"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              no-title
              v-model="dateObject.endDate"
              @input="menu2 = false"
              :min="dateObject.startDate"
              :max="nowDate"
            ></v-date-picker>
          </v-menu>
        </v-col>
        <v-spacer></v-spacer>
        <v-col sm="2" align="center">
          <v-btn color="warning" text @click.stop="ok">
            <v-icon light>mdi-check-mark</v-icon>OK
          </v-btn>
        </v-col>
        <v-col sm="2" align="center">
          <v-btn color="blue darken-1" text @click.stop="close">{{
            $t("common.cancel")
          }}</v-btn>
        </v-col>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  // props: ["object", "message", "dispatch"],
  data() {
    return {
      //Start- Date pickers
      dateObject: {
        endDate: new Date().toISOString().substr(0, 10),
        startDate: new Date().toISOString().substr(0, 10),
      },
      nowDate: new Date().toISOString().slice(0, 10),

      menu1: false,
      menu2: false,
      //End-  Date pickers};
    };
  },
  computed: {
    // ...mapState("app", ["history"]),
    ...mapState("app", ["isDateRange"]),
  },
  methods: {
    ...mapMutations("app", ["setIsDateRange"]),
    ...mapMutations("app", ["setDateObject"]),

    close() {
      this.setIsDateRange(false);
      var dateObject = {};
      dateObject.startDate = null;
      dateObject.endDate = null;
      this.setDateObject(dateObject);
     
      this.$emit("close");
    },
    ok() {   
      this.setIsDateRange(true);
      this.setDateObject(this.dateObject);
       localStorage.startDate = this.dateObject.startDate;
      localStorage.endDate =this.dateObject.endDate;
        this.$emit("close");
    },
  },
};
</script>

<style>
</style>