import orderByProps from '../forin';


test('Проверка корректных параметров', () => {
  const obj = {
    name: 'Дима', health: 100, level: 100, attack: 100, defence: 40,
  };
  const objEccept = [
    { key: 'name', value: 'Дима' },
    { key: 'level', value: 100 },
    { key: 'attack', value: 100 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 100 },
  ];
  const data = ['name', 'level'];
  expect(orderByProps(obj, data)).toEqual(objEccept);
});

test('Передача пустого объекта', () => {
  const obj = {};
  const data = ['name', 'level'];
  expect(() => orderByProps(obj, data)).toThrow('Передан пустой объект');
});

test('Передача пустой даты', () => {
  const obj = {
    name: 'Дима', health: 100, level: 100, attack: 100, defence: 40,
  };
  const data = [];
  expect(() => orderByProps(obj, data)).toThrow('Передана пустая дата');
});
