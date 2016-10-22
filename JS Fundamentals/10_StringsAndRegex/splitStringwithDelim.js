/**
 * Write a JS function that splits a string with a given delimiter.
 The input comes as an array of strings. There will be exactly 2 strings of input. The first one is the string you
 need to split and the second one is the delimiter.
 The output should consist of all elements you’ve received, after you’ve split the given string by the given delimiter.
 Each element should be printed on a new line.

 */
function split(input){
    let str = input.slice(0, 1).join('');
    let delimiter = input.slice(-1).join('');
    str.split(delimiter).forEach(e => console.log(e));
}

split([
    'One-Two-Three-Four-Five',
    '-'
])