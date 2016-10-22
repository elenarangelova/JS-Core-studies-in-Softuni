/**
 * Write a JS function that finds and extracts all the dates in the given sentences. The dates should be in format
 d-MMM-yyyy. Example: 12-Jun-1999, 3-Dec-2017.
 The input comes as an array of strings. Each string represents a sentence.
 The output should be printed on the console. The output should consist of all extracted VALID dates. Each element
 should be printed on a new line.

 */
function getAllDates(input){
    let arrDates = [];
    for (let line of input){
        let lineArr = line.match(/\b([\d]{1,2}-[A-Z]{1}[a-z]{2}-[\d]{4})\b/g);
        arrDates.push.apply(arrDates, lineArr);
    }
    arrDates.forEach(function(e){
        let arr = e.split('-');
        console.log(e + ` (Day: ${arr[0]}, Month: ${arr[1]}, Year: ${arr[2]})`);
    });
}

getAllDates(['I am born on 30-Dec-1994.',
    'This is not date: 512-Jan-1996.',
    'My father is born on the 29-Jul-1955.'])