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
            playTime: { label: "Spielzeit: ", PlayTime: 0 },
            flashcardsOnlyTime: {
              label: "Flashcards Only Time: ",
              FlashcardsOnlyTime: 0,
            },
            flashcards: { label: "Game Based Flashcards Counter: ", count: 0 },
            flashcardsNoGamification: {
              label: "Flashcards Wihtout Gamification: ",
              count: 0,
            },
            playcards: { label: "Playcards Counter: ", count: 0 },
          },
        }),
      );
    }
  }

  saveSingleUserInteraction(dataType, dataObject) {
    // Load existing data from localStorage
    const storedData = JSON.parse(localStorage.getItem(this.dataKey));
    console.log("storedData: ", storedData);

    // Initialize dataType array if it doesn't exist
    if (!storedData[dataType]) {
      storedData[dataType] = [];
    }
    storedData[dataType].push(dataObject);

    // Initialize stats if missing
    if (!storedData.stats) {
      storedData.stats = {};
    }
    // Initialize stats[dataType] if missing
    if (!storedData.stats[dataType]) {
      storedData.stats[dataType] = { count: 0, label: dataType };
    }
    // Increment the count
    storedData.stats[dataType].count += 1;

    // Special case for flashcardsNoGamification
    if (dataType === "flashcardsNoGamification") {
      if (!storedData.stats.flashcardsOnly) {
        storedData.stats.flashcardsOnly = {
          count: 0,
          label: "Flashcards Only Counter: ",
        };
      }
      storedData.stats.flashcardsOnly.count += 1;
    }

    // Save back to localStorage
    localStorage.setItem(this.dataKey, JSON.stringify(storedData));
  }

  getAllDataAsJSON() {
    return JSON.parse(localStorage.getItem(this.dataKey));
  }
  clearAllData() {
    // Löscht alle gespeicherten Daten aus dem Local Storage
    localStorage.removeItem(this.dataKey);
    this.initStorage(); // Neu initialisieren, um die Struktur wieder herzustellen
  }

  startTrackingTime(whatToTrack) {
    this.timeTrackingStart = Date.now();
    localStorage.setItem("timeTrackingStart", this.timeTrackingStart); // Persist the start time
    localStorage.setItem("whatToTrack", whatToTrack); // Persist whatToTrack
    console.log(
      `Tracking started at: ${this.timeTrackingStart} for ${whatToTrack}`,
    );
  }

  endTrackingTime() {
    const storedTimeTrackingStart = localStorage.getItem("timeTrackingStart");
    const whatToTrack = localStorage.getItem("whatToTrack"); // Retrieve whatToTrack
    const timeTrackingStart =
      this.timeTrackingStart ||
      (storedTimeTrackingStart ? parseInt(storedTimeTrackingStart, 10) : null);

    if (timeTrackingStart && whatToTrack) {
      const elapsedTime = Math.floor((Date.now() - timeTrackingStart) / 1000); // Calculate elapsed time in seconds
      const storedData = JSON.parse(localStorage.getItem(this.dataKey));

      if (!storedData.stats) {
        storedData.stats = {};
      }

      // Update the correct tracking type dynamically
      if (whatToTrack === "playTime") {
        if (!storedData.stats.playTime) {
          storedData.stats.playTime = { PlayTime: 0, label: "Play Time" };
        }
        storedData.stats.playTime.PlayTime += elapsedTime;
      } else if (whatToTrack === "flashcardsOnlyTime") {
        if (!storedData.stats.flashcardsOnlyTime) {
          storedData.stats.flashcardsOnlyTime = {
            FlashcardsOnlyTime: 0,
            label: "Flashcards Only Time: ",
          };
        }
        storedData.stats.flashcardsOnlyTime.FlashcardsOnlyTime += elapsedTime;
      }

      // Reset timeTrackingStart
      this.timeTrackingStart = null;
      localStorage.removeItem("timeTrackingStart"); // Clear the saved start time
      localStorage.removeItem("whatToTrack"); // Clear whatToTrack

      // Save the updated stats back to localStorage
      localStorage.setItem(this.dataKey, JSON.stringify(storedData));
      console.log(`${whatToTrack} updated:`, storedData.stats[whatToTrack]);
    } else {
      console.warn(
        "endTrackingTime called without a valid timeTrackingStart or whatToTrack",
      );
    }
  }
}

export default new UserDataHandler(); //dadurch entsteht ein Singleton und ich spar mir das erzeugen der Instanz, kann direkt drauf zugreifen.
