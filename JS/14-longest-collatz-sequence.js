/* The following iterative sequence is defined for the set of positive integers:

n → n/2 (n is even)
n → 3n + 1 (n is odd)
Using the rule above and starting with 13, we generate the following sequence:

13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

Which starting number, under the given limit, produces the longest chain? */


const generateSequence = n => {
    let sequence = [n];
    while (n > 1) {
      if (n % 2 === 0) {
        n = n / 2;
      } else {
        n = 3 * n + 1;
      }
      sequence.push(n);
    }
    return sequence;
  }
   
  
const longestCollatzSequence = limit => {
    let maxLength = 0;
    let maxStart;
    for (let i=limit; i >= 1; i--) {
      let sequenceLength = generateSequence(i).length;
      if (sequenceLength > maxLength) {
        maxLength = sequenceLength;
        maxStart = i;
      }
    }
    return maxStart;
  }
  
  console.log(longestCollatzSequence(1000000));