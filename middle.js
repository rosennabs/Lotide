//Gets the middle element(s) in an array
const middle = function (array) {

  let midNum = [];

  if (array.length > 2) {
    //check if length is even, get the two middle elements
    if (array.length % 2 === 0) {
      midNum.push(array[(array.length / 2) - 1], array[array.length / 2]);
    }
    //check if length is odd, get one middle element
    else {
      midNum.push(array[Math.floor(array.length / 2)]);
    }
  }
  return midNum;
};


module.exports = middle;