/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

function Button(props) {
  return (
    <button type="button" className="square">
      {props.value}
    </button>
  );
}

export default Button;
