import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)

  const add = () => {
    if(counter<20)
    setCounter(counter+1)
  }

  const remove = () => {
    if(counter>0)
    setCounter(counter-1)
  }

  return (
   <>
   <h1>chaiAurReact{counter}</h1>
   <h2>counter Value{counter}</h2>
   <button onClick={add}>Add</button>
   <br />
   <button onClick={remove}>Remove</button>
   
   </>
  )
}

export default App
