//back end aka business end

var add = function(number1, number2) {
	return (number1 + number2);
};

var subtract = function(number1, number2) {
	return (number1 - number2);
};

var multiply = function(number1, number2) {
	return (number1 * number2);
};

var divide = function(number1, number2) {
	return (number1 / number2);
};

//Front end aka user interface

//addition
$(document).ready(function() {
	$("#add").submit(function(event) {
		event.preventDefault();
		var number1 = parseInt($("#add1").val());
		var number2 = parseInt($("#add2").val());
		var result = add(number1, number2);
		$("#output").text(result);
	});

	$("#subtract").submit(function(event) {
		event.preventDefault();
		var number1 = parseInt($("#sub1").val());
		var number2 = parseInt($("#sub2").val());
		var result = subtract(number1, number2);
		$("#output").text(result);
	});

	$("#multiply").submit(function(event) {
		event.preventDefault();
		var number1 = parseInt($("#mul1").val());
		var number2 = parseInt($("#mul2").val());
		var result = multiply(number1, number2);
		$("#output").text(result);
	});

	$("#divide").submit(function(event) {
		event.preventDefault();
		var number1 = parseInt($("#div1").val());
		var number2 = parseInt($("#div2").val());
		var result = divide(number1, number2);
		$("#output").text(result);
	});


});
