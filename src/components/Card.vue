<template>
  <div></div>
  <div class="card" draggable="true">
    <div class="card-inner">
      <div class="card-face front">
        <div class="card-face-front-content">
          <p>{{ title }}</p>
          <button @click="playcard">Entfesseln</button>
        </div>
        <!-- <p>{{ question }}</p> -->
      </div>
      <div class="card-face back">
        <p>{{ response }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { useFlashcardGameStore } from "@/stores/FlashcardGameStores/flashcardGameStore";
import { usePlayerStore } from "@/stores/FlashcardGameStores/playerStore";
import { useWillpowerStore } from "@/stores/FlashcardGameStores/willpowerStore";
import { useMonsterStore } from "@/stores/FlashcardGameStores/monsterStore";
// import Flashcards from './db.json';
export default {
  props: {
    title: {
      type: String,
      default: "Default Title",
    },
    id: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      flashcardGameStore: useFlashcardGameStore(),
      playerStore: usePlayerStore(),
      willpowerStore: useWillpowerStore(),
      monsterStore: useMonsterStore(),
    };
  },
  mounted() {
    /* fetch("http://localhost:3000/flashcards")
      .then((response) => response.json())
      .then((data) => {
        this.flashcards = data;
        console.log(data);
      })
      .catch((err) => console.log(err.message));*/
  },
  methods: {
    playcard() {
      this.willpowerStore.decreaseWillpower(2);
      this.playerStore.damageHero(3);
      this.monsterStore.damageMonster(2);
    },
  },
};
</script>

<style scoped>
/* Add your component-specific styles here */
.card-face-front-content {
  position: absolute;
  top: 50px;
}
.card {
  width: 200px;
  height: 300px;
  perspective: 1000px;

  /* background-color: white; */
}

.card-inner {
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  /* The transform property in CSS has a relationship between parent and child 
      elements when it comes to 3D transformations, especially with the preserve-3d 
      value for the transform-style property.
      When you set transform-style: preserve-3d; on a parent element, 
      it indicates that the child elements of this parent can have their 
      own 3D transformations and will be positioned in 3D space relative to the parent. 
      This is particularly relevant in the context of creating 3D transformations or 
      animations, such as card flips or other spatial effects.*/
  transition: transform 0.5s;
}

/* .card:hover .card-inner {
  transform: rotateY(180deg);
} */

.card-face {
  border-radius: 5%;
  width: 100%;
  height: 100%;
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  border: 1px solid var(--img-border-on-bg-dark);
}

.front {
  width: 100%;
  height: 100%;
  background-image: url("https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/008e7532-4952-4916-a3b1-c6ffb529f268/width=1280/00019-410619392.jpeg");
  background-size: cover;
  background-color: var(--bg-light);
  color: #fff;
}

.back {
  width: 100%;
  height: 100%;
  background-color: var(--bg-light);
  color: #fff;
  transform: rotateY(180deg);
}
</style>
