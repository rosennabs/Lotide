
// Return all the indices in the sentence for each character except space characters
const letterPositions = function (sentence) {
  const results = {};
  
  for (const index in sentence) {
    if (sentence[index] !== " ") {
    
      if (results[sentence[index]]) {
        results[sentence[index]].push(Number(index))
      } else {
        results[sentence[index]] = [Number(index)];
      }
    }
  }
  return results;
  
}

module.exports = letterPositions;