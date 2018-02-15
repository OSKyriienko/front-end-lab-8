function reverseNumber(num) {
	let number = Number(Math.abs(num).toString().split('').reverse().join(''));
	return (num > 0)?number:-number;
}
