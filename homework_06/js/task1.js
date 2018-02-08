var arr=[];
for (var i=0; i<3; i++) {
	arr[i] = Number(prompt('Enter side',''));
}
if (checkInputData(arr)) {
 result = 'Type of triangle is ' + triangleType(arr) + ' and square is ' + triangleSquare(arr);
} 
else {
	result = 'Incorrect data';
}	
console.log(result);


function checkInputData(array) {	
	for (var i=0; i<array.length; i++) {
		if (array[i]<=0) return false;   //checking for empty/null values
		if (Number.isNaN(array[i])) return false;  //checking for non-numeric values;
	}	
	array.sort(function(a,b) { 
		return a-b;
	});
	if (array[2]>= (array[1] + array[0])) return false;  //if max side bigger/equal than sum of another sides => ERROR
	return array;
}

function triangleType(array) {
	var type;
		if ((array[0] == array[1]) && (array[1] == array[2])) {
			return type = 'Equilateral';
		}
		if ((array[0] == array[1]) || (array[1]==array[2]) || (array[0] == array[2])) {
			return type = 'Isosceles';			
		}
		if (array[2]*array[2] == (array[0]*array[0] + array[1]*array[1])) {
			return type = 'right triangle';	
		}
	return type = 'Scalene';
}

function triangleSquare(array) {
	var p = (array[2]+array[1]+array[0])/2;
	var square = Math.sqrt(p*(p-array[0])*(p-array[1])*(p-array[2]));
	return Math.round(square*100)/100;
}
