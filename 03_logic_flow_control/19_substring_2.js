function substring(string, start, end) {
  if(end === undefined) end = string.length;

  if(Number.isNaN(start) || start < 0) start = 0;
  if(Number.isNaN(end) || end < 0) end = 0;

  if(start > string.length) start = string.length;
  if(end > string.length ) end = string.length;
  
  if (start > end) [start, end] = [end, start];

  let substring = '';
  for (let i = start; i < end; i++) {
    substring += string[i];
  }

  return substring;
}

let string = 'hello world';

console.log(substring(string, 2, 4));    // "ll"
console.log(substring(string, 4, 2));    // "ll"
console.log(substring(string, 0, -1));   // ""
console.log(substring(string, 2));       // "llo world"
console.log(substring(string, 'a'));     // "hello world"
console.log(substring(string, 8, 20));   // "rld"
