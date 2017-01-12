
function power(base, exponent){
	var result = 1;
	for(var i = 0; i < exponent; i++){
		result = result * base;
	}
	
	return result;
}

//console.log(power(2,3));




function PowersofTwo(num) { 
	
	var power = 0;
    var counter = 1;
    
 while (power < num) {
    power = Math.pow(2, counter);  
    counter++;
    
    console.log(power);
  }
  return (num === power) ? true : false;
}
   

console.log(PowersofTwo(16));   
console.log(PowersofTwo(124)); s