import GetDataSensores from './GetDataSensores.js';

export default class ShowDataSensores extends GetDataSensores {
  constructor(date, sensor, position, nameDataSensor) {
    super(date, sensor);
    this.sensor = sensor;
    this.position = position;
    this.nameDataSensor = nameDataSensor;
    this.createTable();
  }

  createTable() {
    const table = document.createElement('table');
    const headerRow = document.createElement('tr');
    headerRow.className = 'primeiraLinha';
    headerRow.innerHTML = `
      <td>Nome</td>
      <td>Data</td>
      <td>Hora</td>
      <td>${this.nameDataSensor}</td>
    `;
    table.appendChild(headerRow);

    // Adicionar a tabela ao elemento de posição
    this.position.appendChild(table);

    // Atribuir a tabela à propriedade para referência posterior
    this.table = table;
  }

  createTableRow(nome, data, hora, dado) {
    // Criar uma nova linha para cada item nos dados
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
      <td>${nome}</td>
      <td>${data}</td>
      <td>${hora}</td>
      <td>${dado}</td>
    `;

    // Adicionar a nova linha à tabela existente
    this.table.appendChild(newRow);
  }

  async showDatas() {
    await this.getData();
    // Utilizando forEach para percorrer os dados
    this.dados.forEach((item) => {
      if (this.sensor === 'UMIDADE') {
        return this.createTableRow(
          'Sensor de Umidade',
          item.date,
          item.hora,
          item.dataUmidade,
        );
      } else if (this.sensor === 'TEMPERATURA') {
        return this.createTableRow(
          'Sensor de Temperatura',
          item.date,
          item.hora,
          item.dataUmidade,
        );
      }
    });
  }
}
