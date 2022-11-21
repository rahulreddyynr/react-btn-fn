import React, { useState } from 'react';
import './style.css';
import CustomButtonSec from './CustomButton/CustomButtonSec';

export default function App() {
  const [Count, Setcount] = useState(0);

  const onClickCountHandler = () => {
    Setcount((preState) => preState + 1);
  };
  console.log('FCount :', Count);
  return (
    <div>
      <CustomButtonSec
        name="Incriment btn"
        onClickCountHandler={onClickCountHandler}
        Count={Count}
      />
    </div>
  );
}
