function reverseNumber(num) {
	return (num > 0)?Number(num.toString().split('').reverse().join('')):-Number((-num).toString().split('').reverse().join(''));
}
