import logo from './logo.svg';
import './App.css';
// import Demo from "./Components/Demo1/index";
import CreatePerson from './Components/Demo2/CreatePerson';
import ListPerson from './Components/Demo2/ListPerson';
import {useState} from "react";
import TrafficLight from './Components/Demo3/TrafficLight';


function App() {
  const [listPerson, setListPerson] = useState([{
    name: "Hao",
    age: 18
  }, {
    name: "Linh",
    age: 18
  }
  ])

  const addPerson = (person) => {
    setListPerson ([...listPerson, person])
  }
  return (
    <div className="App">
      {/* <TrafficLight /> */}
      {/* <Demo /> */}
      <CreatePerson addPerson={addPerson}/>
      <ListPerson listPerson={listPerson}/>
    </div>
  );
}

export default App;
