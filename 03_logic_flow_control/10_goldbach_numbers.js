function isPrime(number) {
  if (number < 2 || (number > 2 && number % 2 === 0)) return false;
  for (let i = 3; i <= number / 2; i += 2) {
    if (number % i === 0) return false;
  }
  return true;
}

function checkGoldbach(expectedSum) {
  if(expectedSum % 2 === 1 || expectedSum < 4) {
    console.log(null);
    return;
  }
  for (let firstNumber = 2; firstNumber <= expectedSum / 2; firstNumber += 1) {
    let secondNumber = expectedSum - firstNumber;
    if(isPrime(firstNumber) && isPrime(secondNumber)) {
      console.log(firstNumber, secondNumber);
    }
  }
}


checkGoldbach(3);
// logs: null

checkGoldbach(4);
// logs: 2 2

checkGoldbach(12);
// logs: 5 7

checkGoldbach(100);
// logs:
// 3 97
// 11 89
// 17 83
// 29 71
// 41 59
// 47 53
