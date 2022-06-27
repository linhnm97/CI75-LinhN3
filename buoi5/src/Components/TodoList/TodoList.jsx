import React, {useState} from 'react'

function TodoList() {
  const [job,setJob] = useState("");
  const [jobs, setJobs] = useState([
    {
      name: "Do homework",
      done: false
    },
    {
      name: "Do housework",
      done: false
    }
  ]);

  const handleChange = (e) => {
    setJob(e.target.value)
  }


  const handleSubmit = () => {
    setJobs( prev => [...prev, {name: job, done: false}])
    setJob("")  
  }

  const handleDone = (index) => {
    const newJobs = jobs.map((item,i) => {
      if(i === index) {
        return {...item, done: true};
      } else {
        return item;
      }
    })
    setJobs(newJobs)
  }

  const handleDoneAll = () => {
    const newJobs = jobs.map(item => ({...item, done: true}))
    setJobs(newJobs)
  }

  const handleDelete = (index) => {
    var newList = jobs;
    newList.splice(index, 1);
    setJobs([...newList]);
  }
  return (
    <div>
      <input value = {job} onChange= {(e) => handleChange(e)} type="text"></input>
      <button onClick={handleSubmit}>Add</button>
      <button onClick = {handleDoneAll}>Done All</button>
      <ul>
        {
          jobs.map((value,index) => <li key = {index}>{`${value.name} ${value.done == true ? "-done": ""}`} 
            <button onClick= { () => handleDone(index)}>Done</button>
            <button onClick = {() => handleDelete(index)}>Remove</button>
          </li>
          )
        }
        <li></li>
      </ul>
    </div>
  )
}

export default TodoList