import Settings from '../map*';
import { expect, jest, test } from '@jest/globals';

test('Передаем пустые настройки', () => {
  const testing = new Settings();
  const result = [['theme', 'dark'], ['music', 'trance'], ['difficulty', 'easy']];

  expect(() => testing.getSett()).toEqual(result);
});

test('Передаем одну настройку', () => {
  const testing = new Settings();
  const result = [['theme', 'light'], ['music', 'trance'], ['difficulty', 'easy']];

  expect(() => testing.getSett('light')).toEqual(result);
});

test('Перадем три настройки', () => {
  const testing = new Settings();
  const result = [['theme', 'light'], ['music', 'pop'], ['difficulty', 'normal']];

  expect(() => testing.getSett('light', 'pop', 'normal')).toEqual(result);
});

test('Передаем ерунду', () => {
  const testing = new Settings();
  const result = [['theme', 'light'], ['music', 'trance'], ['difficulty', 'easy']];

  expect(() => testing.getSett('ligfdfdffht')).toEqual(result);
});
