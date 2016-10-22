/**
 * You are given an array of numbers. Write a JS function that prints the elements at odd positions from the array,
 * doubled and in reverse order.
 The input comes as array of string elements holding numbers.
 The output is printed on the console on a single line, separated by space.

 */
function processOddNums(input){
    let arr = input.map(Number).filter((n, idn) => idn % 2 != 0).map(n => n*2).reverse();
    console.log(arr.join(' '));
}

processOddNums(['10', '15', '20', '25'])