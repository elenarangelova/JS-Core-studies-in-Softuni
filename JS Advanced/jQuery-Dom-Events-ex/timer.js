/**
 * Created by GTX on 25.10.2016 г..
 */
function timer() {
    let secondsElement = $('#seconds');
    let minutesElement = $('#minutes');
    let hoursElement = $('#hours');


    let startBtn = $('#start-timer');
    let stopBtn = $('#stop-timer');


    let interval = undefined;
    let totalSeconds = 0;


    startBtn.click(function () {
        if(!interval){
            interval = setInterval(step,1000);
        }

    });

    stopBtn.click(function () {
        clearInterval(interval);
        interval = undefined;
    });

    function step() {
        totalSeconds++;
        secondsElement.text(pad(totalSeconds % 60));
        let mins = totalSeconds / 60;
        minutesElement.text(pad(Math.floor(mins%60)));
        let hours = totalSeconds / 3600;
        hoursElement.text(pad(Math.floor(hours)));


    }

    function pad(num) {
        if(num<=9){
            num = `0${num}`;
        }
        return num;
    }
}