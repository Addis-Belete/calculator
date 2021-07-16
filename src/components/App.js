/* eslint-disable class-methods-use-this */
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

  handleClick(buttonName, data) {
    const calculation = calculate(buttonName, data);
    this.setState({
      total: calculation.total,
      next: calculation.next,
      operation: calculation.operation,
    });
  }

  render() {
    const { total } = this.state;
    return (
      <>
        <Display value={total} />
        <ButtonPannel />
      </>
    );
  }
}
export default App;
