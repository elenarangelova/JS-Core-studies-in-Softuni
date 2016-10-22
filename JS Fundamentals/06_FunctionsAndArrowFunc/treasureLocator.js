/**
 * You will be given a series of coordinates, leading to a buried treasure. Use the map to the right to write a program
 * that locates on which island it is. After you find where all the treasure chests are, compose a list and print it on the
 * console. If a chest is not on any of the islands, print “On the bottom of the ocean” to inform your treasure-hunting team
 * to bring diving gear. If the location is on the shore (border) of the island, it’s still considered to lie inside.
 The input comes as an array with a variable number of elements that must be parsed to numbers. Each pair is the coordinates
 to a buried treasure chest.
 The output is a list of the locations of every treasure chest, either the name of an island or “On the bottom of the ocean”,
 printed on the console.

 */
function tresureLocator(input) {
    let location = function (x1, y1) {
        "use strict";
        if (x1 >= 8 && x1 <= 9 && y1 >= 0 && y1 <= 1) return 'Tokelau';
        else if (x1 >= 1 && x1 <= 3 && y1 >= 1 && y1 <= 3) return 'Tuvalu';
        else if (x1 >= 5 && x1 <= 7 && y1 >= 3 && y1 <= 6) return 'Samoa';
        else if (x1 >= 0 && x1 <= 2 && y1 >= 6 && y1 <= 8) return 'Tonga';
        else if (x1 >= 4 && x1 <= 9 && y1 >= 7 && y1 <= 8) return 'Cook';
        else return 'On the bottom of the ocean';
    }

    input = input.map(Number);
    for (let i = 0; i < input.length; i+=2){
        let x = input[i];
        let y = input[i+1];

        console.log(location(x, y));
    }
}

tresureLocator([6, 4])