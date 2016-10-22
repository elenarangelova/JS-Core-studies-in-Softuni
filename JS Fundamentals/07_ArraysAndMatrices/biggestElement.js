/**
 * Write a JS function that finds the biggest element inside a matrix.
 The input comes as array of string elements. Each element contains the elements from one row of a matrix, separated by space.
 The output is the return value of your function. Find the biggest element and return it.

 */
function biggestElement(input){
 let arr = input.join(' ').split(' ').map(Number).sort((a, b) => b-a).slice(0, 1);
 console.log(arr[0])
}

biggestElement(['1 2 345 3',
 '3 123 6567 124'])