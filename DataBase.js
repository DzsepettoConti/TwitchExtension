// Importáld a szükséges modulokat
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
import { getDatabase, ref, get, set } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";

// Firebase konfiguráció
const firebaseConfig = {
    apiKey: "AIzaSyCFq7v8j53biOVjFr4V9-RIQWSkulxw4zo",
    authDomain: "twitchextension-de02a.firebaseapp.com",
    databaseURL: "https://twitchextension-de02a-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "twitchextension-de02a",
    storageBucket: "twitchextension-de02a.firebasestorage.app",
    messagingSenderId: "792941375848",
    appId: "1:792941375848:web:3dc9ad6b700115ac7266dd",
    measurementId: "G-GTHEEKZ08R"
  };
  

// Inicializáld a Firebase appot
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Inicializáld az adatbázist
const database = getDatabase(app);

// GET function: "Alma" és "kugya" értékének lekérése
async function getData() {
  const almaRef = ref(database, "Alma");
  try {
    const almaSnapshot = await get(almaRef);

    const almaData = almaSnapshot.exists() ? almaSnapshot.val() : "Nincs adat";

    console.log("Alma:", almaData);
  } catch (error) {
    console.error("Hiba az adatok lekérésekor:", error);
  }
}

// POST function: Új adatok hozzáadása az "Alma" és "kugya" kulcsokhoz
async function postData(almaValue,) {
  const almaRef = ref(database, "Alma");

  try {
    await set(almaRef, almaValue);
    console.log("Sikeres adatfelvitel!");
  } catch (error) {
    console.error("Hiba az adatok felvitelekor:", error);
  }
}

// Használat példák:
// Lekérjük az adatokat
getData();

document.getElementById("changeImageButton").addEventListener("click", function() {
// Feltöltjük az új adatokat
postData("talán"); // Tetszőleges értékek

})