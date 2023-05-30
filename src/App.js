import React from 'react'
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import AboutApp from './pages/About'
import Navbar from './components/Navbar';
const App = () => {
  return (
    <div className="App">
    <Navbar/>
      <ToastContainer/>
      <Routes>
        {/* <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>*/}
        <Route path="/about" element={<AboutApp/>}/>
      </Routes>
 
    </div>
  )
}

export default App