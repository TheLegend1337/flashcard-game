import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import FlashcardGame from "../views/Flashcard-game.vue";
import FlashcardsOnly from "../views/FlashcardsOnly.vue";
import UserTestsDashboard from "../views/UserTestsDashboard.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },

    {
      path: "/flashcards-only",
      name: "flashcards-only",
      component: FlashcardsOnly,
    },

    {
      path: "/flashcard-game",
      name: "flashcard-game",
      component: FlashcardGame,
    },
    {
      path: "/user-tests-dashboard",
      name: "user-tests-dashboard",
      component: UserTestsDashboard,
    },
  ],
});

export default router;
