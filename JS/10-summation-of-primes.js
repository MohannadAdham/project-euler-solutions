const isPrime = num => {
    for(let i = 2; i < (num/2)+1; i++)
      if(num % i === 0) return false;
    return num > 1;
  }

const primeSummation = (n) => {
  let sum = 0;
  for (let i=2; i < n; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }
  return sum;
}

console.log(primeSummation(2000000));