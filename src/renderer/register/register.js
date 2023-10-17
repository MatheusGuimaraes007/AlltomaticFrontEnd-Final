import GetCep from '../../classes/GetCep.js';
import estados from '../../classes/estados.js';

const inCep = document.querySelector('#cep');
const btnBuscarCep = document.querySelector('#btnBuscarCep');
const logradouro = document.querySelector('#logradouro');
const bairro = document.querySelector('#bairro');
const cidade = document.querySelector('#cidade');

const addEstados = () => {
  const labelEStados = document.querySelector('#estadosLabel');
  const select = document.createElement('select');
  select.classList.add('select-estados');
  const showEstados = estados().forEach((value) => {
    select.innerHTML += `
    <option value="${value.value}" class="estadoAtual">${value.label} - ${value.value}</option>
    `;
  });
  labelEStados.appendChild(select);
};
addEstados();
const select = document.querySelector('.select-estados');

const getCep = async (e) => {
  e.preventDefault();
  const showCep = new GetCep(inCep.value);
  await showCep.fetchCep();
  logradouro.value = showCep.logradouro;
  bairro.value = showCep.bairro;
  cidade.value = showCep.localidade;
  select.value = showCep.uf;
};

btnBuscarCep.addEventListener('click', getCep);
