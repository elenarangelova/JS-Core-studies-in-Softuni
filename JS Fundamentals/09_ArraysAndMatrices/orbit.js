/**
 * You will be given an empty rectangular space of cells. Then you will be given the position of a star. You need
 * to build the orbits around it.
 You will be given a coordinate of a cell, which will always be inside the matrix, on which you will put the value – 1.
 Then you must set the values of the cells directly surrounding that cell, including the diagonals, to 2. After which
 you must set the values of the next surrounding cells to 3 and so on. Check the pictures for more info.
 For example we are given a matrix which has 5 rows and 5 columns and the star is at coordinates – “0 0”.
 Then the following should happen:

 */
function orbit(input) {

    let createMatrix = function (rows, cols, x, y) {
        let matrix = [];
        for (let r = 0; r < rows; r++) {
            let line = [];
            for (let c = 0; c < cols; c++) {
                line.push(Math.max(Math.abs(r - x), Math.abs((c - y))) + 1);
            }
            matrix.push(line);
        }
        return matrix;
    }
    let printMatrix = function (matrix) {
        for (let r = 0; r < matrix.length; r++) {
            console.log(matrix[r].join(' '));
        }
    }

    let size = input[0].split(' ').map(Number);
    let rows = size[0];
    let cols = size[1];
    let coordinates = input[1].split(' ').map(Number);
    let x = coordinates[0];
    let y = coordinates[1];

    let matrix = createMatrix(rows, cols, x, y);
    printMatrix(matrix);
}

orbit(['3 3',
    '2 2'])