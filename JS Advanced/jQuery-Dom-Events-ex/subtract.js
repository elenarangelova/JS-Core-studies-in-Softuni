/**
 * Created by GTX on 25.10.2016 г..
 */
function subtract() {
    let number1 = $('#firstNumber').val();
    let number2 = $('#secondNumber').val();

    let result = parseFloat(number1) - parseFloat(number2);

    $('#result').append(result);
}