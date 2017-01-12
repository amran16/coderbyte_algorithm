function vowelCount(str) { 
 
  return (str.match(/[aeiou]/g)).length 
         
}
   
console.log(vowelCount("hello"));       
console.log(vowelCount("coderbyte"));  

console.log('\n');

function vowelCount1(str) { 
 
  var vowels = str.match(/[aeiou]/g);
  
  return (vowels === null) ? 0 : vowels.length;
  //return (vowels === null) ? vowels.length : 0;
  //return vowels ? vowels.length: 0;
  //return vowels ? 0 : vowels.length;
}
   
console.log(vowelCount1("sarah johns"));       
console.log(vowelCount1("oaklanderdo"));  
