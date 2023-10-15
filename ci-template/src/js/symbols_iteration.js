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
  }

  [Symbol.iterator]() {
    const properties = Object.keys(this.arrTeams);
    let count = 0;
    return {
      next: () => {
        if (count < properties.length) {
          const key = properties[count];
          const result = { done: false, value: this.arrTeams[key] };
          count++;
          return result;
        }
        return { done: true };
      },
    };
  }
}

const objTeam = new Team();

const iterator = objTeam[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
