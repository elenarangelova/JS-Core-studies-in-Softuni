/**
 * Write a JS function that orders a given array of strings, by length in ascending order as primary criteria,
 * and by alphabetical value in ascending order as second criteria. The comparison should be case-insensitive.
 The input comes as array of strings.
 The output is the ordered array of strings.

 */
function sort(input) {
    input = input.sort(function (e1, e2) {
        return e1.toLowerCase() > e2.toLowerCase();
    }).sort(function (e1, e2) {
        return e1.length > e2.length
    }).forEach(e => console.log(e));
}

sort(['test', 'Deny', 'omen', 'Default'])