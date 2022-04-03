const UPPER_A_CODE = 'A'.charCodeAt(0);
const LOWER_A_CODE = 'a'.charCodeAt(0)
const ROTATION = 13;

function rotateChar(char) {
  let asciiCode = char.charCodeAt(0);
  let shiftedCode;
  if (char >= 'A' && char <= 'Z') {
    shiftedCode = ((asciiCode - UPPER_A_CODE + ROTATION) % 26) + UPPER_A_CODE;
  } else if (char >= 'a' && char <= 'z') {
    shiftedCode = ((asciiCode - LOWER_A_CODE + ROTATION) % 26) + LOWER_A_CODE;
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
