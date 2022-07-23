import React, {useState, useMemo} from 'react'
import './App.css';
// import Example from './Components/Example';
// import Content from './Components/Content';
function App() {
  // const [count, setCount] = useState(0)

  // const increase = () => {
  //   setCount(count + 1)
  // }

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [product, setProducts] = useState([]);

  const handleSubmit =  () => {
    setProducts([... product, {
      name,
      price: +price
    }])
  }

  const total = useMemo( () => {
    product.reduce((result, product) => 
        result + product.price, 
     0)
  }, [product])
  console.log(product)

  return (
    <div>
      <input type="text" value= {name} onChange = {e => setName(e.target.value)} />
      <input type="text" value= {price} onChange = {e => setPrice(e.target.value)} />
      <button onClick={handleSubmit}>Click</button>
      {/* <Example /> */}
      {/* <div>{count}</div>
      <button onClick={increase}>Click me!</button> */}
      {/* < Content /> */}
      <div>Total {total}</div>
      <ul>
          {product.map((value, index) => <li key = {index}>{value.name}- {value.price}</li>)}
      </ul>
    </div>
  );
}

export default App;
