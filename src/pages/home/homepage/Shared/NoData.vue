<template>
  <div>
    <div class="no-data">
      <v-icon size="35" color="red accent-1">{{iconName}}</v-icon>
      <div class="text-h7">{{ message }}!</div>
     
    </div>
  </div>
</template>

<script>
export default {
  props:['message','iconName']
}
</script>

<style>
.no-data{
   opacity: 0.6;
  color:#f3a0a8!important;
}
</style>