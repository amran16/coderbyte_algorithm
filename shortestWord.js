function findShort(s){
	
	var shortest = null;

	var str = s.split(' ');

	for(var i = 0; i < str.length; i++){
		if(shortest === null || str[i].length < shortest){
			shortest = str[i].length;
		}
	}
	return shortest;
}


findShort("bitcoin take over the world maybe who knows perhaps");
findShort("turns out random test cases are easier than writing out basic ones"); 
