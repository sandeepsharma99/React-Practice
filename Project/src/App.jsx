// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./components/Home";
// import Login from "./components/Login";
// import Signup from "./components/Signup";
// import View from "./components/View";
// import Checkout from "./components/Checkout";
// import ProtectedRoutes from "./components/ProtectedRoutes";
// import Profile from "./components/Profile";

// const App = () => {
//   return (
//     <>
//       <Navbar />
//       <Routes>
//         {/* Protected routes */}
//         <Route
//           path="/"
//           element={
//             <ProtectedRoutes>
//               <Home />
//             </ProtectedRoutes>
//           }
//         />
//         {/* <Route
//           path="/checkout"
//           element={
//             <ProtectedRoutes>
//               <Checkout />
//             </ProtectedRoutes>
//           }
//         /> */}

//         {/* Public routes */}
//         <Route path="/home" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/cart" element={<View />} />
//         <Route path="/checkout" element={<Checkout/>}/>
//         <Route path="/profile" element={<Profile/>}/>
//       </Routes>
//     </>
//   );
// };

// export default App;

import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Login from "./components/Login"
import Signup from "./components/Signup"
import View from "./components/View"
import Checkout from "./components/Checkout"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Profile from "./components/Profile"
import ProtectedRoutes from './components/ProtectedRoutes'


const App = () => {


  return (
    <>
    <Navbar/>
    <Routes>
      {/* <Route path='/' element={<ProtectedRoutes><Home/></ProtectedRoutes>}/>
      <Route path='/home' element={<ProtectedRoutes><Home/></ProtectedRoutes>}/>
      <Route path='/cart' element={<ProtectedRoutes><View/></ProtectedRoutes>}/>
      <Route path='/checkout' element={<ProtectedRoutes><Checkout/></ProtectedRoutes>}/>
      <Route path='/profile' element={<ProtectedRoutes><Profile/></ProtectedRoutes>}/> */}
      

      <Route path ="/" element ={<Home/>}/>
      <Route path ="/home" element={<Home/>}/>
      <Route path ="/cart" element={<View/>}/>
      <Route path ="profile" element = {<Profile/>}/>
      <Route path ="/checkout" element = {<Checkout/>}/>
      {/* public route */}
      <Route path ="/login" element={<Login/>}/>
      <Route path = "/signup" element ={<Signup/>}/>
    </Routes>
    </>
  )
}

export default App