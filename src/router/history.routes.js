export default [
  {
    path: '/history/list',
    name: 'history-list',
    component: () =>
      import(
        /* webpackChunkName: "" */ '@/pages/history/HistoryPage.vue'              )
  }  
]