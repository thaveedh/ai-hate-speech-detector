import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDrFgfdPAcK3m_DmkfE7Pz7LOR4gcvMahk",
  authDomain: "ai-moderator-b414a.firebaseapp.com",
  projectId: "ai-moderator-b414a",
  storageBucket: "ai-moderator-b414a.firebasestorage.app",
  messagingSenderId: "674218482196",
  appId: "1:674218482196:web:bf00aa4a4907491ec5a501"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();