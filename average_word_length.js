function avgWordLengthCalc(str) {
	var wordsArr = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").split(" ");

	var res = 0.0;
	for (var i = 0; i < wordsArr.length; i++) {
  		res += wordsArr[i].length;
  	}

	return (res/wordsArr.length).toFixed(2);
}


console.log(avgWordLengthCalc("q w e r t y.")); // 1.00
console.log(avgWordLengthCalc("The reduce method executes a reducer function.")); // 5.57
console.log(avgWordLengthCalc("callback is called, accumulator!")); // 6.75
console.log(avgWordLengthCalc("")); // 0