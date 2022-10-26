import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './pages/Home.vue'
import About from './pages/About.vue'

export default createRouter({
  history: createWebHashHistory(), 
  routes: [
    {path: '/', component: Home , alias: '/'},
    {path: '/about', component: About},
  ]
})