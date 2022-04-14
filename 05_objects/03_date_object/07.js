const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function dateSuffix(dateNumber) {
  let string = String(dateNumber);
  if (string[-1] === '1' && string[-2] !== '1') return 'st';
  if (string[-1] === '2' && string[-2] !== '1') return 'nd';
  if (string[-1] === '3' && string[-2] !== '1') return 'rd';
  return 'th';
}

function formmattedMonth(date) {
  return months[date.getMonth()];
}

function formattedDate(date) {
  return 
}

let today = new Date();

console.log(
  `Today's day is ${daysOfWeek[day]}, ${months[month]} ${date}${suffix}`
);
