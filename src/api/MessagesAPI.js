import data from './TestData';

// Class
export default class API {
  constructor({url}) {
    this.url = url;
  }

  getMessages() {
    return new Promise((res, rej) => setTimeout(res, 1500, data));
  }

  updateReadStatus(id, wasRead) {
    console.log('Read status updated for id: ' + id + '. was Read: ' + wasRead);
  }
}
