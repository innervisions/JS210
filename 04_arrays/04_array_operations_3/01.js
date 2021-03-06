function push(arr, value) {
  arr[arr.length] = value;
  return arr.length;
}

function slice(arr, start, end) {
  let newArr = [];
  for (let i = start; i < end; i++) {
    push(newArr, arr[i]);
  }

  return newArr;
}

console.log(slice([1, 2, 3, 4, 5], 0, 2));                      // [ 1, 2 ]
console.log(slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3));  // [ 'b', 'c' ]
