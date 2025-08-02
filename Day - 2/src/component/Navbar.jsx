import React from 'react'
import { useNavigate} from "react-router-dom";

const Navbar = () => {
    const router =  useNavigate();
  return (
    <div>
  <button onClick={() => router("/login")}>login</button>
  <button onClick={() => router("/register")}>register</button>
    </div>
  )
}

export default Navbar
