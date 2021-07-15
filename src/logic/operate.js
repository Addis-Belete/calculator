import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let result = '';
  const num1 = Big(numberOne);
  const num2 = Big(numberTwo);

  if (operation === '+') {
    result = num1.plus(num2);
  } else if (operation === '-') {
    result = num1.minus(num2);
  }
  return result;
};

export default operate;
