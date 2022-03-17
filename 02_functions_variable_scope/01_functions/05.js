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

let temperatures = [71, 60, 82, 78, 37];
console.log(average(temperatures));
