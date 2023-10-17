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
  }
}
