const themeValues = ['light', 'gray'];
const musicValues = ['pop', 'rock', 'chillout', 'off'];
const difficultyValues = ['normal', 'hard', 'nightmare'];

export default class Settings {
  constructor() {
    this.setting = new Map([['theme', 'dark'], ['music', 'trance'], ['difficulty', 'easy']]);
  }

  checkSet(arr, set, number, args) {
    if (arr.includes(Object.values(args)[number])) {
      this.setting.set(set, Object.values(args)[number]);
    }
  }

  getSett(...args) {
    const keysArgs = { ...args };

    this.checkSet(themeValues, 'theme', 0, keysArgs);
    this.checkSet(musicValues, 'music', 1, keysArgs);
    this.checkSet(difficultyValues, 'difficulty', 2, keysArgs);

    return this.setting;
  }
}

const user = new Settings();

console.log(user.getSett('light', 'trance', 'easy'));
