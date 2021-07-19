/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { name, handleClick } = props;

  return (

    <button type="button" className="square" name={name} onClick={handleClick}>

      {name}

    </button>
  );
};
Button.propTypes = {

  name: PropTypes.string.isRequired,
};
export default Button;
