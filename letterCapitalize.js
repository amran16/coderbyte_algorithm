function letterCapitalize(str) { 
   
   words = str.toLowerCase().split(' ');
   
   for(var i = 0; i < words.length; i++){
   	 
   	 words[i] = words[i][0].toUpperCase() + words[i].slice(1);
   }
  return words.join(' '); 
}
console.log(letterCapitalize("sHoRt AnD sToUt"));                            
console.log(letterCapitalize("i ran there")); 


console.log(' ');


function letterCapitalize(str) { 
  var words=str.toLowerCase().split(' ');
  for(var i=0;i<words.length;i++){
    words[i]=words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
   
  return words.join(' '); 
         
}

console.log(letterCapitalize("sHoRt AnD sToUt"));                   
console.log(letterCapitalize("i ran there")); 
