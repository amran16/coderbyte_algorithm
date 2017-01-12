function SimpleAdding(num) { 
  
  var total = 0;
    
  for(var i = 0; i <= num; i++){
      total = total + i;
  }
  return total;
}

console.log(SimpleAdding(12));
console.log(SimpleAdding(140));