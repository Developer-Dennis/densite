import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from  '../views/AboutView.vue'
import Skills from '../views/skills.vue'
import Work from '../views/work.vue'
import Contact from '../views/contact.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component:About
  },
  {
    path: '/skills',
    name: 'skills',
    component: Skills
  },
  {
    path: '/work',
    name: 'work',
    component:Work
  },
  {
    path: '/contact',
    name: 'contact',
    component:Contact
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
