import data from './TestData';

// Class
export default class API {
  constructor({url}) {
    this.url = url;
  }

  getMessages() {
    return new Promise((res, rej) => setTimeout(res, 1500, data));
  }

  markRead(id) {
    return this.updateReadStatus(id, true);
  }

  markUnread(id) {
    return this.updateReadStatus(id, false);
  }

  updateReadStatus(id, wasRead) {
    return new Promise((res, rej) => {
      console.log('Read status updated for id: ' + id + '. was Read: ' + wasRead);
    });
  }
}
