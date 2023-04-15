import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BookPage from '@/views/BookPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/books/:index',
    name: 'book-page',
    component: BookPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
