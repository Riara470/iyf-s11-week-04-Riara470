// Loops Practice

// 1. Print numbers 1-100
console.log("--- 1 to 100 ---");
for (let i = 1; i <= 100; i++) {
  console.log(i);
}

// 2. Print only even numbers 1-50
console.log("--- Even numbers 1 to 50 ---");
for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// 3. FizzBuzz
console.log("--- FizzBuzz 1 to 100 ---");
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// 4. Print a triangle of stars
console.log("--- Star Triangle ---");
for (let i = 1; i <= 5; i++) {
  let stars = "";
  for (let j = 1; j <= i; j++) {
    stars += "* ";
  }
  console.log(stars);
}