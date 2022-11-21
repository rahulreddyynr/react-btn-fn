import React, { useState } from 'react';
import './style.css';
import CustomButton from './CustomButton/Custombutton';

export default function App() {
  const [firstbtnCount, setFirstbtnCount] = useState(0);
  return (
    <div>
      <CustomButton name="Firstbtn" />
      <br />
      <CustomButton name="SecBtn" />
      <br />
      <CustomButton name="ThiBtn" />
    </div>
  );
}
