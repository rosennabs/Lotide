//return a new array based on the results of the callback function.

const map = (array, callbackFunction) => {
  const results = [];
  for (let item of array) {
    results.push(callbackFunction(item));
  }
  return results;
}


module.exports = map;