/**
 * You will be given the coordinates of 3 points on a 2D plane. Write a program that finds the two shortest segments
 * that connect them (without going back to the starting point). When determining the listing order, use the order with
 * the lowest numerical value (see the figure in the hints for more information).
 The input comes as an array of 6 elements that must be parsed to numbers. The order is [x1, y1, x2, y2, x3, y3].
 The output is the return value of your program as a string, representing the order in which the three points must be
 visited and the final distance between them. See the examples for more info.

 */
function tripLenght(input) {
    input = input.map(Number);
    let x1 = input[0], y1 = input[1];
    let x2 = input[2], y2 = input[3];
    let x3 = input[4], y3 = input[5];

    // array of points
    let points = [point1 = {x:x1, y:y1}, point2 = {x:x2, y:y2}, point3 = {x:x3, y:y3}];


    let str = '';
    let tempDist = 0;
    let shortestDistance = 100000000000000;

    // check distance between 2 points function
    let distance = function (x1, y1, x2, y2) {
        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
    }

    // shortest path
    for (let f = 1; f <= 3; f++){
        for (let s = 1; s <= 3; s++){
            if (f != s){
                tempDist = distance(points[f-1].x, points[f-1].y, points[s-1].x, points[s-1].y);
                for (let t = 1; t <= 3; t++){
                    if (f != s && s!= t && t != f){
                        tempDist += distance(points[s-1].x, points[s-1].y, points[t-1].x, points[t-1].y)
                        let tempStr = `${f}->${s}->${t}: ${tempDist}`;
                        if (tempDist < shortestDistance){
                            shortestDistance = tempDist;
                            str = tempStr;
                        }
                    }
                }
            }
        }
    }
    console.log(str);
}

// tripLenght([0, 0, 2, 0, 4, 0])
//tripLenght([5, 1, 1, 1, 5, 4])
tripLenght([-1, -2, 3.5, 0, 0, 2])