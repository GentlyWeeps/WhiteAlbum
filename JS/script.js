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
	var num1=prompt("What is the first number:");
	var num2=prompt("What is the second number:");
	var num3=prompt("What is the third number:");
	var product=num1+num2+num3;
	if (product > 0) {
		alert("The product is positive");
	}
	if (product < 0) {
		alert("The product is negative");
	}
}
//		function order() {
//	var num1,num2,num3,num4
//	for(var i = 1; i <= 4; i++) {
//		var = num+i
//		prompt("What is number " + i);
//	}
	
//}