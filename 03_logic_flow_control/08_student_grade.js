let rlSync = require('readline-sync');

function findAverage(numbers) {
  let sum = numbers.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
  return sum / numbers.length;
}

let numberOfScores = parseInt(rlSync.question('How many scores?: '), 10);
let scores = [];
for (let i = 1; i <= numberOfScores; i++) {
  let score = Number(rlSync.question(`Enter score ${i}: `));
  scores.push(score);
}

let average = findAverage(scores)
let grade;
if (average >= 90) {
  grade = 'A';
} else if (average >= 70) {
  grade = 'B';
} else if (average >= 50) {
  grade = 'C';
} else {
  grade = 'F';
}
console.log(`Based on the average of your ${numberOfScores} scores your letter grade is ${grade}.`);
