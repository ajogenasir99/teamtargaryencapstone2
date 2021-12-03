import Vue from 'vue'
import Router from 'vue-router'
import shopHome from '../components/shopHome.vue'
import cartPage from '../components/CartPage.vue'
import homepage from '../components/homepage.vue'

Vue.use(Router)

export default new Router({
  routes: [
     {
       path: '/',
       name: 'Home',
       component: homepage
     }, {
       path: '/shophome',
       name: 'shophome',
       component: shopHome
     }, {
       path: '/cart',
       name: 'cart',
       component: cartPage
     }
  ]
})
