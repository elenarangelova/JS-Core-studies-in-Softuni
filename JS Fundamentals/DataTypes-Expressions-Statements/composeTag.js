/**
 * Write a JS function that composes an HTML image tag.
 The input comes as an array of string elements. The first element is the location of the file and the second is the alternate text.
 The output should be printed to the console in the following format:
 <img src="{file location}" alt="{alternate text}">

 */
function composeTag(args) {
    let location = args[0];
    let text = args[1];

    let tag = `<img src="${location}" alt="${text}">`;

    return tag;
}

console.log(composeTag(['smiley.gif', 'Smiley Face']));