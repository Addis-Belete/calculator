/* eslint-disable react/no-unused-state */

import React from 'react';
import Display from './Display';
import ButtonPannel from './ButtonPanel';
import calculate from '../logic/calculator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const calculation = calculate(buttonName, data);
  }

  render() {
    return (
      <>
        <Display />
        <ButtonPannel />
      </>
    );
  }
}
export default App;
