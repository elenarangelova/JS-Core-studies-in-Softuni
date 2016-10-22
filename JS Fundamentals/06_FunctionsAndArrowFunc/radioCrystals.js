/**
 * It’s time to put your skills to work for the war effort – creating management software for a radio transmitter factory.
 * Radios require a finely tuned quartz crystal in order to operate at the correct frequency. The resource used to produce
 * them is quartz ore that comes in big chunks and needs to undergo several processes, before it reaches the desired
 * properties.
 You need to write a JS program that monitors the current thickness of the crystal and recommends the next procedure that
 will bring it closer to the desired frequency. To reduce waste and the time it takes to make each crystal your program needs
 to complete the process with the least number of operations. Each operation takes the same amount of time, but since they are done at different parts of the factory, the crystals have to be transported and thoroughly washed every time an operation different from the previous must be performed, so this must also be taken into account. When determining the order, always attempt to start from the operation that removes the largest amount of material.
 The different operations you can perform are the following:
 •	Cut – cuts the crystal in 4
 •	Lap – removes 20% of the crystal’s thickness
 •	Grind – removes 20 microns of thickness
 •	Etch – removes 2 microns of thickness
 •	X-ray – increases the thickness of the crystal by 1 micron; this operation can only be done once!
 •	Transporting and washing – removes any imperfections smaller than 1 micron (round down the number); do this after every
 batch of operations that remove material
 At the beginning of your program, you will receive a number representing the desired final thickness and a series of numbers,
 representing the thickness of crystal ore in microns. Process each chunk and print to the console the order of operations and
 number of times they need to be repeated to bring them to the desired thickness.
 The input comes as an array with a variable number of elements that must be parsed to numbers. The first number is the target
 thickness and all following numbers are the thickness of different chunks of quartz ore.
 The output is the order of operation and how many times they are repeated, every operation on a new line. See the examples
 for more information.

 */

// function radioCristal(input) {
//     input = input.map(Number);
//     let goal = input[0];
//     let commands = input.filter((e, ide) => ide > 0);
//     let str = "";
//     let count = 0;
//
//     let cut = function (num) {
//         return num * 0.25
//     };
//     let lap = function (num) {
//         return num * 0.8
//     };
//     let grind = function (num) {
//         return num -= 20
//     };
//     let etch = function (num) {
//         return num -= 2
//     };
//     let xray = function (num) {
//         return num += 1
//     };
//     let transport = function (num) {
//         return Math.floor(num)
//     };
//
//     let process = function (goal, num) {
//         let string = '';
//         while (true) {
//             // goal is met
//             if (num > goal || num < goal) {
//                 let count = 0;
//                 // cut
//                 while (cut(num) >= goal - 1) {
//                     num = cut(num);
//                     count++;
//                 }
//                 if (count > 0) {
//                     str += `Cut x${count}\n`;
//                     count = 0;
//                     num = transport(num);
//                     str += 'Transporting and washing\n';
//                 }
//                 if (num === goal) `Finished crystal ${num} microns\n`;
//                 // lap
//                 while (lap(num) >= goal - 1) {
//                     num = lap(num);
//                     count++;
//                 }
//                 if (count > 0) {
//                     str += `Lap x${count}\n`;
//                     count = 0;
//                     num = transport(num);
//                     str += 'Transporting and washing\n';
//                 }
//                 if (num === goal)`Finished crystal ${num} microns\n`;
//                 // grind
//                 while (grind(num) >= goal - 1) {
//                     num = grind(num);
//                     count++;
//                 }
//                 if (count > 0) {
//                     str += `Grind x${count}\n`;
//                     count = 0;
//                     num = transport(num);
//                     str += 'Transporting and washing\n';
//                 }
//                 if (num === goal) `Finished crystal ${num} microns\n`;
//                 // Etch
//                 while (etch(num) >= goal-1) {
//                     num = etch(num);
//                     count++;
//                 }
//                 if (count > 0) {
//                     str += `Etch x${count}\n`;
//                     count = 0;
//                     num = transport(num);
//                     str += 'Transporting and washing\n';
//                 }
//
//                 if (num === goal) `Finished crystal ${num} microns\n`;
//
//                 // X-ray
//                 if (xray(num) === goal) {
//                     num = xray(num);
//                     count++;
//                     str += `X-ray x${count}\n`;
//                     count = 0;
//                 }
//
//                 str += `Finished crystal ${num} microns\n`;
//                 return str;
//
//             }
//             else {
//                 return string;
//                 break;
//             }
//         }
//     }
//
//     commands.forEach(function (num) {
//         str += `Processing chunk ${num} microns\n`;
//         let count = 0;
//         let temp = num;
//         str = process(goal, num)
//
//     });
//
//     console.log(str);
// }
//
//
// radioCristal([1000, 3996])

function radioCrystals(input) {

    input = input.map(Number);

    let target = input[0];

    for (var i = 1; i < input.length; i++) {

        let crystal = input[i];

        console.log(`Processing chunk ${crystal} microns`)

        let cutCount =0;

        while(crystal/4 >= target) {  crystal /= 4;  cutCount++ }

        if(cutCount != 0) {

            console.log(`Cut x${cutCount}`)

            console.log("Transporting and washing");

            crystal = Math.floor(crystal);

        }

        let lapCount =0;

        while(crystal-crystal*0.2 >= target) {  crystal -= crystal*0.2;  lapCount++ }

        if(lapCount != 0) {

            console.log(`Lap x${lapCount}`)

            console.log("Transporting and washing");

            crystal = Math.floor(crystal);

        }

        let grindCount =0;

        while(crystal-20 >= target) {  crystal -= 20;  grindCount++ }

        if(grindCount != 0) {

            console.log(`Grind x${grindCount}`)

            console.log("Transporting and washing");

            crystal = Math.floor(crystal);

        }

        let etchCount =0;

        while(crystal-2 >= target-1) {  crystal -= 2;  etchCount++ }

        if(etchCount != 0) {

            console.log(`Etch x${etchCount}`)

            console.log("Transporting and washing");

            crystal = Math.floor(crystal);

        }



        if(crystal < target) {

            crystal++

            console.log(`X-ray x1`)

        }

        console.log(`Finished crystal ${target} microns`)

    }
}

radioCrystals([1000, 3996])

