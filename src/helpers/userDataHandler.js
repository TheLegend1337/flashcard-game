//Die Daten werden in der  UserTestsDashboard.vue Component dargestellt und können dort runtergeladen werden
class UserDataHandler {
  constructor() {
    this.dataKey = "userInteractionData";
    this.initStorage();
  }

  initStorage() {
    //Local Storage muss erstmal initialisiert werden wenns noch nicht existiert
    if (!localStorage.getItem(this.dataKey)) {
      localStorage.setItem(
        //speichert die Daten im Local Storage vom Browser
        this.dataKey, //Schlüssel zum identifizieren unter dem die Daten gespeichert werden
        //Basically mein Schema für die Datei
        //
        //
        JSON.stringify({
          //value: Muss String sein.
          flashcards: [],
          playcards: [],
          flashcardsNoGamification: [],
          stats: {
            playTime: { PlayTime: 0 }, //yo halt wie lang der User am zocken ist
            flashcards: { label: "Flashcards Counter: ", count: 0 },
            playcards: { label: "Playcards Counter: ", count: 0 },
          },
        }),
      );
    }
  }

  saveSingleUserInteraction(dataType, dataObject) {
    // Eine einzige Interaktion z.b Interaktion mit Karteikarte oder mit Spiekarte speichern
    const storedData = JSON.parse(localStorage.getItem(this.dataKey)); //erstmal die gespeicherten Daten aus localStorage holen, parse konvertiert in javascript
    console.log("storedData: ", storedData);
    //wenn der Typ nicht existiert erstmal anlegen
    if (!storedData[dataType]) {
      storedData[dataType] = []; //neuen dataType anlegen
      console.log("storedData, Datatype: ", dataType);
    }

    storedData[dataType].push(dataObject); //hinzufügen

    if (!storedData.stats) {
      storedData.stats = {};
    }
    if (!storedData.stats[dataType]) {
      storedData.stats[dataType] = 0;
    }
    storedData.stats[dataType] += 1; // Anzahl an Objekten von dem Typ inkrementieren

    localStorage.setItem(this.dataKey, JSON.stringify(storedData)); //zurück ins LocalStorage rein da schnell aber
  }

  getAllDataAsJSON() {
    return JSON.parse(localStorage.getItem(this.dataKey));
  }
  clearAllData() {
    // Löscht alle gespeicherten Daten aus dem Local Storage
    localStorage.removeItem(this.dataKey);
    this.initStorage(); // Neu initialisieren, um die Struktur wieder herzustellen
  }

  startTrackingPlayTime() {
    this.playTimeStart = Date.now();
    localStorage.setItem("playTimeStart", this.playTimeStart); // Persist the start time
    console.log("Tracking started at:", this.playTimeStart);
  }

  endTrackingPlayTime() {
    const storedPlayTimeStart = localStorage.getItem("playTimeStart");
    //das muss persistent in localStorage zwischengespeichert werden
    //weil wir startTrackingPlayTime nicht in der gleichen Datei aufrufen wie endTrackingPlayTime
    const playTimeStart =
      this.playTimeStart ||
      (storedPlayTimeStart ? parseInt(storedPlayTimeStart, 10) : null);

    if (playTimeStart) {
      const elapsedTime = Math.floor((Date.now() - playTimeStart) / 1000); // Calculate elapsed time in seconds
      const storedData = JSON.parse(localStorage.getItem(this.dataKey));

      if (!storedData.stats) {
        storedData.stats = {};
      }

      // Update total play time
      if (!storedData.stats.playTime) {
        storedData.stats.playTime = { PlayTime: 0, label: "Play Time" };
      }
      storedData.stats.playTime.PlayTime += elapsedTime;

      // Reset playTimeStart
      this.playTimeStart = null;
      localStorage.removeItem("playTimeStart"); // Clear the saved start time

      localStorage.setItem(this.dataKey, JSON.stringify(storedData));
    }
  }
}

export default new UserDataHandler(); //dadurch entsteht ein Singleton und ich spar mir das erzeugen der Instanz, kann direkt drauf zugreifen.
