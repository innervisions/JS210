function repeatedCharacters(str) {
  str = str.toLowerCase();
  let frequencies = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char in frequencies) {
      frequencies[char] += 1;
    } else {
      frequencies[char] = 1;
    }
  }

  for (let char in frequencies) {
    if (frequencies[char] === 1) delete frequencies[char];
  }

  return frequencies;
}

console.log(repeatedCharacters('Programming'));    // { r: 2, g: 2, m: 2 }
console.log(repeatedCharacters('Combination'));    // { o: 2, i: 2, n: 2 }
console.log(repeatedCharacters('Pet'));            // {}
console.log(repeatedCharacters('Paper'));          // { p: 2 }
console.log(repeatedCharacters('Baseless'));       // { s: 3, e: 2 }
