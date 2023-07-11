//Flattens nested arrays into a single-level array
const flatten = function (arrays) {
  let flatArrays = [];
  for (let i = 0; i < arrays.length; i++) {
    if (!Array.isArray(arrays[i])) {
      flatArrays.push(arrays[i]);
    } else {
      for (let j = 0; j < arrays[i].length; j++) {
        flatArrays.push(arrays[i][j]);
      }
    }
  }
  return flatArrays;
};

module.exports = flatten;