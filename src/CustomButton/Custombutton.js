import React from 'react';

const CustomButton = ({ name }) => {
  return (
    <div>
      <button onClick={() => alert(`You have clicked ${name}`)}>{name}</button>
    </div>
  );
};

export default CustomButton;
