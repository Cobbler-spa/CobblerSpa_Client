import React from 'react'
import { useEffect } from "react";
import {  Routes, Route } from "react-router-dom";
import {ToastContainer} from 'react-toastify'
import { useDispatch } from 'react-redux'
import "react-toastify/dist/ReactToastify.css";
import { setUser } from './redux/features/authSlice'
import AboutApp from './pages/About'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Booking from './pages/Booking';
import Services from './pages/Services';
import Policy from './pages/Policy';
import Footer from './components/Footer';
import GetVerified from './pages/GetVerified';
import OurWork from './pages/OurWork';
import ScrollToTop from './helper/ScrollToTop';
const App = () => {

  const dispatch = useDispatch()
  const user = JSON.parse(localStorage.getItem("profile"));

  useEffect(()=>{
    if(user){

      dispatch(setUser(user))
    }
  },[user, dispatch]);
  return (
    <div className="App">
    <Navbar/>
      <ToastContainer/>
      <ScrollToTop /> {/* Add this line */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/verify" element={<GetVerified/>}/>
        <Route path="/about" element={<AboutApp/>}/>
        <Route path="/booking" element={<Booking/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/policy" element={<Policy/>}/>
        <Route path="/work" element={<OurWork/>}/>

      </Routes>
    <Footer/>
    </div>
  )
}

export default App