import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDtxGVraYrmIMLW5cw63MlmJJ0r3HZp1YE",
  authDomain: "plataforma-de-cursos-307d2.firebaseapp.com",
  projectId: "plataforma-de-cursos-307d2",
  storageBucket: "plataforma-de-cursos-307d2.appspot.com",
  messagingSenderId: "646654315475",
  appId: "1:646654315475:web:fd6ec63feb06fe61267d26",
  measurementId: "G-1JGH2477YW"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

window.login = async () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    alert("Erro ao entrar: " + error.message);
  }
};

window.register = async () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await setDoc(doc(db, "alunos", userCredential.user.uid), {
      email: email,
      progresso: { modulo1: false, modulo2: false, modulo3: false }
    });
  } catch (error) {
    alert("Erro ao cadastrar: " + error.message);
  }
};

window.logout = () => {
  signOut(auth);
};

window.concluirModulo = async (modulo) => {
  const user = auth.currentUser;
  if (!user) return;
  const ref = doc(db, "alunos", user.uid);
  const snapshot = await getDoc(ref);
  const progresso = snapshot.data().progresso;
  progresso["modulo" + modulo] = true;
  await updateDoc(ref, { progresso });
  alert("Módulo " + modulo + " concluído!");
};

window.emitirCertificado = async () => {
  const user = auth.currentUser;
  const ref = doc(db, "alunos", user.uid);
  const snapshot = await getDoc(ref);
  const progresso = snapshot.data().progresso;
  if (progresso.modulo1 && progresso.modulo2 && progresso.modulo3) {
    alert("✅ Certificado emitido para " + user.email);
  } else {
    alert("❌ Você precisa concluir todos os módulos.");
  }
};

onAuthStateChanged(auth, async (user) => {
  if (user) {
    document.getElementById("auth").style.display = "none";
    document.getElementById("content").style.display = "block";
    document.getElementById("userEmail").innerText = user.email;
  } else {
    document.getElementById("auth").style.display = "block";
    document.getElementById("content").style.display = "none";
  }
});