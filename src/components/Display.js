import React from 'react';

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // eslint-disable-next-line no-undef

    return (
      <div className="display-result" />

    );
  }
}

Display.defaultProps = {
  value: 0,
};
export default Display;
