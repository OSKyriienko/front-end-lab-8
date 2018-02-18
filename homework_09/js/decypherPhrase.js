function decypherPhrase(obj, string) {
	let reverseObj={};
	for (let key in obj) {
		reverseObj[obj[key]] = key;
	}
	return cypherPhrase(reverseObj, string);	
}