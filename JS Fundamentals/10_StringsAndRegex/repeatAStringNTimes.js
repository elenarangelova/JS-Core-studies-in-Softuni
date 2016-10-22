/**
 * Write a JS function that repeats a given string, N times.
 The input comes as array of strings. There will always be only 2 strings of input.
 The first string will represent the one you need to repeat. The second one will represent the times you need to repeat it.
 The output is a big string, containing the given one, repeated N times.

 */
function repeatString(input){
    let str = input.slice(0,1).join('');
    let num = Number(input.slice(-1).join(''));
    console.log(str.repeat(num));
}

repeatString(['repeat', '5']);