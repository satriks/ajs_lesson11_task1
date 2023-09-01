import Char from './Character';

export default class Team {
  constructor() {
    this[0] = new Char('Лучник', 'Bowerman');
    this[1] = new Char('Лучник', 'Swordsman');
    this[2] = new Char('Лучник', 'Magician');
    this[3] = new Char('Лучник', 'Daemon');
    this[4] = new Char('Лучник', 'Zombie');
    this.length = 5;
    this[Symbol.iterator] = function () {
      const len = this.length;
      const hero = this;
      let current = -1;
      return {
        next() {
          if (current < len) {
            current += 1;
            return ({ value: hero[current], done: false });
          }

          return ({ value: undefined, done: true });
        },
      };
    };
  }
}

// const data = new Team()
// console.log(data);
// console.log(...data);
// for (let j of data){
//     console.log(j);
// }
