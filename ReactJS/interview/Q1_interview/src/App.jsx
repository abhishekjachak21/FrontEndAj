import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(5)
  
  const multiVal = () => {
    setCount(count=>count*5)
  }
  return (
    <>
      <h1>Main value: 5</h1>
      <button
      onClick={multiVal}
      >Click me! (Multiply by 5)</button>
      <h2>Multiple val: {count}</h2>
    </>
  )
}

export default App
