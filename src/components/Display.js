/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="display-result">

        {this.props.value}
      </div>

    );
  }
}

Display.defaultProps = {
  value: '0',
};
Display.propTypes = {
  value: PropTypes.string,

};

export default Display;
