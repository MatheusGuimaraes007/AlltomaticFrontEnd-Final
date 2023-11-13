import ShowDatas from '../../classes/showDatas.js';
import GetDataSensores from '../../classes/GetDataSensores.js';

const nomeUser = document.querySelector('.nomeUser');
const idUser = document.querySelector('.idUser');

const user = localStorage.getItem('usuario');
const password = localStorage.getItem('senha');

const dataUser = new ShowDatas(user, password);
dataUser.showNameId(nomeUser, idUser);

const newDataSensor = new GetDataSensores('2023-11-05', 'umidade');
newDataSensor.getData();
