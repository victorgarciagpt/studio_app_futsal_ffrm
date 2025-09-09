// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Servicio de Autenticación
import { getFirestore } from "firebase/firestore"; // Servicio de Firestore
import { getDatabase } from "firebase/database"; // Servicio de Realtime Database
import { getStorage } from "firebase/storage"; // Servicio de Cloud Storage
import { getFunctions } from "firebase/functions"; // Servicio de Cloud Functions

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsuuULyq59A7Ankw8gfUb6UgQwPYLGoB8",
  authDomain: "project-app-futsal.firebaseapp.com",
  projectId: "project-app-futsal",
  storageBucket: "project-app-futsal.firebasestorage.app",
  messagingSenderId: "173120844182",
  appId: "1:173120844182:web:b7bb7ea1b28c2031ea2db7",
  measurementId: "G-G93NVFVRL4"
};

// Initialize Firebase
// Agrega una verificación para evitar inicializar la app múltiples veces en Next.js (renderizado del lado del servidor)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Inicializa y exporta las instancias de los servicios
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const database = getDatabase(app);
export const storage = getStorage(app);
export const functions = getFunctions(app);

// Opcional: Puedes exportar la app misma si la necesitas en otros lugares
export { app };
