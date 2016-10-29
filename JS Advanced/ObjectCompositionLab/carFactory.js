/**
 * Created by GTX on 29.10.2016 г..
 */
function solve(obj) {
    let model = obj.model;
    let power = obj.power;
    let color = obj.color;
    let carriage = obj.carriage;
    let wheelsize = obj.wheelsize;

    if(wheelsize%2==0){
        wheelsize--;
    }

    let result = {
        model: model,
        engine:{},
        carriage: {
            type: carriage,
            color: color
        },
        wheels: [wheelsize,wheelsize,wheelsize,wheelsize]
    };

    if(power <= 90){
        result.engine = {
            power: 90,
            volume: 1800
        }
    }
    else if(power <= 120){
        result.engine ={
            power: 120,
            volume: 2400
        }
    }
    else{
        result.engine = {
            power: 200,
            volume: 3500
        }
    }

    return result;
}