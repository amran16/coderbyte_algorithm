function BitwiseOne(strArr) { 

  // convert the two binary strings to integers
  var n1 = parseInt(strArr[0], 2);
  var n2 = parseInt(strArr[1], 2);
  
  // bitwise OR the numbers and convert the answer
  // back into a binary string
  return (n1 | n2).toString(2);
         
}
   
console.log(BitwiseOne("100", "000"));                    
console.log(BitwiseOne("00011", "01010"));         