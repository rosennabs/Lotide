//return a subset of a given array, removing unwanted elements
const without = function (source, itemsToRemove) {
  let withoutItems = [];
  for (const item of source) {
    if (!itemsToRemove.includes(item)) {
      withoutItems.push(item)
    }
  }
  return withoutItems;
}



module.exports = without;