/* eslint-disable react/destructuring-assignment */

import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => (
  <button type="button" className="square">
    {props.name}
  </button>
);

Button.propTypes = {

  name: PropTypes.string.isRequired,
};
export default Button;
