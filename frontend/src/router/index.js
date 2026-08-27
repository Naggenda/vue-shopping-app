import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Products from '../views/Products.vue'
import Categories from '../views/Categories.vue'
import Cart from '../views/Cart.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/products',
      name: 'products',
      component: Products
    },
    {
        path: '/categories',
        name: 'categories',
        component: Categories
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    }
  ]
})

export default router