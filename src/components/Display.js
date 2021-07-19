/* eslint-disable react/prop-types */
import React from 'react';

const Display = ({ calculation }) => (
  <div className="display-result">

    <input id="result" defaultValue={calculation} />

  </div>

);

export default Display;
