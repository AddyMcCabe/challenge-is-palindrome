// Write your code below
function checkPalindrome(str){
    const arrayValues = str.split('');
    const reverseArrayValues = arrayValues.reverse();
    const reverseStr = reverseArrayValues.join('');

    return str === reverseStr
    
    }
console.log(checkPalindrome('racecar'))


// jackies answer for loop way 
let word = "Racecar";

function isPalindrome(str) {
  let palindrome = true;
  for(i = 0; i < str.length; i++) {
    if(str[i] !== str[str.length - 1 - i]) {
      palindrome = false;
      break;
    }
  }
  return palindrome;
}

console.log(isPalindrome(word))