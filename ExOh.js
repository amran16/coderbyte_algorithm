function ExOh(str) { 
 
  return str.split('x').length === str.split('o').length; 
         
}

console.log(ExOh("xooxxo"));  
console.log(ExOh("xooxxxxooxo")); 
console.log(ExOh("xoox")); 
console.log(ExOh("x"));


/*

function ExOh(str) { 
	
	exex = [];
	owes = [];
   str = str.split('');
	
	for (var i = 0; i < str.length; i++){
		if(str[i] === 'x'){
			exex.push(str[i]);
		}else if (str[i] === 'o'){
			owes.push(str[i])
		}
	}
   
   if (exex.length === owes.length){
   	return true
   }
    return false
}

console.log(ExOh("xooxxo"));  
console.log(ExOh("xooxxxxooxo")); 
console.log(ExOh("xoox")); 
console.log(ExOh("x")); 


*/