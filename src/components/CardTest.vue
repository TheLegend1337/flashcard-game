<template>
  <div class="card m-3" draggable="true">
    <div class="card-inner">
      <div class="front card-artwork">
        <!-- <div class="card-face-front-content">
            <p>{{ title }}</p>
            <button @click="playcard">Entfesseln</button>
          </div> -->
        <p>{{ question }}</p>
        <div
          class="card-level-frame absolute left-1/2 z-[5] h-[15%] w-[25%] -translate-x-1/2"
        >
          <div
            class="card-level z-[5] mx-auto -mt-[10px] h-[90%] w-[90%]"
          ></div>
        </div>

        <div
          class="card-willpower-slot absolute -left-[5%] -top-[5%] z-[5] h-[25%] w-[25%]"
        ></div>
        <div
          class="card-frame absolute left-0 top-0 z-[4] h-full w-full border-2 border-green-500"
        ></div>
        <div
          class="card-title absolute bottom-[9%] left-1/2 z-[2] h-[27%] w-[80%] -translate-x-1/2 border-2 border-red-500"
        ></div>
        <div
          class="card-description absolute bottom-[1%] left-1/2 z-[3] h-[27%] w-[90%] -translate-x-1/2 border-2 border-blue-500"
        ></div>
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
      this.flashcardGameStore.changeQuizBoxVisibility();
      this.willpowerStore.decreaseWillpower(2);
      this.playerStore.damageHero(3);
      this.monsterStore.damageMonster(2);
    },
  },
};
</script>

<style scoped>
/* Add your component-specific styles here */
/* .card-face-front-content {
    position: absolute;
    top: 50px;
  } */
.card {
  width: 248px;
  aspect-ratio: 248/350;
  perspective: 1000px;
  transition: transform 5s;
  /* background-color: white; */
}
.card:hover {
  transform: scale(2);
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

.front {
  position: absolute;
  width: 100%;
  height: 100%;
}

.card-artwork {
  background-image: url("@/assets/card-art/change-request-resized.png");
  background-size: 90%;
  background-position: 50% 12%;
  background-repeat: no-repeat;
}

.card-description {
  background-image: url("@/assets/ui-components-backgrounds/card/card_description.png");
  background-size: contain;
  background-repeat: no-repeat;
}
.card-frame {
  background-image: url("@/assets/ui-components-backgrounds/card/card_frame.png");
  background-size: contain;
  background-repeat: no-repeat;
}
.card-title {
  background-image: url("@/assets/ui-components-backgrounds/card/card_title.png");
  background-size: contain;
  background-repeat: no-repeat;
}
.card-level-frame {
  background-image: url("@/assets/ui-components-backgrounds/card/card_level_frame.png");
  background-size: contain;
  background-repeat: no-repeat;
}
.card-level {
  background-image: url("@/assets/ui-components-backgrounds/card/card_level.png");
  background-size: contain;
  background-repeat: no-repeat;
}
.card-willpower-slot {
  background-image: url("@/assets/ui-components-backgrounds/card/card-willpower-slot.png");
  background-size: contain;
  background-repeat: no-repeat;
}
</style>
