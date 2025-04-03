import React from 'react'
// import Edit from './Edit'
import { useState } from 'react'

// const Demo = () => {

//   return (
//     <>
//     <Edit/>
//     <input type='text' placeholder='Enter your name'/>
//     <input type='text' placeholder='Enter your name'/>

//     </>
//   )
// }
function Demo(){
  const[count,setCount]=useState(0)
  return(
    <div>
    <h1>Count:{count}</h1>
    <button onClick={()=>setCount(count+1)}>Increment</button>
    <button onClick={()=>setCount(count-1)}>Decrement</button>
    <button onClick={()=>setCount(0)}>Reset</button>


    </div>
  )}

export default Demo