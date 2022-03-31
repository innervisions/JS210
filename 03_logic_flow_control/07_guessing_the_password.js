let rlSync = require('readline-sync');
const password = 'thurible';
const MAX_ATTEMPTS = 3;
let message = 'You have been denied access.'

for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
  let guess = rlSync.question('What is the password?: ');
  if (guess === 'thurible') {
    message = 'You have successfully logged in.'
    break;
  }
}

console.log(message);
