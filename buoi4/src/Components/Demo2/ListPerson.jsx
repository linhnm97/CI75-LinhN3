import React from 'react'
import {useState} from "react";

function ListPerson({listPerson}) {
  console.log(listPerson)
  return (
    <ul>
      {listPerson.map((item, index) => <ol key = {index}>{item.name} - {item.age}</ol>)}
    </ul>
  )
}

export default ListPerson