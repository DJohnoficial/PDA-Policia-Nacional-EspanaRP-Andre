// Configuración Firebase
// Sustituye con tu propia configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDHNIDTYZ6iffKHlz-zHOdOE_7QEhf8FPM",
    authDomain: "project-944715520746.firebaseapp.com",
    projectId: "project-944715520746",
    storageBucket: "project-944715520746.appspot.com",
    messagingSenderId: "944715520746",
    appId: "1:944715520746:web:tu_id_aqui"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Elementos del DOM
const signUpBtn = document.getElementById('signUpBtn');
const loginBtn = document.getElementById('loginBtn');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

// Redirigir al dashboard si ya hay sesión activa
auth.onAuthStateChanged(user => {
    if(user){
        window.location.href = "dashboard.html";
    }
});

// Sign Up
signUpBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    const email = emailInput.value;
    const password = passwordInput.value;

    auth.createUserWithEmailAndPassword(email, password)
        .then(userCredential=>{
            alert('Registro exitoso');
            window.location.href = "dashboard.html";
        })
        .catch(error=>{
            alert(error.message);
        });
});

// Login
loginBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    const email = emailInput.value;
    const password = passwordInput.value;

    auth.signInWithEmailAndPassword(email, password)
        .then(userCredential=>{
            alert('Login exitoso');
            window.location.href = "dashboard.html";
        })
        .catch(error=>{
            alert(error.message);
        });
});
