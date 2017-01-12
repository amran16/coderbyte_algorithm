function BinaryConverter(str) { 

  // the parseInt function takes a radix as the second parameter
  // which specifies what base the number is in
  return parseInt(str, 2)
         
}

console.log(BinaryConverter("1000")); 
console.log(BinaryConverter("101")); 
console.log(BinaryConverter("100101")); 
console.log(BinaryConverter("011")); 
