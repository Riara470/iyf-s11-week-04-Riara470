// Week 4: Interactive Calculator - JavaScript

function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) { 
    if (b === 0) return "Error! Cannot divide by zero";
    return a / b; 
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("=== Interactive Calculator ===");
console.log("1: Add | 2: Subtract | 3: Multiply | 4: Divide");

readline.question("Choose operation (1-4): ", (choice) => {
    readline.question("Enter first number: ", (n1) => {
        readline.question("Enter second number: ", (n2) => {
            n1 = parseFloat(n1);
            n2 = parseFloat(n2);
            let result;

            if (choice === '1') result = add(n1, n2);
            else if (choice === '2') result = subtract(n1, n2);
            else if (choice === '3') result = multiply(n1, n2);
            else if (choice === '4') result = divide(n1, n2);
            else result = "Invalid choice";

            console.log(`Result: ${result}`);
            readline.close();
        });
    });
});