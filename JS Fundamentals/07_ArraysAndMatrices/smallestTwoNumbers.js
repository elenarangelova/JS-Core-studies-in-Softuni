/**
 * Write a JS function that prints the two smallest elements from an array of numbers.
 The input comes as array of string elements holding numbers.
 The output is printed on the console on a single line, separated by space.

 */
function smallestTwo(input){
    let arr = input.map(Number).sort((a, b) => a-b).slice(0, 2);
    console.log(arr.join(' '));
}

smallestTwo(['30', '15', '50', '5'])