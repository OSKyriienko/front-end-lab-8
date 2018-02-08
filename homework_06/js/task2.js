var arr=[];
var euro = 33.85;
var usd = 27.46;

arr[0] = Number(prompt('Enter amount of EUR'));
alert(arr[0]);
arr[1] = Number(prompt('Enter amount of USD'));
alert(arr[1]);



if (checkInputData(arr)) {
		console.log(arr[0] + ' euros are equal ' + arr[0]*euro + ' UAH, ' + arr[1] +
		' dollars are equals ' + arr[1]*usd + ' UAH, one euro is equal ' + (euro/usd).toFixed(2) + ' dollars.');
}
else console.log('Incorrect Data');


function checkInputData(array) {	
	for (var i=0; i<array.length; i++) {
		if (array[i]<=0) return false;   //checking for empty/null values
		if (Number.isNaN(array[i])) return false;  //checking for non-numeric values;
	}	
	return array;
}

