/* The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ? */

var primes = [3];

var theNumber = Math.ceil(Math.sqrt(600851475143)); // Only need to solve up to the square root

var factors = [];

for(var i=3; i<theNumber; i=i+2){ // Start from 3
                                 // Additionally, only need to increase by 2 every time since we can skip the even numbers (they're always composite numbers)
    var y = 1;
    for(var x = 0; x<=primes.length-1; x++){ // Only need to check the other primes already found, not all numbers
       if (i % primes[x] === 0){
           // Do nothing
           y = 0; // Sets to 0 because this is not a prime
           break;
       } 
       
    }
    
    if(y === 1){ // If it's still 1, this is a prime
        primes.push(i);                 // Add to the primes array for the next iteration
        if(600851475143 % i === 0){     // Check if this number is a factor of 600851475143
            factors.push(i);
        }
    }

}


console.log(Math.max.apply(null, factors)); // Largest number in the array

// 6857 is the answer