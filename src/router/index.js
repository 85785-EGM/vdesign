import config from '@/config'
import { createRouter, createWebHashHistory } from 'vue-router'
import commonRoutes from './common'
import projectRoutes from './project'

export default createRouter({
  history: createWebHashHistory(config.url.base),
  routes: [...commonRoutes, ...projectRoutes]
})
