import { data } from './api/TestData';

export default class API {
  constructor({url}) {
    this.url = url;
  }

  getMessages() {
    return data;
  }
}
