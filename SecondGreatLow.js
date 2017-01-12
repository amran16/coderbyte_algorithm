function SecondGreatLow(arr){
	
    var unique = [];

    for(var i = 0; i < arr.length; i++) {
    if (unique.indexOf(arr[i]) === -1) {
        unique.push(arr[i]);
  }
    }
 //console.log(unique);

  var sorted = unique.sort(function(a, b) { return a - b; });
  
  //console.log(sorted);

  if (sorted.length < 2) { 
    return sorted[0]; 
  } else {
    return sorted[1] + " " + sorted[sorted.length - 2];
  }

	/*arr.sort(function(a,b){return a - b;});
	
    newlen = arr.length - 2;
    
    return arr[1] + ' ' + arr[newlen];*/
	
	
}

console.log(SecondGreatLow([1, 190, 7, 180, 5]));
console.log(SecondGreatLow([4, 90]));
console.log(SecondGreatLow([7, 13]));
console.log(SecondGreatLow([4, 90, 73, 34, 15]));



function SecondGreatLow(arr) { 

  // first we create a unique array by using the filter function
  // we check to see if the index of the current element in the array 
  // is equal to the first index of the element, if so then add the
  // element to the new array
  var unique = arr.filter(function(item, pos) {
  	
     return arr.indexOf(item) === pos;
    
  });
  
 //console.log(unique);

  // sort the unique array in ascending order
  var sorted = unique.sort(function(a, b) {
    return a - b;
  });
  
 //console.log(sorted);

 
// check how many elements in the array
  if (sorted.length < 2) { 
    return sorted[0]; 
  } else {
    return sorted[1] + " " + sorted[sorted.length - 2];
  }
}
   
console.log(SecondGreatLow([1, 10, 6, 1, 55, 3, 6, 55 ]));   
console.log(SecondGreatLow([4, 90, 73, 34, 15]));
console.log(SecondGreatLow([4, 90]));
console.log(SecondGreatLow([7]));
