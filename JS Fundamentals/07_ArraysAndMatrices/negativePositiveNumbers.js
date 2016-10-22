/**
 * Write a JS function that processes the elements in an array one by one and produces a new array.
 * Prepend each negative element at the front of the result and append each positive (or 0) element at the end of the result.
 The input comes as array of string elements holding numbers.
 The output is printed on the console, each element on a new line.

 */
function negativePositiveNumbers(input){
    input = input.map(Number);
    let arr = [];
    for (let i = 0; i < input.length; i++){
        if (input[i] < 0){
            arr.unshift(input[i]);
        }
        else{
            arr.push(input[i]);
        }
    }
    arr.forEach(f => console.log(f));
}

negativePositiveNumbers([1, 2, 4, 6, -1, 5, -2]);