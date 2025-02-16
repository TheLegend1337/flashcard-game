<template>
  <div class="user-tests-dashboard">
    <div class="buttons-container">
      <ButtonUniversal
        :buttonWidth="300"
        :buttonHeight="100"
        type="primary"
        label="Daten herunterladen"
        @button-primary-clicked="handleButtonPrimaryClicked"
      />
      <ButtonUniversal
        :buttonWidth="500"
        :buttonHeight="100"
        type="secondary"
        label="Daten löschen"
        @button-secondary-clicked="handleButtonSecondaryClicked"
      />
      <ButtonUniversal
        :buttonWidth="500"
        :buttonHeight="100"
        type="secondary"
        label="Zeit tracking beenden"
        @click="handlStopTimeButtonClick"
      />
    </div>

    <div v-if="userData && Object.keys(userData).length">
      <div
        v-for="(items, category) in userData"
        :key="category"
        class="category"
      >
        <h2>
          {{ category }} ({{ items.length }})
          <!-- Anzahl der Items -->
        </h2>
        <ul>
          <li v-for="(item, index) in items" :key="index">
            <pre>{{ item }}</pre>
          </li>
        </ul>
      </div>
    </div>
    <div v-else>
      <p>Keine Daten verfügbar.</p>
    </div>
  </div>
</template>

<script>
import UserDataHandler from "@/helpers/userDataHandler"; // Importiere die Helper-Klasse
import ButtonUniversal from "@/components/FlashcardGame/Buttons/ButtonUniversal.vue";

export default {
  name: "UserTestsDashboard",
  components: {
    ButtonUniversal,
  },
  data() {
    return {
      userData: null, // Gespeicherte Daten
    };
  },
  methods: {
    handlStopTimeButtonClick() {},
    handleButtonPrimaryClicked() {
      const jsonData = JSON.stringify(this.userData, null, 2); // Convert userData to a JSON string
      const blob = new Blob([jsonData], { type: "application/json" }); // Create a Blob with the JSON data
      const link = document.createElement("a"); // Create a temporary link element
      link.href = URL.createObjectURL(blob); // Set the download URL to the Blob
      link.download = "user-data.json"; // Set the download attribute with the desired file name
      document.body.appendChild(link); // Append the link to the document and trigger a click
      link.click();

      // Clean up by removing the link
      document.body.removeChild(link);
    },
    handleButtonSecondaryClicked(event) {
      UserDataHandler.clearAllData();
      this.userData = UserDataHandler.getAllDataAsJSON(); //updaten vom UserDataHandler mit leeren Daten aus localStorage damit die Component die leeren Daten anzeigt
      console.log("event ist: " + event);
    },
  },
  mounted() {
    // Daten aus dem Local Storage laden, sobald die Komponente gerendert wurde
    UserDataHandler.endTrackingTime();
    this.userData = UserDataHandler.getAllDataAsJSON();
    this.userData = UserDataHandler.getAllDataAsJSON();
  },
};
</script>

<style scoped>
.buttons-container {
  display: flex;
  justify-content: center;
}
.user-tests-dashboard {
  padding: 1rem;
}

.category {
  margin-bottom: 1.5rem;
  color: var(--type-on-bg-dark);
  font-size: 1.5rem;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  padding: 0.5rem;
  background: linear-gradient(
    to bottom,
    var(--bg-light-gradient-start),
    var(--bg-light-gradient-end)
  );
  border: 2px solid var(--border-around-bg-light);
  margin-bottom: 0.5rem;
  border-radius: 4px;
  color: var(--type-on-bg-light);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Optional: Adds depth */
}
</style>
