import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
// Importamos nuestro daybook router que esta en la carpeta "daybook"
import daybookRouter from '../modules/daybook/router/index' 

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/daybook',
    // El daybookRouter que estamos importando los esparcimos mediante el operador Spree
    ...daybookRouter
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
