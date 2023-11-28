import ShowDatas from '../../classes/showDatas.js';

const nomeUsuario = document.querySelector('.nomeUsuario');
const senha = document.querySelector('.senha');
const email = document.querySelector('.email');
const cpf = document.querySelector('.cpf');
const dataNascimento = document.querySelector('.dataNascimento');
const rua = document.querySelector('.rua');
const bairro = document.querySelector('.bairro');
const cep = document.querySelector('.cep');
const numero = document.querySelector('.numero');
const complemento = document.querySelector('.complemento');
const nomeUser = document.querySelector('.nomeUser');
const idUser = document.querySelector('.idUser');

const user = localStorage.getItem('usuario');
const password = localStorage.getItem('senha');

const dataUser = new ShowDatas(user, password);
dataUser.showNameId(nomeUser, idUser);
dataUser.showName(nomeUsuario);
dataUser.showPassword(senha);
dataUser.showEmail(email);
dataUser.showDatas('CPF', 'cpf', cpf);
dataUser.showDatas('Data de Nascimento', 'dataNascimento', dataNascimento);
dataUser.showDatas('Rua', 'enderecoLogradouro', rua);
dataUser.showDatas('Bairro', 'enderecoBairro', bairro);
dataUser.showDatas('CEP', 'enderecoCep', cep);
dataUser.showDatas('Número', 'enderecoNum', numero);
dataUser.showDatas('Complemento', 'enderecoComplemento', complemento);
dataUser.setDados();

const sairApp = document.querySelector('.sairApp');
const logOut = (e) => {
  e.preventDefault();
  window.location.href = '../index/index.html';
};
sairApp.addEventListener('click', logOut);
