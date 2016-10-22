/**
 * You will be given a text as a string. Write a JS function that extracts and prints only the text that’s surrounded by parentheses.
 The input comes as array of a single string element.
 The output is printed on the console on a single line, in the form of a comma-separated list.

 */
function extract(input) {
    let str = input[0];
    let result = [];
    let rightPar = -1;
    while (true) {
        let leftPar = str.indexOf('(', rightPar+1);
        if (leftPar == -1) {
            break;
        }
        rightPar = str.indexOf(')', leftPar+1);
        if (rightPar == -1) {
            break;
        }
        let word = str.substring(leftPar+1, rightPar);
        result.push(word);
    }
    console.log(result.join(', '));

}

// extract(['sdsfdfd(d) sd sd w (inat) sd (kole)sdsssa'])
extract(['fd(a) ssd ()s(asdasdasd) sd a(111)']);