function trim(string) {
  string = eliminateLeftSpaces(string);
  string = eliminateRightSpaces(string);
  return string;
}

function eliminateLeftSpaces(string) {
  let newString = '';
  let copyMode = false;
  for (let i = 0; i < string.length; i++) {
    if (!copyMode && string[i] === ' ') continue;
    newString += string[i];
    copyMode = true;
  }
  return newString;
}

function eliminateRightSpaces(string) {
  let newString = '';
  let copyMode = false;
  for (let i = string.length - 1; i >= 0; i--) {
    if (!copyMode && string[i] === ' ') continue;
    newString = string[i] + newString;
    copyMode = true;
  }
  return newString;
}


console.log(trim('  abc  ') + '.');  // "abc"
console.log(trim('abc   ') + '.');   // "abc"
console.log(trim(' ab c') + '.');    // "ab c"
console.log(trim(' a b  c') + '.');  // "a b  c"
console.log(trim('      ') + '.');   // ""
console.log(trim('') + '.');         // ""
