/**
 * Write a JS program that performs and outputs different operations on an array of elements. Implement the following operations:
 •	Sum(ai) - calculates the sum all elements from the input array
 •	Sum(1/ai) - calculates the sum of the inverse values (1/ai) of all elements from the array
 •	Concat(ai) - concatenates the string representations of all elements from the array
 The input comes as an array of elements that must be parsed as numbers, where necessary.
 The output should be printed on the console on a new line for each of the operations.

 */
function agragateElements(input){
    input = input.map(Number);
    // summing numbers function
    let sumNumbers = function(input){
        let sum = 0;
        for (let num of input){
            sum += num;
        }
        return sum
    }
    // sum inversed numbers function - 1/num
    let sumInversedNums = function(input){
        let sum = 0;
        for (let num of input){
            sum += 1/num;
        }
        return sum;
    }
    // concat function
    let concatNums = function (input) {
        let result = "";
        for (let num of input){
            result += num;
        }
        return result;
    }

    // results
    let sum = sumNumbers(input);
    let sumInversed = sumInversedNums(input);
    let concat = concatNums(input);

    console.log(sum);
    console.log(sumInversed);
    console.log(concat);

}

console.log(agragateElements([2, 3, 5]));