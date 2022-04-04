const UPPER_A_CODE = 'A'.charCodeAt(0);
const LOWER_A_CODE = 'a'.charCodeAt(0);
const UPPER_Z_CODE = 'Z'.charCodeAt(0);
const LOWER_Z_CODE = 'z'.charCodeAt(0);
const ROTATION = 13;
const LETTERS_IN_ALPHABET = 26;

function rotateChar(char) {
  let asciiCode = char.charCodeAt(0);
  let shiftedCode;
  if (asciiCode >= UPPER_A_CODE && asciiCode <= UPPER_Z_CODE) {
    shiftedCode = ((asciiCode - UPPER_A_CODE + ROTATION) % LETTERS_IN_ALPHABET) + UPPER_A_CODE;
  } else if (asciiCode >= LOWER_A_CODE && asciiCode <= LOWER_Z_CODE) {
    shiftedCode = ((asciiCode - LOWER_A_CODE + ROTATION) % LETTERS_IN_ALPHABET) + LOWER_A_CODE;
  } else {
    shiftedCode = asciiCode;
  }
  
  return String.fromCharCode(shiftedCode);
}


function rot13(string) {
  let newString = '';
  for (let index = 0; index < string.length; index++) {
    newString += rotateChar(string[index]);
  }

  return newString;
}

console.log(rot13('Teachers open the door, but you must enter by yourself.'));
// logs: Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.

console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));
// logs: Teachers open the door, but you must enter by yourself.
