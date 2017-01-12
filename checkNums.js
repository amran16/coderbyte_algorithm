function CheckNums(num1,num2) { 

   if(num2 === num1)  
   	return '-1';
   
   return (num2 > num1);
}
console.log(CheckNums(3, 122));  
console.log(CheckNums(2, 2)); 
console.log(CheckNums(15, 9)); 

console.log(" ");

function CheckNums(num1,num2) { 

   return (num2 === num1)? '-1' : (num2 > num1) ? true: false;   
}
console.log(CheckNums(3, 122));  
console.log(CheckNums(2, 2)); 
console.log(CheckNums(15, 9));                            

console.log(" ");

function CheckNums(num1,num2) { 

   if(num2 === num1)
      return '-1';
   
   else if (num2 > num1)
      return true;
      
   else
      return false; 
}
console.log(CheckNums(3, 122));  
console.log(CheckNums(2, 2)); 
console.log(CheckNums(15, 9));