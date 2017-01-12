function LongestWord(sen) { 

  longest = '';
  
  word = sen.match(/\w+/g);
  
  for(var i = 0; i < word.length; i++){
  
  	if (word[i].length > longest.length){
  		longest = word[i];
  	}
  	
  }
  return longest; 
}
   

console.log(LongestWord("fun&!! time"));

console.log(LongestWord("I love dogs"));


console.log(" ");


function LongestWord(sen) {
  
  arr = sen.match(/\w+/g);
  
  arr.sort(function(a, b) {return b.length - a.length});

  return arr.shift();
 
}
   
console.log(LongestWord("saturday&!! monday*^%"));
console.log(LongestWord("I pharrel sings"));

function LongestWord(sen) { 

  var arr = sen.match(/[a-z0-9A-Z]+/g);

  var sorted = arr.sort(function(a, b) {
    return b.length - a.length;
  });

  return sorted[0];
         
}
   
LongestWord("the $$$longest# word is Coderbyte");                            
