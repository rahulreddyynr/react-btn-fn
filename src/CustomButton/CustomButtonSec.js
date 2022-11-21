import React from 'react';

const CustomButtonSec = ({ name, onClickCountHandler, Count }) => {
  return (
    <div>
      <button onClick={onClickCountHandler}>{name}</button>
      <span>You have clicked {Count} times</span>
    </div>
  );
};

export default CustomButtonSec;
