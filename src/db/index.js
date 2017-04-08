import phrases from './ru';

export default class {
  constructor() {
    //
  }
  
  getPhrase = (name) => {
    if (!phrases[name]) {
      throw new Error(`нет такой фразы ${name}`);
    }
    return phrases[name];
  };
}
