/* eslint-disable no-unused-vars */
import React from 'react';
import Display from './Display';
import ButtonPannel from './ButtonPanel';
import calculate from '../logic/calculator';

class App extends React.Component {
constructor(props){
super(props);
this.state = {
total = null,
next = null,
operation = null
}
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
