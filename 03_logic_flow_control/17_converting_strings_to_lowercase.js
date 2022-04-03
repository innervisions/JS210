function toLowerCase(string) {
  let output = '';
  for (let i = 0; i < string.length; i++) {
    let asciiNumeric = string.charCodeAt(i);
    if(asciiNumeric >= 65 && asciiNumeric <= 90) {
      output += String.fromCharCode(asciiNumeric + 32);
    } else {
      output += string[i];
    }
  }

  return output;
}

console.log(toLowerCase('ALPHABET'));    // "alphabet"
console.log(toLowerCase('123'));         // "123"
console.log(toLowerCase('abcDEF'));      // "abcdef"
