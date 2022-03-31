// function isXor(left, right) {
//   if (left && right) return false;
//   return !!(left || right);
// }

function isXor(value1, value2) {
  return !!((value1 && !value2) || (value2 && !value1));
}

console.log(isXor(false, true));     // true
console.log(isXor(true, false));     // true
console.log(isXor(false, false));    // false
console.log(isXor(true, true));      // false


console.log(isXor(false, 3));        // true
console.log(isXor('a', undefined));  // true
console.log(isXor(null, ''));        // false
console.log(isXor('2', 23));         // false
