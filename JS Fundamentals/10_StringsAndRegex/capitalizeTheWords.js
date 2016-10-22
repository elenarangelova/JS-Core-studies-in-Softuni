/**
 * Write a JS function that capitalizes the given words. You need to make every word’s first letter –
 * uppercase and all other letters – lowercase.
 The input comes as a single string, containing words, separated by a space.
 The output is the same string, however with all of its words capitalized.
 Note: The words can contain any ASCII character. You need to affect only the letters.

 */
function capitalize(input){
    let str = input[0];
    let regex = /\w+/g;
    let match = regex.exec(str);
    while (match){
        let word = '';
        let toReplace = match[0];
        for (let i = 0; i < toReplace.length; i++){
            if(i === 0){
                word += toReplace[i].toUpperCase();
            }
            else{
                word += toReplace[i].toLowerCase();
            }
        }
        str = str.replace(toReplace, word);
        match = regex.exec(str);
    }
    console.log(str);
}

capitalize(['Capitalize! these4 words'])