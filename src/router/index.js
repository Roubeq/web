import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/index.vue'
import Info from '@/views/info.vue'
import Catalog from '@/views/catalog.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/catalog', component: Catalog },
    { path: '/info', component: Info },
  ]
})

export default router