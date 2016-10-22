/**
 * Write a JS function that adds and removes numbers to / from an array. You will receive a command which can either be
 * “add” or “remove”.
 The initial number is 1. Each input command should increase that number, regardless of what it is.

 Upon receiving an “add” command you should add the current number to your array.
 Upon receiving the “remove” command you should remove the last entered number, currently existent in the array.
 The input comes as array of strings. Each element holds a command.
 The output is the array itself, with each element printed on a new line. In case of an empty array, just print “Empty”.
 Examples

 */
function addRemove (input){
    let num = 1;
    let arr = [];


    for (let i = 0; i < input.length; i++){
        if (input[i] == 'add'){
            arr.push(num);
        }
        else{
            arr = arr.filter((e, ide) => ide < arr.length-1);
        }
        num++;
    }
    if (arr.length > 0){
        arr.forEach(e => console.log(e));
    }
    else{
        console.log('Empty');
    }
}

addRemove(['add', 'add', 'remove', 'add', 'add'])