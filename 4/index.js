//Declare a variable named greeting with the string value "Hello, World!" and print it.
var greeting;
greeting = "Hello world!";
console.log(greeting);
// ----------------------------------------------------------
//Define two variables with integer values and calculate their sum, difference, product, and quotient
var num1 = 10;
var num2 = 2;
var add = num1 + num2;
console.log(add); // addition
var sub = num1 - num2;
console.log(sub); // subtraction
var div = num1 / num2;
console.log(div); // division
// This applies to TypeScript. Create a string variable and try changing its type.
var message = 78;
// Use the modulus operator to find the remainder of two numbers.
var mod = num1 % num2;
console.log(mod);
//------------------------------------------------------------
//Increment a variable's value by 1 using two different methods.
var counter = 0;
counter++;
console.log(counter);
counter += 1;
console.log(counter);
// Show examples of using compound assignment operators.
var num = 10;
num += 1;
num -= 2;
num *= 9;
num /= 2;
//Write a program to check if a number is even or odd.
var temp = 2;
if (temp % 2 == 0) {
    console.log("number is even");
}
else {
    console.log("the number is odd");
}
// Check if a person is eligible to vote.
var age = 20;
if (age >= 18) {
    console.log("eligeble for vote");
}
else {
    console.log("it is not eligible");
}
//Assign a grade based on a numerical score.
var score = 85;
if (score >= 90) {
    console.log("A");
}
else if (score >= 80) {
    console.log("B");
}
else if (score >= 70) {
    console.log("c");
}
else if (score >= 60) {
    console.log("D");
}
else {
    console.log("F");
}
// Find the maximum of three numbers.
var integer1 = 78;
var integer2 = 45;
var integer3 = 55;
var max;
max = integer2;
if (integer1 > max) {
    max = integer2;
}
else if (integer3 > max) {
    max = integer3;
}
var result = "the maximum of three numbers are ".concat(max);
console.log(result);
//Write a program that converts temperature from Fahrenheit to Celsius.
var far = 45;
var cel;
cel = (far - 32) * 5 / 9;
console.log(cel);
//Check if a number is positive, negative, or zero.
var integer = -4;
if (integer > -1 && integer > 0) {
    console.log("the number is positive");
}
else if (integer < 0) {
    console.log("the number is negative");
}
else if (integer > -1 && integer < 1) {
    console.log("the number is zero");
}
//Write a program that prints the multiplication table of a given number up to 10
var table = 5;
for (var i = 1; i <= 10; i++) {
    var bop = "".concat(table, " x ").concat(i, " = ").concat(table * i);
    console.log(bop);
}
