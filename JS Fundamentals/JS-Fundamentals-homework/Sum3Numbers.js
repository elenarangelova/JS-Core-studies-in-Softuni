/**
 * Write a JS function that takes three numbers as input and outputs their sum.
 The input comes as array of string elements that need to be parsed as numbers.
 The output should be printed to the console.

 */
function sumOfNumbers(a, b, c){
    var a1 = parseInt(a);
    var b1 = parseInt(b);
    var c1 = parseInt(c);
    var sum = a1 + b1 + c1;
    return sum;
}

console.log(sumOfNumbers('1', '2', '3'));