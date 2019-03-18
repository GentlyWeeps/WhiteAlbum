function welcomeUser() {
	var name=prompt("What is your name:");
	alert("Welcome! " + name);
}
function largerNumber(){
	var num1=prompt("What is the first number:");
	var num2=prompt("What is the second number:");
	if (num1>num2) {
		alert(num1 + " is the larger number");
	}
	if (num2>num1) {
		alert(num2 + " is the larger number");
	}
}
function productNegative() {
	var num1=prompt("What is the first number:");
	var num2=prompt("What is the second number:");
	var num3=prompt("What is the third number:");
	var product=num1+num2+num3;
	if (product > 0) {
		alert(The product is positive);
	}
	if (product < 0) {
		alert(The product is negative);
	}
}