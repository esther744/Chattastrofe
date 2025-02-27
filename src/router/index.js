import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login.vue'
import Header from '@/views/Header.vue'
import Footer from '@/views/Footer.vue'
import Profilo from '@/views/Profilo.vue'
import Home from '@/views/Home.vue'
import Registrazione from '../views/Registrazione.vue'

const routes = [
  {
    path: '/registrazione',
    name: 'registrazione',
    component: Registrazione
  },
  {
    path: '/',
    name: 'login',
    component: Login
    },
  {
    path: '/home',
    name: 'home',
    component: Home
    },
    {
      path: '/header',
      name: 'header',
      component: Header
      },
      {
        path: '/footer',
        name: 'footer',
        component: Footer
        },
        {
          path: '/profilo',
          name: 'profilo',
          component: Profilo
          }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
