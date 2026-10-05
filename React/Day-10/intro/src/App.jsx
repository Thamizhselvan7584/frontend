import { useState } from "react"


export const App = () => {

const [userName,setUserName]=useState("");
const [userAge,setUserAge]=useState("");
const [show,setShow]=useState("")


const handelName =(e)=>{

setUserName(e.target.value)



}
const handelAge =(e)=>{
setUserAge(e.target.value)
}

const click=()=>{
setShow(userName)
}


  return (<>
    <div>
      <input type="text"  onChange={handelName} placeholder='Enter Name'/>
      <input type="text"  onChange={handelAge} placeholder='Enter Name'/>
   <button onClick={click}>click me</button>
    </div>

    <div>
     <p>{show}</p>
    </div>
    </>
  )
}
export default App