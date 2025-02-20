import { defineStore } from "pinia";

export const useFlashCardsStore = defineStore("flashCardsStore", {
  state: () => ({
    //Spanisch:
    /*allFlashcards: [
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
        question: "Wie antwortet man auf „¿Cómo te llamas?“ mit „Ich heiße …“?",
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
    ] */
    //Matthias Scheer: Imkern
    // allFlashcards: [
    //   {
    //     id: 1,
    //     question: "Braucht man für die Imkerei eine Genehmigung?",
    //     answer: "Nein",
    //     streak: 0,
    //   },
    //   {
    //     id: 2,
    //     question: "Welche Bienenrasse ist besonders sanftmütig?",
    //     answer: "Buckfast",
    //     streak: 0,
    //   },
    //   {
    //     id: 3,
    //     question: "Welche Grundausstattung braucht ein Imker?",
    //     answer: "Beute, Schutzkleidung, Smoker",
    //     streak: 0,
    //   },
    //   {
    //     id: 4,
    //     question: "Wozu dient eine Beute?",
    //     answer: "Unterkunft für ein Bienenvolk",
    //     streak: 0,
    //   },
    //   {
    //     id: 5,
    //     question: "Wann beginnt ein Bienenvolk zu schwärmen?",
    //     answer: "Im Frühjahr bei Platzmangel",
    //     streak: 0,
    //   },
    //   {
    //     id: 6,
    //     question: "Wann ist die beste Zeit, ein Bienenvolk zu kaufen?",
    //     answer: "Im Frühjahr",
    //     streak: 0,
    //   },
    //   {
    //     id: 7,
    //     question: "Wie kann ein Imker das Schwärmen verhindern?",
    //     answer: "Durch Ablegerbildung und Raumgabe",
    //     streak: 0,
    //   },
    //   {
    //     id: 8,
    //     question: "Wie erkennt man eine weisellose Kolonie?",
    //     answer: "Fehlende Brut und Unruhe",
    //     streak: 0,
    //   },
    //   {
    //     id: 9,
    //     question: "Kann eine neue Königin einfach zugesetzt werden?",
    //     answer: "Nein",
    //     streak: 0,
    //   },
    //   {
    //     id: 10,
    //     question: "Was ist ein Ableger?",
    //     answer: "Ein neu gebildetes Bienenvolk",
    //     streak: 0,
    //   },
    //   {
    //     id: 11,
    //     question: "Wie lange braucht eine Königin bis zur Eiablage?",
    //     answer: "7–10 Tage",
    //     streak: 0,
    //   },
    //   {
    //     id: 12,
    //     question: "Warum sollte man regelmäßig die Völker kontrollieren?",
    //     answer: "Um Krankheiten, Schwarmstimmung und Futtervorrat zu prüfen",
    //     streak: 0,
    //   },
    //   {
    //     id: 13,
    //     question:
    //       "Wie oft sollte ein Imker seine Völker im Sommer kontrollieren?",
    //     answer: "Alle 7–10 Tage",
    //     streak: 0,
    //   },
    //   {
    //     id: 14,
    //     question: "Wie kann man die Varroa-Milbe bekämpfen?",
    //     answer: "Mit Ameisensäure oder Oxalsäure",
    //     streak: 0,
    //   },
    //   {
    //     id: 15,
    //     question: "Woran erkennt man einen starken Varroa-Befall?",
    //     answer: "Verkrüppelte Bienen, tote Brut",
    //     streak: 0,
    //   },
    //   {
    //     id: 16,
    //     question: "Welche Vorbereitungen sind vor dem Winter nötig?",
    //     answer: "Einfüttern, Varroabehandlung, Flugloch sichern",
    //     streak: 0,
    //   },
    //   {
    //     id: 17,
    //     question: "Wie viel Winterfutter braucht ein Bienenvolk?",
    //     answer: "15–20 kg Zuckerwasser",
    //     streak: 0,
    //   },
    //   {
    //     id: 18,
    //     question: "Wann ist die beste Zeit für die Königinnenzucht?",
    //     answer: "Mai bis Juni",
    //     streak: 0,
    //   },
    //   {
    //     id: 19,
    //     question: "Wie kann man gezielt Königinnen nachziehen?",
    //     answer: "Durch Zucht aus Weiselzellen",
    //     streak: 0,
    //   },
    //   {
    //     id: 20,
    //     question: "Wie bestimmt man das Alter einer Bienenkönigin?",
    //     answer: "Durch Markierungsfarbe oder Legerhythmus",
    //     streak: 0,
    //   },
    //   {
    //     id: 21,
    //     question: "Welche Bedeutung hat das Drohnenbrut-Schneiden?",
    //     answer: "Zur Varroa-Reduktion, da Milben Drohnen bevorzugen",
    //     streak: 0,
    //   },
    //   {
    //     id: 22,
    //     question: "Wie oft sollte ein Bienenvolk geöffnet werden?",
    //     answer: "So selten wie möglich",
    //     streak: 0,
    //   },
    //   {
    //     id: 23,
    //     question: "Was macht eine gute Zuchtkönigin aus?",
    //     answer: "Hohe Legeleistung, Varroa-Toleranz",
    //     streak: 0,
    //   },
    //   {
    //     id: 24,
    //     question: "Wie gewinnt man Honig aus Waben?",
    //     answer: "Durch Schleudern nach Entdeckelung",
    //     streak: 0,
    //   },
    // ],
    //Yannick und Lukas: Aktienanalyse
    // allFlashcards: [
    //   {
    //     id: 1,
    //     question:
    //       "Wie kann eine Aktie dir langfristigen Vermögensaufbau ermöglichen?",
    //     answer: "Durch Kurssteigerung und Dividenden.",
    //     streak: 0,
    //   },
    //   {
    //     id: 2,
    //     question:
    //       "Kann eine Aktie auch dann fallen, wenn das Unternehmen profitabel ist?",
    //     answer: "Ja.",
    //     streak: 0,
    //   },
    //   {
    //     id: 3,
    //     question: "Was bedeutet 'Dividende'?",
    //     answer: "Gewinnausschüttung an Aktionäre.",
    //     streak: 0,
    //   },
    //   {
    //     id: 4,
    //     question: "Kann politische Unsicherheit Aktienkurse beeinflussen?",
    //     answer: "Ja.",
    //     streak: 0,
    //   },
    //   {
    //     id: 5,
    //     question: "Was bedeutet 'KGV'?",
    //     answer: "Kurs-Gewinn-Verhältnis.",
    //     streak: 0,
    //   },
    //   {
    //     id: 6,
    //     question:
    //       "Bietet ein ETF automatisch eine bessere Rendite als eine Aktie?",
    //     answer: "Nein.",
    //     streak: 0,
    //   },
    //   {
    //     id: 7,
    //     question: "Was ist eine Börse?",
    //     answer: "Marktplatz für Wertpapiere.",
    //     streak: 0,
    //   },
    //   {
    //     id: 8,
    //     question:
    //       "Kann eine zu hohe Konzentration auf eine einzige Aktie dein Risiko stark erhöhen?",
    //     answer: "Ja.",
    //     streak: 0,
    //   },
    //   {
    //     id: 9,
    //     question: "Was ist eine fundamentale Analyse?",
    //     answer: "Bewertung einer Aktie anhand von Kennzahlen.",
    //     streak: 0,
    //   },
    //   {
    //     id: 10,
    //     question: "Was zeigt die Marktkapitalisierung?",
    //     answer: "Den Gesamtwert eines Unternehmens.",
    //     streak: 0,
    //   },
    //   {
    //     id: 11,
    //     question: "Ist ein niedriges KGV immer gut?",
    //     answer: "Nein.",
    //     streak: 0,
    //   },
    //   {
    //     id: 12,
    //     question: "Was ist eine technische Analyse?",
    //     answer: "Analyse anhand von Kursverläufen.",
    //     streak: 0,
    //   },
    //   {
    //     id: 13,
    //     question: "Was bedeutet 'Diversifikation'?",
    //     answer: "Risikostreuung durch verschiedene Anlagen.",
    //     streak: 0,
    //   },
    //   {
    //     id: 14,
    //     question: "Was misst das Beta einer Aktie?",
    //     answer: "Die Volatilität im Vergleich zum Markt.",
    //     streak: 0,
    //   },
    //   {
    //     id: 15,
    //     question:
    //       "Kann regelmäßiges Investieren helfen, Marktschwankungen auszugleichen?",
    //     answer: "Ja.",
    //     streak: 0,
    //   },
    //   {
    //     id: 16,
    //     question: "Was zeigt die Eigenkapitalrendite?",
    //     answer: "Gewinn im Verhältnis zum Eigenkapital.",
    //     streak: 0,
    //   },
    //   {
    //     id: 17,
    //     question: "Wie finde ich unterbewertete Aktien?",
    //     answer: "Vergleich von KGV und Branchenwerten.",
    //     streak: 0,
    //   },
    //   {
    //     id: 18,
    //     question: "Was bedeutet 'Dividendenrendite'?",
    //     answer: "Dividende im Verhältnis zum Aktienkurs.",
    //     streak: 0,
    //   },
    //   {
    //     id: 19,
    //     question: "Wie hilft ein Sparplan beim Investieren?",
    //     answer: "Er verteilt Käufe über die Zeit.",
    //     streak: 0,
    //   },
    //   {
    //     id: 20,
    //     question: "Erhöht ein rasanter Kursanstieg immer die Gewinnchancen?",
    //     answer: "Nein.",
    //     streak: 0,
    //   },
    //   {
    //     id: 21,
    //     question: "Warum ist eine Watchlist nützlich?",
    //     answer: "Zum Beobachten interessanter Aktien.",
    //     streak: 0,
    //   },
    //   {
    //     id: 22,
    //     question: "Wie kann ich Risiken minimieren?",
    //     answer: "Durch Diversifikation.",
    //     streak: 0,
    //   },
    //   {
    //     id: 23,
    //     question:
    //       "Kann eine ungewöhnlich hohe Dividende auf finanzielle Probleme hindeuten?",
    //     answer: "Ja.",
    //     streak: 0,
    //   },
    //   {
    //     id: 24,
    //     question: "Wie sollte man auf einen Börsencrash reagieren?",
    //     answer: "Ruhig bleiben, Strategie prüfen, Chancen nutzen.",
    //     streak: 0,
    //   },
    // ],
    //Isländisch, Luisa
    /* allFlashcards: [
      {
        id: 1,
        question: "Wie sagt man ‚Hallo‘ auf Isländisch?",
        answer: "Halló",
        streak: 0,
      },
      { id: 2, question: "Was bedeutet ‚Takk‘?", answer: "Danke", streak: 0 },
      {
        id: 3,
        question: "Bedeutet ‚Já‘ auf Isländisch ‚Ja‘?",
        answer: "Ja",
        streak: 0,
      },
      {
        id: 4,
        question: "Wie sagt man ‚Nein‘ auf Isländisch?",
        answer: "Nei",
        streak: 0,
      },
      {
        id: 5,
        question: "Ist Isländisch eine germanische Sprache?",
        answer: "Ja",
        streak: 0,
      },
      {
        id: 6,
        question: "Was bedeutet ‚Bless‘?",
        answer: "Tschüss",
        streak: 0,
      },
      {
        id: 7,
        question: "Wie sagt man ‚Bitte‘ auf Isländisch?",
        answer: "Gjörðu svo vel",
        streak: 0,
      },
      { id: 8, question: "Heißt ‚Vinur‘ Freund?", answer: "Ja", streak: 0 },

      {
        id: 9,
        question: "Wie fragt man ‚Wie geht es dir?‘ auf Isländisch?",
        answer: "Hvernig hefurðu það?",
        streak: 0,
      },
      {
        id: 10,
        question: "Was bedeutet ‚Ég skil ekki‘?",
        answer: "Ich verstehe nicht",
        streak: 0,
      },
      {
        id: 11,
        question: "Kann man ‚Ég heiti…‘ für die Vorstellung nutzen?",
        answer: "Ja",
        streak: 0,
      },
      {
        id: 12,
        question: "Wie antwortet man auf ‚Hvað segirðu gott?‘?",
        answer: "Allt gott",
        streak: 0,
      },
      {
        id: 13,
        question: "Was bedeutet ‚Afsakið‘?",
        answer: "Entschuldigung",
        streak: 0,
      },
      {
        id: 14,
        question: "Ist die Aussprache von ‚j‘ im Isländischen wie ‚j‘ in ‚ja‘?",
        answer: "Ja",
        streak: 0,
      },
      {
        id: 15,
        question: "Wie fragt man nach dem Preis?",
        answer: "Hvað kostar þetta?",
        streak: 0,
      },
      {
        id: 16,
        question: "Was bedeutet ‚Ég tala ekki íslensku‘?",
        answer: "Ich spreche kein Isländisch",
        streak: 0,
      },

      {
        id: 17,
        question: "Wie bestellt man einen Kaffee?",
        answer: "Ég vil kaffi",
        streak: 0,
      },
      {
        id: 18,
        question: "Was bedeutet ‚Hvar er klósettið?‘?",
        answer: "Wo ist die Toilette?",
        streak: 0,
      },
      {
        id: 19,
        question:
          "Wie sagt man ‚Die Wohlgestelltheit nichtlinearer PDEs hängt von der Hyperbolizität und der Sobolev-Einbettung in geeignete Banachräume ab.‘?",
        answer:
          "Velskilgreining ólínulegra afleiðujafna fer eftir ofurbolsku og Sobolev-ísetningu í viðeigandi Banach-rúm.",
        streak: 0,
      },
      {
        id: 20,
        question: "Was heißt ‚Hvað er klukkan?‘?",
        answer: "Wie spät ist es?",
        streak: 0,
      },
      {
        id: 21,
        question: "Wie sagt man ‚Guten Morgen‘?",
        answer: "Góðan daginn",
        streak: 0,
      },
      {
        id: 22,
        question: "Ist Isländisch mit Norwegisch verwandt?",
        answer: "Ja",
        streak: 0,
      },
      {
        id: 23,
        question: "Wie kann man ein Taxi rufen?",
        answer: "Hringdu í leigubíl",
        streak: 0,
      },
      {
        id: 24,
        question: "Was bedeutet ‚Ég á ekki pening‘?",
        answer: "Ich habe kein Geld",
        streak: 0,
      },
    ],*/
    //Grundlagen der Programmierlogik, eugen
    // allFlashcards: [
    //   {
    //     id: 1,
    //     question: "Was ist eine Variable?",
    //     answer: "Ein Speicherplatz für Daten.",
    //     streak: 0,
    //   },
    //   {
    //     id: 2,
    //     question: "Ist eine Schleife eine Kontrollstruktur? (Ja/Nein)",
    //     answer: "Ja",
    //     streak: 0,
    //   },
    //   {
    //     id: 3,
    //     question: "Was ist eine Bedingung?",
    //     answer: "Eine Abfrage, die wahr oder falsch ist.",
    //     streak: 0,
    //   },
    //   {
    //     id: 4,
    //     question:
    //       "Kann eine IF-Anweisung mehrere Bedingungen prüfen? (Ja/Nein)",
    //     answer: "Ja",
    //     streak: 0,
    //   },
    //   {
    //     id: 5,
    //     question: "Was bedeutet 'Iteration'?",
    //     answer: "Wiederholung eines Befehlsblocks.",
    //     streak: 0,
    //   },
    //   {
    //     id: 6,
    //     question:
    //       "Braucht eine WHILE-Schleife eine Abbruchbedingung? (Ja/Nein)",
    //     answer: "Ja",
    //     streak: 0,
    //   },
    //   {
    //     id: 7,
    //     question: "Was ist eine Konstante?",
    //     answer: "Ein fester Wert, der sich nicht ändert.",
    //     streak: 0,
    //   },
    //   {
    //     id: 8,
    //     question: "Ist 'x = x + 1' eine Zuweisung? (Ja/Nein)",
    //     answer: "Ja",
    //     streak: 0,
    //   },
    //   {
    //     id: 9,
    //     question: "Wie wird eine WHILE-Schleife beendet?",
    //     answer: "Wenn die Bedingung falsch wird.",
    //     streak: 0,
    //   },
    //   {
    //     id: 10,
    //     question: "Was ist der Zweck einer IF-Anweisung?",
    //     answer: "Bedingte Ausführung von Code.",
    //     streak: 0,
    //   },
    //   {
    //     id: 11,
    //     question: "Kann eine FOR-Schleife rückwärts zählen? (Ja/Nein)",
    //     answer: "Ja",
    //     streak: 0,
    //   },
    //   {
    //     id: 12,
    //     question: "Was macht ein ELSE-Block?",
    //     answer: "Führt Code bei falscher Bedingung aus.",
    //     streak: 0,
    //   },
    //   {
    //     id: 13,
    //     question: "Was bedeutet 'Schleifenkontrolle'?",
    //     answer: "Steuerung der Schleifen-Ausführung.",
    //     streak: 0,
    //   },
    //   {
    //     id: 14,
    //     question: "Kann man Schleifen ineinander verschachteln? (Ja/Nein)",
    //     answer: "Ja",
    //     streak: 0,
    //   },
    //   {
    //     id: 15,
    //     question: "Was ist eine Endlosschleife?",
    //     answer: "Eine Schleife ohne Abbruchbedingung.",
    //     streak: 0,
    //   },
    //   {
    //     id: 16,
    //     question: "Erhöht 'i = i + 1' den Zähler? (Ja/Nein)",
    //     answer: "Ja",
    //     streak: 0,
    //   },
    //   {
    //     id: 17,
    //     question: "Wie vermeidest du eine Endlosschleife?",
    //     answer: "Durch eine gültige Abbruchbedingung.",
    //     streak: 0,
    //   },
    //   {
    //     id: 18,
    //     question: "Was macht ein 'break'-Befehl?",
    //     answer: "Beendet die aktuelle Schleife.",
    //     streak: 0,
    //   },
    //   {
    //     id: 19,
    //     question: "Wann nutzt man eine FOR-Schleife?",
    //     answer: "Bei bekannter Anzahl an Durchläufen.",
    //     streak: 0,
    //   },
    //   {
    //     id: 20,
    //     question: "Was passiert bei 'IF x > 5 THEN y = 1'?",
    //     answer: "y wird 1, wenn x größer als 5 ist.",
    //     streak: 0,
    //   },
    //   {
    //     id: 21,
    //     question: "Wie überspringt man eine Iteration?",
    //     answer: "Mit dem 'continue'-Befehl.",
    //     streak: 0,
    //   },
    //   {
    //     id: 22,
    //     question: "Warum Bedingungen kombinieren?",
    //     answer: "Für komplexere Entscheidungslogik.",
    //     streak: 0,
    //   },
    //   {
    //     id: 23,
    //     question: "Wie kann man mehrere IFs effizienter schreiben?",
    //     answer: "Mit ELSE IF-Ketten.",
    //     streak: 0,
    //   },
    //   {
    //     id: 24,
    //     question: "Was prüft 'WHILE x != 0'?",
    //     answer: "Ob x ungleich 0 ist.",
    //     streak: 0,
    //   },
    // ],
    //IPv4, Eugen
    // allFlashcards: [
    //   {id: 1, question: "Was ist Subnetting?", answer: "Aufteilung eines Netzwerks in kleinere Netze.", streak: 0},
    //   {id: 2, question: "Besteht eine IPv4-Adresse aus 32 Bit? (Ja/Nein)", answer: "Ja", streak: 0},
    //   {id: 3, question: "Was ist eine Subnetzmaske?", answer: "Sie trennt Netz- und Hostanteil.", streak: 0},
    //   {id: 4, question: "Ist 255.255.255.0 eine Subnetzmaske? (Ja/Nein)", answer: "Ja", streak: 0},
    //   {id: 5, question: "Was bedeutet CIDR?", answer: "Classless Inter-Domain Routing.", streak: 0},
    //   {id: 6, question: "Gibt es private IPv4-Bereiche? (Ja/Nein)", answer: "Ja", streak: 0},
    //   {id: 7, question: "Was ist eine Broadcast-Adresse?", answer: "Adresse für alle Hosts im Subnetz.", streak: 0},
    //   {id: 8, question: "Ist 192.168.1.1 eine private IP? (Ja/Nein)", answer: "Ja", streak: 0},
    //   {id: 9, question: "Was macht Subnetting effizienter?", answer: "Bessere IP-Adressausnutzung.", streak: 0},
    //   {id: 10, question: "Was bedeutet /24 im CIDR-Format?", answer: "24 Bit für das Netzwerk.", streak: 0},
    //   {id: 11, question: "Kann ein Subnetz mehr als 254 Hosts haben? (Ja/Nein)", answer: "Ja", streak: 0},
    //   {id: 12, question: "Was ist die Netzwerkadresse?", answer: "Erste Adresse eines Subnetzes.", streak: 0},
    //   {id: 13, question: "Wie viele Hosts in /30?", answer: "2 nutzbare Hosts.", streak: 0},
    //   {id: 14, question: "Darf eine Host-Adresse nur aus Nullen bestehen? (Ja/Nein)", answer: "Nein", streak: 0},
    //   {id: 15, question: "Was ist eine Standard-Subnetzmaske für Klasse C?", answer: "255.255.255.0", streak: 0},
    //   {id: 16, question: "Ist 10.0.0.0/8 ein privater Bereich? (Ja/Nein)", answer: "Ja", streak: 0},
    //   {id: 17, question: "Wie viele Subnetze entstehen aus /24 in /26?", answer: "4 Subnetze.", streak: 0},
    //   {id: 18, question: "Wie viele Hosts hat ein /29-Netz?", answer: "6 nutzbare Hosts.", streak: 0},
    //   {id: 19, question: "Wie erkennt man die Broadcast-Adresse?", answer: "Alle Hostbits sind 1.", streak: 0},
    //   {id: 20, question: "Was ist der Zweck von VLSM?", answer: "Variable Subnetzgrößen.", streak: 0},
    //   {id: 21, question: "Wie viele Hosts hat ein /16-Netz?", answer: "65.534 Hosts.", streak: 0},
    //   {id: 22, question: "Wie wird Subnetting berechnet?", answer: "Mit Binärumrechnung der IPs.", streak: 0},
    //   {id: 23, question: "Warum Subnetting verwenden?", answer: "Für Sicherheit und Netzwerkeffizienz.", streak: 0},
    //   {id: 24, question: "Wie viele Adressen in /27?", answer: "32 Adressen, 30 nutzbar.", streak: 0}
    // ]
  }),
  getters: {
    //Platz für Getters
  },
  actions: {
    sortAllFlashcardsBasedOnStreak() {
      this.allFlashcards.sort((a, b) => b.streak - a.streak);
      this.logAllFlashcards();
    },
    logAllFlashcards() {
      console.log(
        "allFlashcards:",
        JSON.stringify(this.allFlashcards, null, 2),
      );
      console.log("Länge der Flashcards List: " + this.allFlashcards.length);
    },
    resetStreak(flashcard) {
      flashcard.streak = 0;
      return flashcard;
    },
    incrementStreak(flashcard) {
      flashcard.streak = flashcard.streak + 1;
      return flashcard;
    },
    popSingleFlashcard() {
      this.sortAllFlashcardsBasedOnStreak();
      return this.allFlashcards.pop();
    },
    putFlashcardAtTheTopOfItsStreakPosition(payloadFlashcard) {
      for (let index = 0; index < this.allFlashcards.length; index++) {
        const currentFlashcard = this.allFlashcards[index];

        // Insert before the first flashcard with a lower or equal streak
        if (payloadFlashcard.streak >= currentFlashcard.streak) {
          this.allFlashcards.splice(index, 0, payloadFlashcard);

          break;
        }
      }
    },

    putSingleFlashcardBackToAllFlashcards(flashcard) {
      this.sortAllFlashcardsBasedOnStreak();
      this.putFlashcardAtTheTopOfItsStreakPosition(flashcard);
    },
  },
});
