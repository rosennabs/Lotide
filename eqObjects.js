
const eqArrays = require('./eqArrays');

const eqObjects = function (object1, object2) {
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);

  if (object1Keys.length === object2Keys.length) {
    for (item of object1Keys) {
      if (object1[item] === object2[item] || eqArrays(object1[item], object2[item])) {
        return true;
      } else {
        return false;
      }
    }
  } else {
    return false;
  }
};



module.exports = eqObjects;