<template>
  <v-snackbar
    v-model="snackbar.show"
  >
    {{ snackbar.text }}

    <template v-slot:action="{ attrs }">
      <v-btn
        text
        v-bind="attrs"
        @click="hideSnackbar"    
      >
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
import { mapMutations,  mapState } from 'vuex'
export default {
  computed: {
    ...mapState('app', ['snackbar'])
  },
  methods: {
    ...mapMutations('app', ['hideSnackbar'])
  }
}
</script>