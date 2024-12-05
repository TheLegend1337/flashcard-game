<template>
  <div class="monster">
    <!-- <select v-model="selectedSpriteAnimation" @change="updateAnimation"> -->
    <!-- Dropdown zur Auswahl der Animation -->
    <!-- <option
        v-for="(animation, key) in zombieVillagerAnimations"
        :key="key"
        :value="key"
      >
        {{ animation.name }}
      </option> -->
    <!-- </select> -->
    <!-- <Healthbar
      v-if="!healthbarOff"
      :monsterHealth="monsterStore.monsterHealth"
      :maxMonsterHealth="monsterStore.maxMonsterHealth"
    /> -->
    <div
      v-if="whatIconAnimationIsPlaying === 'defense-icon-animation'"
      class="defense-icon-animation"
      @animationend="handleIconAnimationEnd"
    ></div>
    <div
      v-if="whatIconAnimationIsPlaying === 'damage-icon-animation'"
      class="damage-icon-animation"
      @animationend="handleIconAnimationEnd"
    ></div>
    <div
      v-if="whatIconAnimationIsPlaying === 'heal-icon-animation'"
      class="heal-icon-animation"
      @animationend="handleIconAnimationEnd"
    ></div>
    <!-- TODO: 'fade-in-from-right-to-left':
    monsterAnimationState === 'fade-in-from-right-to-left', -->
    <div
      id="single-effect-animation-wrapper"
      :class="{
        'werden-wegpaniert': monsterAnimationState === 'werden-wegpaniert',
      }"
    >
      <SpriteAnimation
        :key="selectedSpriteAnimation"
        :animationParameters="zombieVillagerAnimations[selectedSpriteAnimation]"
        @sprite-animation-completed="handleSpriteAnimationEnd"
        flip
      />
    </div>
    <IndicatorsContainer role="monster" />
  </div>
</template>

<script>
// import Healthbar from "../components/Healthbar.vue";
// import { useFlashcardGameStore } from "@/stores/FlashcardGameStores/flashcardGameStore";

import SpriteAnimation from "@/components/Animation/SpriteAnimation.vue";
import IndicatorsContainer from "@/components/FlashcardGame/container/IndicatorsContainer.vue";
import zombieVillagerAnimations from "@/assets/animations/monsters/zombieVillager/animation-data/zombieVillagerAnimations.js"; // TODO: Ziel ist es irgendwann im Pfad monster-vue mit dem ausgewählten Monster zu ersetzen
export default {
  components: {
    // Healthbar,
    SpriteAnimation,
    IndicatorsContainer,
  },
  props: {
    monsterAction: {
      type: String,
      required: true,
      default: "none",
    },
  },
  data() {
    return {
      // flashcardGameStore: useFlashcardGameStore(),

      zombieVillagerAnimations,
      selectedSpriteAnimation: "idle",
      monsterAnimationState: "none",
      whatIconAnimationIsPlaying: "none",
    };
  },
  methods: {
    handleSpriteAnimationEnd() {
      console.log("Handle Sprite Animation end");
      // switch (this.playerAnimationState) {
      //   case "attacking":
      //     this.selectedSpriteAnimation = "idle";
      //     break;
      //   case "buffing":
      //     this.selectedSpriteAnimation = "idle";
      //     break;
      //   case "dying":
      //     this.selectedSpriteAnimation = "idle";
      //     break;
      //   default:
      //     this.selectedSpriteAnimation = "idle";
      // }
      this.selectedSpriteAnimation = "idle";
      this.monsterAnimationState = "none";
      this.whatIconAnimationIsPlaying = "none";
      this.$emit(
        "monster-sprite-animation-completed",
        this.selectedSpriteAnimation,
      );
    },
  },
  watch: {
    monsterAction() {
      switch (this.monsterAction) {
        case "attacking":
          // this.selectedSpriteAnimation = "attacking";
          // this.soundHandler.playSound("attackingAnimationSound", 0.1);
          break;
        case "buffing":
          // this.whatIconAnimationIsPlaying = "defense-icon-animation";
          // this.soundHandler.playSound("defenseIconAnimationSound", 0.2);
          break;
        case "hurting":
          setTimeout(() => {
            this.monsterAnimationState = "werden-wegpaniert";
            this.selectedSpriteAnimation = "hurting";
            this.whatIconAnimationIsPlaying = "damage-icon-animation";
          }, 270);
          break;
        case "dying":
          // this.selectedSpriteAnimation = "dying";
          break;
        case "healing":
          // this.whatIconAnimationIsPlaying = "heal-icon-animation";
          break;
        default:
          this.selectedSpriteAnimation = "idle";
      }
    },
  },
};
</script>

