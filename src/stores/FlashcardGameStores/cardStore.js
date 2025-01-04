import { defineStore } from "pinia";
import cardArtworkRightHook from "@/assets/card-art/combatSport-right-hook.png";
import cardArtworkJab from "@/assets/card-art/combatSport-Jab.png";
import cardArtworkBlock from "@/assets/card-art/combatSport-block.png";
import cardArtworkRest from "@/assets/card-art/combatSport-rest.png";
import cardArtworkGelberScheinImAermel from "@/assets/card-art/buero-gelberScheinImAermel.png";
export const useCardStore = defineStore("cardStore", {
  state: () => ({
    isCardShining: false,
    isDiscardAll: false,
    initialCardDeck: [
      {
        id: 10,
        title: "Blocken",
        willpowerCost: 1,
        description: "Erhalte 6 Verteidigung",
        cardArtworkSrc: cardArtworkBlock,
        isBound: true,
        category: "skill", // Defensive skill
        effects: [
          {
            type: "armor", // The type of effect
            value: 6,
            target: "player",
            duration: 0, // Instant
          },
        ],
      },
      {
        id: 9,
        title: "Blocken",
        willpowerCost: 1,
        description: "Erhalte 6 Verteidigung",
        cardArtworkSrc: cardArtworkBlock,
        isBound: true,
        category: "skill",
        effects: [
          {
            type: "armor",
            value: 6,
            target: "player",
            duration: 0,
          },
        ],
      },
      {
        id: 8,
        title: "Blocken",
        willpowerCost: 1,
        description: "Erhalte 6 Verteidigung",
        cardArtworkSrc: cardArtworkBlock,
        isBound: true,
        category: "skill",
        effects: [
          {
            type: "armor",
            value: 6,
            target: "player",
            duration: 0,
          },
        ],
      },
      {
        id: 7,
        title: "Jab",
        willpowerCost: 1,
        description: "Ein Gegner erleidet 2 Schaden",
        cardArtworkSrc: cardArtworkJab,
        isBound: true,
        category: "attack", // Direct attack
        effects: [
          {
            type: "damage",
            value: 2,
            target: "enemy",
            duration: 0,
          },
        ],
      },
      {
        id: 6,
        title: "Gelber Schein",
        willpowerCost: 2,
        description: "Heile 10 HP",
        cardArtworkSrc: cardArtworkGelberScheinImAermel,
        isBound: true,
        category: "skill", // Healing is a buff
        effects: [
          {
            type: "heal",
            value: 10,
            target: "player",
            duration: 0,
          },
        ],
      },
      {
        id: 5,
        title: "Rechter Haken",
        willpowerCost: 2,
        description: "Ein Gegner erleidet 6 Schaden",
        cardArtworkSrc: cardArtworkRightHook,
        isBound: true,
        category: "attack",
        effects: [
          {
            type: "damage",
            value: 6,
            target: "enemy",
            duration: 0,
          },
        ],
      },
      {
        id: 4,
        title: "Jab",
        willpowerCost: 1,
        description: "Ein Gegner erleidet 2 Schaden",
        cardArtworkSrc: cardArtworkJab,
        isBound: true,
        category: "attack",
        effects: [
          {
            type: "damage",
            value: 2,
            target: "enemy",
            duration: 0,
          },
        ],
      },
      {
        id: 3,
        title: "Ausruhen",
        willpowerCost: 1,
        description: "Heile 5 HP",
        cardArtworkSrc: cardArtworkRest,
        isBound: true,
        category: "skill",
        effects: [
          {
            type: "heal",
            value: 5,
            target: "player",
            duration: 0,
          },
        ],
      },
      {
        id: 2,
        title: "Jab",
        willpowerCost: 1,
        description: "Ein Gegner erleidet 2 Schaden",
        cardArtworkSrc: cardArtworkJab,
        isBound: true,
        category: "attack",
        effects: [
          {
            type: "damage",
            value: 2,
            target: "enemy",
            duration: 0,
          },
        ],
      },
      {
        id: 1,
        title: "Blocken",
        willpowerCost: 1,
        description: "Erhalte 6 Verteidigung",
        cardArtworkSrc: cardArtworkBlock,
        isBound: true,
        category: "skill",
        effects: [
          {
            type: "armor",
            value: 6,
            target: "player",
            duration: 0,
          },
        ],
      },
      {
        id: 0,
        title: "Rechter Haken",
        willpowerCost: 2,
        description: "Ein Gegner erleidet 6 Schaden",
        cardArtworkSrc: cardArtworkRightHook,
        isBound: true,
        category: "attack",
        effects: [
          {
            type: "damage",
            value: 6,
            target: "enemy",
            duration: 0,
          },
        ],
      },
    ],
    cardDeck: [],
    discardPile: [],
  }),
  getters: {
    //Platz für Getters
    getCardDeckLength() {
      if (this.cardDeck.length === 0) {
        return 0;
      } else {
        return this.cardDeck.length;
      }
    },
    getSizeOfDiscardPile() {
      if (this.discardPile.length === 0) {
        return 0;
      } else {
        return this.discardPile.length;
      }
    },
    checkIfCardDeckHasNotEnoughCards() {
      if (this.cardDeck.length <= 5) {
        return true;
      } else {
        return false;
      }
    },
  },
  actions: {
    drawCard() {
      //this.cardStore.pushCard();
      return this.cardDeck.pop();
    },
    addToDiscardPile(card) {
      this.discardPile.push(card);
    },
    bindCard(card) {
      card.isBound = true;
    },
    initiateCardDeck() {
      this.cardDeck = [...this.initialCardDeck];
    },
    refillCardDeckWithAllCardsFromDiscardPile() {
      // console.log("refillCardDeckWithAllCardsFromDiscardPile is running");
      const lengthOfDiscardPileBeforeRefill = this.discardPile.length;
      for (let i = 0; i < lengthOfDiscardPileBeforeRefill; i++) {
        let cardInDiscardPile = this.discardPile.pop();
        this.bindCard(cardInDiscardPile);
        this.cardDeck.push(cardInDiscardPile);
      }
    },
  },
});
