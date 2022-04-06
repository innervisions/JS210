function push(arr, value) {
  arr[arr.length] = value;
  return arr.length;
}

function populate(destinationArr, sourceArr) {
  for (let i = 0; i < sourceArr.length; i++) {
    push(destinationArr, sourceArr[i]);
  }
}

function concat(arr1, arr2) {
  let newArr = [];
  populate(newArr, arr1);
  populate(newArr, arr2);
  return newArr;
}


console.log(concat([1, 2, 3], [4, 5, 6]));       // [ 1, 2, 3, 4, 5, 6 ]
