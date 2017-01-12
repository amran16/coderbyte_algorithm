function ABCheck(str) { 

  str = str.split('');
  for(var i = 0; i < str.length; i++){
  	if(str[i] === 'a' && str[i+4] === 'b'){
  		return true;
  	}else if (str[i] === 'b' && str[i+4] === 'a'){
  		return true
  	}
  }
   return false;  
}
   
console.log(ABCheck("after badly"));                            
console.log(ABCheck("Laura sobs"));  
console.log(ABCheck("Laurb soas"));  


function ABCheck(str) { 
  return /(a...b)/.test(str);
  
}
console.log(ABCheck("after badly"));                            
console.log(ABCheck("Laura sobs"));   
console.log(ABCheck("lane borrowed"));    
console.log(ABCheck("Laurb soas")); 
