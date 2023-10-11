/* eslint-disable comma-spacing */
import Character from "./Character";


export default class Magician extends Character {
  constructor(name, type = 'Magician') {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }
}


function positiveSum(arr) {
  const res = arr.reduce((current,item) => {
    if (item > 0) {
      console.log(item);
      return current + item;
    }
    return res;
  });
}

console.log(positiveSum([1,2,3,4,5]));