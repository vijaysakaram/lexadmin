<template>
  <div class="text-center">
    <v-progress-circular
      indeterminate
      color="primary"
    ></v-progress-circular>

    <v-progress-circular
      indeterminate
      color="secondary"
    ></v-progress-circular>

    <v-progress-circular
      indeterminate
      color="primary"
    ></v-progress-circular>

    <v-progress-circular
      indeterminate
      color="secondary"
    ></v-progress-circular>

    <v-progress-circular
      indeterminate
      color="primary"
    ></v-progress-circular>
  </div>
</template>


<script>
export default {
  props:['message','iconName']
}
</script>


<style scoped>
.v-progress-circular {
  margin: 2rem;
  opacity: 0.7;
}
</style>