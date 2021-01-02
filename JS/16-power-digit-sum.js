// Problem: What is the sum of the digits of the number 2exponent?

function powerDigitSum(exponent) {
    let num = BigInt(2 ** exponent);
    let str = num.toString();
    return str.split('').reduce((sum, val) => {
      return sum + Number(val);
    }, 0)
  } 

  console.log(powerDigitSum(1000))
