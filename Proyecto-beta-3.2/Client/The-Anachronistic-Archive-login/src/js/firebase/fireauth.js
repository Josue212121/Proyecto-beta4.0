import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

              //register//
const emailRegister = document.getElementById("email-register");
const passwordRegister = document.getElementById("password-register");
const buttonRegister = document.getElementById("button-register");
            //login//
 const emailLogin = document.getElementById("email-login"); 
 const passwordLogin = document.getElementById("password-login");   
 const buttonLogin = document.getElementById("button-login");      


const auth = getAuth();

buttonRegister.addEventListener("click", (e)=>{
    e.preventDefault();
    createUserWithEmailAndPassword(auth, emailRegister.value, passwordRegister.value)
    .then((userCredential) => {
        const user = userCredential.user
        console.log(user)
    })
    .catch((error) => {
        console.error(error.message);
            // Mostrar alerta de error de registro
            alert("Error al registrar: " + error.message);
            alert("Error al registrar: " + error.code);
    });
})

//login//
buttonLogin.addEventListener("click", (e)=>{
    e.preventDefault();
    signInWithEmailAndPassword(auth, emailLogin.value, passwordLogin.value)
    .then((userCredential)  => {
        const user = userCredential.user
        console.log(user);

        

        // Redirigir al usuario a la página de entrada después del inicio de sesión exitoso
        window.location.href = "http://127.0.0.1:5500/Ventana-de-entrada/";

    })
    .catch((error) => {
        console.error(error.message);
        // Mostrar alerta de error de inicio de sesión
        alert("Error al iniciar sesión: " + error.message);
        alert("Error al iniciar sesión: " + error.code);
    });

})



  
    // authenticate(email, password) {
    //   signInWithEmailAndPassword(auth, email, password)
    //     .then((_) => {
    //       window.location.href = "index.html";
    //       // Mostrar alerta de inicio de sesión exitoso
    //       alert("Has iniciado sesión correctamente. Serás redirigido a la página principal.");
    //     })
    //     .catch((error) => {
    //       console.error(error.message);
    //               // Mostrar alerta de error de inicio de sesión
    //               alert("Error al iniciar sesión: " + error.message);
    //     });
    // }
  
    // signOut() {
    //   signOut(auth)
    //     .then((_) => {
    //       window.location.href = "index.html";
    //     })
    //     .catch((error) => {
    //       console.error(error.message);
    //     });
    // }
//   }