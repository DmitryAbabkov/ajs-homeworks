export default class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUsername() {
    return /^[a-zA-Z_-](?!.*?[0-9]{4})[a-zA-Z0-9_-]*[a-zA-Z0-9]$/i.test(this.name);
  }
}

const user = new Validator('d-1_3');
console.log(user.validateUsername());
