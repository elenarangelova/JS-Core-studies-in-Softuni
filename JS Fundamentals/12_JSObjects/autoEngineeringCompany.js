/**
 * You are tasked to create a register for a company that produces cars. You need to store how many cars have been
 * produced from a specified model of a specified brand.
 The input comes as array of strings. Each element holds information in the following format:
 “{carBrand} | {carModel} | {producedCars}”
 The car brands and models are strings, the produced cars are numbers. If the car brand you’ve received already exists,
 just add the new car model to it with the produced cars as its value. If even the car model exists, just add the given
 value to the current one.
 As output you need to print – for every car brand, the car models, and number of cars produced from that model.
 The output format is:
 “{carBrand}
 ###{carModel} -> {producedCars}
 ###{carModel2} -> {producedCars}
 ...”
 The order of printing is the order in which the brands and models first appear in the input.
 The first brand in the input should be the first printed and so on. For each brand, the first model received from that
 brand, should be the first printed and so on.

 */
function sortCars(input){
    let carBrands = new Map();

    for (let line of input){
        let arr = line.split(' | ');
        let brand = arr[0];
        let model = arr[1];
        let amount = Number(arr[2]);

        // CHECK IF BRAND EXIST
        if (carBrands.has(brand)){

            // CHECK IF MODEL EXIST
            if (carBrands.get(brand).has(model)){
                // UPDATE MODEL
                let currentAmount = carBrands.get(brand).get(model);
                carBrands.get(brand).set(model, currentAmount + amount);
            }

            else{
                // ADD NEW MODEL
                carBrands.get(brand).set(model, amount);
            }
        }
        // NEW BRAND
        else{
            carBrands.set(brand, new Map());
            carBrands.get(brand).set(model, amount);
        }
    }

    // Print
    for (let key of carBrands.keys()){
        console.log(key);
        let models = carBrands.get(key);
        for (let [model, value] of models){
            console.log('###' + model + ' -> ' + value);
        }
    }
}



sortCars([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 100',
    'Lada | Niva | 100000',
    'Lada | Jigula | 1000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'

])