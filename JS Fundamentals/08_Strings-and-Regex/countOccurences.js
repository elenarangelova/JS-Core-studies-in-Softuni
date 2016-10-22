/**
 * Write a JS function that counts how many times a string occurs in a given text. Overlapping strings are allowed.
 The input comes as array of two strings. The first element is the target string and the second element is the text in which to search for occurrences.
 The output should be a number, printed on the console.

 */
function count(input) {
    let word = input[0];
    let str = input[1];
    let count = 0;
    let p = -1;
    while (true) {
        p = str.indexOf(word, p + 1);
        if (p != -1) {
            count++;
        }
        else {
            return count;
        }
    }
}

count(['str', 'str igstr, strtr'])