import React, { useState } from 'react';
import './style.css';
import CustomButtonSec from './CustomButton/CustomButtonSec';

export default function App() {
  const [FCount, SetFcount] = useState(0);

  const onClickCountHandler = (name) => {
    if (name == 'Firstbtn') {
      SetFcount((preState) => preState + 1);
    }
  };
  console.log('FCount :', FCount);
  return (
    <div>
      <CustomButtonSec
        name="Firstbtn"
        onClickCountHandler={onClickCountHandler}
      />
      <br />
      <CustomButtonSec name="SecBtn" />
      <br />
      <CustomButtonSec name="ThiBtn" />
    </div>
  );
}
