// Problem: Find the largest palindrome made from the product of two n-digit numbers

const isPalindrome = (n) => {
    if (n.toString() === n.toString().split("").reverse().join("")) {
      return true;
    }
    return false;
  }
  
const largestPalindromeProduct = (n) => {
    let maxNum = Number("9".repeat(n));
    let minNum = (maxNum + 1) / 10;
    let palNums = [];
    for (let i=maxNum; i >= minNum; i--) {
      for (let j=maxNum; j >= minNum; j--) {
        if (isPalindrome(i * j)) {
          palNums.push(i * j);
        }
      }
    }
    return Math.max(...palNums);
  }
  
  console.log(largestPalindromeProduct(3));
  console.log(largestPalindromeProduct(2));