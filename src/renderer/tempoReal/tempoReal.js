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

const dataAtual = document.querySelector('.data-tempoReal');
const horaAtual = document.querySelector('.horario-tempoReal');

const date = new Date();
const dia = String(date.getDate()).padStart(2, '0');
const mes = String(date.getMonth() + 1).padStart(2, '0');
const ano = date.getFullYear();
const dataFormatada = `${dia}/${mes}/${ano}`;
const horaFormatada = `${String(date.getHours()).padStart(2, '0')}:${String(
  date.getMinutes(),
).padStart(2, '0')}`;

dataAtual.innerHTML = dataFormatada;
horaAtual.innerHTML = horaFormatada;
