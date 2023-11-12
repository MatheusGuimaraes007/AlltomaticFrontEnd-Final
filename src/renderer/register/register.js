import BuscarCep from '../../classes/BuscarCep.js';
import UserRegister from '../../classes/UserRegister.js';

BuscarCep();

const validarCPF = (cpf) => {
  cpf = cpf.replace(/\D/g, '');

  if (cpf.length !== 11) {
    return false;
  }

  return true;
};

const btnCadastrar = document.querySelector('#btn-cadastro');
const primeiroNome = document.querySelector('#firstName');
const segundoNome = document.querySelector('#secondName');
const email = document.querySelector('#email');
const senha = document.querySelector('#senha');
const confirmSenha = document.querySelector('#confirmPassword');
const cpf = document.querySelector('#cpf');
const dataNascimento = document.querySelector('#date');
const numTelefone = document.querySelector('#numberPhone');
const cep = document.querySelector('#cep');
const logradouro = document.querySelector('#logradouro');
const numeroCasa = document.querySelector('#numberHouse');
const complemento = document.querySelector('#complemento');
const bairro = document.querySelector('#bairro');
const cidade = document.querySelector('#cidade');
const estado = document.querySelector('.select-estados');
const containerAlert = document.querySelector('.ctrl');
const msgNotification = document.querySelector('.nortification');

const enviarUser = async (e) => {
  e.preventDefault();
  if (primeiroNome.value === '') {
    containerAlert.style.diplay = 'initial';
    msgNotification.innerHTML = 'Insira seu primeiro nome';
  } else if (segundoNome.value === '') {
    containerAlert.style.diplay = 'initial';
    msgNotification.innerHTML = 'Insira seu segundo nome';
  } else if (email.value === '') {
    containerAlert.style.display = 'initial';
    msgNotification.innerHTML = 'Insira um email';
  } else if (senha.value === '') {
    containerAlert.style.display = 'initial';
    msgNotification.innerHTML = 'Crie uma senha';
  } else if (confirmSenha.value === '') {
    containerAlert.style.display = 'initial';
    msgNotification.innerHTML = 'Confirme sua senha';
  } else if (cpf.value === '') {
    containerAlert.style.display = 'initial';
    msgNotification.innerHTML = 'Insira seu CPF';
  } else if (!validarCPF(cpf.value)) {
    containerAlert.style.display = 'initial';
    msgNotification.innerHTML = 'CPF Inválido';
  } else if (dataNascimento.value === '') {
    containerAlert.style.display = 'initial';
    msgNotification.innerHTML = 'Insira sua data de nascimento';
  } else if (numTelefone.value === '') {
    containerAlert.style.display = 'initial';
    msgNotification.innerHTML = 'Insira seu número de celular';
  } else if (cep.value === '') {
    containerAlert.style.display = 'initial';
    msgNotification.innerHTML = 'Insira um CEP válido';
  } else if (logradouro.value === '' || logradouro.value === undefined) {
    containerAlert.style.display = 'initial';
    msgNotification.innerHTML = 'Insira uma rua válida';
  } else if (numeroCasa.value === '') {
    containerAlert.style.display = 'initial';
    msgNotification.innerHTML = 'Insira o número da sua redidência';
  } else if (bairro.value === '' || bairro.value === undefined) {
    containerAlert.style.display = 'initial';
    msgNotification.innerHTML = 'Insira um bairro válido';
  } else if (cidade.value === '' || cidade.value === undefined) {
    containerAlert.style.display = 'initial';
    msgNotification.innerHTML = 'Insira uma cidade válida';
  } else if (estado.value === '') {
    containerAlert.style.display = 'initial';
    msgNotification.innerHTML = 'Selecione um estado';
  } else {
    const senhaIncorreta = document.querySelector('.senhaIncorreta');
    if (senha.value !== confirmSenha.value) {
      senhaIncorreta.style.display = 'initial';
    } else {
      senhaIncorreta.style.display = 'none';
      containerAlert.style.diplay = 'none';
      const post = new UserRegister(
        primeiroNome.value,
        segundoNome.value,
        dataNascimento.value,
        cep.value,
        logradouro.value,
        bairro.value,
        parseInt(numeroCasa.value),
        complemento.value,
        cpf.value,
        email.value,
        senha.value,
      );
      post.postUser();
    }
  }
};

btnCadastrar.addEventListener('click', enviarUser);
