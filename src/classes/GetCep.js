export default class GetCep {
  constructor(cep) {
    this.cep = cep;
    this.logradouro;
    this.bairro;
    this.localidade;
    this.uf;
  }

  async fetchCep() {
    try {
      const response = await fetch(
        `https://viacep.com.br/ws/${this.cep}/json/`,
      );
      const json = await response.json();
      this.cep = json.cep;
      this.logradouro = json.logradouro;
      this.bairro = json.bairro;
      this.localidade = json.localidade;
      this.uf = json.uf;
    } catch (error) {
      alert('CEP não encontrado');
      throw new Error(error);
    }
  }

  verificar() {
    console.log('ok');
  }
}
