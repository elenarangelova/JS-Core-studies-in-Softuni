/**
 * Write a JS function that calculates the distance between two points by given x and y coordinates. Use objects to store the two points.
 The input comes as array of four string elements in the format [x1, y1, x2, y2] that need to be parsed as numbers. Each pair of elements are the coordinates of a point in 2D space.
 The output should be returned as a result of your function.

 */
function distanceBetweenPoints([x1, y1, x2, y2]) {
    let pointA = {x: x1, y: y1};
    let pointB = {x: x2, y: y2};

    let xDistance = Math.pow(pointA.x - pointB.x, 2);
    let yDistance = Math.pow(pointA.y - pointB.y, 2);

    return  Math.sqrt(xDistance + yDistance);
}

distanceBetweenPoints['2.34', '15.66', '-13.55', '-2.9985'];