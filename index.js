
let response = prompt("Hello User!\nInput one of the Operator below to perform a basic maths operation\n+, /, -, or *");
let num1 = parseInt(prompt("Input an integer:"));
let num2 = parseInt(prompt("Input another integer:"));

if (response == "+")
    alert(num1 + num2);
else if (response == "-")
    alert(num1 - num2);
else if (response == "/")
    alert(num1 / num2);
else if (response == "*")
    alert(num1 * num2);
else
    alert("Input the correct Operator!");
