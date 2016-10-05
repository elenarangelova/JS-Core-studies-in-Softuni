/**
 * Two objects start from point A and travel in the same direction at constant speeds V1 and V2 for a period T. Write a JS function that calculates the distance between the two object at the end of the period.
 The input comes as array of strings that need to be parsed as numbers. The first two elements are the speeds to the two objects in km/h and the third element is the time in seconds.
 The output should be printed to the console. Calculate the distance in meters.

 */

function distOverTime(input){
    let firstSpeed = Number(input[0]);
    let secondSpeed = Number(input[1]);
    let time = Number(input[2]) / 3.6;

    let dist1 = firstSpeed * time;
    let dist2 = secondSpeed * time;
    let result = Math.abs(dist1 - dist2);
    console.log(result);
}
distOverTime([0, 60, 3600]);