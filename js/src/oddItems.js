// make this work

function oddItems(inputArray) {
  return inputArray.filter((item, index) => index % 2 !== 0);
}

let res = oddItems(['Java', 'C', 'JavaScript', 'Go', 'Python', 'Haskell']); 

console.log(res);