<template>
  <!-- Note: das Verschieben von fade-in-from-bottom-left-to-top-right in den DiscardPile
   löst das Problem dass die Animation immer wieder in der drawCards Phase ausgeführt wurde.
   Die Ursache liegt womöglich daran, dass die Klasse beim rerendern der Parent Component(Flashcard-game.vue) 
   immer wieder hinzugefügt wurde. Jetzt hingegen würde die Animation nur abspielen wenn die Component 
   DiscardPile neu gerendert wird. Oder anders gesagt sobald die Kind Component gemounted wurde, feuer die Animation  nur 
   innerhalb des eignenen Scopes, wenn die Component neu gerendert wird.
   -->
  <div
    class="discard-pile-wrapper fade-in-from-bottom-left-to-top-right"
    :class="{
      'grow-pulse-animation': isDiscarded,
    }"
  >
    <div class="discard-pile">
      <div class="discard-pile-counter-border">
        <div class="discard-pile-counter pt-[3px]">
          <p class="discard-pile-counter-text">{{ sizeofDiscardPile }}</p>
          <!-- <button @click="this.cardStore.popCard" class="card-deck-counter">
            Abwerfen
          </button> -->
          <!-- <ButtonPrimary :clickHandler="discard" label="Abwerfen" /> -->
          <!-- <ButtonPrimary @button-clicked="discard" label="Abwerfen" /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonPrimary from "@/components/FlashcardGame/Buttons/ButtonPrimary.vue";
import { useFlashcardGameStore } from "@/stores/FlashcardGameStores/flashcardGameStore";
import { useCardStore } from "@/stores/FlashcardGameStores/cardStore";
export default {
  components: {
    ButtonPrimary,
  },
  props: {
    discardedCard: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      flashcardGameStore: useFlashcardGameStore(),
      cardStore: useCardStore(),
      // discardPile: [],
    };
  },
  computed: {
    sizeofDiscardPile() {
      return this.cardStore.getSizeOfDiscardPile;
    },
    isDiscarded() {
      if (this.flashcardGameStore.phase === "enemyTurn") {
        return true;
      } else {
        return false;
      }
    },
  },
  watch: {
    discardedCard(card) {
      //this.discardPile.push(card);
      this.cardStore.addToDiscardPile(card);
    },
  },
  methods: {},
};
</script>

<style scoped>
.discard-pile-wrapper {
  width: 150px;
  height: 150px;
  /* border: 3px solid white; */
  grid-row-start: 8;
  grid-row-end: 9;
  grid-column-start: 1;
  grid-column-end: 2;
  justify-self: end;
  position: relative;
  transition: all 0.3s ease-in-out;
}

.discard-pile-wrapper:hover {
  transform: scale(1.2);
}

.discard-pile {
  width: 100%;
  height: 100%;
  background-image: url("@/assets/icons/discardPile.png");
  background-size: cover;
  background-position: center;
  transform: rotateZ(-51deg);
}
.discard-pile-counter {
  /* border: 2px solid var(--border-around-bg-accent); */
  display: flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 50% 50%, #2c3d57, #506789);
  border-radius: 50%;
}

.discard-pile-counter-border {
  transform: rotateZ(19deg);
  padding: 5px;
  border-radius: 50%;
  height: 160px;
  width: 160px;
  position: absolute;
  background: linear-gradient(to right, #313b52, #6e84b8);
  height: 40px;
  width: 40px;
  right: 50px;
  bottom: 10px;

  box-shadow:
    -3px -3px 7px rgba(0, 0, 0, 0.5),
    0px 1px 4px rgba(255, 255, 255, 0.3);
}

.discard-pile-counter-text {
  height: 2rem;
  line-height: 1.2rem;
  font-size: 1.5rem;
  color: #2db8a5;
}

@keyframes growPulseAnimation {
  0% {
    transform: scale(1);
  }
  10% {
    transform: scale(1.3);
  }
  20% {
    transform: scale(1);
  }
  30% {
    transform: scale(1);
  }
  40% {
    transform: scale(1.3);
  }
  50% {
    transform: scale(1);
  }
  60% {
    transform: scale(1);
  }
  70% {
    transform: scale(1.3);
  }
  80% {
    transform: scale(1);
  }
  80% {
    transform: scale(1);
  }
  100 {
    transform: scale(1);
  }
}
.grow-pulse-animation {
  animation: growPulseAnimation 0.8s linear;
}

.fade-in-from-bottom-left-to-top-right {
  animation: fadeInFromBottomLeftToTopRight 1s
    cubic-bezier(0.69, 0.16, 0.41, 1.44);
}

@keyframes fadeInFromBottomLeftToTopRight {
  0% {
    opacity: 0;
    transform: translate(-100%, 100%);
  }
  100% {
    opacity: 1;
    transform: translate(0, 0);
  }
}
</style>
