const char = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10,
};
const char2 = {
  name: 'Не лучник',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10,
};

class Team {
  constructor() {
    this.arrTeams = [char, char2];
    this.currentIndex = 0;
  }

  * [Symbol.iterator]() {
  for (let item of this.arrTeams) {
    yield item;
}
  }
}


const objTeam = new Team();

const iterator = objTeam[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
