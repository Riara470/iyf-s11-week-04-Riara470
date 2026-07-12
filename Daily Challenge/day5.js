function isPalindrome(str) {
  // 1. Make it lowercase and remove spaces
  let cleaned = str.toLowerCase().replace(/\s/g, '');
  
  // 2. Reverse it
  let reversed = cleaned.split('').reverse().join('');
  
  // 3. Check if they match
  return cleaned === reversed;
}

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("A man a plan a canal Panama")); // true