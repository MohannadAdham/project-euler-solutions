// problem: Find the difference between the sum of
// the squares of the first n natural numbers and the square of the sum.

function sumSquareDifference(n) {
    let arr = [];
    for (let i=1; i <= n; i++) {
      arr.push(i);
    }
    let someOfSquares = arr.map((n) => n**2)
                          .reduce((sum, number) => sum + number, 0);
    let squareOfSum = arr.reduce((sum, number) => sum + number, 0) ** 2;
  
    return squareOfSum - someOfSquares;
  }
  
  console.log(sumSquareDifference(10));
  console.log(sumSquareDifference(20));
  console.log(sumSquareDifference(100));