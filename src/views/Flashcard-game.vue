<template>
  <main class="flashcard-game">
    <div class="grid-container game-overlay">
      <InfoBanner
        :key="this.flashcardGameStore.phase"
        class=""
        @info-banner-animation-started="handleInfoBannerAnimationStart"
        @info-banner-animation-ended="handleInfoBannerAnimationEnd"
      />
      <HandOfCards
        ref="HandOfCards"
        :card="card"
        class="animate-fade-in-from-bottom-to-top"
        @unleashed-card-clicked="playCard"
        @discard-card="handleDiscardedCard"
      />
      <!--emitted dass Karte abgeworfen wird und übergibt Kartenobjekt an Parent -->
      <Player
        :playerAction="playerAction"
        :toggleSpeechBubble="toggleSpeechBubble"
        @player-sprite-animation-completed="handlePlayerSpriteAnimationEnd"
        @resetToggleSpeechBubble="handleResetSpeechBubble"
      />
      <Monster
        :monsterAction="monsterAction"
        @monster-sprite-animation-completed="handleMonsterSpriteAnimationEnd"
        @monster-is-attacking-player="handleMonsterIsAttackingPlayer"
        @enemy-turn-over="handleEnemyTurnOver"
      />
      <Willpower
        :animationToggle="animationToggle"
        @willpower-dropped-zero="isWillpowerZero = true"
      />
      <EndTurn :isWillpowerZero="isWillpowerZero" />
      <!-- //Könnte man refaktorieren, zwei Komponentn sind von "isWillpowerZero" abhängig und könnten den Zugang zum Store bekommen. -->
      <!-- class="animate-fade-in-from-bottom-left-to-top-right" -->
      <DiscardPile
        :discardedCard="discardedCard"
      /><!--Parent nimmt das Objekt und übergibt es als Prop an Abwurfstapel -->
      <CardDeck
        ref="CardDeck"
        class="animate-fade-in-from-bottom-right-to-top-left"
      />
    </div>
    <!-- <div id="phaseBanner" class="animate-fade-in">
      <button @click="drawCard(1)" class="m-2">Ziehen</button>
      <button @click="discard" class="m-2">Ablegen</button>
      <button @click="changePhase()" class="m-2">Phase ändern</button>

      <h1 class="phaseTitle">
        {{ this.flashcardGameStore.phase }} //
        {{ this.flashcardGameStore.roundCounter }}
      </h1>
    </div> -->
  </main>
</template>

<script>
import { useFlashcardGameStore } from "@/stores/FlashcardGameStores/flashcardGameStore";
import { useMonsterStore } from "@/stores/FlashcardGameStores/monsterStore";
import { usePlayerStore } from "@/stores/FlashcardGameStores/playerStore";
import { useCardStore } from "@/stores/FlashcardGameStores/cardStore";

import UserDataHandler from "@/helpers/userDataHandler";

import HandOfCards from "../components/HandOfCards.vue";
import Player from "../components/Player.vue";
import Monster from "../components/Monster.vue";
import Willpower from "../components/Willpower.vue";
import EndTurn from "@/components/FlashcardGame/Buttons/EndTurn.vue";
import DiscardPile from "../components/DiscardPile.vue";
import CardDeck from "../components/CardDeck.vue";
// import QuizBox from "../components/QuizBox.vue";
import InfoBanner from "@/components/FlashcardGame/container/InfoBanner.vue";

