const character = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
    },
  ],
};

function destructoringObj(obj) {
  const arr = [];
  obj.special.forEach((item) => {
    if (item.description === undefined) {
      item.description = 'Описание недоступно';
    }
    arr.push(item);
  });
}

destructoringObj(character);
