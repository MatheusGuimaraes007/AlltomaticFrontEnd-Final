export default class UserLogin {
  constructor(usuario, senha, loginError) {
    this.usuario = usuario;
    this.senha = senha;
    this.loginError = loginError;
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
      this.loginError.style.display = 'none';
      if (json.msg) {
        this.loginError.style.display = 'initial';
      } else {
        localStorage.setItem('usuario', this.usuario);
        localStorage.setItem('senha', this.senha);
        window.location = '../configConta/configConta.html';
      }
    } catch (err) {
      localStorage.clear();
      this.loginError.style.display = 'initial';
      throw new Error(err);
    }
  }
}
