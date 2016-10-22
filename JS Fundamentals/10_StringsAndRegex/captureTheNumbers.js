/**
 * Write a JS function that finds all numbers in a sequence of strings.
 The input comes as array of strings. Each element represents one of the strings.
 The output is all the numbers, extracted and printed on a single line – each separated by a single space.

 */
function captureNumbers(input){
    let arr = [];
    let regex = /\d+/g;
    for (let str of input){
        let match = regex.exec(str);
        while(match){
            arr.push(match[0]);
            match = regex.exec(str);
        }
    }
    console.log(arr.join(' '));
}

captureNumbers(['sdf f3000', '1','123:34'])