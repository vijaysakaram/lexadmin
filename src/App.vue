<template>
  <v-app>
    <!-- Layout component -->
    <component :is="currentLayout" v-if="isRouterLoaded">
      <transition name="fade" mode="out-in">
        <router-view />      
      </transition>
      <snackbar />
    </component>

    <v-snackbar v-model="toast.show" :timeout="toast.timeout" :color="toast.color" bottom>
      {{ toast.message }}
      <v-btn v-if="toast.timeout === 0" color="white" text @click="toast.show = false">{{ $t('common.close') }}</v-btn>
    </v-snackbar>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'
import config from './configs'

// Layouts
import defaultLayout from './layouts/DefaultLayout'

export default {
  components: {
    defaultLayout ,    
    snackbar: require('@/components/common/Snackbar.vue').default 
  },
  computed: {
    ...mapState('app', ['toast']),
    isRouterLoaded: function() {
      if (this.$route.name !== null) return true
      
      return false
    },
    currentLayout: function() {
      const layout = this.$route.meta.layout || 'default'

      return layout + 'Layout'
    }
  },
  mounted() {  
   
  }, 
  head: {
    link: [
      // adds config/icons into the html head tag
      ...config.icons.map((href) => ({ rel: 'stylesheet', href }))
    ]
  }
}
</script>

<style scoped>
/**
 * Transition animation between pages
 */
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.2s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
