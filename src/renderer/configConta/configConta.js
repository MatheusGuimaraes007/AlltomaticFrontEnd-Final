import mostrarNomeId from '../../classes/mostrarNomeId.js';
import ShowDatasUser from '../../classes/ShowdatasUser.js';

const nomeUser = document.querySelector('.nomeUser');
const idUser = document.querySelector('.idUser');
mostrarNomeId(nomeUser, idUser);

const abaAlterar = document.querySelector('.aba-alterar');
const alterarEndereco = document.querySelector('.alterar-endereco');
const alterarDados = document.querySelector('.alterar-dados');
const nomeUsuario = document.querySelector('.nomeUsuario');
const alterNome = document.querySelector('.alt-name');
const senha = document.querySelector('.senha');
const email = document.querySelector('.email');
const cpf = document.querySelector('.cpf');
const dataNascimento = document.querySelector('.dataNascimento');
const rua = document.querySelector('.rua');
const bairro = document.querySelector('.bairro');
const cep = document.querySelector('.cep');
const numero = document.querySelector('.numero');
const complemento = document.querySelector('.complemento');

// abaAlterar.style.display = 'block !important';
abaAlterar.style.display = 'none';
alterarEndereco.style.display = 'none';
alterarDados.style.display = 'none';

const user = localStorage.getItem('usuario');
const password = localStorage.getItem('senha');
const dataUser = new ShowDatasUser(user, password);

const mostrarDados = async () => {
  dataUser.showName(nomeUsuario);
  dataUser.showPassword(senha);
  dataUser.showDatas('Email', 'username', email);
  dataUser.showDatas('CPF', 'cpf', cpf);
  dataUser.showDatas('Data de Nascimento', 'dataNascimento', dataNascimento);
  dataUser.showDatas('Rua', 'enderecoLogradouro', rua);
  dataUser.showDatas('Bairro', 'enderecoBairro', bairro);
  dataUser.showDatas('CEP', 'enderecoCep', cep);
  dataUser.showDatas('Número', 'enderecoNum', numero);
  dataUser.showDatas('Complemento', 'enderecoComplemento', complemento);
  console.log(dataUser);
};

mostrarDados();
