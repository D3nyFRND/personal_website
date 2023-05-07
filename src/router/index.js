import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/AboutView.vue'
import CV from '../views/CVView.vue'
import Portfolio from '../views/Portfolio.vue'

const routes = [
  {
    path: '/',
    name: 'about',
    component: About
  },
  {
    path: '/cv',
    name: 'cv',
    component: CV, 
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: Portfolio
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
