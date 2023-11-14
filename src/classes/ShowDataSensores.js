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

    this.position.appendChild(table);

    this.table = table;
  }

  createTableRow(nome, data, hora, dado) {
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
      <td>${nome}</td>
      <td>${data}</td>
      <td>${hora}</td>
      <td>${dado}</td>
    `;

    this.table.appendChild(newRow);
  }

  async showDatas() {
    await this.getData();
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
