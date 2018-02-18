function getTransformedArray(array, func) {
	let newArray=[];
	forEach(array, function(el) {
		newArray.push(func(el));
	});
	return newArray;
}