export default {
  components: {
    HandOfCards,
    Player,
    Monster,
    Willpower,
    DiscardPile,
    CardDeck,
    // QuizBox,
    InfoBanner,
    EndTurn,
  },
  data() {
    return {
      flashcardGameStore: useFlashcardGameStore(),
      monsterStore: useMonsterStore(),
      playerStore: usePlayerStore(),
      cardStore: useCardStore(),
      playerAction: "idle",
      monsterAction: "idle",
      card: null,
      foo: 0,
      phase: "",
      // nextPhase: "",
      // flashcards: [],
      // question: "What is a card?",
      // response: "This is the Cards Response.",
      animationToggle: true,
      discardedCard: null,
      toggleSpeechBubble: false,
      isWillpowerZero: false,
      isInfoBannerAnimationPlaying: false,
    };
  },
  beforeCreate() {
    //  console.log("beforeCreate");
  },
  created() {
    // console.log("created");
  },
  beforeMount() {
    // console.log("beforeMount");
  },
  mounted() {
    this.phase = this.flashcardGameStore.phase; //Brauche ich das im Mounted?
    this.changePhase();
    //  console.log("mounted");
    // console.log("Phase ist: " + this.flashcardGameStore.phase);
  },
  beforeUpdate() {
    // console.log("beforeUpdate");
  },
  updated() {
    //console.log("updated");
  },
  beforeUnmount() {
    // console.log("beforeUnmount");
  },
  unmounted() {
    // console.log("unmounted");
  },

  watch: {
    "flashcardGameStore.phase"(value) {
      //  console.log(value);
      this.changePhase();
    },
  },
  computed: {
    // newPhase: {
    //   get() {
    //     return this.phase;
    //   },
    //   set(value) {
    //     this.flashcardGameStore.phase = value;
    //   },
    // },
  },
  methods: {
    async changePhase() {
      switch (this.flashcardGameStore.phase) {
        case "gameStart":
          //  console.log("Das Spiel hat gestartet");
          this.flashcardGameStore.roundCounter = 1;
          setTimeout(() => {
            this.flashcardGameStore.phase = "drawCards";
          }, 3000);
          break;
        case "drawCards":
          //   console.log("Spieler zieht Karten");
          await this.flashcardGameStore.setWillpower(3);
          //await this.flashcardGameStore.increaseWillpower(3);
          this.isWillpowerZero = false;

          if (this.cardStore.checkIfCardDeckHasNotEnoughCards) {
            await this.cardStore.refillCardDeckWithAllCardsFromDiscardPile();
            await this.drawCard(5);
          } else {
            await this.drawCard(5);
          }
          setTimeout(() => {
            this.flashcardGameStore.phase = "playPhase";
          }, 3000);
          break;
        case "playPhase":
          //  console.log("Spieler darf Entscheidungen treffen");
          // this.phase = "endTurn";
          break;
        case "enemyTurn":
          //   console.log("Gegner ist am Zug");
          this.monsterAction = "actOnIntent";
          //this.flashcardGameStore.phase = "gameOver";
          this.flashcardGameStore.roundCounter++;
          break;
        case "gameOver":
          //   console.log("You died!");
          this.flashcardGameStore.phase = "gameStart";
          break;
        default:
        // console.log(`Default behavior.`);
      }
    },
    async drawCard(amount) {
      for (let i = 0; i < amount; i++) {
        await this.drawSinglecard();
      }
    },
    drawSinglecard() {
      return new Promise((resolve) => {
        setTimeout(() => {
          const card = this.cardStore.drawCard();
          // console.log(card);
          this.card = card;
          resolve(card);
        }, 200);
      });
    },
    handleInfoBannerAnimationStart() {
      this.isInfoBannerAnimationPlaying = true;
    },
    handleInfoBannerAnimationEnd() {
      this.isInfoBannerAnimationPlaying = false;
    },
    handlePlayerSpriteAnimationEnd(payloadWithAnimationState) {
      switch (payloadWithAnimationState) {
        case "attacking":
          //console.log("Payload ist auf attacking");
          break;
        case "buffing":
          //  console.log("Payload ist auf buffing");
          break;
        case "dying":
          // console.log("Payload ist auf dying");
          break;
        default:
          this.playerAction = "idle";
      }
    },
    handleMonsterSpriteAnimationEnd(payloadWithAnimationState) {
      //this method has only one job: set Monster Prop "monsterAction" to idle so we get a change in data
      switch (payloadWithAnimationState) {
        case "attacking":
          this.monsterAction = "idle";
          break;
        case "buffing":
          this.monsterAction = "idle";
          break;
        case "hurting":
          this.monsterAction = "idle";
          break;
        case "dying":
          //console.log("Payload ist auf dying");
          break;

        default:
          this.monsterAction = "idle";
      }
    },
    handleMonsterIsAttackingPlayer() {
      this.playerAction = "hurting";
    },
    handleEnemyTurnOver() {
      this.flashcardGameStore.phase = "drawCards";
      //set Timeout entfernt weil es Probleme schafft, es nimmt den Code aus dem Programmfluss raus und macht
      //es etwas unvorhersehbar, generell habe ich gelernt, dass es
      //besser ist auf setTimeout komplett zu verzichten und statt dessen bei Animationen
      //die Events animationstart und animationend einzusetzen um einen vorhersehbaren Programmablauf zu schaffen
    },
    handleResetSpeechBubble() {
      this.toggleSpeechBubble = false;
    },
    playCard(payloadCard) {
      if (this.animationToggle === true) {
        this.animationToggle = false;
      } else {
        this.animationToggle = true;
      }
      const willpower = this.flashcardGameStore.getWillpower;
      const cost = payloadCard.willpowerCost;
      if (cost <= willpower) {
        //prüfen ob WK ausreicht.
        this.card = payloadCard; //Prop reaktiv. HandOfCards reagiert hier und passt Karten Array an.
        this.discardedCard = payloadCard;

        UserDataHandler.saveSingleUserInteraction("playcards", payloadCard);
        this.flashcardGameStore.decreaseWillpower(cost);
        for (let effect of payloadCard.effects) {
          switch (effect.type) {
            case "damage":
              // console.log("Does Damage");
              this.monsterStore.damageMonster(effect.value);
              this.playerAction = "attacking";
              this.monsterAction = "hurting";
              break;
            case "armor":
              //  console.log("Increase Armor");
              this.playerStore.increaseArmor(effect.value);
              this.playerAction = "buffing";
              break;
            case "heal":
              // console.log("Increase Health");
              this.playerStore.healHero(effect.value);
              this.playerAction = "healing";
              break;
            default:
            // code block
          }
        }
      } else {
        //  console.log("zu Teuer");
        this.toggleSpeechBubble = true;
      }
    },
    handleDiscardedCard(payloadCard) {
      this.discardedCard = payloadCard;
    },
  },
};
</script>

