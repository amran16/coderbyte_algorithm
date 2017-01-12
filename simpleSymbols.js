function SimpleSymbols(str) { 

  //var str = '=' + str + '=';

  str = str.split('');
  for(var i = 0; i < str.length; i++){
  	if(str[i].match(/[a-z]/g) !== null){
  		if(str[i-1] !== '+' || str[i+1] !== '+'){
  			return false;
  		}
  	}
  }

  return true; 
         
}

console.log(SimpleSymbols("+d+=3=+s+")); 
console.log(SimpleSymbols("f++d+")); 
console.log(SimpleSymbols("+R=+d+")); 
console.log(SimpleSymbols("+r=+d+")); 
console.log(SimpleSymbols("=2=+d+"));
console.log(SimpleSymbols("=2=+d="));