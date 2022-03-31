function splitString(string, delimiter) {
  if(delimiter === undefined) {
    console.log('ERROR: No delimiter');
    return;
  }

  let substring = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== delimiter){
      substring += string[i];
    }
    if (string[i] === delimiter || delimiter === '' || i === string.length - 1) {
      console.log(substring);
      substring = '';
    }
  }
}

splitString('abc,123,hello world', ',');
// logs:
// abc
// 123
// hello world

splitString('hello');
// logs:
// ERROR: No delimiter

splitString('hello', '');
// logs:
// h
// e
// l
// l
// o

splitString('hello', ';');
// logs:
// hello

splitString(';hello;', ';');
// logs:
//  (this is a blank line)
// hello
