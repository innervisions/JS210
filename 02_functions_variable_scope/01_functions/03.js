function average(numbers) {
  let total = 0;
  for (let index = 0; index < numbers.length; index++) {
    total += numbers[index];
  }
  return total / numbers.length;
}

console.log(average([2, 4, 6, 8, 10]));
