import React from 'react'
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import {  Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import AboutApp from './pages/About'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Booking from './pages/Booking';
import UserProfile from './pages/UserProfile';
import Services from './pages/Services';
import Policy from './pages/Policy';
const App = () => {
  return (
    <div className="App">
    <Navbar/>
      <ToastContainer/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/about" element={<AboutApp/>}/>
        <Route path="/booking" element={<Booking/>}/>
        <Route path="/user" element={<UserProfile/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/policy" element={<Policy/>}/>
      </Routes>
 
    </div>
  )
}

export default App