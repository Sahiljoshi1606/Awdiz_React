import { Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home.jsx";
import Profile from "./pages/profile.jsx";
import { Route } from "react-router-dom";
import Login from "./pages/login.jsx";
import Register from "./pages/register.jsx";
import Navbar from "./component/Navbar.jsx";
import UseState from "./pages/30-07/useState.jsx";
import UseEffect from "./pages/30-07/useEffect.jsx";
  function App() {
  return (
    <div>
      < Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/usestate" element={<UseState />} />
        <Route path="/useeffect" element={<UseEffect />} />
      </Routes>
    </div>
      );
}

export default App;
