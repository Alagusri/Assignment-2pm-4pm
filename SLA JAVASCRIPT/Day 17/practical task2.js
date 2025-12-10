let num1 = 10;
let num2 = 5;
let operator = "+"; 

switch(operator) {
    case "+":
        console.log("Sum:", num1 + num2);
        break;
    case "-":
        console.log("Difference:", num1 - num2);
        break;
    case "*":
        console.log("Product:", num1 * num2);
        break;
    case "/":
        console.log("Division:", num1 / num2);
        break;
    default:
        console.log("Invalid operator");
}
