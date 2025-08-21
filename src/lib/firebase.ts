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
  apiKey: "AIzaSyAJo_xSKuYV097_d9duxW4_mEddYSzvQ2g",
  authDomain: "cta-ffrm-app-v2-0824.firebaseapp.com",
  projectId: "cta-ffrm-app-v2-0824",
  storageBucket: "cta-ffrm-app-v2-0824.firebasestorage.app",
  messagingSenderId: "669569802045",
  appId: "1:669569802045:web:8460674f9172a057622f54",
  measurementId: "G-FC8FXNCT9L"
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
