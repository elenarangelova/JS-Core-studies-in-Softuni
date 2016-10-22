/**
 * Write a JS function that finds the number of equal neighbor pairs inside a matrix of variable size and type
 * (numbers or strings).
 The input comes as array of string elements. Each element contains the elements from one row of a matrix,
 separated by space.
 The output is return value of you function. Save the number of equal pairs you find and return it.

 */
function equalNeighbors(input) {
 let matrix = [];
 for (let i = 0; i < input.length; i++) {
  let line = input[i].split(' ');
  matrix.push(line);
 }
 let checkRight = function (matrix, r, c) {
  if (matrix[r][c] === matrix[r][c + 1]) {
   return 1;
  }
  return 0;
 }
 let checkDown = function (matrix, r, c) {
  if (matrix[r][c] === matrix[r + 1][c]) {
   return 1;
  }
  return 0;
 }


 let count = 0;
 for (let r = 0; r <= matrix.length - 1; r++) {
  for (let c = 0; c <= matrix[r].length - 1; c++) {
   // not last col
   if (c < matrix[r].length - 1) {
    count += checkRight(matrix, r, c);
   }
   // not last row
   if (r < matrix.length-1){
    count += checkDown(matrix, r, c);
   }
   // last col
   if (c === matrix[r].length){
    if (r < matrix.length){
     count += checkDown(matrix, r, c);
    }
   }
   // last row
   if (r === matrix.length){
    if (c < matrix[r].length){
     count += checkRight(matrix, r, c);
    }
   }
  }
 }
 console.log(count);
}

equalNeighbors(['2 2 5 7 4',
     '4 0 5 3 4',
     '2 5 5 4 2']
)