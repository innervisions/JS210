const CHAR_CODE_A = 'A'.charCodeAt(0);
const CHAR_CODE_a = 'a'.charCodeAt(0)
const ROTATION = 13;

function rotateChar(char) {
  let asciiCode = char.charCodeAt(0);
  let shiftedCode;
  if (char >= 'A' && char <= 'Z') {
    shiftedCode = ((asciiCode - CHAR_CODE_A + ROTATION) % 26) + CHAR_CODE_A;
  } else if (char >= 'a' && char <= 'z') {
    shiftedCode = ((asciiCode - CHAR_CODE_a + ROTATION) % 26) + CHAR_CODE_a;
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
