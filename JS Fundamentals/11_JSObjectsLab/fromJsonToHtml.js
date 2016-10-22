/**
 * You’re tasked with creating an HTML table of students and their scores. You will receive a single string representing an array of objects, the table’s headings should be equal to the objects’ keys, while each object’s values should be a new entry in the table. Any text values in an object should be escaped, in order to avoid introducing dangerous code into the HTML.
 Object’s keys will always be the same.
 The input comes as an array of strings containing a single string - the array of objects.
 The output should be printed on the console - for each entry row in the input print the object representing it.
 HTML
 You are provided with an HTML file to test your table in the browser.
 index.html
 <!DOCTYPE html>
 <html lang="en">
 <head>
 <meta charset="UTF-8">
 <title>FromJSONToHTMLTable</title>
 <style>
 table,th{
            border: groove;
            border-collapse: collapse;
        }
 td{
            border: 1px solid black;
        }
 td,th{
            padding: 5px;
        }
 </style>
 </head>
 <body>
 <div id="wrapper">
 </div>
 <script>
 function fromJSONToHTMLTable(input){
            //Write your code here
        }
 window.onload = function(){
            let container = document.getElementById('wrapper');
            container.innerHTML = fromJSONToHTMLTable(['[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]']);
        };
 </script>
 </body>
 </html>

 */
function createTable(input){
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
    let html = '<table>\n   <tr>';
    let arr = JSON.parse(input);
    for (let col of Object.keys(arr[0])){
        html += `<th>${escapeWord(col)}</th>`;
    }
    html += '</tr>\n';
    for (let obj of arr){
        html += `   <tr>`;
        for (let prop of Object.keys(obj)){
            let value = (typeof(obj[prop]) === 'number')? obj[prop]: escapeWord(obj[prop]);
            html += `<td>${value}</td>`;
        }
        html += '</tr>\n';
    }
    html +=  '</table>';
    return html;
}

console.log(createTable([
    '[{"Name":"Pesho <div>-a","Age":20,"City":"Sofia"},{"Name":"Gosho","Age":18,"City":"Plovdiv"},{"Name":"Angel","Age":18,"City":"Veliko Tarnovo"}]'
]))