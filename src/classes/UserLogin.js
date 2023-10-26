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
        console.log('nao existe');
      } else {
        this.nome = json[0].nome;
        this.sobrenome = json[0].sobrenome;
        this.dataNascimento = json[0].dataNascimento;
        this.enderecoCep = json[0].enderecoCep;
        this.enderecoLogradouro = json[0].enderecoLogradouro;
        this.enderecoBairro = json[0].enderecoBairro;
        this.enderecoNum = json[0].enderecoNum;
        this.enderecoComplemento = json[0].enderecoComplemento;
        this.cpf = json[0].cpf;
      }
      console.log(json);
      // window.location = '../inicio/inicio.html';
    } catch (err) {
      console.log('nao existe');
    }
  }
}
