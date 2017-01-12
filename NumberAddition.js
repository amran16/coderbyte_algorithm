function NumberAddition(str) { 
  var nums = str.match(/\d+/g);
  
  //console.log(nums);
  
  return nums.reduce(function(previousVal, currentVal) {
    return parseInt(previousVal) + parseInt(currentVal);
  });
  
}

console.log(NumberAddition("75Number9"));
console.log(NumberAddition("10 2One Number*1*"));
console.log(NumberAddition("55Hello"));
console.log(NumberAddition("5Hello5"));

assert(NumberAddition("75Number9") === 84, '"75Number9" should be 84')

function assert(test, expectedBehavior) {
	if (!test) {
		console.log('failed:', expectedBehavior);
	} else {
		console.log('passed:', expectedBehavior);
	}
}