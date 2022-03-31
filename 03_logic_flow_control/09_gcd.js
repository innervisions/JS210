// function gcd(firstNumber, secondNumber) {
//   let gcd = 1;
//   let idx = 2;
//   while (idx <= firstNumber && idx <= secondNumber) {
//     if(firstNumber % idx == 0 && secondNumber % idx == 0) gcd = idx;
//     idx++;
//   }
//   return gcd;
// }

function gcd(num1, num2) {
  var temp;

  while (num2 !== 0) {
    temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }

  return num1;
}

console.log(gcd(12, 4));   // 4
console.log(gcd(15, 10));  // 5
console.log(gcd(9, 2));    // 1
