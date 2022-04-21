// Write your code below
function checkPalindrome(str){
    const arrayValues = str.split('');
    const reverseArrayValues = arrayValues.reverse();
    const reverseStr = reverseArrayValues.join('');

    if(str === reverseStr){
        console.log('It is a palindrome')
    } else {
        console.log('It is not a palindrome')
    }
    }
checkPalindrome('racecar')
