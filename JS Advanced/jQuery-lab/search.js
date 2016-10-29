/**
 * Created by GTX on 22.10.2016 г..
 */
function search() {
    let whatWeSearch = $('#searchText').val();
    let count = 0;
    $('#towns li').each(function(){
        if ($(this).text().indexOf(whatWeSearch) != -1){
            $(this).css('font-weight', 'bold');
            count++;
        } else {
            $(this).css('font-weight', '');
        }
    });
    $('#result').text(count + " matches found.");
    $('#searchText').val("");
}
