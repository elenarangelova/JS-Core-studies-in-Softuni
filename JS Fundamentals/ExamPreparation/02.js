/**
 * Created by GTX on 16.10.2016 г..
 */
function spyMaster(input){
    let specialKey = input[0].toLocaleLowerCase();
    let result = '';
    for(let i=1; i<input.length; i++){

        let row = input[i].split(' ');

         for(let k=0; k<row.length; k++){
            let word = row[k];
            if(word == specialKey){
               let secondWord = row[k+1];
                let specialWord = secondWord.split('');
                for(let j=0; j<specialWord.length; j++){
                    let letter = specialWord[j];
                    if (letter == "!"){ specialWord[j] = letter.replace("!", "1");}
                    if (letter == "%"){ specialWord[j] = letter.replace("%", "2");}
                    if (letter == "#"){ specialWord[j] = letter.replace("#", "3");}
                    if (letter == "$"){ specialWord[j] = letter.replace("$", "4");}

                }
                let resultWorld = specialWord.join('');
                result += ' ' +  word;
                result += ' ' + resultWorld;

            }
             else{
                result += ' ' + word;
            }
        }

    }
    console.log(result);
}

spyMaster(['specialKey',
    'In this text the specialKey !ELLOWORLD! is correct, but',
    'the following specialKey $HelloWorl#d and spEcIaLKEy HOLLOWORLD1 are not, while',
    'SpeCIaLkeY   SOM%%ETH$IN and SPECIALKEY ##$$##$$ are!'
])