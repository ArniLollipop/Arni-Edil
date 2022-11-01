import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Blog from './pages/Blog.vue'
import Statya1 from './pages/Statya1.vue'
import Statya2 from './pages/Statya2.vue'
import AboutUs from './pages/About us.vue'
import Contacts from './pages/Contacts.vue'

export default createRouter({
  history: createWebHashHistory(), 
  routes: [
    {path: '/', component: Home},
    {path: '/blog', component: Blog},
    {path: '/statya1', component: Statya1},
    {path: '/statya2', component: Statya2},
    {path: '/aboutUs', component: AboutUs},
    {path: '/contacts', component: Contacts},
  ]
})