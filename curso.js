import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDtxGVraYrmIMLW5cw63MlmJJ0r3HZp1YE",
  authDomain: "plataforma-de-cursos-307d2.firebaseapp.com",
  projectId: "plataforma-de-cursos-307d2",
  storageBucket: "plataforma-de-cursos-307d2.firebasestorage.app",
  messagingSenderId: "646654315475",
  appId: "1:646654315475:web:fd6ec63feb06fe61267d26",
  measurementId: "G-1JGH2477YW"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.href = "index.html";
  }
});

document.getElementById("logout").addEventListener("click", () => {
  signOut(auth).then(() => window.location.href = "index.html");
});
