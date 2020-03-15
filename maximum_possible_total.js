function maxTotal(arr) {
	if (arr.length < 10) {
		return "Array length must be 10.";
	}
	arr.sort(function(a, b){return a - b});

	arr = arr.slice(5, 10);

	return arr.reduce((a,b) => a + b, 0);
}

console.log(maxTotal([1, 1, 0, 1, 3, 10, 10, 10, 10, 1])) // 43
console.log(maxTotal([0, 0, 0, 0, 0, 0, 0, 0, 0, 100]))   // 100
console.log(maxTotal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))    // 40
