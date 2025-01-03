import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Card from "../components/Card.vue";
import FlashcardGame from "../views/Flashcard-game.vue";
import Matchfield from "../components/Matchfield.vue";
import GameOverlay from "../components/GameOverlay.vue";
import SpriteAnimations from "../views/SpriteAnimations.vue";
import CardOnly from "@/views/CardOnly.vue";
import FlashcardsOnly from "../views/FlashcardsOnly.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/matchfield",
      name: "matchfield",
      component: Matchfield,
    },
    {
      path: "/game-overlay",
      name: "game-overlay",
      component: GameOverlay,
    },
    {
      path: "/flashcards-only",
      name: "flashcards-only",
      component: FlashcardsOnly,
    },
    {
      path: "/sprite-animations",
      name: "sprite-animations",
      component: SpriteAnimations,
    },
    {
      path: "/flashcard-game",
      name: "flashcard-game",
      component: FlashcardGame,
    },
    {
      path: "/card-only",
      name: "card-only",
      component: CardOnly,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/axiostest",
      name: "axiostest",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Axiostest.vue"),
    },
  ],
});

export default router;
