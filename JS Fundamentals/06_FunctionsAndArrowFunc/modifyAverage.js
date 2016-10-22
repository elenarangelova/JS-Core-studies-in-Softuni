/**
 * Write a JS program that modifies a number until the average value of all of its digits is higher than 5.
 * In order to modify the number, your program should append a 9 to the end of the number, when the average
 * value of all of its digits is higher than 5 the program should stop appending. If the number’s average value
 * of all of its digits is already higher than 5, no appending should be done.
 The input is a single number received as an array of strings.
 The output should consist of a single number - the final modified number which has an average value of all of
 its digits higher than 5. The output should be printed on the console.
 Constraints
 •	The input number will consist of no more than 6 digits.
 •	The input will be a valid number (there will be no leading zeroes).

 */
function modifyAverage(input){
    let num = Number(input[0]);
    let avr = function(num) {return num.toString().split('').map(Number).reduce((a, b) => a+b)/num.toString().length};
    let append9 = function(num){ return Number(num.toString() + '9')};

    while (avr(num) <= 5){
        num = append9(num);
    }
    console.log(num)
}

modifyAverage([5835])