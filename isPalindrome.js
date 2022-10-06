// Write your code below
function checkPalindrom(string) {
    let arrayValues = string.split('');
    let reverseArrayValues = arrayValues.reverse();
    let reverseString = reverseArrayValues.join('');
    if (string == reverseString) {
        console.log('It is a palindrome');
    } else {
        console.log('It is not a palindrome')
}
}

checkPalindrom('lol')
checkPalindrom('Macey')
checkPalindrom('Racecar')
checkPalindrom('racecar')