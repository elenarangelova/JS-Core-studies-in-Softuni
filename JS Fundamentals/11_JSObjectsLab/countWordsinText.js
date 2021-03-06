/**
 * You are tasked to count the number of words in a text using an object as an associative array, any combination of
 * letters, digits and _ (underscore) should be counted as a word. The words should be stored in the object as properties -
 * the key being the word and the value being the amount of times the word is contained in the text.
 The input comes as an array of strings containing one entry - the text whose words should be counted.
 The text may consist of more than one sentence.
 The output should be printed on the console - the JSON representation of the object containing the words.

 */
function countWords(input){
    let regex = /\w+/g;
    let arr = input[0].match(regex);
    let result = {};
    arr.forEach(e => {
        if (e in result){
            result[e] += 1;
        }
        else{
            result[e] = 1;
        }
    });
    return JSON.stringify(result);
}

console.log(countWords([
    'Far too slow, you\'re far too slow.'
]))