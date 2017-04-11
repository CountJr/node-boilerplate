import Db from './db';

export default class {
  constructor(name) {
    this.name = name;
    this.db = new Db();
  }
  
  hello() {
    console.log(`${this.db.getPhrase('hello')} ${this.name}`);
  }
}
