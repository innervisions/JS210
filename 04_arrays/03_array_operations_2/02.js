// function lastIndexOf(arr, value) {
//   let lastIndex = -1;
//   for(let i = 0; i < arr.length; i++) {
//     if (arr[i] === value) lastIndex = i;
//   }

//   return lastIndex;
// }

function lastIndexOf(array, value) {
  for (let index = array.length - 1; index >= 0; index -= 1) {
    if (array[index] === value) {
      return index;
    }
  }

  return -1;
}

console.log(lastIndexOf([1, 2, 3, 3], 3));     // 3
console.log(lastIndexOf([1, 2, 3], 4));        // -1
