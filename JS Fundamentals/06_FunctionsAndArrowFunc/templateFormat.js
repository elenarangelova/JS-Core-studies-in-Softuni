/**
 * Write a JS program that receives data about a quiz and prints it formatted as an XML document. The data comes as pairs of question-answer entries. The format of the document should be as follows:
 XML
 <?xml version="1.0" encoding="UTF-8"?>
 <quiz>
 <question>
 {question text}
 </question>
 <answer>
 {answer text}
 </answer>
 </quiz>
 The input comes as an array of string elements.
 The output should be printed on the console.

 */
function templateFormat(input){
    let html = '<?xml version="1.0" encoding="UTF-8"?>\n<quiz>\n';

    for (let i = 0; i < input.length; i+=2){
        html += '  <question>\n    ' + input[i] + '\n  </question>\n';
        html += '  <answer>\n    ' + input[i+1] + '\n  </answer>\n'
    }
    html += '</quiz>'
    console.log(html);
}

templateFormat(["Who was the forty-second president of the U.S.A.?",
        "William Jefferson Clinton"]
)