import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 30px",
    backgroundColor: "#007BFF",
    color: "white",
    fontFamily: "Arial, sans-serif",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    margin: "0 15px",
    fontWeight: "bold",
  };

  const inputStyle = {
    padding: "6px 10px",
    borderRadius: "5px",
    border: "none",
    outline: "none",
  };

  const linkHover = (e, color) => {
    e.target.style.color = color;
  };

  return (
    <nav style={navStyle}>
      {/* Logo / Brand */}
      <h2 style={{ margin: 0 }}>MyShop</h2>

      {/* Center Search */}
      <input
        type="text"
        placeholder="Search..."
        style={inputStyle}
      />

      {/* Navigation Links */}
      <div>
        <Link
          to="/home"
          style={linkStyle}
          onMouseEnter={(e) => linkHover(e, "#FFD700")}
          onMouseLeave={(e) => linkHover(e, "white")}
        >
          Home
        </Link>
        <Link
          to="/login"
          style={linkStyle}
          onMouseEnter={(e) => linkHover(e, "#FFD700")}
          onMouseLeave={(e) => linkHover(e, "white")}
        >
          Login
        </Link>
        <Link
          to="/signup"
          style={linkStyle}
          onMouseEnter={(e) => linkHover(e, "#FFD700")}
          onMouseLeave={(e) => linkHover(e, "white")}
        >
          Signup
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;



// import React from 'react'
// import {Link} from "react-router-dom"

// const Navbar = () => {
//   return (
//     <nav>
//       <Link to="/"></Link>
//       <Link to="/home">Home</Link>
//       <input type="text" name="" id="" />
//       <Link to="/login">Login</Link>
//       <Link to="/signup">Signup</Link>
      
//     </nav>
//   );
// }

// export default Navbar