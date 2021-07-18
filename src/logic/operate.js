/* eslint-disable no-use-before-define */
/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let result = ' ';
  const num1 = new Big(numberOne);
  const num2 = new Big(numberTwo);

  if (operation === '-') {
    result = num1.minus(num2);
  } else if (operation === '+') {
    result = num1.plus(num2);
  } else if (operation === '*') {
    result = num1.times(num2);
  } else if (operation === '÷') {
    result = num1.div(notZero(num2));
  } else if (operation === '%') {
    result = num1.div(100);
  }
  return result;
};
const notZero = (n) => {
  const zero = document.getElementById('result');
  const div = document.getElementsByClassName('display-result');
  n = +n; // Coerce to number.
  if (!n) { // Matches +0, -0, NaN
    zero.innerHTML = `Invalid dividend ${n}`;
    div.append(zero);
  }
  return n;
};

export default operate;
