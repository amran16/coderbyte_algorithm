function AdditivePersistence(num) { 

  num = num.toString().split('');
  
  while(num.length > 1){
  	var sum = 0;
  
  for (var i = 0; i < num.length; i++){
  	sum += parseInt(num[i]); 
  }
  
  return sum.toString().length; 
  
}
  return 0;
  }
  
   

console.log(AdditivePersistence(4)); //0                            
console.log(AdditivePersistence(19)); //2

console.log(AdditivePersistence(2718)); //2
