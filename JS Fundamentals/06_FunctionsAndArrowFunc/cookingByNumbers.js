/**
 * Write a JS program that receives a number and a list of five operations. Perform the operations in
 * sequence by starting with the input number and using the result of every operation as starting point for the next.
 * Print the result of every operation in order. The operations can be one of the following:
 •	chop – divide the number by two
 •	dice – square root of number
 •	spice – add 1 to number
 •	bake – multiply number by 3
 •	fillet – subtract 20% from number
 The input comes as an array of 6 string elements. The first element is your starting point and must be parsed to a number.
 The remaining 5 elements are the names of operations to be performed.
 The output should be printed on the console.

 */
function cookingByNumbers(input){
    let chop = function(num) {return num/2};
    let dice = function(num) {return Math.sqrt(num);}
    let spice = function(num) {return num+1};
    let bake = function(num) {return num *3};
    let fillet = function(num) {return num * 0.8};

    let num = Number(input[0]);
    let arr = input.slice(1, input.length);

    for (let n of arr){
        switch (n){
            case 'chop': console.log(num = chop(num)); break;
            case 'dice': console.log(num = dice(num)); break;
            case 'spice': console.log(num = spice(num)); break;
            case 'bake': console.log(num = bake(num)); break;
            case 'fillet': console.log(num = fillet(num)); break;
            default: break;
        }
    }
}

cookingByNumbers([32, 'chop', 'chop', 'chop', 'chop', 'chop'])