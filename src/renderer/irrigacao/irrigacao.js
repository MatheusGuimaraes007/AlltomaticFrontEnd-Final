import ShowDatas from '../../classes/showDatas.js';
import GetDataSensores from '../../classes/GetDataSensores.js';
import ShowDataSensores from '../../classes/ShowDataSensores.js';

const nomeUser = document.querySelector('.nomeUser');
const idUser = document.querySelector('.idUser');

const user = localStorage.getItem('usuario');
const password = localStorage.getItem('senha');

const dataUser = new ShowDatas(user, password);
dataUser.showNameId(nomeUser, idUser);

const position = document.querySelector('.table');
const showDate = new ShowDataSensores(
  '2023-11-03',
  'umidade'.toUpperCase(),
  position,
  'Umidade',
);
showDate.showDatas();
