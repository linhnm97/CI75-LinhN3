import React, {useState, useEffect} from 'react'

function TextCount() {
  const [word, setWord] = useState("");
  const[number, setNumber] = useState(0)
  
  useEffect (() => {
      setTimeout(() => {
        const newNum = word.trim().split(" ")[0] === "" ? 0 : word.trim().split(" ").length
       setNumber(newNum)
      }, 500) 
      
      return () => {clearTimeout ()}
  }, [word])


  return (
    <div>
      <textarea placeholder="Enter text" value = {word} onChange={(e)=> setWord(e.target.value)}></textarea>
      <div>Word(s) : {number}</div>
    </div>
  )
}

export default TextCount