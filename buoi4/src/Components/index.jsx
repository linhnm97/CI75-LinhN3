import React from 'react';
import {useState} from "react";


 function Demo () {
  const [number, setNumber] = useState (0)

  const handleClick = () => {
    setNumber(number + 1)
  }
  return (
    <div className="demo">
      <p>{number}</p>
       <button onClick={handleClick}>Click</button>
    </div>
 )
 }
 
 export default Demo