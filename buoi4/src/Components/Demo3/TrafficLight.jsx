import React from 'react'
import "./style3.css"
import {useState} from "react";

const arrColor = ["red", "green", "yellow"]
function TrafficLight() {

  const [position, setColor] = useState (0);

  const handleClick = () => {
      if(position === arrColor.length - 1){
        setColor(0)
      } else {
        setColor(prev => prev +1)
      }
  }

  return (
    <div className="total">
    <button onClick={handleClick}> Next</button>
    {arrColor.map((item, index) => {
      const classColor = position === index ? `traffic ${item}`: `traffic`
      
      return <div key= {index} className= {classColor}></div>
    })
    }
    </div> 
    )}

export default TrafficLight