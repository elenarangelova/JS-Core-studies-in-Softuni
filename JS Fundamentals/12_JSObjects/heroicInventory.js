/**
 * In the era of heroes, every hero has his own items which make him unique. Create a function which creates a register for the heroes, with their names, level, and items, if they have such. The register should accept data in a specified format, and return it presented in a specified format.
 The input comes as array of strings. Each element holds data for a hero, in the following format:
 “{heroName} / {heroLevel} / {item1}, {item2}, {item3}...”
 You must store the data about every hero. The name is a string, the level is a number and the items are all strings.
 The output is a JSON representation of the data for all the heroes you’ve stored. The data must be an array of all the heroes. Check the examples for more info.

 */
function heroicInventory(input){
    let heroData = [];
    for (let line of input){
        let arr = line.split('/').map(e => e.trim());
        let items = [];
        if (arr.length > 2){
            items = arr[2].split(',').map(e => e.trim());
        }

        let hero = {
            name:arr[0],
            level:Number(arr[1]),
            items:items
        };
        heroData.push(hero);
    }
    console.log(JSON.stringify(heroData));
}

heroicInventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'

]);