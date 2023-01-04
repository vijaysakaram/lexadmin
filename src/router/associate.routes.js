import geographycRoutes from '../pages/associate/routes'
export default [
  
  {
    path: '/associate',
    name: 'associate',
    component: () => import( '@/pages/associate/AssociatePageList.vue'),
    children: [
      ...geographycRoutes
    ]
  }
]