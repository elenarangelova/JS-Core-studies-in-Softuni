/**
 * Write a JS function that calculates the area and perimeter of a rectangle by given two sides.
 The input comes as array of strings that need to be parsed as numbers.
 The output should be printed to the console on two lines.

 */

function areaPerimeter([h, w]){
    let height = Number(h);
    let width = Number(w);

    let area = height * width;
    let perimeter = height*2 + width*2;
    console.log(area);
    console.log(perimeter);
}
areaPerimeter([2, 2])