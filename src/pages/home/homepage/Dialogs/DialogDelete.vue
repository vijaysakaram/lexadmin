<template>
  <v-dialog :value="true" persistent max-width="500">
    <v-card>
      <v-card-title class="text-h7"> {{ message.title }} </v-card-title>
      <v-card-text class="font-weight-bold"
        >Êtes-vous sûr de vouloir supprimer le réglement:
        {{ message.body }} ?</v-card-text
      >
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click.stop="close">{{
          $t("common.cancel")
        }}</v-btn>
        <v-btn color="warning" text @click.stop="deleteObject">
          <v-icon light>mdi-map-marker-remove-variant</v-icon>OK</v-btn
        >
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
// import { mapState, mapMutations, mapActions } from "vuex";
export default {
  props: ["object", "message", "dispatch"],
  data() {
    return {};
  },
  computed: {},
  methods: {
    close() {
      this.$emit("close", false);
    },

    deleteObject() {
      console.log("this.object: ", this.object);
      this.$store.dispatch(this.dispatch, this.object);
      this.$emit("close", true);
    },
  },
};
</script>

<style>
</style>