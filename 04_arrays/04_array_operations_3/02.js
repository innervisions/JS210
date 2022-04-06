function push(arr, value) {
  arr[arr.length] = value;
  return arr.length;
}

function splice(arr, start, amount) {
  let removed = [];
  for (let i = start; i < start + amount; i++) {
    push(removed, arr[i]);
    arr[i] = arr[i + amount];
  }

  arr.length = arr.length - amount;
  return removed;
}

let count = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(splice(count, 2, 5));                   // [ 3, 4, 5, 6, 7 ]
console.log(count);                                 // [ 1, 2, 8 ]
