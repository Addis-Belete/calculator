import React, { useState } from 'react';
import Display from './Display';
import ButtonPannel from './ButtonPanel';
import calculate from '../logic/calculator';

const App = () => {
  const [data, setData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (buttonName) => {
    const calculation = calculate(buttonName, data);
    setData({
      total: calculation.total,
      next: calculation.next,
      operation: calculation.operation,
    });
  };

  const { total, next } = data;
  return (
    <div className="app">
      <div className="lets">
        <h1>Lets Do Some Math! </h1>
      </div>
      <div className="calc">
        <Display calculation={next || total} />
        <ButtonPannel clickHandler={(e) => handleClick(e.target.innerText)} />
      </div>
    </div>
  );
};

export default App;
