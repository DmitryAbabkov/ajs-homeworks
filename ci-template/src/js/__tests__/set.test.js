import { expect, jest, test } from '@jest/globals';
import Team from '../set';

test('Метод добавления персонажа в команду, если все корректно', () => {
  const user = new Team();
  expect(() => user.add('Игорь')).not.toThrow();
});

test('Метод добавления персонажа в команду, ошибка', () => {
  const user = new Team();
  user.add('Игорь');
  expect(() => user.add('Игорь')).toThrow('Персонаж уже существует');
});

test('Метод добавления произвольного количества персонажей в команду', () => {
  const user = new Team();
  expect(() => user.addAll('Игорь', 'Dima', 'Andrey')).not.toThrow();
  expect(user.toArray()).toEqual(['Игорь', 'Dima', 'Andrey']);
});

test('Метод конвертации в массив', () => {
  const user = new Team();
  expect(user.toArray()).toEqual([]);
});
