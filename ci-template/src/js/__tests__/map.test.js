import ErrorRepository from '../map';

test('Корректное чтение ошибки', () => {
  const testError = new ErrorRepository();
  testError.addError(31, 'Тест ошибки');

  expect(testError.translate(31)).toEqual('Тест ошибки');
});

test('Не передан код ошибки', () => {
  const testError = new ErrorRepository();
  testError.addError(31, 'Тест ошибки');

  expect(testError.translate()).toThrow('Unknown error');
});

test('Передан код ошибки, который не содержится в мапе', () => {
  const testError = new ErrorRepository();
  testError.addError(31, 'Тест ошибки');

  expect(testError.translate(2)).toThrow('Unknown error');
});
