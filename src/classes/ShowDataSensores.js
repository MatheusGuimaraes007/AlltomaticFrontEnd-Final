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
      <td>Nome Sensor</td>
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
      const dataUTC = item.dateHourData;
      const data = new Date(dataUTC);

      const opcoesDeFormatoData = {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
        timeZone: 'America/Sao_Paulo',
      };

      const opcoesDeFormatoHora = {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false,
        timeZone: 'America/Sao_Paulo',
      };
      const formatoBrasileiroData = new Intl.DateTimeFormat(
        'pt-BR',
        opcoesDeFormatoData,
      );
      const formatoBrasileiroHora = new Intl.DateTimeFormat(
        'pt-BR',
        opcoesDeFormatoHora,
      );
      const dataFormatada = formatoBrasileiroData.format(data);
      const horaFormatada = formatoBrasileiroHora.format(data);
      if (this.sensor === 'UMIDADE') {
        return this.createTableRow(
          'Sensor de Umidade',
          dataFormatada,
          horaFormatada,
          item.dataUmidade,
        );
      } else if (this.sensor === 'TEMPERATURA') {
        return this.createTableRow(
          'Sensor de Temperatura',
          dataFormatada,
          horaFormatada,
          `${item.dataTemperatura} ºC`,
        );
      } else if (this.sensor === 'LUMINOSIDADE') {
        return this.createTableRow(
          'Luz',
          dataFormatada,
          horaFormatada,
          item.dataLuminosidade,
        );
      }
    });
  }
  clearTable() {
    while (this.position.firstChild) {
      this.position.removeChild(this.position.firstChild);
    }
    this.createTable();
  }
}
