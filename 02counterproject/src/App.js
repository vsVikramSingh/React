import './App.css';
import { useState } from 'react';
 

function App() {
  //let counter = 0

  let [counter, setCounter] = useState(0)

  const addValue = () => {
    if(counter !== 20){
      setCounter(counter + 1)
    }else{
      setCounter(counter)
    }
  }

  const subValue = () => {
    if(counter !== 0){
      setCounter(counter - 1)
    }else{
      setCounter(counter)
    }
  }
  return (
    <>
    <h1> Counter Application</h1>
    <h2>Counter value: {counter}</h2>
    <button onClick={addValue}>Add value</button>
    <br/>
    <button onClick={subValue}>Remove value</button>
    </>
  );
}

export default App;
