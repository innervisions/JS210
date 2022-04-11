function objectHasProperty(obj, propertyName) {
  let keys = Object.keys(obj);
  return keys.indexOf(propertyName) !== -1;
}

function incrementProperty(obj, propertyName) {
  if (objectHasProperty(obj, propertyName)) {
    obj[propertyName] += 1;
  } else {
    obj[propertyName] = 1;
  }
}

let wins = {
  steve: 3,
  susie: 4,
};

incrementProperty(wins, 'susie');   // 5
console.log(wins);                               // { steve: 3, susie: 5 }
incrementProperty(wins, 'lucy');    // 1
console.log(wins);                               // { steve: 3, susie: 5, lucy: 1 }
