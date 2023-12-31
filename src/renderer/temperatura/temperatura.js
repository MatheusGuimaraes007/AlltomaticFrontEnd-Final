import ShowDatas from '../../classes/showDatas.js';
import ShowDataSensores from '../../classes/ShowDataSensores.js';

const nomeUser = document.querySelector('.nomeUser');
const idUser = document.querySelector('.idUser');

const user = localStorage.getItem('usuario');
const password = localStorage.getItem('senha');

const dataUser = new ShowDatas(user, password);
dataUser.showNameId(nomeUser, idUser);

const dateIrrigacao = document.querySelector('#dateIrrigacao');
const btnMostrarIrrigacao = document.querySelector('#mostrarIrrigacao');
const position = document.querySelector('.table');

const dateLocalStorage = localStorage.getItem('date');
const showDate = new ShowDataSensores(
  dateLocalStorage,
  'temperatura'.toUpperCase(),
  position,
  'Temperatura',
);
showDate.showDatas();
dateIrrigacao.value = dateLocalStorage;

const showDatasIrrigacao = () => {
  const localStorageDate = localStorage.setItem('date', dateIrrigacao.value);
  const showDate = new ShowDataSensores(
    dateIrrigacao.value,
    'temperatura'.toUpperCase(),
    position,
    'Temperatura',
  );
  showDate.clearTable();
  showDate.showDatas();
};

btnMostrarIrrigacao.addEventListener('click', showDatasIrrigacao);

const sairApp = document.querySelector('.sairApp');
const logOut = (e) => {
  e.preventDefault();
  window.location.href = '../index/index.html';
};
sairApp.addEventListener('click', logOut);
