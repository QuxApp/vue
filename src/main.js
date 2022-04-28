import { createApp } from 'vue'
import { createRouter, createWebHistory } from "vue-router"

import App from './App.vue'
import Home from './views/Home.vue'
import Dashboard from './views/Dashboard.vue'
import About from './views/About.vue'
import Settings from './views/Settings.vue'
import Lost from './views/Lost.vue'

const router = createRouter({
  history: createWebHistory(), 
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    },
    {
      path: '/:catchAll(.*)*',
      name: 'Lost',
      component: Lost
    },
  ]
})

createApp(App).use(router).mount('#app')
