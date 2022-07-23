import logo from './logo.svg';
import './App.css';
// import Indexb1 from "./Components/B/Indexb1"
import Indexb1 from './Components/B/Indexb1'
import ReactDOM from "react-dom/client";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>The privacy-friendly URL Shortener</h1>
      <Indexb1 />
    </div>
  );
}

export default App;
