function matrixSums(arr) {
  let sums = [];
  for (let i = 0; i < arr.length; i++) {
    let sum = arr[i].reduce(
      (initialValue, currentValue) => initialValue + currentValue,
      0
    );
    sums.push(sum);
  }
  return sums;
}

console.log(matrixSums([[2, 8, 5], [12, 48, 0], [12]]));  // returns [15, 60, 12]
