
//Scan the object and return the first key containing the given value
const findKeyByValue = function (object1, value) {

  for (const title in object1) {
    if (object1[title] === value) {
      return title;
    }
  }
};

module.exports = findKeyByValue;