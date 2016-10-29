/**
 * Created by GTX on 29.10.2016 г..
 */
(function () {
    let recipes = {
        apple:
            [
                {name: 'carbohydrate', need: 1},
                {name: 'flavour', need: 2}
            ],
        coke:
            [
                {name: 'carbohydrate', need: 10},
                {name: 'flavour', need: 20}
            ],
        burger:
            [
                {name: 'carbohydrate', need: 5},
                {name: 'fat', need: 7},
                {name: 'flavour', need: 3}
            ],
        omelet:
            [
                {name: 'protein', need: 5},
                {name: 'fat', need: 1},
                {name: 'flavour', need: 1}
            ],
        cheverme:
            [
                {name: 'protein', need: 10},
                {name: 'carbohydrate', need: 10},
                {name: 'fat', need: 10},
                {name: 'flavour', need: 10}
            ]
    };
    let breakfastRobot = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
        restock: (microElement, quantity) => {
            breakfastRobot[microElement] += Number(quantity);
            return 'Success';
        },
        report: () => {
            return `protein=${breakfastRobot.protein} carbohydrate=${breakfastRobot.carbohydrate} fat=${breakfastRobot.fat} flavour=${breakfastRobot.flavour}`;
        },
        prepare: (recipe, quantity) => {
            let count = 0;
            for (let ingredient of recipes[recipe]) {
                if (breakfastRobot[ingredient.name] >= ingredient.need * quantity) {
                    count++;
                } else {
                    return `Error: not enough ${ingredient.name} in stock`;
                }
            }

            if (count == recipes[recipe].length) {
                for (let ingredient of recipes[recipe]) {
                    breakfastRobot[ingredient.name] -= ingredient.need * quantity;
                }

                return 'Success';
            }
        }
    };

    return function (line) {
        let args = line.split(' ');
        if (args.length == 3) {
            args[2] = Number(args[2]);
            return breakfastRobot[args[0]](args[1], args[2]);
        } else {
            return breakfastRobot[args[0]]();
        }
    }
})();