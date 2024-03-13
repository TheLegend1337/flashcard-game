// db-manager-mockup.js

// Pfad zur JSON-Datei
const jsonFilePath = './db.json';

// Funktion zum Laden der JSON-Daten
export async function loadJSON() {
  try {
    const response = await fetch(jsonFilePath);
    console.log(response);
    const data = await response.json();
    console.log(data);
    return data;
    
  } catch (error) {
    console.error('Fehler beim Laden der JSON-Daten:', error);
    return null;
  }
}
