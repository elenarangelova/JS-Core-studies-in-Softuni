/**
 * Write a JS function that takes as input 6 numbers x, y, xMin, xMax, yMin, yMax and prints whether the point
 * {x, y} is inside the rectangle or outside of it. If the point is at the rectangle border, it is considered inside.
 The input comes as array of strings. Its holds the string representations of x, y, xMin, xMax, yMin, yMax.
 All numbers will in the range [-1 000 000 … 1 000 000]. It is guaranteed that xMin < xMax and yMin < yMax.
 The output is a single line holding “inside” or “outside”.

 */
function pointInsideRect(input){
    input = input.map(Number);
    let x = input[0];
    let y = input[1];
    let minX = input[2];
    let maxX = input[3];
    let minY = input[4];
    let maxY = input[5];

    if ((x >= minX && x <= maxX) && (y >= minY && y <= maxY)){
        console.log('inside');
    }
    else{
        console.log('outside');
    }
}

pointInsideRect(['12.5','-1', '2','12','-3','3'])