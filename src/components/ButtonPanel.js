/* eslint-disable class-methods-use-this */
import React from 'react';
import Button from './Button';

class ButtonPannel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  renderButton(i) {
    return <Button name={i} />;
  }

  render() {
    return (
      <div className="board">
        <div className="board-row">
          {this.renderButton('AC')}
          {this.renderButton('+/-')}
          {this.renderButton('%')}
          {this.renderButton('/')}
        </div>
        <div className="board-row">
          {this.renderButton('7')}
          {this.renderButton('8')}
          {this.renderButton('9')}
          {this.renderButton('X')}
        </div>
        <div className="board-row">
          {this.renderButton('4')}
          {this.renderButton('5')}
          {this.renderButton('6')}
          {this.renderButton('-')}
        </div>
        <div className="board-row">
          {this.renderButton('1')}
          {this.renderButton('2')}
          {this.renderButton('3')}
          {this.renderButton('+')}
        </div>
        <div className="board-row">
          {this.renderButton('0')}
          {this.renderButton('.')}
          {this.renderButton('=')}

        </div>

      </div>

    );
  }
}
export default ButtonPannel;
