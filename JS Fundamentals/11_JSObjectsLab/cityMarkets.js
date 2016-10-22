/**
 * You have been tasked to follow the sales of products in the different towns. For every town you need to keep track of all the products sold, and for every product, the amount of total income.
 The input comes as array of strings. Each element will represent data about a product and its sales. The format of input is:
 {town} -> {product} -> {amountOfSales} : {priceForOneUnit}
 The town and product are both strings. The amount of sales and price for one unit will be numbers. Store all towns, for every town, store its products, and for every product, its amount of total income. The total income is calculated with the following formula - amount of sales * price for one unit. If you receive as input a town you already have, you should just add the new product to it.
 As output you must print every town, its products and their total income in the following format:
 “Town – {townName}
 $$${product1Name} : {productTotalIncome}
 $$${product2Name} : {productTotalIncome}
 ...”
 The order of output for each of those entries is – by order of entrance.
*/
function cityMarkets(input){
    let towns = new Map();

    for (let line of input){
        let arr = line.split(' -> ');
        let town = arr[0];
        let product = arr[1];
        let sum = arr[2].split(' : ').map(Number).reduce((a, b) => a * b);

        // CHECK TOWNS
        if (town in towns){
            // CHECK PRODUCTS
            if (product in towns[town]){
                towns[town][product] += sum;
            }
            else{

                towns[town][product] = sum;
            }
        }
        else{
            towns[town] = new Map();
            towns[town][product] = sum;
        }
    }
    for (let town in towns){
        console.log('Town - ' + town);
        for (let product in towns[town]){
            console.log('$$$' + product + ' : ' + towns[town][product]);
        }
    }
}

cityMarkets([
    'Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Raspberry -> 200000 : 1500',
    'Sofia -> Audi Q7 -> 200 : 100000',
    'Montana -> Portokals -> 200000 : 1',
    'Montana -> Qgodas -> 20000 : 0.2',
    'Montana -> Chereshas -> 1000 : 0.3'

])