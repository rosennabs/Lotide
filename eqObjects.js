
const eqArrays = require('./eqArrays');

const eqObjects = function (object1, object2) {
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);

  if (object1Keys.length === object2Keys.length) {
    for (const item of object1Keys) {
      if (Array.isArray(object1[item]) && Array.isArray(object2[item])) {
        return eqArrays(object1[item], object2[item]);
      } else if (object1[item] !== object2[item]) {
        return false;
      }
    } 
    return true;
  } else {
    return false;
  }
};



module.exports = eqObjects;