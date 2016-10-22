/**
 * You will be given different juices, as strings. You will also receive quantity as a number. If you receive a juice,
 * you already have, you must sum the current quantity of that juice, with the given one. When a juice reaches 1000 quantity,
 * it produces a bottle. You must store all produced bottles and you must print them at the end.
 Note: 1000 quantity of juice is one bottle. If you happen to have more than 1000, you must make as much bottles as you can,
 and store what is left from the juice.
 Example: You have 2643 quantity of Orange Juice – this is 2 bottles of Orange Juice and 643 quantity left.
 The input comes as array of strings. Each element holds data about a juice and quantity in the following format:
 “{juiceName} => {juiceQuantity}”
 The output is the produced bottles. The bottles are to be printed in order of obtaining the bottles. Check the second
 example bellow - even though we receive the Kiwi juice first, we don’t form a bottle of Kiwi juice until the 4th line,
 at which point we have already create Pear and Watermelon juice bottles, thus the Kiwi bottles appear last in the output.

 */
function bottleJuice(input){
    let juices = {};
    let result = [];
    for (let j of input){
        let arr = j.split(' => ');
        let juiceType = arr[0];
        let amount = Number(arr[1])

        if (juiceType in juices){
            juices[`${juiceType}`] += amount;
        }
        else{
            juices[`${juiceType}`] = amount;
        }
        if (juices[`${juiceType}`] >= 1000 && !result.includes(juiceType)){
            result.push(juiceType);
        }
    }
    for (let key of result){
        let bottle = Math.floor(juices[key] / 1000);
        if (bottle > 0){
            console.log(key + ' => ' + bottle);
        }
    }
}

bottleJuice([
    'Orange => 300',
    'Peach => 1432',
    'Banana => 450',
    'Orange => 2000',
    'Peach => 600',
    'Strawberry => 549'

])