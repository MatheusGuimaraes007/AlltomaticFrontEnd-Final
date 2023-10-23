export default class GetUsers {
  constructor(login, password) {
    this.login = login;
    this.password = password;
    this.loginFetch;
    this.passwordFetch;
  }

  async getUsers() {
    const response = await fetch('http://186.235.2.225/Users');
    const json = await response.json();
    console.log(json);
    const api = () => {
      json.filter((item, index) => {
        if (item.username === this.login && item.password === this.password) {
          return index;
        }
      });
      api();
      console.log(api());
    };
    // const api = () =>
    //   json.filter((item) => {
    //     if (item.nome === this.login && item.password === this.password) {
    //       // window.location.href = '../inicio/inicio.html';
    //       console.log(item);
    //     }
    //   });
    // api();
    // this.loginFetch = api()[0].nome;
    // this.passwordFetch = api()[0].password;
  }
}

//Não estou conseguindo refazer o login. e preciso terminar o cadastro de usuários
