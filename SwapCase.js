function SwapCase(str) { 

  str = str.split('');
  
  for(var i = 0; i < str.length; i++){
  	
  	if(str[i] === str[i].toUpperCase()){
  		str[i] = str[i].toLowerCase();
  	} 
  	else if(str[i] === str[i].toLowerCase()){
  		str[i] = str[i].toUpperCase();
  	}
  }
  return str.join(''); 
         
}

console.log(SwapCase("Hello-LOL"));    //"hELLO-lol"                     
console.log(SwapCase("hELLO wORLD"));  //Hello World
console.log(SwapCase("Sup DUDE!!?")); //"sUP dude!!?"

assert(SwapCase("Hello-LOL") === "hELLO-lol", 'The case of this "Hello-LOL" should be "hELLO-lol"')


function assert(test, expectedBehavior) {
	if (!test) {
		console.log('failed:', expectedBehavior);
	} else {
		console.log('passed:', expectedBehavior);
	}
}