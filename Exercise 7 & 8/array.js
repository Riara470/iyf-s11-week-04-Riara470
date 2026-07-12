// Task 8: Array Methods Practice

const numbers = [5, -2, 8, 12, -7, 3, 15, 4];
console.log("Original array:", numbers);

// 1. Double all numbers in an array - use .map()
const doubled = numbers.map(num => num * 2);
console.log("1. Doubled:", doubled);

// 2. Filter out negative numbers - use .filter()
const positives = numbers.filter(num => num >= 0);
console.log("2. No negatives:", positives);

// 3. Find the first number greater than 10 - use .find()
const firstOver10 = numbers.find(num => num > 10);
console.log("3. First > 10:", firstOver10);

// 4. Calculate the product of all numbers - use .reduce()
const product = numbers.reduce((total, num) => total * num, 1);
console.log("4. Product of all:", product);