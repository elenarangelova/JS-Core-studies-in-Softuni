/**
 * Created by GTX on 29.10.2016 г..
 */
function solve(obj) {

    if(obj.handsShaking){
        obj.bloodAlcoholLevel += 0.1 * obj.weight * obj.experience;
        obj.handsShaking = false;
        return obj;
    }
    else{

        return obj;
    }
}