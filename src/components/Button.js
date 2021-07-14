/* eslint-disable react/require-default-props */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */

import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => (
  <button type="button" className="square">
    {props.name}
  </button>
);

Button.propTypes = {

  name: PropTypes.string,
};
export default Button;
