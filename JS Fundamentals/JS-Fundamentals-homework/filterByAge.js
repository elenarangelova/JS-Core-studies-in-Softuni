/**
 * Write a JS function that stores the name and age of two persons in objects and then filters them by minimum age.
 The input comes as array of string elements. The first element is the minimum age. The second and third elements are the name and age of the first person and the fourth and fifth elements – the name and age of the second person. The three age parameters need to be parsed as numbers.
 The output should be printed to the console.

 */

function filterByAge([minAge, name1, age1, name2, age2]){

    let firstPerson = ({name:name1, age:Number(age1)});
    let secondPerson = ({name:name2, age:Number(age2)});


    if (minAge <= firstPerson.age){
        console.log(firstPerson);
    }
    if (minAge <= secondPerson.age){
        console.log(secondPerson);
    }
}

filterByAge['12', 'Ivan', '15', 'Asen', '9']
