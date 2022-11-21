import React from 'react';

const CustomButtonSec = ({ name, onClickCountHandler }) => {
  return (
    <div>
      <button onClick={() => onClickCountHandler(name)}>{name}</button>
    </div>
  );
};

export default CustomButtonSec;
