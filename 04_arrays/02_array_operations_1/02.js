function pop(arr) {
  if (arr.lenth === 0) return undefined;
  
  let poppedValue = arr[arr.length - 1];
  arr.length = arr.length - 1;
  return poppedValue;
}

let count = [1, 2, 3];
console.log(pop(count));             // 3
console.log(count);                  // [ 1, 2 ]
