import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/home.vue'
import About from '../views/about.vue'
import Contacts from '../views/contacts.vue'
import Staff from '../views/HelloWorld.vue'
 
const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/contacts',
    component: Contacts,
  },
  {
    path: '/staff',
    component: Staff,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router