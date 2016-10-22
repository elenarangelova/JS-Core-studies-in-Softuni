/**
 * Write a JS function that hides essential client data from secret documents that went public. You have to hide people’s
 * names, phone numbers, ids and secret base names.
 •	The names of the clients will be preceded by a single asterisk (“*”), they will always be exactly one word, they will
 contain only English alphabet letters, they will start with a capital letter and they will always be followed by either
 a space, a tabulation or the end of the string. Anything else is NOT to be considered as a name.

 •	The phone numbers of the clients will be preceded by a single plus sign (“+”) and will consist of exactly 10 symbols.
 The phone numbers can consist only of digits and dashes and they will always be followed by a space, tabulation or the end
 of the string. Anything else is NOT to be considered as a phone number.

 •	The IDs of the clients will be preceded by a single exclamation mark (“!”). The IDs of the clients will consist only of
 Lowercase and Uppercase English alphabet letters and digits and they will always be followed by a space, tabulation or the
 end of the string. Anything else is NOT to be considered as an ID.

 •	The names of the secret bases will be preceded by a single underscore (“_”) and will consist only of Uppercase and
 Lowercase English alphabet letters and digits and they will always be followed by a space, tabulation or the end of the
 string. Anything else is NOT to be considered as a secret base name.
 Constraints
 •	Usernames, phone numbers, IDs and names of secret bases can start glued to other text.
 •	Usernames, phone numbers, IDs and names of secret bases will never be split given across 2 lines.
 •	Usernames, phone numbers, IDs and names of secret bases will always have a space, tabulation or the end of the string
 after them.
 The input comes as an array of strings. Each string represents a sentence of the secret document. You need to find every
 client data element that is supposed to be secret, and hide it, by replacing it with a string of vertical bars (“|”) with
 the same length, as the discovered element.
 NOTE: The preceding symbol counts towards the discovered element’s length when deciding how many pipes to use to cover it.
 The output should be the same document, with the sensitive client data replaced by pipes.  See the example for more info.

 */
function secretData(input) {
    let replaceWord = function(w){
        return '|'.repeat(w.length);
    }

    input = input.join('\n');
    let regex = /(\*[A-Z][A-Za-z]*)(?=\s|$)|(\+[0-9-]{10})(?=\s|$)|(![A-Za-z0-9]+)(?=\s|$)|(_[A-Za-z0-9]+)(?=\s|$)/gm;
    let result = input.replace(regex, w => replaceWord(w));
    console.log(result)
}


secretData([
    'Agent *Ivankov was in the room when it all happened.*Ivankov',
    '    The person in the room was heavily armed.',
    '    Agent *Ivankov +555-49-796 had to act quick in order.',
    '    He picked up his phone +555-49-796 and called some unknown number.',
    '    I think it was +555-49-796',
    'I can\'t really remember...',
    'He said something about \"finishing work\" with subject !2491a23BVB34Q and returning to Base _Aurora21',
    'Then after that he disappeared from my sight.',
    'As if he vanished in the shadows.',
    'A moment, shorter than a second, later, I saw the person flying off the top floor.',
    'I really don\'t know what happened there.',
    'This is all I saw, that night.',
    'I cannot explain it myself...'

])