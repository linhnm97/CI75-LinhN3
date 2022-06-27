import React, {useState} from 'react'
import "./style1.css"
const arrColor = ["red", "yellow", "green"];



function TrafficLights() {
  const [position,setPosition] = useState(0)

  const ColorChange = () => {
    if (position === arrColor.length - 1) {
      setPosition(0)
    } else {
      setPosition(prev => prev +1)
    }
  }

  return (
    <>
     <button onClick={ColorChange}>Next</button>
      {
        arrColor.map((value,index) => {
          const valueColor = index === position ? `traffic ${value}` : `traffic`
          return <div className= {valueColor}></div>
        })
      }
    </>
   
  )
}

export default TrafficLights