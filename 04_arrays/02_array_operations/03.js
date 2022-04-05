const unshift = function(arr, value) {
  for (let i = arr.length; i >= 1; i--) {
    arr[i] = arr[i - 1];
  }

  arr[0] = value;
  return arr.length;
};

let count = [1, 2, 3];
console.log(unshift(count, 0));      // 4
console.log(count);                  // [ 0, 1, 2, 3 ]
