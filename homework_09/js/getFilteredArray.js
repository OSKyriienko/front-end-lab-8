function getFilteredArray(array, predicateFunction) {
	let newArray = [];
	forEach(array, function(el) {
		if (predicateFunction(el)) {
			newArray.push(el);
		}
	})
	return newArray;			
}