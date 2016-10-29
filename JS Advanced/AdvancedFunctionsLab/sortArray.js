/**
 * Created by GTX on 29.10.2016 г..
 */
function sortArray(arr, type) {
    if (type == 'asc') {
        return arr.sort((a, b) => a - b);
    } else {
        return arr.sort((a, b) => b - a);
    }
}