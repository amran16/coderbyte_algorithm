function ThirdGreatest(strArr) { 

 	var sorted = strArr.sort(function(a, b){ 
  	return b.length - a.length;
  });
 
  return sorted[2]; 
         
}
   

console.log(ThirdGreatest(["coder","byte","code"]));  //code                         
console.log(ThirdGreatest(["abc","defg","z","hijk"]));  //abc

console.log(ThirdGreatest(["hello", "world", "after", "all"]));  //after


assert(ThirdGreatest(["coder","byte","code"]) === "code", 'ThirdGreatest word is "code"');

function assert(test, expectedBehavior) {
	if (!test) {
		console.log('failed:', expectedBehavior);
	} else {
		console.log('passed:', expectedBehavior);
	}
}