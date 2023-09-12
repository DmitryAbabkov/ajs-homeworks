import Character from '../Character';

test('Корректные данные', () => {
  const character = new Character('Ivan', 'Swordsman');
  expect(character.name).toBe('Ivan');
  expect(character.type).toBe('Swordsman');
});

test('Некорректное имя', () => {
  expect(() => new Character(1, 'Swordsman')).toThrow('Incorrected name');
  expect(() => new Character('longname', 'Swordsman')).toThrow('Incorrected name');
  expect(() => new Character('i', 'Swordsman')).toThrow('Incorrected name');
});

test('Проверка повышения уровня', () => {
  const character1 = new Character('Ivan', 'Swordsman', 0);
  expect(() => character1.levelUp()).toThrow('Нельзя повысить level умершего');

  const character2 = new Character('John', 'Magician', 1);
  character2.levelUp();
  expect(character2.level).toBe(2);
  expect(character2.attack).toBe(12);
  expect(character2.defence).toBe(12);
  expect(character2.health).toBe(100);
});
