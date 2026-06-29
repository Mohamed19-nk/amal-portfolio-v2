import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
apiKey: "AIzaSyCpHyNhvwDuAMPpmNRXznp8h-0TfPSRqvM",
authDomain: "amaltalent-portfolio.firebaseapp.com",
projectId: "amaltalent-portfolio",
storageBucket: "amaltalent-portfolio.firebasestorage.app",
messagingSenderId: "990070178400",
appId: "1:990070178400:web:05a889f1c81154bf483905",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
