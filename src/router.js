import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Blog from './pages/Blog.vue'
import Statya from './pages/Statya.vue'

export default createRouter({
  history: createWebHashHistory(), 
  routes: [
    {path: '/', component: Home},
    {path: '/blog', component: Blog},
    {path: '/statya', component: Statya},
  ]
})