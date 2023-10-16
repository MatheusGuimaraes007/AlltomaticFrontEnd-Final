import GetUsers from '../../classes/GetUsers.js';

const btnEntrar = document.querySelector('#entrar');
const login = document.querySelector('#login');
const password = document.querySelector('#password');

const handleEntrar = (e) => {
  const users = new GetUsers(login.value, password.value);
  e.preventDefault();
  users.getUsers();
};

btnEntrar.addEventListener('click', handleEntrar);
