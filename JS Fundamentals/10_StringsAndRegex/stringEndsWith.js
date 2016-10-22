/**
 * Write a JS function that checks if a given string, ends with a given substring.
 The input comes as array of strings. There will always be only 2 strings of input.
 The first string will represent the main one. The second one will represent the substring.
 The output is either “true” or “false” based on the result of the check.
 The comparison is case-sensitive!

 */
function start(input){
    let str = input.slice(0, 1).join('');
    let word = input.slice(-1).join('');
    console.log((str.lastIndexOf(word) === str.length - word.length)? 'true': 'false');
}

start(['howahow','how']);