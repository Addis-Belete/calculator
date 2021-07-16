import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { name } = props;
  return (

    <button type="button" className="square" value={name}>
      {name}
    </button>
  );
};

Button.propTypes = {

  name: PropTypes.string.isRequired,
};
export default Button;
