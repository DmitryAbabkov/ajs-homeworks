export default class ErrorRepository {
  constructor() {
    this.error = new Map();
  }

  translate(code) {
    if (this.error.has(code)) {
      return this.error.get(code);
    }
    return 'Unknown error';
  }

  addError(key, value) {
    this.error.set(key, value);
  }
}

const testError = new ErrorRepository();
testError.addError(31, 'Тест ошибки');
testError.translate(31);
