import { useState } from 'react'
import './App.css'

function App() {

  // count = current value
  // setCount = function to change count
  // 0 = initial value

  const [count, setCount] = useState(0)

  return (
    <div className="container">

      <h1>React useState Example</h1>

      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Add
      </button>

      <button onClick={() => setCount(count - 1)}>
        Subtract
      </button>

      <button onClick={() => setCount(0)}>
        Reset
      </button>

    </div>
  )
}

export default App