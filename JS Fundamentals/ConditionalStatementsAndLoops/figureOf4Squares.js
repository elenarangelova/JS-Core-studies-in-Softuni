/**
 * Write a JS function to print a figure of 4 squares of size n like shown in the examples below.
 The input is an integer number n in the range [2 … 200].
 The output consists of n lines for odd n and n-1 lines for even n. Each line holds 2*n-1 characters
 (+ or | or space) as shown in the examples. The figure is fully symmetric (horizontally and vertically).

 */
function draw4Squares(input) {
    let size = Number(input[0]);
    let horizontal = size * 2 - 1;
    let vertical = (size % 2 == 0) ? size - 1 : size;
    vertical = (vertical < 3) ? 3 : vertical;
    let result = "";
    for (let r = 1; r <= vertical; r++) {
        for (let c = 1; c <= horizontal; c++) {
            if (r == 1 || r == Math.ceil(vertical / 2) || r == vertical){
                result += (c == 1 || c == size || c == horizontal) ? '+' : '-';
            }
            else{
                result += (c == 1 || c == size || c == horizontal) ? '|' : ' ';
            }
        }
        result += '\n';
    }
    console.log(result);
}


draw4Squares([2])