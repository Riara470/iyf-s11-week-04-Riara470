// Method 1: Using a loop
function findLargest(arr) {
  let largest = arr[0]; 
  
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i]; 
    }
  }
  
  return largest;
}

// Method 2: Using reduce()
function findLargestReduce(arr) {
  return arr.reduce((max, current) => {
    return current > max? current : max;
  }, arr[0]);
}

// Test both
console.log("Loop method:", findLargest([3, 7, 2, 9, 4])); // 9
console.log("Reduce method:", findLargestReduce([3, 7, 2, 9, 4])); // 9