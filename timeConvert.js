function TimeConvert(num) { 
 
  hours = Math.floor(num/60);
  
  minutes = num % 60;
  
  return (hours + ":" + minutes); 
         
} 
console.log(TimeConvert(126));     
console.log(TimeConvert(45));



function displayTime(numInSecs) {
    var num = numInSecs;
    var hh = Math.floor(num / 3600);
    var mm = Math.floor((num % 3600) / 60);
    var ss = num % 60;
    
    var result = (hh < 10 ? "0" + hh : hh);
      result += ":" + (mm < 10 ? "0" + mm : mm);
      result += ":" + (ss  < 10 ? "0" + ss : ss);
  return result;
  
}
console.log(displayTime(86400));
console.log(displayTime(188));
console.log(displayTime(9015));
