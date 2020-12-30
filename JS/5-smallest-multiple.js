// Problem: What is the smallest positive number that is evenly divisible by all of the numbers from 1 to n?

const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

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


function smallestMult(n) {
  let primeFactors = new Map();
  let result = 1;

  for (let i=2; i <= n; i++) {
    primeFactors.set(i, findPrimeFactors(i));
  }

  for (let j=2; j <=n; j++) {
    let occurrences = [];
    for (let [number, factors] of primeFactors) {
      occurrences.push(countOccurrences(primeFactors.get(number), j));
    }
    if (Math.max(...occurrences) > 0) {
        result *= (j ** Math.max(...occurrences))
        // console.log(`Factor ${j} occurres ${Math.max(...occurrences)} times`)
    }    
  }
  return result;
}

console.log(smallestMult(20));