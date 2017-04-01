import phrases from './ru'

export default class {
  constructor(name) {
    this.name = name;
  }
  
  hello() {
    console.log(`${phrases.hello} ${this.name}`);
  }
}
