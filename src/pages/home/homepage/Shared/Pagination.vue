<template>
  <div class="pl-6 pr-1">
    <v-row class="text-center px-4 align-center" wrap>
      <v-col class="text-truncate mt-0" cols="12">
        Total {{ totalRecords }} {{ $t('common.record') }}s
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="2">
        <v-select
          dense
          outlined
          hide-details
          :value="itemsPerPage"
          label="Items / page"
          :items="perPageChoices"
          @change="onChangeItemPerPage($event)"         
        >
        </v-select>
      </v-col>
      <v-col cols="1">    
      </v-col>
      <v-col cols="9" class="d-flex flex-row-reverse">
        <v-pagination
          v-model="page"
          :length="pageCount"
          circle
          @input="onInputPage($event)"         
        >
        </v-pagination>
      </v-col>
      <v-col cols="1"></v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState ,mapMutations } from 'vuex'
export default {
  props: {
    totalitems: {
      type: Number,
      default: 0
    } },
  
  data() {
    return {
      page: 1,
      itemsPerPage: 10,
      perPageChoices: [
        { text: '5', value: 5 },
        { text: '10', value: 10 },
        { text: '20', value: 20 }
      ]
    }
  },

  computed: {
    totalRecords() {
      
      return this.totalitems
    },
    pageCount() {
     
      return Math.ceil(this.totalitems / this.itemsPerPage)
    }
   
  },
  mounted() {
  },
  methods: {
    ...mapMutations('app', ['SET_PAGINATION']), 
    
    onChangeItemPerPage(e) {

      this.page = 1
      // var newitemsPerPage = parseInt(e, 10);
      // this.page = this.page * Math.floor(this.itemsPerPage/ newitemsPerPage)
    
      this.itemsPerPage = parseInt(e, 10)
    
      this.SET_PAGINATION( {
        itemsPerPage:parseInt(e, 10),
        page: 1,
        totalItems: this.totalItems
      })
      this.$emit('paginationChanged')
    },
    onInputPage(e) {
      this.page = parseInt(e, 10)
      const pgn = {
        itemsPerPage: this.itemsPerPage,
        page: this.page,
        totalItems: this.totalItems
      }

      this.SET_PAGINATION( pgn)
      this.$emit('paginationChanged')
   
    },
    setPageValue(val) {
      this.page = val
    }
  }  
  
}
</script>

<style>
</style>