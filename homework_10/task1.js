/**
 * Your debounce function goes here
 * function(){}
 */
 function debounce(func, interval) {
	let timeoutID = null;
	return function() {
		let self = this, args = arguments;
		let funcDelay = function() {
			func.apply(self,args);
			timeoutID = null;
		}
		if (timeoutID) clearTimeout(timeoutID);
		timeoutID = setTimeout(funcDelay, interval);

	}
}

// Example

let iterator = 0;

function increaseIteratorBy1() {
  iterator++;

  printIteratorValue();
}

function printIteratorValue() {
  console.log('Iterator value ', iterator);
}

var increaseIterator = debounce(increaseIteratorBy1, 1000);

increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator(); // Should print 'Iterator value 2'