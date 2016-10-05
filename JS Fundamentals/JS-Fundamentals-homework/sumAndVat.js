/**
* Write a JS function that sums a variable number of prices and calculates their VAT (Value Add Tax, 20%).
The input comes as array of string elements that need to be parsed as numbers. The number of elements will be different every
 time.
    The output should be printed to the console on a new line for every entry
*/

function vatOfSum(arr){
    let sum = 0;

        for (let i = 0; i < arr.length; i++) {
            let number = Number(arr[i]);
            sum += number;

        }
    let vat = sum * 0.2;
    let total = sum * 1.2;
    console.log("sum = " + sum + "\n"  + "VAT = " + vat + "\n" + "total = " + total)


}

vatOfSum(['3.12', '5', '18', '19.24', '1953.2262', '0.001564', '1.1445']);