/**
 * Write a JS program that prints a DNA helix with length, specified by the user. The helix has a repeating structure,
 * but the symbol in the chain follows the sequence ATCGTTAGGG. See the examples for more information.
 The input comes as an array with a single string element that must be parsed to a number. It represents the length of
 the required helix.
 The output is the completed structure, printed on the console.

 */
function dnaHelix(num) {
    num = Number(num[0]);
    let letterCount = 0;
    let rowCount = 0;
    let arr = ['A', 'T', 'C', 'G', 'T', 'T', 'A', 'G', 'G', 'G'];
    let l = function (letterCount, arr) {
        return arr[letterCount];
    }
    let updateLetterCount = function (num) {
        num += 1;
        num %= 10;
        return num;
    }

    let first = "";
    let second = "";

    for (let i = 0; i < num; i++) {
        first = arr[letterCount];
        letterCount = updateLetterCount(letterCount);
        second = arr[letterCount]
        letterCount = updateLetterCount(letterCount);
        if (rowCount == 0) {
            console.log(`**${first}${second}**`);
        }
        else if (rowCount == 1) {
            console.log(`*${first}--${second}*`);
        }
        else if (rowCount == 2) {
            console.log(`${first}----${second}`);
        }
        else {
            console.log(`*${first}--${second}*`);
        }
        rowCount++;
        rowCount %= 4;
    }
}
dnaHelix([14])