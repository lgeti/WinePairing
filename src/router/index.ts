import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import CuisineView from '../views/CuisineView.vue'
import DishView from '../views/DishView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/cuisine',
      name: 'cuisine',
      component: CuisineView,
    },
    {
      path: '/dish',
      name: 'dish',
      component: DishView,
    }
  ]
})

export default router
