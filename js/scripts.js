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

var heightConversion = function(heightImperial) {
	return (parseFloat(heightImperial) / 39.3701);
};

var weightConversion = function(weightImperial) {
	return(parseFloat(weightImperial) / 2.2046)
};

var heightImperial = parseInt(prompt("What is your height in inches: "));
var weightImperial = parseInt(prompt("What is your weight in pounds: "));

var heightMetric = heightConversion(heightImperial);
var weightMetric = weightConversion(weightImperial);

var result = (weightMetric/(heightMetric * heightMetric));

alert(result);
