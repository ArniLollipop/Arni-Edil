import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Blog from './pages/Blog.vue'
import Statya1 from './pages/Statya1.vue'
import Statya2 from './pages/Statya2.vue'
import AboutUs from './pages/About us.vue'
import Contacts from './pages/Contacts.vue'
import Agree from './pages/Agree.vue'
import Rules from './pages/Rules.vue'
import Suggestions from './pages/Suggestions.vue'
import Politika from './pages/Politika.vue'
import Dogovor from './pages/Dogovor.vue'
import Coockie from './pages/Coockie.vue'
import Ugoda from './pages/Ugoda.vue'
import Reserved from './pages/Reserved.vue'
import Drop from './pages/Dropshipping.vue'
import Support_service from './pages/Support_service.vue'

export default createRouter({
  history: createWebHashHistory(), 
  routes: [
    {path: '/', component: Home},
    {path: '/blog', component: Blog},
    {path: '/statya1', component: Statya1},
    {path: '/statya2', component: Statya2},
    {path: '/aboutUs', component: AboutUs},
    {path: '/contacts', component: Contacts},
    {path: '/agree', component: Agree},
    {path: '/rules', component: Rules},
    {path: '/suggest', component: Suggestions},
    {path: '/politika', component: Politika},
    {path: '/dogovor', component: Dogovor},
    {path: '/coockie', component: Coockie},
    {path: '/ugoda', component: Ugoda},
    {path: '/reserved', component: Reserved},
    {path: '/dropShipping', component: Drop},
    {path: '/support', component: Support_service},
  ]
})