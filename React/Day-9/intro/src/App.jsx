 import React, { useState } from 'react'

/*export const App = () => {

  const [countNumber,setCountNumber]=useState(0)

  const add=()=>{
    setCountNumber(countNumber+1)
  }
   const Sub=()=>{
    setCountNumber(countNumber-1)
  }

   const Reset=()=>{
    setCountNumber(0)
  }


  return (<>
  <div>
    <h1>{countNumber}</h1>
    <button onClick={add}>add</button>
    <button onClick={Sub}>add</button>
    <button onClick={Reset}>Reset</button>
  </div>

  </>)
}

export default App */





export const App = () => {

  const [count,setCount]=useState(true)


const set=()=>{
  setCount(!count)


  return (
    <>
    <h1>{count}</h1>
    <button onClick={set}>change</button>
    </>
  )
}}
export default App
