function uniqueElements(arr) {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    if(!output.includes(arr[i])) output.push(arr[i]);
  }

  return output;
}

console.log(uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]));  // returns [1, 2, 4, 3, 5]
