/**
 * Write a JS function that calculates the area of the figure on the right by given values for w, h, W and H. The lower right corner is always common for the two rectangles.
 The input comes as array of string elements that need to be parsed as numbers.
 The output should be returned as a result of your function.

 */
function figureArea([w, h, W, H]){
    let area = 0;
    let [firstRect, secondRect, commonRect] = [W * H, w * h, Math.min(W, w) * Math.min(H, h)]

    area = firstRect + secondRect - commonRect;
    return area;
}

figureArea['2', '4', '5', '3'];