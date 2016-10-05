/**
 * Write a JS function that composes an object by given properties. There will be 3 sets of property-value pairs (a total of 6 elements). Assign each value to its respective property of an object and return the object as a result of the function.
 The input comes as an array of string elements.
 The output should be returned as a value.

 */
function createObject(input){
    let nameKey = input[0];
    let nameVal = input[1];
    let ageKey = input[2];
    let ageVal = input[3];
    let genderKey = input[4];
    let genderVal = input[5];

    let obj = {[nameKey]:nameVal, [ageKey]: ageVal, [genderKey]: genderVal};
    console.log(obj);
}

createObject(['name', 'Pesho', 'age', '23', 'gender', 'male'])