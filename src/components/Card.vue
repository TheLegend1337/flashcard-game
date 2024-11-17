<template>
  <div>
    <div v-if="!this.isBound" class="card">
      <!-- Rotation der Karten berechnet über calcRotation -->

      <div
        id="UnleashedCardContent"
        class="card-artwork absolute h-full w-full"
      >
        <!-- <div class="card-face-front-content">
          <p>{{ title }}</p>
          <button @click="playcard">Entfesseln</button>
        </div> -->
        <div
          class="card-level-frame absolute left-1/2 z-[5] h-[15%] w-[25%] -translate-x-1/2"
        >
          <div
            class="card-level z-[5] mx-auto -mt-[10px] h-[90%] w-[90%]"
          ></div>
        </div>

        <div
          class="card-willpower-slot absolute -left-[5%] -top-[5%] z-[5] aspect-square w-[25%]"
        >
          <!-- <p
            id="willpower-counter"
            class="absolute left-1/2 top-1/2 block h-full -translate-x-1/2 -translate-y-1/2 text-3xl text-white"
          >
            1
          </p> -->
          <p
            id="willpower-counter"
            class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[55%] text-3xl text-white"
          >
            {{ this.willpowerCost }}
          </p>
        </div>
        <div class="card-frame absolute left-0 top-0 z-[4] h-full w-full"></div>
        <div
          class="card-title absolute bottom-[30%] left-1/2 z-[2] h-[20%] w-[85%] -translate-x-1/2"
        >
          <p
            id="text-card-title"
            class="absolute left-1/2 top-[12%] w-[90%] -translate-x-1/2 text-center text-[1.5rem] text-white"
          >
            {{ this.title }}
          </p>
        </div>
        <div
          class="card-description absolute bottom-[1%] left-1/2 z-[3] h-[40%] w-[90%] -translate-x-1/2"
        >
          <p
            id="text-card-description"
            class="absolute left-1/2 top-1/2 h-[70%] w-[92%] -translate-x-1/2 -translate-y-[45%] text-center align-middle text-[21px] text-white"
          >
            {{ this.description }}
          </p>
        </div>
        <!-- 
        -- 
        Herangehensweise mit nur einem Bild als Karte
          <img
            src="@/assets/ui-components-backgrounds/card/card-frame-full.png"
            class="card-frame-full"
          /> 
        --
        -->
      </div>
    </div>

    <!-- :key="this.isSelectedForUnleash" -->
    <div
      v-if="this.isBound"
      @click="handleBoundCardClick"
      class="card"
      :class="{
        animateCardGrow: isSelectedForUnleash,
        animateCardShrink: !isSelectedForUnleash,
        animateAnticipationSkew: isUnleashed,
      }"
    >
      <div
        :style="boundCardArtworkBackgroundImage"
        id="boundCardContent"
        class="bound-card-artwork flex h-full w-full justify-center"
      >
        <div class="absolute top-[9%] h-[80%] w-[76%]">
          <QuizBox
            v-if="this.isSelectedForUnleash"
            :key="this.isSelectedForUnleash"
            @click.stop
            @button-wrong-clicked="handleButtonWrongClicked"
            @button-correct-clicked="handleButtonCorrectClicked"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SoundHandler from "@/helpers/soundHandler";
import soundEffect_DrawCard from "@/assets/sounds/soundEffects/drawCard_shorter.mp3";
import soundEffect_OpenCard from "@/assets/sounds/soundEffects/bookFlip2.ogg";

