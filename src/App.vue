<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/matchfield">Spielfeld</RouterLink>
        <RouterLink to="/menu-overlay">Overlay</RouterLink>
        <RouterLink to="/flashcards-only">Flashcards Only</RouterLink>
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
  <!-- Particle effect container -->
  <div ref="particleContainer" class="particle-container"></div>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";

export default {
  name: "App",
  methods: {
    handleClickToCreateParticles(event) {
      const x = event.pageX;
      const y = event.pageY;

      // Create the particle effect at the click position
      // this.createParticleEffect(x, y);
      // Create the container div
      const div = document.createElement("div");
      div.style.position = "absolute";
      div.style.left = x + "px";
      div.style.top = y + "px";
      div.style.transform = "translate(-50%, -50%)";
      div.style.width = "10px"; // Reduced from 50px
      div.style.height = "10px"; // Reduced from 50px
      div.style.pointerEvents = "none"; // Ensure the effect doesn't block clicks

      // Append the div to the particle container
      this.$refs.particleContainer.appendChild(div);

      const maxElems = 8; // Reduced from 16
      for (let i = 0; i < maxElems; i++) {
        const span = document.createElement("span");
        span.style.display = "block";
        span.style.position = "absolute";
        span.style.left = "50%";
        span.style.bottom = "50%";
        span.style.width = "1px"; // Reduced from 4px
        span.style.height = "6px"; // Reduced from 50px
        span.style.borderRadius = "2px"; // Reduced from 4px
        span.style.background = "#fff";
        span.style.boxShadow = "0 0 2px rgba(255, 255, 255, 0.5)";
        span.style.transformOrigin = "center bottom";
        span.style.transition =
          "transform 0.2s ease-out, opacity 0.45s ease-out";

        const deg = i * (360 / maxElems) + Math.floor(Math.random() * 10);
        const height = 5 + Math.floor(Math.random() * 12); // Reduced variation
        const width = 1 + Math.floor(Math.random() * 3); // Reduced variation
        span.style.height = height + "px";
        span.style.width = width + "px";
        span.style.transform = `rotate(${deg}deg)`;

        div.appendChild(span);
      }

      // Trigger the animation
      window.requestAnimationFrame(() => {
        const spans = div.querySelectorAll("span");
        spans.forEach((el) => {
          const trasY = -10 - Math.floor(Math.random() * 10); // Reduced movement
          el.style.transform += ` scaleY(0.5) translateY(${trasY}px)`;
          el.style.opacity = "0";
        });

        // Remove the div after the animation is done
        setTimeout(() => {
          if (this.$refs.particleContainer.contains(div)) {
            this.$refs.particleContainer.removeChild(div);
          }
        }, 400);
      });
    },
  },
  mounted() {
    // Attach the click event listener to the document body
    document.body.addEventListener("click", this.handleClickToCreateParticles);
  },
  beforeUnmount() {
    // Clean up the event listener when the component is destroyed
    document.body.removeEventListener(
      "click",
      this.handleClickToCreateParticles,
    );
  },
};
</script>

<style scoped>
.particle-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none; /* Allow clicks to pass through */
  overflow: hidden;
}

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
</style>
