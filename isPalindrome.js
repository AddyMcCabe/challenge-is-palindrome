// Write your code below
function checkPalindrome(str){
    const arrayValues = str.split('');
    const reverseArrayValues = arrayValues.reverse();
    const reverseStr = reverseArrayValues.join('');

    return str === reverseStr
    
    }
console.log(checkPalindrome('racecar'))
