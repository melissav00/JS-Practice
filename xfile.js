function multiplyBy(){
	var number1 = document.getElementById("firstNumber").value;
	var number2 = document.getElementById("secondNumber").value;
	document.getElementById("result").innerHTML = (number1*number2);
}

function divideBy(){
	var number1 = document.getElementById("firstNumber").value;
	var number2 = document.getElementById("secondNumber").value;
	document.getElementById("result").innerHTML = (number1/number2);
}