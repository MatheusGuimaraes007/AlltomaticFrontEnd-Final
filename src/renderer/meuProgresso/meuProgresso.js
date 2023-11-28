import ShowDatas from '../../classes/showDatas.js';
import GetDataSensores from '../../classes/GetDataSensores.js';

const nomeUser = document.querySelector('.nomeUser');
const idUser = document.querySelector('.idUser');

const user = localStorage.getItem('usuario');
const password = localStorage.getItem('senha');

const dataUser = new ShowDatas(user, password);
dataUser.showNameId(nomeUser, idUser);

const sairApp = document.querySelector('.sairApp');
const logOut = (e) => {
  e.preventDefault();
  window.location.href = '../index/index.html';
};
sairApp.addEventListener('click', logOut);

const mostrarValores = document.querySelector('#mostrarValores');
const dateValues = document.querySelector('#dateValues');

const dateLocalStorage = localStorage.getItem('date');
dateValues.value = dateLocalStorage;

const mostrarGrafico = async (e) => {
  e.preventDefault();
  let maxTemp = 0;
  let minTemp = 0;
  let maxUmid = 0;
  let minUmid = 0;
  let maxLuz = 0;
  let minLuz = 0;

  const getDataSensorTemp = new GetDataSensores(
    dateValues.value,
    'temperatura',
  );
  await getDataSensorTemp.getData();
  console.log(getDataSensorTemp.dados);

  if (getDataSensorTemp.dados.length > 0) {
    const resultados = getDataSensorTemp.dados.reduce(
      (acc, event) => {
        return {
          maiorTemp:
            event.dataTemperatura > acc.maiorTemp
              ? event.dataTemperatura
              : acc.maiorTemp,
          menorTemp:
            event.dataTemperatura < acc.menorTemp
              ? event.dataTemperatura
              : acc.menorTemp,
        };
      },
      {
        maiorTemp: getDataSensorTemp.dados[0].dataTemperatura,
        menorTemp: getDataSensorTemp.dados[0].dataTemperatura,
      },
    );
    maxTemp = +resultados.maiorTemp;
    minTemp = +resultados.menorTemp;
  }

  const getDataSensorUmid = new GetDataSensores(dateValues.value, 'umidade');
  await getDataSensorUmid.getData();
  console.log(getDataSensorUmid.dados);

  if (getDataSensorUmid.dados.length > 0) {
    const resultados = getDataSensorUmid.dados.reduce(
      (acc, event) => {
        return {
          maiorUmid:
            event.dataUmidade > acc.maiorUmid
              ? event.dataUmidade
              : acc.maiorUmid,
          menorUmid:
            event.dataUmidade < acc.menorUmid
              ? event.dataUmidade
              : acc.menorUmid,
        };
      },
      {
        maiorUmid: getDataSensorUmid.dados[0].dataUmidade,
        menorUmid: getDataSensorUmid.dados[0].dataUmidade,
      },
    );
    maxUmid = resultados.maiorUmid.replace('%', '');
    minUmid = resultados.menorUmid.replace('%', '');
  }

  const getMaxLuz = new GetDataSensores(dateValues.value, 'luminosidade');
  await getMaxLuz.getData();
  if (getMaxLuz.dados.length > 0) {
    const maiorValorLuz = getMaxLuz.dados.reduce((max, event) => {
      return event.dataLuminosidade > max ? event.dataLuminosidade : max;
    }, getMaxLuz.dados[0].dataLuminosidade);
    if (maiorValorLuz === 'Ligado') {
      maxLuz = 100;
      minLuz = 0;
    } else {
      maxLuz = 0;
      minLuz = 0;
    }
  }
  console.log(maxLuz, maxTemp, maxUmid);
  const ctx = document.getElementById('grafico1');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Temperatura', 'Umidade', 'Luz'],
      datasets: [
        {
          label: 'Maior Valor',
          data: [maxTemp, maxUmid, maxLuz],
          borderWidth: 1,
          backgroundColor: 'blue',
        },
        {
          label: 'Menor Valor',
          data: [minTemp, minUmid, minLuz],
          borderWidth: 1,
          backgroundColor: 'red',
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          labels: {
            font: {
              size: 15,
            },
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
};

mostrarGrafico();
mostrarValores.addEventListener('click', mostrarGrafico);
