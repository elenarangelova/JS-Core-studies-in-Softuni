/**
 * Write a JS function that calculates the distance between the two points in 3D by given coordinates.
 The input comes as an array of strings that need to be parsed as numbers. The first three elements are the x, y and z coordinates for the first point and the second set of arguments are the coordinates of the other point.
 The output should be printed to the console.

 */
function calculateDIstance(args) {
    let x1 = Number(args[0]);
    let y1 = Number(args[1]);
    let z1 = Number(args[2]);
    let x2 = Number(args[3]);
    let y2 = Number(args[4]);
    let z2 = Number(args[5]);

    let distance = Math.sqrt((Math.pow((x2 - x1), 2)) + (Math.pow((y2 - y1), 2) + (Math.pow((z2 - z1), 2))));

    return distance;
}

console.log(calculateDIstance(['1', '1', '0', '5', '4', '0']));
console.log(calculateDIstance(['3.5', '0', '1', '0', '2', '-1']));