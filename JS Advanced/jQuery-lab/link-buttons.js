/**
 * Created by GTX on 24.10.2016 г..
 */
function attachEvents() {
    $('a.button').on('click', buttonClicked);
    function buttonClicked() {
        $('.selected').removeClass('selected');
        $(this).addClass('selected');
    }
}