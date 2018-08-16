import data from './TestData';

// Class
export default class API {
  constructor({url}) {
    this.url = url;
  }

  getMessages() {
    return new Promise((res, rej) => {
      data.items = this.sortByDate(data.items);
      setTimeout(res, 1500, data);
    });
  }

  markRead(id) {
    return this.updateReadStatus(id, false);
  }

  markUnread(id) {
    return this.updateReadStatus(id, true);
  }

  updateReadStatus(id, isNew) {
    return new Promise((res, rej) => {
      console.log('Read status updated for id: ' + id + '. Is New: ' + isNew);
      res();
    });
  }

  sortByDate(arr) {
    arr.sort((a, b) => {
      const dateA = new Date(a.created_at);
      const dateB = new Date(b.created_at);

      return dateA - dateB;
    });
    return arr;
  }
}
