export default class UserLogin {
  constructor(usuario, senha) {
    this.usuario = usuario;
    this.senha = senha;
    this.url = 'http://186.235.2.225/auth/User';
    this.dados;
  }

  async login() {
    localStorage.clear();
    try {
      const response = await fetch(this.url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: this.usuario,
          password: this.senha,
        }),
      });
      const json = await response.json();
      if (json.msg) {
        confirm('Usuário não encontrado');
      } else {
        localStorage.setItem('usuario', this.usuario);
        localStorage.setItem('senha', this.senha);
        window.location = '../configConta/configConta.html';
        // this.dados = json[0];
      }
    } catch (err) {
      localStorage.clear();
      throw new Error(err);
    }
  }
}
