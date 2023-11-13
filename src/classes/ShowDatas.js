import UserLogado from './UserLogado.js';

export default class ShowDatas extends UserLogado {
  constructor(usuario, senha) {
    super(usuario, senha);
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
  convertDate(dataNascimento) {
    const LocalDate = new Date(dataNascimento);
    const formatDate = LocalDate.toLocaleDateString('pt-BR', {
      timeZone: 'America/Sao_Paulo',
    });
    return formatDate;
  }
  async setDados() {
    await this.user();
    this.nome = this.dados.nome;
    this.sobrenome = this.dados.sobrenome;
    this.dataNascimento = this.dados.dataNascimento;
    this.enderecoCep = this.dados.enderecoCep;
    this.enderecoLogradouro = this.dados.enderecoLogradouro;
    this.enderecoBairro = this.dados.enderecoBairro;
    this.enderecoNum = this.dados.enderecoNum;
    this.enderecoComplemento = this.dados.enderecoComplemento;
    this.cpf = this.dados.cpf;
    this.id = this.dados.id;
  }
  async showName(data) {
    await this.setDados();
    data.innerHTML = `Nome: ${this.nome} ${this.sobrenome}`;
  }
  async showPassword(data) {
    await this.setDados();
    data.innerHTML = `Senha: ********`;
  }
  async showEmail(data) {
    await this.setDados();
    data.innerHTML = `Email: ${this.usuario}`;
  }
  async showDatas(dataName, dataNameAPI, data) {
    await this.setDados();
    if (dataNameAPI === 'dataNascimento') {
      data.innerHTML = `${dataName}: ${this.convertDate(this.dataNascimento)}`;
    } else {
      data.innerHTML = `${dataName}: ${this[dataNameAPI]}`;
    }
  }

  async showNameId(dataName, dataId) {
    await this.setDados();
    dataName.innerHTML = `${this.nome} ${this.sobrenome}`;
    dataId.innerHTML = `#${this.id}`;
  }
}
