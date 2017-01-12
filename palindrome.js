function palindrome(str) { 

  var str = str.toLowerCase().replace(/\W/g, "").replace("_", "");

  var rev = str.split('').reverse().join('');

  return str === rev;
         
}
   
console.log(palindrome("Never odd or even"));    
console.log(palindrome("0_0 (: /-\ :) 0-0"));
console.log(palindrome("A man, a plan, a canal. Panama"));
console.log(palindrome("race car"));
console.log(palindrome("_eye"));
                 
console.log('');

function palindrome(str) {
  
var string = str.toLowerCase().replace(/\W/g, "").replace("_", "");
 
var reversed = string.split('').reverse().join("");

  
 if(string === reversed){
    return true;
    }
  
    return false;
   
}

console.log(palindrome("Never odd or even"));    
console.log(palindrome("0_0 (: /-\ :) 0-0"));
console.log(palindrome("A man, a plan, a canal. Panama"));
console.log(palindrome("race car"));
console.log(palindrome("_eye"));