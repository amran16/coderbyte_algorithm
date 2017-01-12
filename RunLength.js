function RunLength(str) { 
  
  var result = [], count = 1;

  str = str.split('');

  for(var i = 0; i < str.length; i++){
  	if(str[i] === str[i+1]){
  	    count++;
  	}else{
  		var entry = count + str[i];
  		//console.log(entry);
  		result.push(count + str[i]);
  		count = 1;
  	}
  	//console.log(count);
  }
  
  
  return result.join(''); 
         
}
console.log(RunLength("aabbcde"));   
console.log(RunLength("wwwbbbw")); 
console.log(RunLength("wwwggopp"));


//"2a2b1c1d1e"