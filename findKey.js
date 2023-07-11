//scans the object and returns the first key for which the callback returns a truthy value. 
const findKey = function (obj, callback) {
  for (let item in obj) { //fetches the keys in the object
    if (callback(obj[item])) {
      return item;
    }
  }
};


module.exports = findKey;