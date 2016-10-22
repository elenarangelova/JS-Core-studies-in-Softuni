/**
 * Write a JS function to solve a quadratic equation by given in standard form as its coefficients: a, b, c.
 * You may learn more about quadratic equations here: https://www.mathsisfun.com/algebra/quadratic-equation.html.
 The input comes as array of strings. Its holds the string representations of 3 real numbers: a, b and c.
 The value of a will be non-zero.
 The output depends on the equation:
 •	It holds two numbers x1 and x2 if the equation has two different solutions (roots): x1 and x2.
 o	First print the smaller root, then the greater.
 •	It holds a single number x if the equation has only one solution (root): x.
 •	It holds the text “No” if the equation has no solutions (no real roots).

 */
function quadraticEquation([a, b, c]){
    let discriminant = Math.pow(b, 2) - (4 * a * c);
    let result = [];
    if (discriminant > 0){
        let root1 = (-b + Math.sqrt(discriminant)) / (2*a);
        let root2 = (-b - Math.sqrt(discriminant)) / (2*a);
        result.push(root2);
        result.push(root1);
    }
    else if (discriminant < 0){
        let root = 'No';
        result.push(root);
    }
    else{            // discriminant == 0
        let root = -b / (2*a);
        result.push(root);
    }
    for (let root of result){
        console.log(root);
    }
}

quadraticEquation([6, 11, -35])