import { useFlashcardGameStore } from "@/stores/FlashcardGameStores/flashcardGameStore";
// import { usePlayerStore } from "@/stores/FlashcardGameStores/playerStore";
// import { useWillpowerStore } from "@/stores/FlashcardGameStores/willpowerStore";
// import { useMonsterStore } from "@/stores/FlashcardGameStores/monsterStore";
import QuizBox from "@/components/QuizBox.vue";
// import Flashcards from './db.json';
export default {
  components: {
    QuizBox,
  },
  props: {
    id: {
      type: Number,
      default: 0,
    },
    title: {
      type: String,
      default: "Default Title",
    },
    description: {
      type: String,
      default: "Default Description",
    },
    willpowerCost: {
      type: Number,
      required: true,
    },
    damage: {
      type: Number,
      required: false,
    },
    heal: {
      type: Number,
      required: false,
    },
    defense: {
      type: Number,
      required: false,
    },
    cardArtworkSrc: {
      type: String,
      required: true,
    },
    handOfCardsLength: {
      type: Number,
      required: true,
    },
    cardIndex: {
      type: Number,
      required: true,
    },
    isBound: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  data() {
    return {
      flashcardGameStore: useFlashcardGameStore(),
      // playerStore: usePlayerStore(),
      // willpowerStore: useWillpowerStore(),
      // monsterStore: useMonsterStore(),
      cardRotationDegree: 0,
      cardRotationDegreeOnHover: 0,
      resetYTranslationOnHover: 0,
      yTranslation: 0,
      xTranslation: 0,
      cardArtworkSource: "",
      previousHandOfCardsLength: this.handOfCardsLength,
      isSelectedForUnleash: false,

      //check if Soundeffect was played once, if yes, the flag will be set to true and wont be played on consequtive clicks
      isOpenCardSoundPlayed: false,
      isUnleashed: false, //TODO: refaktorieren sodass nur ein State Attribut die Phasen steuert. bound, selected, unleashed
    };
  },
  updated() {
    this.cardArtworkSource = new URL(
      this.cardArtworkSrc,
      import.meta.url,
    ).toString(); //notwendig damit in setProperty auch wirklich ein String inklusive Anführungsstriche übergeben werden.
    this.cardRotationDegree = this.calcRotation(this.cardIndex);
    //
    this.yTranslation = this.calcYTranslation(this.cardIndex);
    this.xTranslation = this.calcXTranslation(this.cardIndex);
    this.$el.style.setProperty(
      "--card-rotation-degree",
      `rotate(${this.cardRotationDegree}deg)`,
    );
    this.$el.style.setProperty(
      "--xy-translation",
      `translate(${this.xTranslation}%,${this.yTranslation}% )`,
    );
  },
  mounted() {
    this.soundHandler = new SoundHandler();
    this.soundHandler.registerSound("drawCard", soundEffect_DrawCard);
    this.soundHandler.registerSound("openCard", soundEffect_OpenCard);
    this.soundHandler.playSound("drawCard", 0.4);

    this.cardArtworkSource = new URL(
      this.cardArtworkSrc,
      import.meta.url,
    ).toString(); //notwendig damit in setProperty auch wirklich ein String inklusive Anführungsstriche übergeben werden.
    this.cardRotationDegree = this.calcRotation(this.cardIndex);
    //
    this.yTranslation = this.calcYTranslation(this.cardIndex);
    this.xTranslation = this.calcXTranslation(this.cardIndex);

    console.log(this.cardRotationDegree);
    this.cardRotationDegreeOnHover = this.cardRotationDegree * -1;
    this.resetYTranslationOnHover = (this.yTranslation + 25) * -1;
    //

    //Card Styles will be applied when mounted

    this.$el.style.setProperty(
      "--card-artwork-source",
      `url("${this.cardArtworkSource}")`,
    );
    this.$el.style.setProperty(
      "--card-rotation-degree",
      `rotate(${this.cardRotationDegree}deg)`,
    );
    this.$el.style.setProperty(
      "--xy-translation",
      `translate(${this.xTranslation}%,${this.yTranslation}% )`,
    );

    console.log("Card Artwork Source URL:", this.cardArtworkSource);
  },
  computed: {
    // für das Berechnen der Karten Rotation
    getCenterCardIndex() {
      const totalCards = this.handOfCardsLength;
      let cardCenter = Math.floor(totalCards / 2);
      return cardCenter;
    },
    boundCardArtworkBackgroundImage() {
      if (this.isSelectedForUnleash) {
        const imagePath = new URL(
          "@/assets/ui-components-backgrounds/card/quiz-background.png",
          import.meta.url,
        ).toString();
        return {
          backgroundImage: `url(${imagePath})`,
        };
      } else {
        const imagePath = new URL(
          "@/assets/ui-components-backgrounds/card/bound-card-3d-framed.png",
          import.meta.url,
        ).toString();
        return {
          backgroundImage: `url(${imagePath})`,
        };
      }
    },
  },
  watch: {
    isSelectedForUnleash() {
      console.log("Watch:isSelectedForUnleash" + this.isSelectedForUnleash);
    },
  },
  methods: {
    playcard() {
      this.flashcardGameStore.changeQuizBoxVisibility();
      this.willpowerStore.decreaseWillpower(2);
      this.playerStore.damageHero(3);
      this.monsterStore.damageMonster(2);
    },
    // für das Berechnen der Karten Rotation
    calcRotation(cardIndex) {
      const rotationFactor = 10;
      const centerCardIndex = this.getCenterCardIndex;
      const distance = cardIndex - centerCardIndex;
      return distance * rotationFactor;
    },
    calcYTranslation(cardIndex) {
      const ytranslationFactor = 4;
      const centerCardIndex = this.getCenterCardIndex;
      const distance = Math.abs(cardIndex - centerCardIndex);
      return distance * distance * ytranslationFactor;
    },
    calcXTranslation(cardIndex) {
      const xTranslationFactor = 5;
      const centerCardIndex = this.getCenterCardIndex;
      const distance = cardIndex - centerCardIndex;
      return distance * xTranslationFactor;
    },
    handleButtonWrongClicked() {
      this.isSelectedForUnleash = false;
    },
    handleButtonCorrectClicked() {
      this.isUnleashed = true;

      console.log("isBound:" + this.isBound);
    },
    handleBoundCardClick() {
      this.isSelectedForUnleash = true;

      if (!this.isOpenCardSoundPlayed) {
        this.soundHandler.playSound("openCard", 0.4);
        this.isOpenCardSoundPlayed = true; // Update the flag
      }
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
#willpower-counter {
  text-shadow:
    rgb(2, 38, 42) 3px 0px 0px,
    rgb(2, 38, 42) 2.83487px 0.981584px 0px,
    rgb(2, 38, 42) 2.35766px 1.85511px 0px,
    rgb(2, 38, 42) 1.62091px 2.52441px 0px,
    rgb(2, 38, 42) 0.705713px 2.91581px 0px,
    rgb(2, 38, 42) -0.287171px 2.98622px 0px,
    rgb(2, 38, 42) -1.24844px 2.72789px 0px,
    rgb(2, 38, 42) -2.07227px 2.16926px 0px,
    rgb(2, 38, 42) -2.66798px 1.37182px 0px,
    rgb(2, 38, 42) -2.96998px 0.42336px 0px,
    rgb(2, 38, 42) -2.94502px -0.571704px 0px,
    rgb(2, 38, 42) -2.59586px -1.50383px 0px,
    rgb(2, 38, 42) -1.96093px -2.27041px 0px,
    rgb(2, 38, 42) -1.11013px -2.78704px 0px,
    rgb(2, 38, 42) -0.137119px -2.99686px 0px,
    rgb(2, 38, 42) 0.850987px -2.87677px 0px,
    rgb(2, 38, 42) 1.74541px -2.43999px 0px,
    rgb(2, 38, 42) 2.44769px -1.73459px 0px,
    rgb(2, 38, 42) 2.88051px -0.838247px 0px;
}
.card {
  position: relative; /*löst das Problem, dass der Z-index nicht auf 100 gesetzt wird, z-Index funktioniert nur auf positionierten Elementen*/
  width: 248px;
  aspect-ratio: 248/350;
  /* perspective: 1000px; */
  /* animation: animateCard 0.5s forwards; */
  transition: all 0.5s;
  /* background-color: white; */
  transform: var(--card-rotation-degree) var(--xy-translation);
}

.card:hover {
  border-radius: 10%;
  filter: drop-shadow(0 0 6px rgba(245, 222, 179, 0.465))
    drop-shadow(0 0 12px rgba(245, 222, 179, 0.339))
    drop-shadow(0 0 18px rgba(245, 222, 179, 0.231));
  z-index: 100;
  /* width: 200px; */
  /* transform: rotateZ(var(--reset-rotation-degree)) scale(1.3)
    translateY(var(--reset-yTranslation)) !important; */
  /* Die auskommentierte Version war mit dem rückrechnen von Rotate und der y-Achse */
  /* transform: scale(1.3) translateY(-20%) !important; */
  transform: scale(1.3) translateY(-20%);
}

/* @keyframes animateCard {
  to {
    transform: translateX(-100%);
  }
} */

/* .card:hover .card-inner {
    transform: rotateY(180deg);
  } */

.card-artwork {
  /* background-image: url("@/assets/card-art/change-request-resized.png"); */
  background-image: var(--card-artwork-source);
  background-size: 90%;
  background-position: 50% 12%;
  background-repeat: no-repeat;
}
.bound-card-artwork {
  /* background-image: url("@/assets/ui-components-backgrounds/card/bound-card-3d-framed.png"); */
  background-size: 90%;
  background-position: 50% 12%;
  background-repeat: no-repeat;
}

.card-description {
  background-image: url("@/assets/ui-components-backgrounds/card/card_description-dark-reduced.png");
  background-size: cover;
  background-repeat: no-repeat;
}

#text-card-title {
  text-shadow: 0px 1px 1px #000;
}

.card-frame {
  background-image: url("@/assets/ui-components-backgrounds/card/card_frame.png");
  background-size: contain;
  background-repeat: no-repeat;
}
.card-title {
  background-image: url("@/assets/ui-components-backgrounds/card/card-title-dark.png");
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
/* Herangehensweise mit einem Bild als Karte */
/* .card-frame-full {
  background-image: url("@/assets/card-art/change-request-resized.png");
  background-size: 90%;
  background-position: 50% 12%;
  background-repeat: no-repeat;
} */

@keyframes scaleCard {
  to {
    transform: scale(2.5) translateY(-30%);
  }
}

.animateCardGrow {
  animation: scaleCard 0.5s forwards;
}

@keyframes shrinkCard {
  to {
    transform: scale(1) var(--card-rotation-degree) var(--xy-translation);
  }
}
.animateCardShrink {
  animation: shrinkCard 0.5s;
}

@keyframes anticipationShake {
  0% {
    transform: translateX(0) scale(2.5) translateY(-30%);
  }
  10% {
    transform: translateX(-8px) rotateZ(-2deg) scale(2.5) translateY(-30%);
    filter: brightness(1.4);
  }
  20% {
    transform: translateX(-8px) rotateZ(2deg) scale(2.5) translateY(-30%);
  }
  30% {
    transform: translateX(-6px) rotateZ(-1.5deg) scale(2.5) translateY(-30%);
    filter: brightness(1);
  }
  40% {
    transform: translateX(6px) rotateZ(1.5deg) scale(2.5) translateY(-30%);
  }
  50% {
    transform: translateX(-4px) rotateZ(-1deg) scale(2.5) translateY(-30%);
  }
  60% {
    transform: translateX(4px) rotateZ(1deg) scale(2.5) translateY(-30%);
  }
  70% {
    transform: translateX(-2px) rotateZ(-0.5deg) scale(2.5) translateY(-30%);
  }
  80% {
    transform: translateX(2px) rotateZ(0.5deg) scale(2.5) translateY(-30%);
  }
  90% {
    transform: translateX(-1px) rotateZ(0deg) scale(2.5) translateY(-30%);
  }
  100% {
    transform: translateX(0) rotateZ(0deg) scale(2.5) translateY(-30%);
  }
}

.animateAnticipationShake {
  animation: anticipationShake 0.6s step-end forwards;
}
@keyframes anticipationSkew {
  0% {
    transform: translateX(0) scale(2.5) translateY(-30%);
    filter: drop-shadow(0px 0px 20px rgb(255, 225, 117));
  }
  25% {
    transform: skew(5deg, -10deg) translateX(-2px) rotateZ(-0.5deg) scale(2.55)
      translateY(-30%);
    filter: drop-shadow(0px 0px 20px rgb(255, 212, 55));
  }
  50% {
    transform: skew(-5deg, 10deg) translateX(2px) rotateZ(0.5deg) scale(2.6)
      translateY(-30%);
    filter: drop-shadow(0px 0px 20px rgb(255, 255, 255));
  }
  75% {
    transform: skew(5deg, -10deg) translateX(-1px) rotateZ(0deg) scale(2.65)
      translateY(-30%);
    filter: drop-shadow(0px 0px 20px rgb(119, 255, 246));
  }
  100% {
    transform: skew(0deg, 0deg) translateX(0) rotateZ(0deg) scale(2.7)
      translateY(-30%);
    filter: drop-shadow(0px 0px 20px rgb(255, 228, 119));
  }
}

.animateAnticipationSkew {
  animation: anticipationSkew 0.5s step-end forwards;
}
</style>
