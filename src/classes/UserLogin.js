export default class UserLogin {
  constructor(usuario, senha) {
    this.usuario = usuario;
    this.senha = senha;
    this.url = 'http://186.235.2.225/auth/User';
    this.nome = '';
    this.sobrenome = '';
    this.dataNascimento = '';
    this.enderecoCep = '';
    this.enderecoLogradouro = '';
    this.enderecoBairro = '';
    this.enderecoNum = '';
    this.enderecoComplemento = '';
    this.cpf = '';
  }

  async login() {
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
        alert('Usuário não encontrado');
      } else {
        localStorage.setItem('usuario', this.usuario);
        localStorage.setItem('senha', this.senha);
        window.location = '../inicio/inicio.html';
      }
    } catch (err) {
      throw new Error(err);
    }
  }
}
