function sum(numbers) {
  let total = 0;
  for (let index = 0; index < numbers.length; index++) {
    total += numbers[index];
  }
  return total;
}

function average(numbers) {
  return sum(numbers) / numbers.length;
}

console.log(average([2, 4, 6, 8, 10]));
