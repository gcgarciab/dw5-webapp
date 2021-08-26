import Product from '@/views/Product'
import UserHistory from '@/views/UserHistory'
import UserTransactions from '@/views/UserTransactions'
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import UserAuth from '@/views/UserAuth'
import User from '@/views/User'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/user/auth',
    name: 'UserAuth',
    component: UserAuth
  },
  {
    path: '/user/:id',
    name: 'User',
    component: User
  },
  {
    path: '/user/transactions/history',
    name: 'UserHistory',
    component: UserHistory
  },
  {
    path: '/user/transactions/create',
    name: 'UserTransactions',
    component: UserTransactions
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: Product
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
