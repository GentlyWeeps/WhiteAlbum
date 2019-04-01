function welcomeUser() {
	var name=prompt("What is your name:");
	alert("Welcome! " + name);
}
function largerNumber(){
	var num1=parseInt(prompt("Enter the first number:"));
	var num2=parseInt(prompt("Enter the second number:"));
	if (num1>num2) {
		alert(num1 + " is the larger number");
		console.log(num1);
	}
	if (num2>num1) {
		alert(num2 + " is the larger number");
		console.log(num2);
	}
}
function productNegative() {
	var num1=parseInt(prompt("Enter the first number:"));
	var num2=parseInt(prompt("Enter the second number:"));
	var num3=parseInt(prompt("Enter the third number:"));
	var product=num1+num2+num3;
	if (product > 0) {
		alert("The product is positive");
	}
	if (product < 0) {
		alert("The product is negative");
	}
}
/*
function order() {
	var num1=parseInt(prompt("Enter the first number:"));
	var num2=parseInt(prompt("Enter the second number:"));
	var num3=parseInt(prompt("Enter the third number:"));
	if(num1>num2 && num1>num3) {
		alert(num1 + "," + num2 + "," + num3);
	}
	if()
} */
