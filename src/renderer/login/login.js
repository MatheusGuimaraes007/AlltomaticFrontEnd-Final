import newLogin from '../../classes/userLoginInstance.js';

const btnEntrar = document.querySelector('#entrar');
const login = document.querySelector('#login');
const password = document.querySelector('#password');

const handleEntrar = async (e) => {
  localStorage.clear();
  e.preventDefault();
  newLogin.usuario = login.value;
  newLogin.senha = password.value;
  await newLogin.login();
};

btnEntrar.addEventListener('click', handleEntrar);
