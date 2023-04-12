import NotFound from '@/views/common/NotFound.vue'

export default [
  { name: 'home', path: '/', redirect: '/order' },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  }
]
