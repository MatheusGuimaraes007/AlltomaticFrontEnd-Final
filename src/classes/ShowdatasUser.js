import UserLogin from './UserLogin.js';

export default class ShowDatasUser extends UserLogin {
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
    await this.login();
    this.nome = this.dados.nome;
    this.sobrenome = this.dados.sobrenome;
    this.dataNascimento = this.dados.dataNascimento;
    this.enderecoCep = this.dados.enderecoCep;
    this.enderecoLogradouro = this.dados.enderecoLogradouro;
    this.enderecoBairro = this.dados.enderecoBairro;
    this.enderecoNum = this.dados.enderecoNum;
    this.enderecoComplemento = this.dados.enderecoComplemento;
    this.cpf = this.dados.cpf;
  }

  async showName(data) {
    await this.setDados();
    data.innerHTML = `Nome: ${this.dados.nome} ${this.dados.sobrenome}`;
  }
  async showPassword(data) {
    await this.setDados();
    data.innerHTML = `Senha: ********`;
  }

  async showDatas(dataName, dataNameAPI, data) {
    await this.setDados();
    if (dataNameAPI === 'dataNascimento') {
      data.innerHTML = `${dataName}: ${this.convertDate(this.dataNascimento)}`;
    } else {
      data.innerHTML = `${dataName}: ${this.dados[dataNameAPI]}`;
    }
  }
}
