/**
 * Write a JS function that counts how many times a specific letter occurs in a given string.
 The input comes as array of string elements. The first element is the string to check and the second element is the letter to count.
 The output should be returned as a result of your function.

 */
function countLetter([a, b]){
    let count = 0;

    for (let i = 0; i < a.length; i++) {
        if (a[i] == b)
            count++;

    }
    console.log(count);
}

console.log(countLetter('hello', 'l'));