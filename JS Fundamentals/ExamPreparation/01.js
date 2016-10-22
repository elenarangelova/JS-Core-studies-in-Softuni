/**
 * Created by GTX on 16.10.2016 г..
 */
function arithmephile(input){
    let resultForDiff = [];
    for(let i=0; i<input.length-1; i++){
        let num = Number(input[i].trim());
        let diffI = input.length - 1 - i;
        if( num >= 0 && num <10 && diffI >= num){
            let resultInMulty = 1;
            let numOrder = i;
            for(let s=1; s<=num; s++){
                numOrder += 1;
                let nextS = Number(input[numOrder]);
                resultInMulty *= nextS;

            }

            resultForDiff.push(resultInMulty);
        }

    }
    let result = Math.max(...resultForDiff);
    console.log(result);
}
arithmephile(['100',
    '200',
    '2',
    '3',
    '2',
    '3',
    '25',
    '3',
    '1'
])