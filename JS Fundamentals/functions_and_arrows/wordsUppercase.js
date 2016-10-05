/**
 * Write a JS program that extracts all words from a passed in string and converts them to upper case. The extracted words in upper case must be printed back on a single line concatenated by “, “.
 The input comes as an array of strings with only one entry - the text from which to extract and convert the words.
 The output should be a single line containing the converted string.

 */
function uppercase(input) {
    let str = input[0];
    let regex = /\W+/g;
    let array = str.split(regex);
    array = array.map(e => e.toUpperCase());
    let temp = [];
    for (let elem of array){
        elem && temp.push(elem);
    }
    array = temp;

    console.log(array.join(', '))
}

uppercase(['.Hi, how are i.mi.you.'])