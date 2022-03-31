function indexOf(firstString, secondString) {
  let limit = firstString.length - secondString.length;
  for (let i = 0; i <= limit; i++) {
    let allMatch = true;
    for (let j = 0; j < secondString.length; j++) {
      if (firstString[i + j] !== secondString[j]){
        allMatch = false;
        break;
      }

    }
    if (allMatch) return i;
  }

  return -1;
}

function lastIndexOf(firstString, secondString) {
  let limit = firstString.length - secondString.length;
  for (let i = limit; i >= 0; i--) {
    let allMatch = true;
    for (let j = 0; j < secondString.length; j++) {
      if (firstString[i + j] !== secondString[j]) {
        allMatch = false;
        break;
      }

    }
    if (allMatch) return i;
  }

  return -1;
}


console.log(indexOf('Blue Whale', 'Blute'));                    // -1
console.log(indexOf('Blue Whale', 'Whale'));                    // 5
console.log(indexOf('Blue Whale', 'leB'));                      // -1
console.log(indexOf('Some strings', 's'));                      // 5

console.log(lastIndexOf('Some strings', 's'));                  // 11
console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale'));  // 19
console.log(lastIndexOf('Blue Whale, Killer Whale', 'all'));    // -1
