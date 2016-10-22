/**
 * You are given a JSON string representing an array of objects, parse the JSON and create a table using the supplied objects.
 * The table should have 2 columns "name" and "score", each object in the array will also have these keys.
 Any text elements must also be escaped in order to ensure no dangerous code can be passed.
 You can either write the HTML escape function yourself or use the one from the Strings and Regular Expressions Lab.
 The input comes as an array of strings containing a single string - the array of objects as a JSON.
 The output should be printed on the console - a table with 2 columns - "name" and "score", containing the
 values from the objects as rows.

 */
function scoreToHTML(input){
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
    let html = '<table>\n  <tr><th>name</th><th>score</th></tr>\n';
    let json = JSON.parse(input);

    json.forEach(function(e){
        html += `  <tr><td>${escapeWord(e.name)}</td><td>${e.score}</td></tr>\n`;
    })
    html += '</table>';
    return html;
}

console.log(scoreToHTML(['[{"name":"Pesho & Viki","score":479},{"name":"Gosho","score":205}]']))