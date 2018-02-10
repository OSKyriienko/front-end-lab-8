var number = Number(prompt('Enter a natural number N (0<N<=20)',''));
var space=[], element=[], currentRow = 0, result = '';

if ((number > 0 ) && (number < 20) && Number.isInteger(number)) { 
	for (var i = 1; i <= number; i++) {
		space.push(number - i);        //number of spaces in each row
		element.push(2*i - 1);  	//number of elements in each row
	}

	while (currentRow < number) {
		for (i=0; i < space[currentRow]; i++) {
			result += '   ';
		}
		for (i=0; i < element[currentRow]; i++) {
			result += '[~]';
		}
		result += '\n';
		currentRow++;
	}	
	console.log(result);
}	
else {
	console.error("Incorrect data");
}	




