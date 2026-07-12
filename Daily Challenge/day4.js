// Method 1: Using Set
function removeDuplicatesSet(arr) {
  return [...new Set(arr)];
}

// Method 2: Using filter
function removeDuplicatesFilter(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

// Test both
const input = [1, 2, 2, 3, 4, 4, 5];

console.log("Set method:", removeDuplicatesSet(input)); // [1, 2, 3, 4, 5]
console.log("Filter method:", removeDuplicatesFilter(input)); // [1, 2, 3, 4, 5]