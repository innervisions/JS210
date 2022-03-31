// function multiplesOfThreeAndFive() {
//   for (let number = 1; number <= 100; number++) {
//     if (number % 3 === 0 && number % 5 === 0) {
//       console.log(String(number) + '!');
//     } else if (number % 3 === 0 || number % 5 === 0){
//       console.log(String(number));
//     }
//   }
// }
function multiplesOfThreeAndFive(lower, upper) {
  for (let number = lower; number <= upper; number++) {
    if (number % 3 === 0 && number % 5 === 0) {
      console.log(String(number) + '!');
    } else if (number % 3 === 0 || number % 5 === 0){
      console.log(String(number));
    }
  }
}

// multiplesOfThreeAndFive();
multiplesOfThreeAndFive(200, 1000);
