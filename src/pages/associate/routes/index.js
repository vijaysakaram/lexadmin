export default [ 
  {
    path: '',
    redirect: 'list'
  },{
  path: 'list',
  name: 'documents-association',
  component: () => import( '@/pages/associate/EditAssociation/DocumentsDetails.vue')
},
{
  path: 'list/details/:id',
  name: 'documents-view-item',
  component: () => import('@/pages/associate/EditAssociation/ViewDocument.vue')
}

]
