/**
 * Write a JS function that prints a triangle of n lines of “$” characters like shown in the examples.
 The input comes as array of strings. Its first element holds the number n (0 < n < 100).
 The output consists of n text lines like shown below.

 */
function triangleOfDollars(input){
    let num = Number(input[0]);
    for (let n = 1; n <= num; n++){
        let line = '$';
        line = line.repeat(n);
        console.log(line);
    }
}

triangleOfDollars(['3'])