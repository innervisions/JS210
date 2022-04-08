function lastNOf(arr, count) {
  let startingPosition = arr.length - count;
  if (startingPosition < 0) startingPosition = 0;
  return arr.slice(arr.length - count);
}

let digits = [4, 8, 15, 16, 23, 42];
console.log(lastNOf(digits, 3));    // returns [16, 23, 42]
console.log(lastNOf(digits, 12));
