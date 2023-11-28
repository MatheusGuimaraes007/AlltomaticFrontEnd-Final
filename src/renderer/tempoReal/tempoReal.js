import ShowDatas from '../../classes/showDatas.js';

const nomeUser = document.querySelector('.nomeUser');
const idUser = document.querySelector('.idUser');

const user = localStorage.getItem('usuario');
const password = localStorage.getItem('senha');

const dataUser = new ShowDatas(user, password);
dataUser.showNameId(nomeUser, idUser);

const sairApp = document.querySelector('.sairApp');

const logOut = (e) => {
  e.preventDefault();
  window.location.href = '../index/index.html';
};

sairApp.addEventListener('click', logOut);
