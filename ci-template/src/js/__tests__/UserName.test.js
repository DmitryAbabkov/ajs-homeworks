import Validator from '../UserName';

test('Имя не передано', () => {
  const user = new Validator();

  expect(() => user.validateUsername()).toThrowError('Имя не передано');
});

test('Передано корректное имя', () => {
  const user = new Validator('d-1_3');

  expect(() => user.validateUsername()).toBe(true);
});

test('Передано некорретное имя', () => {
  const user = new Validator('111d-1_3');

  expect(() => user.validateUsername()).toThrowError('В переданном имени содержится ошибка');
});
