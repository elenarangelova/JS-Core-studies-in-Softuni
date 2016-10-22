/**
 * Write a JS function that matches all words in a text, a word is anything that consists of letters, numbers or underscores (_).
 The input comes as an array of string consisting of a single entry - the text from which to extract the words.
 The output should be printed on the console and should consist of all words concatenated with a “|“(pipe),
 check the examples bellow to better understand the format.

 */
function matchWords(input){
    let str = input[0];
    let words = str.match(/\w+/g);
    console.log(words.join('|'));
}

matchWords(['sdsd sds d_s ds wqw rw '])