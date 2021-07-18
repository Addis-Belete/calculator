/* eslint-disable react/prop-types */
import React from 'react';

const Button = (props) => {
  const { name, handleClick } = props;

  return (

    <button type="button" className="square" name={name} onClick={handleClick}>

      {name}

    </button>
  );
};

export default Button;
