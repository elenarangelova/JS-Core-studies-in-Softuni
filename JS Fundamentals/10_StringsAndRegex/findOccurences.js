/**
 * Write a JS function that finds, how many times a given word, is used in a given sentence. Note that letter case
 * does not matter – it is case-insensitive.
 The input comes as array of strings. The input will consist of exactly 2 strings.
 The first one will be the sentence, and the second one – the word.
 The output is a single number indicating the amount of times the sentence contains the word.

 */
function wordOccurance(input){
    let str = input[0];
    let word = input[1];
    let regex = new RegExp("\\b" + word + "\\b" , 'gi');
    let arr = str.match(regex);
    (arr === null)? console.log(0) : console.log(arr.length);
}

wordOccurance(['thedf Theh dfdf', 'the']);