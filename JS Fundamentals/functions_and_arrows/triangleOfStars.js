/**
 * Write a JS function that outputs a triangle made of stars with variable size, depending on an
 * input parameter. Look at the examples to get an idea.
 The input comes as an array with one string element in it, which needs to be parsed to a number.
 The output is a series of lines printed on the console, forming a triangle of variable size.

 */
function triangleOfStars(input){
    let num = Number(input[0]);
    for (let i = 1; i <= num; i++){
        console.log('*'.repeat(i));
    }
    for (let i = num-1; i >= 0; i--){
        console.log('*'.repeat(i));
    }
}

triangleOfStars([5]);