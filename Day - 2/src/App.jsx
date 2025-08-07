import React from 'react'
import Home from './pages/Home';
import Profile from './pages/Profile';
import Navbar from './component/Navbar';
import Register from './pages/Register';
import Login from './pages/Login';
import { Route, Routes } from 'react-router-dom'; 
 
import UseState from './pages/30-07/useState';
import UseEffect from './pages/30-07/useEffect';
import UseParams from './pages/01-08/UseParams';
import StyleComponent from './pages/02-08/StyleComponent';




function App() {
  console.log("Mumbai");
  <Navbar />
  return (
    <>
    <Navbar /> 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/Use-state' element={<UseState />} />
        <Route path='/Use-effect' element={<UseEffect />} /> 
        <Route path='/Use-Params/:id' element={<UseParams />} /> 
     <Route path='/Style-Component' element={<StyleComponent />} />


      </Routes>
    </>
  );
}

export default App;