// Problem: What is the value of the first triangle number to have over n divisors?

const findPrimeFactors = (n) => {
  let prime = 2;
  let primeList = [];
  while (prime <= n) {
    if (n % prime == 0) {
      primeList.push(prime);
      n /= prime;
    } else {
      prime++;
    }
  }
  return primeList;
}


const countDivisors = (n) => {
  let primeFactors = findPrimeFactors(n);
  let occurrences = [];
  let prev;
  for (let i=0; i < primeFactors.length; i++) {
    if (primeFactors[i] !== prev) {
      occurrences.push(1);
    } else {
      occurrences[occurrences.length - 1]++;
    }
    prev = primeFactors[i];
  }
  let nOfDivisors = 1;
  for (let j=0; j < occurrences.length; j++) {
    nOfDivisors *= (occurrences[j] + 1);
  }
  return nOfDivisors;
}


const divisibleTriangleNumber = (n) => {
  let triangleN = 0;
  let increment = 1;
  while (true) {
    triangleN += increment;
    increment += 1;
    if (countDivisors(triangleN) >= n) {
      return triangleN;
    }
  }
}

console.log(divisibleTriangleNumber(500));