import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Card from '../components/Card.vue'
import FlashcardGame from '../views/Flashcard-game.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    }, 
    {
      path: '/flashcard-game',
      name: 'home',
      component: FlashcardGame
    },
    {
      path: '/flashcard-game/flashcard-animation',
      name: 'flashcard-animation',
      component: Card
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/axiostest',
      name: 'axiostest',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Axiostest.vue')
    }
  ]
})

export default router