<style scoped>
/* Add your component-specific styles here */
.monster {
  width: 300px;
  height: 300px;
  position: absolute;
  top: 37%;
  right: 25%;
  /* border: 10px solid rgb(255, 0, 0);*/
  /* grid-row-start: 6;
  grid-row-end: 7;
  grid-column-start: 6;
  grid-column-end: 7;
  justify-self: end; */
}

.defense-icon-animation {
  width: 150px;
  height: 150px;
  position: absolute;
  background-image: url("@/assets/icons/shield-icon.png");
  background-size: cover;
  background-position: center;
  transform: translate(50%, 50%);
  z-index: 10;
  animation: defenseIconAnimation 1.5s ease-in-out;
}

@keyframes defenseIconAnimation {
  0% {
    background-image: url("@/assets/icons/shield-icon.png");
    background-size: cover;
    background-position: center;
    position: absolute;
    opacity: 0%;
    transform: translate(50%, 100%) scale(1);
  }
  30% {
    background-image: url("@/assets/icons/shield-icon.png");
    background-size: cover;
    background-position: center;
    position: absolute;
    transform: translate(50%, 70%) scale(1.2);
    opacity: 100%;
  }
  100% {
    background-image: url("@/assets/icons/shield-icon.png");
    background-size: cover;
    background-position: center;
    position: absolute;
    transform: translate(50%, 0%) scale(1.4);
    opacity: 0%;
  }
}

.damage-icon-animation {
  width: 150px;
  height: 150px;
  position: absolute;
  background-image: url("@/assets/icons/attack-icon.png");
  background-size: cover;
  background-position: center;
  transform: translate(50%, 50%);
  z-index: 10;
  animation: damageIconAnimation 0.4s linear forwards;
}

@keyframes damageIconAnimation {
  0% {
    background-image: url("@/assets/icons/attack-icon.png");
    background-size: cover;
    background-position: center;
    position: absolute;
    opacity: 0%;
    transform: translate(50%, 50%) scale(0);
  }
  50% {
    background-image: url("@/assets/icons/attack-icon.png");
    background-size: cover;
    background-position: center;
    position: absolute;
    transform: translate(50%, 50%) scale(1);
    opacity: 100%;
  }
  100% {
    background-image: url("@/assets/icons/attack-icon.png");
    background-size: cover;
    background-position: center;
    position: absolute;
    transform: translate(50%, 50%) scale(0);
    opacity: 0%;
  }
}

/* .damage-multiple-hits-icon-animation {
  width: 150px;
  height: 150px;
  position: absolute;
  background-image: url("@/assets/icons/attack-icon.png");
  background-size: cover;
  background-position: center;
  transform: translate(50%, 50%);
  z-index: 10;
  animation: damageMultipleHitsIconAnimation 0.5s steps(2, end);
}

@keyframes damageMultipleHitsIconAnimation {
  0% {
    background-image: url("@/assets/icons/attack-icon.png");
    background-size: cover;
    background-position: center;
    position: absolute;
    opacity: 0%;
    transform: translate(50%, 50%) scale(1) rotateZ(30deg);
  }
  50% {
    background-image: url("@/assets/icons/attack-icon.png");
    background-size: cover;
    background-position: center;
    position: absolute;
    transform: translate(50%, 50%) scale(1.2) rotateZ(-30deg);
    opacity: 100%;
  }

  100% {
    background-image: url("@/assets/icons/attack-icon.png");
    background-size: cover;
    background-position: center;
    position: absolute;
    transform: translate(50%, 50%) scale(1) rotateZ(60deg);
    opacity: 0%;
  }
} */

.heal-icon-animation {
  width: 150px;
  height: 150px;
  position: absolute;
  background-image: url("@/assets/icons/heal-effect-icon-plus-signs.png");
  background-size: cover;
  background-position: center;
  transform: translate(50%, 50%);
  z-index: 10;
  animation: healIconAnimation 1.5s ease-in-out;
}
@keyframes healIconAnimation {
  0% {
    background-size: cover;
    background-position: center;
    position: absolute;
    opacity: 0%;
    transform: translate(50%, 50%) scale(1);
  }
  30% {
    background-size: cover;
    background-position: center;
    position: absolute;
    transform: translate(50%, 50%) scale(2);
    opacity: 100%;
  }
  100% {
    background-size: cover;
    background-position: center;
    position: absolute;
    transform: translate(50%, 50%) scale(4);
    opacity: 0%;
  }
}

@keyframes werdenWegpaniert {
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(10%, 0);
  }
  100% {
    transform: translate(0, 0);
  }
}
.werden-wegpaniert {
  animation: werdenWegpaniert 1s cubic-bezier(0.69, 0.16, 0.41, 1.44);
}
</style>
