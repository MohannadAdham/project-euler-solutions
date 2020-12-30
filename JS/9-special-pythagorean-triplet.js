// Problem: There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product abc such that a + b + c = n.

function specialPythagoreanTriplet(n) {
    let sumOfabc = n;
    for (let a=1; a <= sumOfabc/2; a++){
        for (let b=1; b <= sumOfabc/2; b++) {
            let c = sumOfabc - (a + b);
            if (a ** 2 + b ** 2 === c ** 2) {
                return a * b * c;
            }
        }
    }
    return false
   }
   
   console.log(specialPythagoreanTriplet(24));
   console.log(specialPythagoreanTriplet(120));
   console.log(specialPythagoreanTriplet(1000));