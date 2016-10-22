/**
 * Write a JS function that finds the elements at even positions in an array.
 The input comes as array of string elements holding numbers.
 The output is the return value of your function. Collect all elements in a string, separated by space.

 */
function evenPositionElements(input) {

    // let arr = [];
    // for (let i = 0; i < input.length; i++) {
    //     if (i % 2 == 0){
    //         arr.push(input[i]);
    //     }
    // }
    // console.log(arr.join(' '));
    console.log(input.filter((x, i) => i%2==0).join(' '));
}

evenPositionElements([1, 2, 3, ,4, 5, 6, 7, 8])