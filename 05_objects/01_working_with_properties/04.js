function incrementProperty(obj, propertyName) {
  if (obj[propertyName]) {
    obj[propertyName] += 1;
  } else {
    obj[propertyName] = 1;
  }
}

function wordCount(str) {
  let words = str.split(' ');
  let count = {};
  words.forEach((word) => incrementProperty(count, word));
  return count;
}

console.log(wordCount('box car cat bag box'));  // { box: 2, car: 1, cat: 1, bag: 1 }
