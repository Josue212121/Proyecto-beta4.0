const loginForm = document.querySelector('.wrapper-login');
const registerForm = document.querySelector('.wrapper-register');

const loginLink = document.querySelector('.login-link');

const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click', () => {
     registerForm.style = 'display: block';
    loginForm.style = 'display: none';
   
});


loginLink.addEventListener('click', () => {
     registerForm.style = 'display: none';
    loginForm.style = 'display: block';
   
});



