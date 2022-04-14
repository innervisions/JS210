function dateSuffix(date) {
  let string = String(date);
  if (string[-1] === '1' && string[-2] !== '1') return 'st';
  if (string[-1] === '2' && string[-2] !== '1') return 'nd';
  if (string[-1] === '3' && string[-2] !== '1') return 'rd';
  return 'th';
}

function formattedMonth(date) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return months[date.getMonth()];
}

function formattedDay(date) {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return daysOfWeek[date.getDay()];
}

function formattedDate(date) {
  let day = formattedDay(date);
  let month = formattedMonth(date);
  let dateNumber = date.getDate();
  let suffix = dateSuffix(dateNumber);

  console.log("Today's date is " + day + ', ' + month + ' ' + dateNumber + suffix);
}

let today = new Date();
formattedDate(today);

