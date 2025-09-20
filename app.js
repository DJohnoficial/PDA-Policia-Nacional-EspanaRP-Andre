// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, 
         createUserWithEmailAndPassword, updatePassword, onAuthStateChanged } 
from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

// Configuración de tu proyecto
const firebaseConfig = {
  apiKey: "AIzaSyDHNIDTYZ6iffKHlz-zHOdOE_7QEhf8FPM",
  authDomain: "pda-espanarp.firebaseapp.com",
  projectId: "pda-espanarp",
  storageBucket: "pda-espanarp.appspot.com",
  messagingSenderId: "944715520746",
  appId: "1:944715520746:web:xxxxxxx"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Referencias a elementos
const googleBtn = document.getElementById("googleLogin");
const loginBtn = document.getElementById("loginBtn");
const signUpBtn = document.getElementById("signUpBtn");
const statusMsg = document.getElementById("statusMsg");

// Login con Google
googleBtn.addEventListener("click", async () => {
  try {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
    statusMsg.textContent = "✅ Inicio de sesión exitoso";
    setTimeout(() => window.location.href = "dashboard.html", 1500);
  } catch (err) {
    statusMsg.textContent = "❌ " + err.message;
  }
});

// Login con Email/Password
loginBtn.addEventListener("click", async () => {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;
  try {
    await signInWithEmailAndPassword(auth, email, pass);
    statusMsg.textContent = "✅ Bienvenido";
    setTimeout(() => window.location.href = "dashboard.html", 1500);
  } catch (err) {
    statusMsg.textContent = "❌ " + err.message;
  }
});

// Registro con Email/Password
signUpBtn.addEventListener("click", async () => {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;
  try {
    await createUserWithEmailAndPassword(auth, email, pass);
    statusMsg.textContent = "✅ Cuenta creada con éxito";
  } catch (err) {
    statusMsg.textContent = "❌ " + err.message;
  }
});

// Estado de sesión
onAuthStateChanged(auth, (user) => {
  if (user) console.log("Usuario conectado:", user.email);
});