<style>
.flashcard-game {
  /* background-image: url("../assets/environments/card-game-kit-background-field-2.png"); */
  /* background-image: url("../assets/environments/combat-area-background-inside-office-room-2.png"); */
  /* background-image: url("../assets/environments/combat-area-background-inside-school-room-blue.png"); */

  background-image: url("../assets/environments/battle-area-background-home-office-1.png");

  background-size: cover;
  background-repeat: no-repeat;
  /* background-position-y: -230px; */
  background-position: 50% 100%;
  width: 100vw;
  height: 93vh;

  overflow: hidden;
}
.center-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px 20px;
}
.phaseTitle {
  color: var(--type-on-bg-light);
}

#phaseBanner {
  clip-path: polygon(9% 0, 91% 0, 100% 49%, 91% 100%, 9% 100%, 0% 50%);
  width: 500px;
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px 20px;

  background: linear-gradient(
    135deg,
    var(--bg-accent-gradient-start),
    var(--bg-accent-gradient-end)
  ); /* Farbverlauf für den Hintergrund */
  padding: 10px;
  border: 1px solid white;
  color: white;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); /* Leichter Schatten für 3D-Effekt */

  transition:
    background-color 0.5s,
    transform 0.5s;
}

.game-overlay {
  display: absolute;
  height: 100%;
  width: 100%;
  z-index: 1000;
}

.grid-container {
  display: grid;
  /* grid-template-columns: repeat(10, 1fr); */
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  /* grid-template-rows: repeat(10, 1fr); */
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 10px;
}
</style>
