/**
 * You are tasked with storing sequences of numbers. You will receive an unknown amount of arrays containing numbers from
 *
 * which you must store only the unique arrays (duplicate arrays should be discarded). An array is considered the same
 * (NOT unique) if it contains the same numbers as another array, regardless of their order.
 After storing all arrays, your program should print them back in ascending order based on their length, if two arrays
 have the same length they should be printed in order of being received from the input. Each individual array should be
 printed in descending order in the format "[a1, a2, a3,… an]". Check the examples bellow.
 The input comes as an array of strings where each entry is a JSON representing an array of numbers.
 The output should be printed on the console - each array printed on a new line in the format "[a1, a2, a3,… an]" ,
 following the above mentioned ordering.

 */
function uniqueSequences(input) {
    let set = new Set();

    input.forEach(e => {
        // extracting the numbers from the input sting, sorting
        // and JSON stringifying to be able to use set for unique values
        let arr = e.match(/([-\d.]+)/g).map(Number).sort((e1, e2) => sortArrayOfNumbers(e1, e2));
        set.add(JSON.stringify(arr));
    });

    // set -> array, JSON parse for length comparison and printing
    [...set].map(e => JSON.parse(e)).sort((e1, e2) => {
        return e1.length - e2.length;
    }).forEach(e => console.log('[' + e.join(', ') + ']'));

    function sortArrayOfNumbers(e1, e2) {
        return e2 - e1;
    }
}

uniqueSequences([
    '[-3, -2, -1, 0, 1, 2, 3, 4]',
    '[10, 1, -17.5, 0, 2, 13]',
    '[4, -3, 3, -2, 2, -1, 1, 0]',
    '[112, 113 , -114.1 -114.1]',
    '[1, 1, 1]',
    '[1, 1.0, 1]',
    '[1, 1, 1]'
])