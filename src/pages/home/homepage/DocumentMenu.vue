<template>
  <div>
    <v-menu bottom left>

      <template v-slot:activator="{ on, attrs }">
        <v-btn  class="ml-2" color="primary" icon v-bind="attrs" v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in menuItems"
          :key="index"
          @click="handleClick(index)"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu> 
 

        <!-- <dialog-delete
          v-if="dialogs.delete"
          @close="dialogs.delete = false"
          :object="document"
          :message="document.filename"
          :id="document.documentId"
        />      -->
    <view-associations
      v-if="dialogs.ViewAssociations"
      :document="document"
      :isGroupVersionId="false"
       @close="dialogs.ViewAssociations=false"    
    />
    <view-metadata 
      v-if="dialogs.viewMetadata"
      :document="document"

      @close="dialogs.viewMetadata = false"
    ></view-metadata>    

  </div>
</template>

<script>

// import EventBus from "@/EventBus"
import { mapMutations} from "vuex";
export default {
  components: {  
    'view-metadata': require('./ViewMetadata.vue').default,
    'view-associations': require('./ViewAssociations.vue').default,    
    'dialog-delete': require('./Dialogs/DialogDelete.vue').default  
  },
  // props: {
    
    // document: {
    //   type: Object,
    //   default: () => ({})
    // }
      
  // },
  props: ['document'],
  computed:{
    // ...mapState("app", ["selectedCustomMetas"]),
 menuItems(){ return[
      {
        title: this.$t('common.viewmetadata'),
        icon: 'mdi-dots-horizontal-circle-outline',
        click() {
          // this.displayedMetas = this.selectedCustomMetas;
        
          this.dialogs.viewMetadata = true
        }
      },    
      {
        title: this.$t('common.viewassoc'),
        icon: 'mdi-map-marker-multiple',
        click() {
        
           this.setParamIsGroupVersionId(false);
          this.dialogs.viewAssociation =true;
         
          this.$router.push(`/ViewAssociations/document/${this.document.documentId}`)
        
        }
      },  
      // {
      //   title:  'edit',
      //   icon: 'mdi-pencil',
      //   click() {
      //     this.dialogs.edit = true
      //   }
      // },
      // {
      //   title: this.$t('common.associate'),
      //   icon: 'mdi-google-maps',
      //   click() {
      //     console.log('Associer')
      //   }
      // },
      // {
      //   title: this.$t('common.delete'),
      //   icon: 'mdi-delete',
      //   click() {
      //     this.dialogs.delete = true
      //   }
      // }
    ]}
  },
  data: () => ({
    dialogs: {
      viewMetadata: false,
      viewAssociation:false,
      edit: false,
      delete: false
    },
    displayedMetas:[]
 
  }),
  mounted() {
  
  },
 
  methods: {
     ...mapMutations("app", ["setParamIsGroupVersionId"]),
    handleClick(index) {
      this.menuItems[index].click.call(this)
    }
  }  
  
}
</script>

<style>
</style>