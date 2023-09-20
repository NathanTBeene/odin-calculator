const add = (a,b) => {
  return a + b;
};
const subtract = (a,b) => {
  return a - b;
};
const multiply = (a,b) => {
  return a * b;
};
const divide = (a,b) => {
  return a / b;
};


let number;
let operator;
let number2;

const operate = (num1,operator,num2) => {
  switch (operator){
    case "+":
      return add(num1,num2);
      break;
      case "-":
      return subtract(num1,num2);
      break;
      case "*":
      return multiply(num1,num2);
      break;
      case "/":
      return divide(num1,num2);
      break;
  }
};