/**
 * You are given two integers n and k. Write a JS function that generates and prints the following sequence:
 •	The first element is 1
 •	Every following element equals the sum of the previous k elements
 •	The length of the sequence is n elements
 The input comes as array of two string elements holding numbers. The first element represents the number n,
 and the second – the number k.
 The output is printed on the console on a single line, separated by space.

 */
function lastKNumbersSequence([num, len]){
    [len, num].map(Number);
    let arr = [1];

    let calNum = function(arr, index, len){
        let start = (index <= len)? 0: index-len;
        let tempArray = arr.slice(start, start+len);
        let result = tempArray.reduce((a, b) => a+b);
        return result;
    }

    for (let i = 1; i < num; i++){
        arr[i] = calNum(arr, i, len);
    }
    for (let n of arr){
        console.log(n);
    }
}

lastKNumbersSequence([6, 3])