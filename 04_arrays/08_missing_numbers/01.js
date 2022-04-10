function missing(arr) {
  let missingValues = [];
  for (let i = arr[0] + 1; i < arr[arr.length - 1]; i++) {
    if (!arr.includes(i)) missingValues.push(i);
  }

  return missingValues;
}

console.log(missing([-3, -2, 1, 5]));                  // [-1, 0, 2, 3, 4]
console.log(missing([1, 2, 3, 4]));                    // []
console.log(missing([1, 5]));                          // [2, 3, 4]
console.log(missing([6]));                             // []
