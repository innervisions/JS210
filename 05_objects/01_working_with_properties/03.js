function copyProperties(fromObj, toObj) {
  for (let property in fromObj) {
    toObj[property] = fromObj[property];
  }
  return Object.keys(fromObj).length;
}

let hal = {
  model: 9000,
  enabled: true,
};

let sal = {};
console.log(copyProperties(hal, sal));  // 2
console.log(sal);                       // { model: 9000, enabled: true }
