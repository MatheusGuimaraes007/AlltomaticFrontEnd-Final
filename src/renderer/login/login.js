import newLogin from '../../classes/userLoginInstance.js';

const btnEntrar = document.querySelector('#entrar');
const login = document.querySelector('#login');
const password = document.querySelector('#password');
const loginError = document.querySelector('.invalidLogin');

const handleEntrar = async (e) => {
  e.preventDefault();
  newLogin.usuario = login.value;
  newLogin.senha = password.value;
  newLogin.loginError = loginError;
  await newLogin.login();
};

btnEntrar.addEventListener('click', handleEntrar);
