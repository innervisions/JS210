// function generatePattern(nStars) {
//   for (let row = 1; row <= nStars; row++) {
//     let output = '';
//     for (let column = 1; column <=nStars; column++){
//       if (column <= row) {
//         output += String(column);
//       } else {
//         output += '*';
//       }
//     }

//     console.log(output);
//   }
// }

function generatePattern(nStars) {
  let lastRowString = '';

  for (let lineNumber = 1; lineNumber <= nStars; lineNumber += 1) {
    lastRowString += String(lineNumber);
  }

  let width = lastRowString.length;

  for (let lineNumber = 1; lineNumber <= nStars; lineNumber += 1) {
    let string = '';
    for (let digit = 1; digit <= lineNumber; digit += 1) {
      string += String(digit);
    }

    let numberOfStars = width - string.length;
    for (let count = 1; count <= numberOfStars; count += 1) {
      string += '*';
    }

    console.log(string);
  }
}


generatePattern(20);
