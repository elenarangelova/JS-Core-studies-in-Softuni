/**
 * Write a JS program that receives two variables and an operator and performs a calculation
 * between the variables, using the operator. Store the different functions in variables and
 * pass them to your calculator.
 The input comes as an array of three strings – two need to be parsed as numbers, and one is
 the operator.
 The output should be printed on the console.

 */
function functionalCalculator([num1, num2, operator]){
    let firstNum = Number(num1);
    let secondNum = Number(num2);
    let sum = firstNum + secondNum;
    let difference = firstNum - secondNum;
    let multiply = firstNum * secondNum;
    let partition = firstNum / secondNum;

    if (operator == '+') {
        return sum;
    } else if (operator == '-') {
        return difference;
    } else if (operator == '*') {
        return multiply;
    } else if (operator == '/') {
        return partition;
    }

}

functionalCalculator([2, 4, '+']);