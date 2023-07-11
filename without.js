//return a subset of a given array, removing unwanted elements
const without = function (source, itemsToRemove) {
  let withoutItems = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      withoutItems.push(source[i])
    }
  }
  return withoutItems;
}



module.exports = without;