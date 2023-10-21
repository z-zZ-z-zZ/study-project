import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/Home/index.vue'
import threeDemo from '../components/ThreeDemo/index.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/threeDemo',
      name: 'threeDemo',
      component: threeDemo
    },
    
  ]
})

export default router
