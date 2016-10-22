/**
 * Created by GTX on 15.10.2016 г..
 */
function examResults(input){
    let averagePoints = 0;
    let sameCourseNum = 0;
    let lastRow = input[input.length-1];

    for(let i=0; i < input.length-1; i++) {
        let studentInfo = input[i].split(/\s+/);
        let studentName = studentInfo[0];
        let studentCourse = studentInfo[1];
        let studentPoints = Number(studentInfo[2]);
        let studentBonuses = Number(studentInfo[3]);

        if(studentPoints < 100){
            console.log(studentName + ' failed at "' + studentCourse + '"');
        }
        else{
        let coursePoints1 = ((studentPoints /100 * 20) + studentBonuses).toFixed(2);
        let coursePoints = Math.abs(coursePoints1);
        let grade = ((coursePoints/80)*4 + 2).toFixed(2);
        if(grade > 6){
            grade = 6.00.toFixed(2);
        }
        console.log(studentName + ': Exam - "' + studentCourse + '"; Points - ' + coursePoints +
        '; Grade - '+ grade);
        }

        if(studentCourse == lastRow) {
            averagePoints += studentPoints;
            sameCourseNum ++;
        }


    }

    let aver = averagePoints/sameCourseNum;
    console.log('"' + lastRow + '" average points -> ' + aver);
}

examResults(['Pesho C#-Advanced 100 3',
'Gosho Java-Basics 157 3',
'Tosho HTML&CSS 317 12',
'Minka C#-Advanced 57 15',
    'Stanka C#-Advanced 157 15',
    'Kircho C#-Advanced 300 0',
    'Niki C#-Advanced 400 10',
    'C#-Advanced'
])