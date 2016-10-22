/**
 * Write a JS function that checks if a given matrix of numbers is magical. A matrix is magical if the sums of the
 * cells of every row and every column are equal.
 The input comes as array of strings. Each element represents a string of numbers, with spaces between them. Parse
 it into a matrix of numbers, so you can work with it. The input numbers will always be positive.
 The output is a Boolean result indicating whether the matrix is magical or not.

 */
function magicMatrices(arr) {
    let readMatrix = function (arr) {
        let matrix = arr.slice();
        matrix = matrix.map(e => e.split(' ').map(Number));
        return matrix;
    }
    let checkMatrix = function (arr) {
        let magic = true;
        let sum = 0;
        let tempSum = 0;
        // check horizontally
        for (let r = 0; r < arr.length; r++) {
            for (let c = 0; c < arr[r].length; c++) {
                tempSum += arr[r][c];
            }
            if (r == 0) {
                sum = tempSum;
            }
            if (sum == tempSum) {
                tempSum = 0;
            }
            else {
                magic = false;
                tempSum = 0;
                break;
            }
        }
        // check vertically
        if (magic) {
            for (let c = 0; c < arr.length; c++) {
                for (let r = 0; r < arr.length; r++) {
                    tempSum += arr[c][r];
                }
                if (c == 0) {
                    sum = tempSum;
                }
                if (sum == tempSum) {
                    tempSum = 0;
                }
                else {
                    magic = false;
                    tempSum = 0;
                    break;
                }
            }
        }
        return magic;
    }
    console.log(checkMatrix(readMatrix(arr)))
}

magicMatrices(['11 32 45',
        '21 0 1',
        '21 1 1']
)