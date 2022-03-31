// function logMultiples(number) {
//   for (i = 100; i >= number; i--) {
//     if (i % number == 0 && i % 2 == 1) console.log(i);
//   }
// }

function logMultiples(number) {
  let multiple = Math.floor(100 / number) * number;

  while (multiple > 0) {
    if (multiple % 2 === 1) {
      console.log(multiple);
    }

    multiple -= number;
  }
}

logMultiples(17);
console.log();
logMultiples(21);
