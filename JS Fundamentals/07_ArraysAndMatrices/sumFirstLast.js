/**
 * Write a JS function that calculates and prints the sum of the first and the last elements in an array.
 The input comes as array of string elements holding numbers.
 The output is the return value of your function.

 */
function firstAndLast (input){
    input = input.map(Number);
    console.log(input[0] + input[input.length-1]);
}

firstAndLast([1, 2, 4])