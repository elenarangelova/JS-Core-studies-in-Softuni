/**
 * Write a JS program that receives two points in the format [x1, y1, x2, y2] and checks if the distances between each
 * point and the start of the cartesian coordinate system (0, 0) and between the points themselves is valid. A distance
 * between two points is considered valid, if it is an integer value. In case a distance is valid write "{x1, y1} to
 * {x2, y2} is valid", in case the distance is invalid write "{x1, y1} to {x2, y2} is invalid".
 The order of comparisons should always be first {x1, y1} to {0, 0}, then {x2, y2} to {0, 0} and finally {x1, y1} to
 {x2, y2}.
 The input consists of two points given as an array of strings.
 For each comparison print on the output either "{x1, y1} to {x2, y2} is valid" if the distance between them is valid,
 or "{x1, y1} to {x2, y2} is invalid"- if it’s invalid.

 */
function validityChecker(input){
    input = input.map(Number);
    let x1 = input[0];
    let y1 = input[1];
    let x2 = input[2];
    let y2 = input[3];

    let distance = function (x1, y1, x2, y2){ return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))};
    let valid = function (num) {return num % 1 === 0};

    let pointAToZero = valid(distance(x1, y1, 0, 0))? 'valid':'invalid';
    let pointBtoZero = valid(distance(x2, y2, 0, 0))? 'valid':'invalid';
    let PointAToPointB = valid(distance(x1, y1, x2 ,y2))? 'valid':'invalid';

    console.log(`{${x1}, ${y1}} to {0, 0} is ${pointAToZero}`);
    console.log(`{${x2}, ${y2}} to {0, 0} is ${pointBtoZero}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${PointAToPointB}`);
}

validityChecker(['2','1','1','1'])