// calculator
function cal(oper, num1, num2) {
    let result;
    switch (oper) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
      default:
        result = 'Invalid operator';
    }
    return result;
  }
  const oper = '-'; 
  const num1 = 13;
  const num2 = 5;
  const output = cal(oper, num1, num2); 
  console.log(output);
  