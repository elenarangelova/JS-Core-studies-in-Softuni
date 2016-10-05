/**
 * Land surveyors use grads (also known as gon, 400 grads in full turn) in their documents. Grads are rather unwieldy though,
 * so you need to write a JS function that converts from grads to degrees. In addition, your program needs to constrain
 * the results within the range 0 gradusa <= x < 360 gradusa, so if you arrive at a value like -15 gradusa, t needs
 * to be converted to 345 and 420 becomes 60gradusa.
 * The input comes an array of one string element that needs to be parsed as a number.
 * The output should be printed to the console.
 */
function gradToDegrees(input){
    let grads = Number(input[0]);
    grads = grads % 400;
    grads += 400;
    grads = grads % 400;
    let degrees = grads * 0.9;
    console.log(degrees);
}

gradToDegrees([100])