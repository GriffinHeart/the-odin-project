/* Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms. */


var theFirst = 1;
var theSecond = 2;

var sum = 2; // Needs this because the code below skips over adding it to the sum

while(theThird <= 4000000) {
    var theThird = theFirst + theSecond;
    if(theThird % 2 === 0){
        sum+= theThird;        
    } 
    
    theFirst = theSecond;
    theSecond = theThird;
}

console.log(sum);