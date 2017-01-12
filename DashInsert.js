function DashInsert(num) { 
	
	num = num.split('');

  for(var i = 0; i < num.length - 1; i++){
  
  	if ((num[i] % 2 !== 0) && (num[i + 1]) % 2 !== 0){
  		
  		num[i] = num[i] + '-'
  	} 
  	
  }
    
    return num.join(''); 
         
}

console.log(DashInsert('99946')); //9-9-946                  
console.log(DashInsert('56730')); //567-30
console.log(DashInsert('454793')); //4547-9-3  

assert(DashInsert('99946') === '9-9-946', 'the output of this function is "9-9-946 "'); 

function assert(test, expectedBehavior) {
  if (!test) {
    console.log('failed:', expectedBehavior);
  } else {
    console.log('passed:', expectedBehavior);
  }
}   



