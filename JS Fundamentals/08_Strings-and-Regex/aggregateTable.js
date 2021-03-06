/**
 * You will be given a list of towns and incomes for each town, formatted in a table, separated by pipes (|). Write a JS function that extracts the names of all towns and produces a sum of the incomes. Note that splitting may result in empty string elements and the number of spaces may be different in every table.
 The input comes as array of string elements. Each element is one row in a formatted table.
 The output is printed on the console on two lines. On the first line, print a comma-separated list of all towns and on the second, the sum of all incomes.

 */
function aggrTable(lines) {
    let town = [],sum =0;
    for(let l of lines){
        let townData = l.split('|');
        let townName = townData[1].trim();
        let income = Number(townData[2].trim());
        town.push(townName);
        sum += income;
    }
    console.log(town.join(', ') + '\n' + sum);
}
aggrTable(['| Sofia           | 300',
        '| Veliko Tarnovo  | 500',
        '| Yambol          | 275']
);