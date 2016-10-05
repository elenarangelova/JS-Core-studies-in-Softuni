/**
 * Write a JS function that reads an 8-bit binary number and converts it to a decimal.
 The input comes as an array of one string element, representing a binary number.
 The output should be printed to the console.

 */
function binaryToDecimal(input){
    let binary = input[0];
    let result = parseInt(binary, 2)
    console.log(result);
}

binaryToDecimal(['00001001'])