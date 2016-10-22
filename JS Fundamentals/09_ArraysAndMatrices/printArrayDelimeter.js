/**
 * Write a JS function that prints a given array.
 The input comes as array of strings. The last element of the array is the delimiter.
 The output is the same array, printed on the console, each element separated from the others by the given delimiter.

 */
function print(arr){
    let delimiter = arr[arr.length-1];
    arr = arr.filter((e, ide) => ide < arr.length-1);
    console.log(arr.join(delimiter));
}

print(['One',
    'Two',
    'Three',
    'Four',
    'Five',
    '-'
])