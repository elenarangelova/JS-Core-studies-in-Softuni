/**
 * Created by GTX on 28.10.2016 г..
 */
function fibonacci(n) {
    let fib = (function () {
        let num1 = 0;
        let num2 = 1;
        return function () {
            let old1 = num1;
            let old2 = num2;
            num1 = num2;
            num2 = old1 + old2;

            return num1;
        }
    })();

    let fibonacciNumbers = [];
    for (let i = 0; i < n; i++) {
        fibonacciNumbers.push(fib());
    }

    return fibonacciNumbers;
}