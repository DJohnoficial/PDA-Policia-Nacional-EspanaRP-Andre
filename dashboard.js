// Firebase
const auth = firebase.auth();

// Elementos del DOM
const profileName = document.getElementById('profileName');
const profileEmail = document.getElementById('profileEmail');
const changePasswordBtn = document.getElementById('changePasswordBtn');

// Mostrar datos de usuario
auth.onAuthStateChanged(user => {
    if(user){
        profileName.textContent = user.displayName || "Usuario";
        profileEmail.textContent = user.email;
    } else {
        // Redirigir al login si no hay sesión
        window.location.href = "index.html";
    }
});

// Cambiar contraseña
changePasswordBtn.addEventListener('click', ()=>{
    const newPassword = prompt("Ingresa la nueva contraseña:");
    if(newPassword){
        auth.currentUser.updatePassword(newPassword)
            .then(()=>{
                alert("Contraseña actualizada correctamente");
            })
            .catch(error=>{
                alert("Error: " + error.message);
            });
    }
});

// Puedes agregar más funcionalidades del PDA aquí
// Ej: ver reportes, registrar incidencias, historial, etc.
