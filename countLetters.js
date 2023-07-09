//Count each letter in the sentence
const countLetters = function (string) {
  count = {};

  for (const char of string) {
    //Ignore spaces
    if (char !== " ") {
      if (count[char]) {
        count[char] += 1;
      } else {
        count[char] = 1;
      }
    }  
  }
  return count;
};



module.exports = countLetters;
