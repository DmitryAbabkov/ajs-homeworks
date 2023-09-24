export default function phoneChange(str) {
  let modifyStr = str.replace(/[^\d]/g, '');
  if (modifyStr.length === 11) {
    modifyStr = `7${modifyStr.slice(1)}`;
  }
  modifyStr = +modifyStr;
  console.log(modifyStr);
}


phoneChange('8 (927) 000-00-00');
phoneChange('+7 960 000 00 00');
phoneChange('+86 000 000 0000');
