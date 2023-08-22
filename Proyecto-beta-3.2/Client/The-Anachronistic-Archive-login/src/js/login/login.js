// Espera a que se carguen todos los elementos HTML en la página
/*document.addEventListener("DOMContentLoaded", () => {
    // Escucha el evento submit en el formulario de inicio de sesión
    document.getElementById("login-form").addEventListener("submit", (event) => {
      event.preventDefault();
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
  
      const account = new ManageAccount();
      account.authenticate(email, password)
        .catch((error) => {
          console.log(error.message);
        });
    });
  
    console.log('Login form initialized.');
  }); */