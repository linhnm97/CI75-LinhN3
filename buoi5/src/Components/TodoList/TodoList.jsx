import React, {useState} from 'react'

function TodoList() {
  const [job,setJob] = useState("");
  const [jobs, setJobs] = useState([
    {
      id: 1,
      name: "Do homework",
      done: false
    },
    {
      id: 2,
      name: "Do housework",
      done: false
    }
  ]);

  const handleChange = (e) => {
    setJob(e.target.value)
  }


  const handleSubmit = () => {
    setJobs( prev => [...prev, {id: new Date().getMilliseconds().toString(),name: job, done: false}])
    setJob("")  
    console.log(jobs)
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

  // const handleDelete = (index) => {
  //   const newList = jobs;
  //   newList.splice(index, 1);
  //   setJobs([...newList]);
  // }

  const handleDelete = (id) => {
    const newList = jobs.filter(item => item.id !== id);
    setJobs(newList);
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
            <button onClick = {() => handleDelete(value.id)}>Remove</button>
          </li>
          )
        }
        <li></li>
      </ul>
    </div>
  )
}

export default TodoList