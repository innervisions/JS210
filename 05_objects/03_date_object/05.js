function dateSuffix(date) {
  let string = String(date);
  if (string[-1] === '1' && string[-2] !== '1') return 'st';
  if (string[-1] === '2' && string[-2] !== '1') return 'nd';
  if (string[-1] === '3' && string[-2] !== '1') return 'rd';
  return 'th';
}

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
let today = new Date();
let day = today.getDay();
let date = today.getDate();
let suffix = dateSuffix(date);
console.log(
  `Today's day is ${daysOfWeek[day]}, the ${date}${suffix}`
);
