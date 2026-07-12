// Exercise 2: Build These Functions

// 1. calculateArea(width, height) - returns area of rectangle
const calculateArea = (width, height) => {
  return width * height;
};

// 2. celsiusToFahrenheit(celsius) - converts temperature
const celsiusToFahrenheit = (celsius) => {
  return (celsius * 9/5) + 32;
};

// 3. isEven(number) - returns true if even, false if odd
const isEven = (number) => {
  return number % 2 === 0;
};

// 4. getInitials(fullName) - returns initials (e.g. "John Doe" → "JD")
const getInitials = (fullName) => {
  const names = fullName.split(' ');
  let initials = '';
  for (let name of names) {
    initials += name[0].toUpperCase();
  }
  return initials;
};

// 5. reverseString(str) - reverses a string
const reverseString = (str) => {
  return str.split('').reverse().join('');
};

// --- Test them ---
console.log("Area of 5x10:", calculateArea(5, 10)); // 50
console.log("25C to F:", celsiusToFahrenheit(25)); // 77
console.log("Is 4 even?", isEven(4)); // true
console.log("Is 7 even?", isEven(7)); // false
console.log("Initials of John Doe:", getInitials("John Doe")); // JD
console.log("Reverse 'hello':", reverseString("hello")); // olleh