import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

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

const form = document.getElementById("login-form");
const status = document.getElementById("status");
const signup = document.getElementById("signup");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    status.innerText = "Login realizado com sucesso!";
    window.location.href = "curso.html";
  } catch (error) {
    status.innerText = "Erro no login: " + error.message;
  }
});

signup.addEventListener("click", async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    status.innerText = "Cadastro realizado! Agora faça login.";
  } catch (error) {
    status.innerText = "Erro ao cadastrar: " + error.message;
  }
});
