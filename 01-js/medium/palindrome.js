/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const lowerCase = str.toLowerCase();
  if (lowerCase.length === 1) {
    return true;
  }
  // removing spaces and punctuation from the string
  const processedStr = lowerCase.replace(/[\W_]/g, "");

  // comparing the processed string with its reverse
  if (processedStr === processedStr.split("").reverse().join("")) {
    return true;
  }
  return false;
}

module.exports = isPalindrome;
