/**
 * Write a JS function that checks if an input string is a palindrome.
 The input comes as an array with a single string element.
 The output is the return value of your function. It should be true if the string is a
 palindrome and false if it’s not.

 */
function palindrome(input){
    let str = input[0];
    let symmetric = true;
    for (let i = 0; i < str.length/2; i++){
        if (str[i] !== str[str.length-i-1]){
            symmetric = false;
            break;
        }
    }
    console.log(symmetric);
}

palindrome(['assaa'])