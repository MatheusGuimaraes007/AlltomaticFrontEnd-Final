export default class GetDataSensores {
  constructor(date, sensor) {
    this.date = date;
    this.sensor = sensor;
    this.url = `http://186.235.2.225/sensor/data/day/${this.sensor}`;
    this.dados = '';
  }

  async getData() {
    try {
      const response = await fetch(this.url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          date: this.date,
        }),
      });
      const json = await response.json();
      this.dados = json;
      console.log(json);
    } catch (err) {}
  }
}
