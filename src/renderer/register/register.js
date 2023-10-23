import BuscarCep from '../../classes/BuscarCep.js';
import UserRegister from '../../classes/UserRegister.js';
BuscarCep();

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

const enviarUser = async (e) => {
  e.preventDefault();
  if (primeiroNome.value === '') {
    alert('Preencha o campo Nome!');
  } else if (segundoNome.value === '') {
    alert('Preencha o campo Sobrenome!');
  } else if (email.value === '') {
    alert('Preencha o campo email');
  } else if (senha.value === '') {
    alert('Insira uma senha');
  } else if (confirmSenha.value === '') {
    alert('Confirme sua senha');
  } else if (cpf.value === '') {
    alert('Insira um CPF');
  } else if (dataNascimento.value === '') {
    alert('Insira uma data de nascimento');
  } else if (numTelefone.value === '') {
    alert('Insira um número de celular');
  } else if (cep.value === '') {
    alert('Insira um cep válido');
  } else if (logradouro.value === '' || logradouro.value === undefined) {
    alert('Insira uma Rua válida');
  } else if (numeroCasa.value === '') {
    alert('Insira o Número da sua residência');
  } else if (bairro.value === '' || bairro.value === undefined) {
    alert('Insira um bairro válido');
  } else if (cidade.value === '' || cidade.value === undefined) {
    alert('Insira  uma Cidade válida');
  } else if (estado.value === '') {
    alert('Insira um estado válido');
  } else {
    const senhaIncorreta = document.querySelector('.senhaIncorreta');
    if (senha.value !== confirmSenha.value) {
      senhaIncorreta.style.display = 'initial';
    } else {
      senhaIncorreta.style.display = 'none';
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
