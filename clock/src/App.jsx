// import React, { useEffect } from 'react'
// import { useState } from 'react'

// const App = () => {
//   const [time , setTime] = useState(new Date())

//   useEffect(()=>{
//    const timer= setInterval(()=>{
//       setTime(new Date());
//     },1000)

//     return ()=>clearInterval(timer)
//   })
//   return (
//     <>
//       <h3>this is show the time</h3>
//       <span>{time.getHours().toLocaleString()}</span>:
//       <span>{time.getMinutes().toLocaleString()}</span>:
//       <span>{time.getSeconds().toLocaleString()}</span>
//     </>
//   )
// }

// export default App


import React, { useEffect, useState } from "react";

const App = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Convert 24-hour format to 12-hour with AM/PM
  const hours = time.getHours();
  const displayHours = hours % 12 || 12;
  const ampm = hours >= 12 ? "PM" : "AM";

  // Pad single digits with 0
  const pad = (num) => num.toString().padStart(2, "0");

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
      <div className="text-center p-10 rounded-2xl shadow-2xl bg-black/30 backdrop-blur-md">
        <h3 className="text-2xl font-semibold mb-6 tracking-wide">
          Digital Clock
        </h3>
        <div className="text-7xl font-bold tracking-widest flex items-center justify-center">
          <span>{pad(displayHours)}</span>
          <span className="mx-2">:</span>
          <span>{pad(time.getMinutes())}</span>
          <span className="mx-2">:</span>
          <span>{pad(time.getSeconds())}</span>
          <span className="ml-4 text-3xl font-light">{ampm}</span>
        </div>
      </div>
    </div>
  );
};

export default App;
