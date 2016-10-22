/**
 * Write a JS function that rotates an array. The array should be rotated to the right side, meaning that the last
 * element should become the first, upon rotation.
 The input comes as array of strings. The last element of the array is the amount of rotation you need to perform.
 The output is the resulted array after the rotations. The elements should be printed on one line, separated by a
 single space.

 */
function rotate(input){
    let num = Number(input[input.length-1]);
    input = input.filter((e, ide) => ide < input.length-1);
    for (let i = 0; i < num % input.length; i++){
        let last = input[input.length-1];
        for (let i = input.length-2; i >= 0; i--){
            input[i+1] = input[i]
        }
        input[0] = last;
    }
    console.log(input.join(' '));
}

rotate([1, 2, 3, 4, 2])