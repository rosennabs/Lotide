
//Collect items from array until a truthy value is returned by callback
const takeUntil = function (array, callbackNum) {
  let result = [];
  for (let item of array) {
    if (!callbackNum(item)) {
      result.push(item);
    } else {
      return result;
    }
  } 
} 



module.exports = takeUntil;