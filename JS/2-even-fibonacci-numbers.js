/* Problem: By considering the terms in the Fibonacci sequence 
whose values do not exceed n, find the sum of the even-valued terms.*/

function fiboEvenSum(n) {
    let sum = 0;
    let prevNum = 1;
    let febNum = 2;

    while (febNum <= n) {
      if (febNum % 2 == 0) sum += febNum;
      [prevNum, febNum] = [febNum, febNum + prevNum];
    }
  return sum;
}

console.log(fiboEvenSum(4000000));