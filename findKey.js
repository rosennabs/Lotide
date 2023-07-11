//scans the object and returns the first key for which the callback returns a truthy value. 
const findKey = function (obj, callback) {
  for (let item of Object.keys(obj)) {
    if (callback(obj[item])) {
      return item;
    }
  } return undefined;
}


module.exports = findKey;