// import React from 'react'
// import Card1 from './Card1'


// const App = () => {
//   let obj = {
//     name:"sandeep",
//     school:"B.D.S.V.M",
//     job:0
//   }
  
//   return (
//     <div>
//       <Card1 beta = {obj}/>  
//     </div>
//   )
// }

// Here:
// data is the prop name (you can call it anything).
// {obj} is the value being passed (your object).
// So now, inside Card1, you can access the object using props.data

// export default App


/* // 🔹 Tasks to Practice Prop Drilling
// 1. Counter App (Update from Deep Child)

// Keep a counter state in App.

// Pass it down through 3–4 components.

// Update the counter from the deepest child using a button.

// 👉 You’ll pass both state (count) and function (setCount) down the chain. */


import React from 'react'
import Card1 from "./Card1"
import { useState } from 'react'


const App = () => {
  let [count,setCount] = useState(0)
  let increase = ()=>{
    setCount(count+1)
  }

  return (
    <div>
      <Card1 tata={count} increase={increase}/>
    </div>
  )
}

export default App
