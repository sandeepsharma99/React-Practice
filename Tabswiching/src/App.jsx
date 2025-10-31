import React from 'react'
import { useState,useEffect } from 'react'

const App = () => {
  const [isTabActive, setisTabActive] = useState(true);
  useEffect(()=>{
    function handleChange(){
      if(document.visibilityState()=="hidden"){
        setisTabActive(true)
      }else{
        setisTabActive(false)
      }
    }

    document.addEventListener("visibilitychange",handleChange);

    return()=>{
      document.removeEventListener("visibilitychange",handleChange)
    }
  },[])
  
  return (
    <div>
      <h1>{isTabActive ? "welcome back" : "user switche the tab" }</h1>
    </div>
  )
}

export default App