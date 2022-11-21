import React from 'react';
import './style.css';
import CustomButton from './CustomButton/Custombutton';

export default function App() {
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
