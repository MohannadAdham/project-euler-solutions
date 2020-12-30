// Problem: What is the nth prime number?

const isPrime = num => {
    for(let i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num > 1;
  }
  
  
  function nthPrime(n) {
    let number = 1;
    let counter = 1;
    while (counter <= n) {
      number += 1;
      if (isPrime(number)) {
        counter += 1;
      }
    }
    return number;
  }
  
  console.log(nthPrime(10001));