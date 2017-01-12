function FirstFactorial(num) {  
  
  if((num === 0) || (num === 1))
     return 1;
  else 
  return (num * FirstFactorial(num - 1));
     
}
   
console.log(FirstFactorial(5));