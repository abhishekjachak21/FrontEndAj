import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, subCounter] = useState(5);
  // let counter = 5

  const addValue = () => {
    // counter=counter+1;
    subCounter(counter=>counter+1);
    subCounter(counter=>counter+1);
    subCounter(counter=>counter+1);
    subCounter(counter=>counter+1);
    console.log("Value added", counter);
  }
  const removeValue = () => {
    subCounter(counter-1);
    console.log("Value removed", counter);
  }
  

  return (
    <>
     <h1>Chai and Abhishek</h1>
     <h2>Counterr Value: {counter}</h2>
     <button 
     onClick = { addValue }
     >Add value {counter}</button>
     <br/>
     <button
     onClick={removeValue}
     >Remove value {counter}</button>
    </>
  )
}

export default App
