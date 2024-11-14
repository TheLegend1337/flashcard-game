import { defineStore } from "pinia";
export const useFlashCardsStore = defineStore("flashCardsStore", {
  state: () => ({
    flashcards: {
      streak0: [
        {
          id: 1,
          question: "Wie sagt man „Hallo“ auf Spanisch?",
          answer: "Hola",
          streak: 0,
        },
        {
          id: 2,
          question: "Wie fragt man „Wie geht's?“ auf Spanisch?",
          answer: "¿Cómo estás?",
          streak: 0,
        },
        {
          id: 3,
          question: "Wie antwortet man auf „¿Cómo estás?“ mit „Gut, danke.“?",
          answer: "Bien, gracias.",
          streak: 0,
        },
        {
          id: 4,
          question: "Wie sagt man „Bitte“ auf Spanisch?",
          answer: "Por favor",
          streak: 0,
        },
        {
          id: 5,
          question: "Wie sagt man „Danke“ auf Spanisch?",
          answer: "Gracias",
          streak: 0,
        },
        {
          id: 6,
          question: "Wie sagt man „Ja“ und „Nein“ auf Spanisch?",
          answer: "Sí und No",
          streak: 0,
        },
        {
          id: 7,
          question: "Wie fragt man „Wie heißt du?“ auf Spanisch?",
          answer: "¿Cómo te llamas?",
          streak: 0,
        },
        {
          id: 8,
          question:
            "Wie antwortet man auf „¿Cómo te llamas?“ mit „Ich heiße …“?",
          answer: "Me llamo …",
          streak: 0,
        },
        {
          id: 9,
          question: "Wie sagt man „Entschuldigung“ auf Spanisch?",
          answer: "Perdón oder Lo siento",
          streak: 0,
        },
        {
          id: 10,
          question: "Wie fragt man „Wo ist die Toilette?“ auf Spanisch?",
          answer: "¿Dónde está el baño?",
          streak: 0,
        },
        {
          id: 11,
          question: "Wie zählt man von 1 bis 5 auf Spanisch?",
          answer: "Uno, dos, tres, cuatro, cinco",
          streak: 0,
        },
        {
          id: 12,
          question: "Wie sagt man „Guten Morgen“ auf Spanisch?",
          answer: "Buenos días",
          streak: 0,
        },
        {
          id: 13,
          question: "Wie sagt man „Gute Nacht“ auf Spanisch?",
          answer: "Buenas noches",
          streak: 0,
        },
        {
          id: 14,
          question: "Wie fragt man „Was kostet das?“ auf Spanisch?",
          answer: "¿Cuánto cuesta esto?",
          streak: 0,
        },
        {
          id: 15,
          question: "Wie sagt man „Ich verstehe nicht“ auf Spanisch?",
          answer: "No entiendo",
          streak: 0,
        },
        {
          id: 16,
          question: "Wie sagt man „Ich spreche kein Spanisch“ auf Spanisch?",
          answer: "No hablo español",
          streak: 0,
        },
        {
          id: 17,
          question: "Wie fragt man „Sprechen Sie Englisch?“ auf Spanisch?",
          answer: "¿Habla inglés?",
          streak: 0,
        },
        {
          id: 18,
          question: "Wie sagt man „Ich hätte gerne …“ auf Spanisch?",
          answer: "Quisiera …",
          streak: 0,
        },
        {
          id: 19,
          question: "Wie sagt man „Was bedeutet das?“ auf Spanisch?",
          answer: "¿Qué significa eso?",
          streak: 0,
        },
        {
          id: 20,
          question: "Wie sagt man „Woher kommst du?“ auf Spanisch?",
          answer: "¿De dónde eres?",
          streak: 0,
        },
        {
          id: 21,
          question:
            "Wie antwortet man auf „¿De dónde eres?“ mit „Ich komme aus …“?",
          answer: "Soy de …",
          streak: 0,
        },
        {
          id: 22,
          question: "Wie sagt man „Ich brauche Hilfe“ auf Spanisch?",
          answer: "Necesito ayuda",
          streak: 0,
        },
        {
          id: 23,
          question: "Wie sagt man „Ich liebe dich“ auf Spanisch?",
          answer: "Te quiero",
          streak: 0,
        },
        {
          id: 24,
          question: "Wie sagt man „Bis später“ auf Spanisch?",
          answer: "Hasta luego",
          streak: 0,
        },
      ],
      streak1: [],
      streak2: [],
    },
  }),
  getters: {
    //Platz für Getters
  },
  actions: {
    shiftFirstFromStreak0() {
      this.logRegisters();
      return Object.values(this.flashcards)[0].shift();
    },
    shiftFirstFromStreak1() {
      this.logRegisters();
      return Object.values(this.flashcards)[1].shift();
    },
    shiftFirstFromStreak2() {
      this.logRegisters();
      return Object.values(this.flashcards)[2].shift();
    },
    pushFirstFromStreak0() {
      this.logRegisters();
      return Object.values(this.flashcards)[0].push();
    },
    pushFirstFromStreak1() {
      this.logRegisters();
      return Object.values(this.flashcards)[1].push();
    },
    pushFirstFromStreak2() {
      this.logRegisters();
      return Object.values(this.flashcards)[2].shift();
    },
    logRegisters() {
      const firstArray = Object.values(this.flashcards)[0];
      const secondArray = Object.values(this.flashcards)[1];
      const thirdArray = Object.values(this.flashcards)[2];
      console.log("Register1: " + firstArray);
      console.log("Register2: " + secondArray);
      console.log("Register3: " + thirdArray);
    },
  },
});
