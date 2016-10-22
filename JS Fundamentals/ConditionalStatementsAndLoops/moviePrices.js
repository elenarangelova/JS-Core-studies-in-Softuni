/**
 * Movie ticket prices in a big retro-cinema depend on the movie title and on the day of week as shown below:
 Movie Title	Monday	Tuesday	Wednesday	Thursday	Friday	Saturday	Sunday
 The Godfather	12	10	15	12.50	15	25	30
 Schindler's List	8.50	8.50	8.50	8.50	8.50	15	15
 Casablanca	8	8	8	8	8	10	10
 The Wizard of Oz	10	10	10	10	10	15	15
 Write a JS function that calculate the ticket price by movie title and day of week.
 The input comes as array of 2 strings. The first string holds the movie title. The second string holds the day of week.
 The output should hold the ticket price or “error” if the title or day of week is invalid.

 */
function moviePrices(input){
    let movie = input[0].toLowerCase();
    let day = input[1].toLowerCase();
    let price = 0;

    switch (movie){
        case 'the godfather':
            if (day == 'monday') price = '12';
            else if (day == 'tuesday') price = '10';
            else if (day == 'wednesday' || day == 'friday') price = '15';
            else if (day == 'thursday') price = '12.50';
            else if (day == 'saturday') price = '25';
            else if (day == 'sunday') price = '30';
            else price = 'error';
            break;

        case 'schindler\'s list':
            if (day == 'saturday' || day == 'sunday') price = '15';
            else if(day == 'monday' || day == 'tuesday' || day == 'wednesday' || day == 'thursday' || day == 'friday') price = '8.50';
            else price = 'error';
            break;
        case 'casablanca':
            if (day == 'saturday' || day == 'sunday') price = '10';
            else if(day == 'monday' || day == 'tuesday' || day == 'wednesday' || day == 'thursday' || day == 'friday') price = '8';
            else price = 'error';
            break;
        case 'the wizard of oz':
            if (day == 'saturday' || day == 'sunday') price = '15';
            else if(day == 'monday' || day == 'tuesday' || day == 'wednesday' || day == 'thursday' || day == 'friday') price = '10';
            else price = 'error';
            break;
        default:
            price = 'error';
            break;
    }
    console.log(price);
}

moviePrices(['The Godfatherggn','Fridaybnbn'])