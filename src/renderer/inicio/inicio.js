import UserLogado from '../../classes/UserLogado.js';

const usuario = localStorage.getItem('usuario');
const senha = localStorage.getItem('senha');
const nomeUser = document.querySelector('.nomeUser');

const userDatas = new UserLogado(usuario, senha);

await userDatas.user();

nomeUser.innerHTML = userDatas.nome + ' ' + userDatas.sobrenome;
