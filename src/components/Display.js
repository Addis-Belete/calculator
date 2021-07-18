/* eslint-disable react/prop-types */
import React from 'react';

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { calculation } = this.props;
    return (
      <div className="display-result">

        <input id="result" defaultValue={calculation} />

      </div>

    );
  }
}

export default Display;
