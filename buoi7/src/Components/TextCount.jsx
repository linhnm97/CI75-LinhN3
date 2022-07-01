import React, {useState, useEffect} from 'react'

function TextCount() {
  const [word, setWord] = useState("");
  const[number, setNumber] = useState(0)
  
  useEffect (() => {
       const newNum = word.split("").length
       setNumber(newNum)
  }, [word])


  return (
    <div>
      <textarea placeholder="Enter text" value = {word} onChange={(e)=> setWord(e.target.value)}></textarea>
      <div>Word(s) : {number}</div>
    </div>
  )
}

export default TextCount