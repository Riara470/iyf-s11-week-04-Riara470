// Mini-Project: Console Calculator

// 1. Functions for each operation
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
  if (b === 0) {
    return "Error: Cannot divide by zero";
  }
  return a / b;
};
const modulus = (a, b) => a % b;
const power = (a, b) => a ** b;

// 2. Main calculate function
const calculate = (num1, operator, num2) => {
  switch (operator) {
    case '+':
      return add(num1, num2);
    case '-':
      return subtract(num1, num2);
    case '*':
      return multiply(num1, num2);
    case '/':
      return divide(num1, num2);
    case '%':
      return modulus(num1, num2);
    case '**':
      return power(num1, num2);
    default:
      return "Error: Invalid operator. Use +, -, *, /, %, **";
  }
};

// --- Test the calculator ---
console.log("10 + 5 =", calculate(10, '+', 5));
console.log("10 - 5 =", calculate(10, '-', 5));
console.log("10 * 5 =", calculate(10, '*', 5));
console.log("10 / 5 =", calculate(10, '/', 5));
console.log("10 / 0 =", calculate(10, '/', 0)); // test division by zero
console.log("10 % 3 =", calculate(10, '%', 3));
console.log("2 ** 3 =", calculate(2, '**', 3));