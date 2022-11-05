import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./pages/Home.vue";
import Blog from "./pages/Blog.vue";
import Statya1 from "./pages/Statya1.vue";
import Statya2 from "./pages/Statya2.vue";
import AboutUs from "./pages/About us.vue";
import Contacts from "./pages/Contacts.vue";
import Agree from "./pages/Agree.vue";
import Rules from "./pages/Rules.vue";
import Suggestions from "./pages/Suggestions.vue";
import Politika from "./pages/Politika.vue";
import Dogovor from "./pages/Dogovor.vue";
import Coockie from "./pages/Coockie.vue";
import Ugoda from "./pages/Ugoda.vue";
import Reserved from "./pages/Reserved.vue";
import Drop from "./pages/Dropshipping.vue";
import Support_service from "./pages/Support_service.vue";
import Create from "./components/Create_components/Create.vue";
import Create1 from "./components/Create_components/Create_1.vue";
import Create2 from "./components/Create_components/Create_2.vue";
import Create3 from "./components/Create_components/Create_3.vue";
import Login from "./components/Sign_components/Login.vue";
import Login_error from "./components/Sign_components/Login_error.vue";
import Sign from "./components/Sign_components/SignIn.vue";
import Product from "./pages/Product.vue";
import Account from './pages/Account.vue'
import Orders from './pages/Orders.vue'
import Orders_card from './components/Orders_card.vue'
import Chat from './pages/Chat.vue'
import Chat2 from './pages/Chat2.vue'
import Tarif from './pages/Tarif.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/blog", component: Blog },
    { path: "/statya1", component: Statya1 },
    { path: "/statya2", component: Statya2 },
    { path: "/aboutUs", component: AboutUs },
    { path: "/contacts", component: Contacts },
    { path: "/agree", component: Agree },
    { path: "/rules", component: Rules },
    { path: "/suggest", component: Suggestions },
    { path: "/politika", component: Politika },
    { path: "/dogovor", component: Dogovor },
    { path: "/coockie", component: Coockie },
    { path: "/ugoda", component: Ugoda },
    { path: "/reserved", component: Reserved },
    { path: "/dropShipping", component: Drop },
    { path: "/support", component: Support_service },
    { path: "/create", component: Create },
    { path: "/create/create1", component: Create1 },
    { path: "/create/create2", component: Create2 },
    { path: "/create/create2/create3", component: Create3 },
    { path: "/login", component: Login },
    { path: "/login_error", component: Login_error },
    { path: "/sign", component: Sign },
    { path: "/product", component: Product },
    {path: '/account', component: Account},
    {path: '/orders', component: Orders},
    {path: '/orders/card', component: Orders_card},
    {path: '/chat', component: Chat},
    {path: '/chat2', component: Chat2},
    {path: '/tarif', component: Tarif},
  ],
});
