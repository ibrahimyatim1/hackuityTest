// make this work

function removeKey(obj, key) {
  const newObj = { ...obj };
  delete newObj[key];
  return newObj;
}

let res = removeKey({ abc: 123, def: 456, ghi: 789 }, 'def'); 

console.log(res);