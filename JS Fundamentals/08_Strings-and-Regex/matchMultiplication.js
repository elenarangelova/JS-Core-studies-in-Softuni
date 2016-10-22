/**
 * You are given a text with numbers multiplied by * in format {num1} * {num2}. Your job is to extract each two numbers in the
 * above format, multiply them and replace them with their product. The first number is integer, can be negative. The second
 * number is integer or floating-point and can be negative. There could be whitespace around the “*” symbol.
 The input comes as an array of strings, holding only one element – the text holding the numbers.
 The output should be printed on the console – it consists of the same text with the multiplied numbers replaced by their product.

 */
function match(input){
    let regex = /(-?\d+)\s*\*\s*(-?\d+\.?\d{0,2})/;
    let items = input[0].split(';');

    console.log(items.map(e => {
        let match = e.match(regex);
        let count = match[1];
        let price = match[2];
        let total = Number(count) * Number(price);
        e = e.replace(match[0], total);
        return e;
    }).join(';'));
}

match(['My bill: 2*2.50 (beer); 2* 1.20 (kepab); -2  * 0.5 (deposit).'])