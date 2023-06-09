import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BookPage from '@/views/BookView.vue'
import TextReaderView from '@/views/TextReaderView.vue'

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
  },
  {
    path: '/books/text',
    name: 'text-reader',
    component: TextReaderView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
