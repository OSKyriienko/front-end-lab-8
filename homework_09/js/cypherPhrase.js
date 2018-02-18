function cypherPhrase(obj, string) {
	let cypher = getTransformedArray(string, function(el) {
		for (let key in obj) {
			if (el === key) {
				return obj[key];
			}
		}	
		return el;	
	});
	return cypher.join('');
}