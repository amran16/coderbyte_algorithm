function ChangingSequence(arr) { 
	
	var increasing = arr[1] > arr[0] ? true: false;
	
    for(var i = 2; i < arr.length; i++){
    	
    	var seq = arr[i] > arr[i - 1];
    	
    	if(seq !== increasing){
    		return i - 1;
    	}
  }

  return -1; 
         
}

console.log(ChangingSequence([1, 2, 4, 6, 4, 3, 1]));
console.log(ChangingSequence([-4, -2, 9, 10]));
console.log(ChangingSequence([5, 4, 3, 2, 10, 11]));