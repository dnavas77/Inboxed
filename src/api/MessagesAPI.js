import data from './TestData';

// Class
export default class API {
  constructor({url}) {
    this.url = url;
  }

  getMessages() {
    return new Promise((res, rej) => setTimeout(res, 2000, data));
  }
}
