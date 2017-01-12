function AlphabetSoup(str) { 
	
   return str.split('').sort().join('');
}

console.log(AlphabetSoup("coderbyte"));  
console.log(AlphabetSoup("hello")); 
