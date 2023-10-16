import GetCep from '../../classes/GetCep.js';
import estados from '../../classes/estados.js';

const inCep = document.querySelector('#cep');
const btnBuscarCep = document.querySelector('#btnBuscarCep');
const logradouro = document.querySelector('#logradouro');
const bairro = document.querySelector('#bairro');
const cidade = document.querySelector('#cidade');
const estado = document.querySelector('#estado');

const addEstados = () => {
  const labelEStados = document.querySelector('#estadosLabel');
  const select = document.createElement('select');
  const showEstados = estados().forEach((value) => {
    select.innerHTML += `
    <option value="${value.value}" id="estado">${value.label} - ${value.value}</option>
    `;
  });
  labelEStados.appendChild(select);
};
addEstados();

const getCep = async (e) => {
  e.preventDefault();
  const showCep = new GetCep(inCep.value);
  await showCep.fetchCep();
  logradouro.value = showCep.logradouro;
  bairro.value = showCep.bairro;
  cidade.value = showCep.localidade;
  estado.value = showCep.uf;
};

btnBuscarCep.addEventListener('click', getCep);
