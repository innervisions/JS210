function isPrime(number) {
  if (number < 2 || (number > 2 && number % 2 === 0)) return false;
  for (let i = 3; i <= number / 2; i += 2) {
    if (number % i === 0) return false;
  }
  return true;
}

console.log(isPrime(1));   // false
console.log(isPrime(2));   // true
console.log(isPrime(3));   // true
console.log(isPrime(43));  // true
console.log(isPrime(55));  // false
console.log(isPrime(0));   // false
