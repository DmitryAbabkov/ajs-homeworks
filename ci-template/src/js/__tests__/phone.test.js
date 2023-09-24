import phoneChange from '../phone';

test('Номер не передан', () => {
  expect(() => phoneChange()).toThrow('Номер не передан');
});

test('Передан Китайский номер', () => {
  expect(() => phoneChange('+86 000 000 0000')).toEqual('+860000000000');
});

test('Передан Российский номер с 8', () => {
  expect(() => phoneChange('8 (927) 000-00-00')).toEqual('+79600000000');
});

test('Передан Российский номер с 7', () => {
  expect(() => phoneChange('+7 960 000 00 00')).toEqual('+79600000000');
});
