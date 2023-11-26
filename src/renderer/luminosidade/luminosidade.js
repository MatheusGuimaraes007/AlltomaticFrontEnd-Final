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
  'luminosidade'.toUpperCase(),
  position,
  'Luz',
);
showDate.showDatas();
dateIrrigacao.value = dateLocalStorage;

const showDatasIrrigacao = () => {
  const localStorageDate = localStorage.setItem('date', dateIrrigacao.value);
  const showDate = new ShowDataSensores(
    dateIrrigacao.value,
    'luminosidade'.toUpperCase(),
    position,
    'Luz',
  );
  showDate.clearTable();
  showDate.showDatas();
};

btnMostrarIrrigacao.addEventListener('click', showDatasIrrigacao);
