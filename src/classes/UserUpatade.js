export default class UserUpdate {
  constructor(id, column, newData) {
    this.id = id;
    this.column = column;
    this.newData = newData;
    this.url = 'http://186.235.2.225/Users/';
  }
  //Preciso dar um get em todos os usuários, para pegar as informações deles. e depois dar o update
  async update() {
    try {
      const response = await fetch(this.url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: this.id,
          column: this.column,
          newData: this.newData,
        }),
      });
      const json = await response.json();
      console.log(json);
    } catch (err) {
      console.log('Error: ', err);
    }
  }
}
