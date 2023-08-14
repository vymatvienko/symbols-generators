import Character from './Character';

class Team {
  constructor(...characters) {
    this.characters = characters;
  }

  * [Symbol.iterator]() {
    let index = 0;
    while (index < this.characters.length) {
      yield this.characters[index];
      index += 1;
    }
  }
}

const bowman = new Character('Лучник', 'Bowman', 50, 1, 4, 10);
const daemon = new Character('Демон', 'Daemon', 100, 1, 30, 30);

const team = new Team(bowman, daemon);
console.log(...team);
