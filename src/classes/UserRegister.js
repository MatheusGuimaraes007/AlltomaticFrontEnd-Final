export default class SetUsers {
  constructor(
    nome,
    sobrenome,
    dataNascimento,
    enderecoCep,
    enderecoLogradouro,
    enderecoBairro,
    enderecoNum,
    enderecoComplemento,
    cpf,
    username,
    password,
  ) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.dataNascimento = dataNascimento;
    this.enderecoCep = enderecoCep;
    this.enderecoLogradouro = enderecoLogradouro;
    this.enderecoBairro = enderecoBairro;
    this.enderecoNum = enderecoNum;
    this.enderecoComplemento = enderecoComplemento;
    this.cpf = cpf;
    this.username = username;
    this.password = password;
    this.url = 'http://186.235.2.225/Users';
  }

  async postUser() {
    const loading = document.querySelector('.container-loading');
    try {
      loading.style.display = 'flex';
      const response = await fetch('http://186.235.2.225/Users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome: this.nome,
          sobrenome: this.sobrenome,
          dataNascimento: this.dataNascimento,
          enderecoCep: this.enderecoCep,
          enderecoLogradouro: this.enderecoLogradouro,
          enderecoBairro: this.enderecoBairro,
          enderecoNum: this.enderecoNum,
          enderecoComplemento: this.enderecoComplemento,
          cpf: this.cpf,
          username: this.username,
          password: this.password,
        }),
      });
      const json = await response.json();
      if (json.Error) {
        alert('Email já cadastrado');
      } else {
        loading.style.display = 'none';
        window.location = '../registrado/registrado.html';
      }
    } catch (err) {
      loading.style.display = 'none';
      throw new Error(err);
    }
  }
}
