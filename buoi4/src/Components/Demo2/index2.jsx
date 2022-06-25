import React from 'react'
import {useState} from "react";

function Demo2() {
  const [person, setPerson] = useState({
    name: "",
    age: 18
  })

  const handleChange = (e) => {
    const newPerson = {...person, name : e.target.value}
    setPerson ({newPerson});
  }

  const handleChangeAge = (e) => {
    const newPerson = {...person, age : e.target.value}
    setPerson ({newPerson})
  }

  const handleClick = () => {
    console.log(person)
  }
  return (
    <div style= {{margin : "50px"}}>
      <div>
        <label htmlFor="">Name</label>
        <input type="text" value = {person.name} onChange={(e) => handleChange(e)}></input>
        <label >Age</label>
        <input type="number" value= {person.age} onChange={(e) => handleChangeAge(e)}></input>
        <button onClick={handleClick}>Add</button>
      </div>
      <div>
        {person.age}
        {person.name}
      </div>
      </div>
  )
}

export default Demo2