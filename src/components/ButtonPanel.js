import React from 'react';
import Button from './Button';

class ButtonPannel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  static renderButton(i) {
    return <Button name={i} />;
  }

  render() {
    return (
      <div className="board">
        <div className="board-row">
          {ButtonPannel.renderButton('AC')}
          {ButtonPannel.renderButton('+/-')}
          {ButtonPannel.renderButton('%')}
          {ButtonPannel.renderButton('/')}
        </div>
        <div className="board-row">
          {ButtonPannel.renderButton('7')}
          {ButtonPannel.renderButton('8')}
          {ButtonPannel.renderButton('9')}
          {ButtonPannel.renderButton('X')}
        </div>
        <div className="board-row">
          {ButtonPannel.renderButton('4')}
          {ButtonPannel.renderButton('5')}
          {ButtonPannel.renderButton('6')}
          {ButtonPannel.renderButton('-')}
        </div>
        <div className="board-row">
          {ButtonPannel.renderButton('1')}
          {ButtonPannel.renderButton('2')}
          {ButtonPannel.renderButton('3')}
          {ButtonPannel.renderButton('+')}
        </div>
        <div className="board-row">
          {ButtonPannel.renderButton('0')}
          {ButtonPannel.renderButton('.')}
          {ButtonPannel.renderButton('=')}

        </div>

      </div>

    );
  }
}
export default ButtonPannel;
