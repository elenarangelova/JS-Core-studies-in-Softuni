/**
 * Write a JS function that automatically fills a form for a lazy client. The client will give you 3 elements of data
 * about himself – his username, his email, and his phone number. After those 3 elements you will be given the form, as text,
 * with several placeholders in it. You must replace each valid placeholder with its corresponding value. The placeholders have
 * special symbols and can contain only English alphabet letters. There are 3 types of valid placeholders:
 •	<!{letters}!> - put the given username in place of this
 •	<@{letters}@> - put the given email in place of this
 •	<+{letters}+> - put the given email in place of this
 The input comes as an array of strings. The first 3 elements will represent – the username, the email and the phone number.
 Each element after that will represent a sentence, if you find a placeholder somewhere in those sentences you should replace it.
 The output should be printed on the console. The output should consist of all sentences, printed again, this time with their
 placeholders replaced with the actual data.

 */
function fill(input) {
    let username = input[0];
    let email = input[1];
    let telNumber = input[2];
    let lines = input.slice(3);

    let userReplace = /<![A-Za-z]+!>/g;
    let emailReplace = /<@[A-Za-z]+@>/g;
    let telReplace = /<\+[A-Za-z]+\+>/g;

    lines.map(function(e){
        e = e.replace(userReplace, username);
        e = e.replace(emailReplace, email);
        e = e.replace(telReplace, telNumber);
        return e;
    }).forEach(e => console.log(e));
}

fill([
    'Pesho',
    'pesho@softuni.bg',
    '90-60-90',
    'Hello, <!username!>!',
    'Welcome to your Personal profile.',
    'Here you can modify your profile freely.',
    'Your current username is: <!fdsfs!>. Would you like to change that? (Y/N)',
    'Your current email is: <@DasEmail@>. Would you like to change that? (Y/N)',
    'Your current phone number is: <+number+>. Would you like to change that? (Y/N)'
])