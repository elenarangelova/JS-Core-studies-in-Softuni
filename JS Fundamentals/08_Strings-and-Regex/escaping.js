/**
 * You will be given a list of strings, containing user-submitted data. Write a JS function that prints an HTML list from the data.
 * The strings, however, may contain special HTML characters, which is an oft-used method for injection attacks.
 * To prevent unwanted behavior or harmful content, all special characters need to be replaced with their encoded counterparts –
 * they will look the same to the user, but will not pose a security risk. Use the following table to compose your function:
 * Raw	Encoded
 <	&lt;
 >	&gt;
 &	&amp;
 "	&quot;
 Use the provided HTML template to visually test your code – if you don’t escape the control characters,
 formatted HTML will show up. Don’t care how the HTML template works. Your job is to write the JS escaping function only.
 The input comes as array of string elements.
 The output is the return value of your function. Compose the list in a string and return it. See the examples for formatting details.
html::
 <!DOCTYPE html>
 <html lang="en">
 <head>
 <meta charset="UTF-8">
 <title>Escaping</title>
 </head>
 <body>
 <div><label for="userInput">Paste test input here:</label></div>
 <div>
 <textarea rows="12" cols="40" id="userInput"></textarea>
 <input type="button" value="Escape"
 onclick="document.getElementById('result').innerHTML = htmlEscape(JSON.parse(document.getElementById('userInput').value.replace(/'/g, String.fromCharCode(34))));"/>
 </div>
 <div><label for="result">Results will show up here:</label></div>
 <div id="result"></div>
 <script>
 function htmlEscape(input) {
        // TODO
    }
 </script>
 </body>
 </html>

 */
function htmlEscape(input) {
    let escapeWord = function (word) {
        let esc = '';
        for (let i = 0; i < word.length; i++) {
            if (word[[i]] == '<') {
                esc += '&lt;';
            }
            else if (word[i] == '>') {
                esc += '&gt;';
            }
            else if (word[i] == '&') {
                esc += '&amp;';
            }
            else if (word[i] == '"') {
                esc += '&quot;';
            }
            else if (word[i] == '\'') {
                esc += '&#39;';
            }
            else {
                esc += word[i];
            }
        }
        return esc;
    }
    console.log('<ul>');
    for (let item of input) {
        console.log(`  <li>${escapeWord(item)}</li>`);
    }
    console.log('</ul>');
}

htmlEscape(['<b>unescaped text</b>', 'normal& text'])