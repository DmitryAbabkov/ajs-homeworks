const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};

export default function orderByProps(obj, data) {
  const arr = [];
  const arr2 = [];
  function createObj(arr, key) {
    const objModify = {
      key: key,
      value: obj[key],
    };
    arr.push(objModify);
  }
  for (const key in obj) {
    if (data.includes(key)) {
      createObj(arr, key);
    } else {
      createObj(arr2, key);
    }
  }
  arr2.sort((a, b) => a.key.localeCompare(b.key));
  const result = [...arr, ...arr2];
  console.log(result);
}
orderByProps(obj, ['name', 'level']);