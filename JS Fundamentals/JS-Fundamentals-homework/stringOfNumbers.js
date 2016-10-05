/**
 * Write a JS function that read a number n as input and prints all numbers from 1 to n, concatenated as a single string.
 The input comes as array of one string element that needs to be parsed as a number.
 The output should be returned as a result of your function.

 */
function StringOfNumbers(input) {
    let str = "";
    for (let i = 1; i <= input; i++) {
        str += i;
    }
    return str;
}

StringOfNumbers['11'];