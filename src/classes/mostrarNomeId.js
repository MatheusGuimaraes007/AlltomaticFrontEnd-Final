import ShowDatasUser from './ShowdatasUser.js';

export default async function mostrarNomeId(nome, id) {
  const user = localStorage.getItem('usuario');
  const password = localStorage.getItem('senha');
  const dataUser = new ShowDatasUser(user, password);
  await dataUser.login();
  await dataUser.setDados();
  nome.innerHTML = `${
    dataUser.nome.charAt(0).toUpperCase() + dataUser.nome.substring(1)
  } ${
    dataUser.sobrenome.charAt(0).toUpperCase() + dataUser.sobrenome.substring(1)
  }`;
  id.innerHTML = `#${dataUser.dados.id}`;
}
