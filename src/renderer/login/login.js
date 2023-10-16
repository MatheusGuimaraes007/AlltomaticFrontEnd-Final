import GetUsers from '../../classes/GetUsers.js';

const btnEntrar = document.querySelector('#entrar');
const login = document.querySelector('#login');
const password = document.querySelector('#password');

const users = new GetUsers(login.value, password.value);

const handleEntrar = async (e) => {
  e.preventDefault();
  await users.getUsers();
  users.setUsers();
};

if (btnEntrar) {
  btnEntrar.addEventListener('click', handleEntrar);
}
