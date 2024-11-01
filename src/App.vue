<script setup>
import { RouterLink, RouterView } from "vue-router";

// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <!-- <img
      alt="Vue logo"
      class="logo"
      src="http://frommoon.de/wp-content/uploads/2022/08/Logo-1024x455.png"
      width="230"
      height="100"
    /> -->

    <div class="wrapper">
      <!-- <HelloWorld msg="You did it!" /> -->
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/matchfield">Spielfeld</RouterLink>
        <RouterLink to="/menu-overlay">Overlay</RouterLink>
        <RouterLink to="/flashcard-game">Karteikartenspiel</RouterLink>
        <RouterLink to="/card-only">Karte</RouterLink>
        <RouterLink to="/sprite-animations">Sprite Animation Demo</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/axiostest">Axios Test</RouterLink>
      </nav>
    </div>
  </header>
  <aside></aside>
  <Transition name="fade" mode="out-in">
    <RouterView />
  </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
header {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 7vh;
  line-height: 1.5;
  max-height: 7vh;
  background: linear-gradient(
    180deg,
    rgba(250, 234, 202, 1) 0%,
    rgba(239, 207, 164, 1) 64%
  );
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  height: 7vh;
  font-size: 1rem;
  text-align: center;
  margin-top: 2rem;
  border-radius: 50px;
}

nav a.router-link-exact-active {
  color: var(--type-on-bg-light);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  color: var(--linktext-on-nav);
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
/* 
@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
