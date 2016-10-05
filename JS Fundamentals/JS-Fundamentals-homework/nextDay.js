/**
 * Write a JS function that calculates the date of the next day by given year, month and day.
 The input comes as array of three string elements that need to be parsed as numbers. The first element is the year, the second is the month and the third is the day.
 The output should be returned as a result of your function.

 */
function nextDay([year, month, day]){
    let date = new Date(year, month-1, day);
    let oneDay = 24 * 60 * 60 * 1000;   // milliseconds in 1 day
    let nextDate = new Date(date.getTime() + oneDay);
    return nextDate.getFullYear() + '-' + (nextDate.getMonth()+1) + '-' + nextDate.getDate()
}

nextDay['2016', '9', '30'];