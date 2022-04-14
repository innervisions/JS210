function formatTime(date) {
  let hours = String(date.getHours());
  let minutes = String(date.getMinutes());
  if (hours.length === 1) hours = '0' + hours;
  if (minutes.length === 1) minutes = '0' + minutes;
  return hours + ':' + minutes;
}

console.log(formatTime(new Date(2013, 2, 1, 1, 10)));

