
//Scan the object and return the first key containing the given value
const findKeyByValue = function (object1, value) {
  const genre = Object.keys(object1);
  for (title of genre) {
    if (object1[title] === value) {
      return title;
    } 
  } return undefined;
}

module.exports = findKeyByValue;