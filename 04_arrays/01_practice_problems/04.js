const VALUES = ['b', 4, undefined, -2];

function arrayToString(arr) {
  let string = '';
  for (let i = 0; i < arr.length; i++) {
    string += String(arr[i]);
  }

  return string;
}

console.log(arrayToString(VALUES));
