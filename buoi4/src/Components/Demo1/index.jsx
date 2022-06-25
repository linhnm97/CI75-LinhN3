import React from 'react';
import {useState} from "react";

// count number
 function Demo () {
  const [number, setNumber] = useState (0)

  const handleClick = () => {
    setNumber(number + 1)
  }

  const handleClickSub = () => {
    setNumber(number - 1)
  }
  return (
    <div className="demo">
      <button onClick={handleClickSub}>-</button>
      <p>{number}</p>
      <button onClick={handleClick}>+</button>
    </div>
 )
 }


 export default Demo