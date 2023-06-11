import React from 'react'
import { useEffect } from "react";
import {  Routes, Route } from "react-router-dom";
import {ToastContainer} from 'react-toastify'
import { useDispatch } from 'react-redux'
import "react-toastify/dist/ReactToastify.css";
import { setToken, setUser } from './redux/features/authSlice'
import AboutApp from './pages/About'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Services from './pages/Services';
import Policy from './pages/Policy';
import Footer from './components/Footer';
import GetVerified from './pages/GetVerified';
import OurWork from './pages/OurWork';
import ScrollToTop from './helper/ScrollToTop';
import Contact from './pages/Contact';
import AddAdmin from './pages/AddAdmin';
import PrivateRoute from './components/PrivateRoute';
import NotFound from './pages/NotFound';
import Blogs from './pages/Blogs';
import BookNowButton from './components/BookNowButton';
import SingleBlog from './pages/SingleBlog';
import AddBlog from './pages/AddBlog';
const App = () => {

  const dispatch = useDispatch()
  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token")

  useEffect(()=>{
    if(user){
      dispatch(setToken(token))
      dispatch(setUser(user))
    }
  },[user, dispatch,token]);
  useEffect(() => {
    // Disable horizontal scrolling on component mount
    document.body.style.overflowX = "hidden";

    // Re-enable horizontal scrolling on component unmount
    return () => {
      document.body.style.overflowX = "auto";
    };
  }, []);
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
        <Route path="/services" element={<Services/>}/>
        <Route path="/blog" element={<Blogs/>}/>
        <Route path="/policy" element={<Policy/>}/>
        <Route path="/work" element={<OurWork/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/blog/:id" element={<SingleBlog/>}/>
        <Route path="/addadmin" element={<PrivateRoute><AddAdmin/></PrivateRoute>}/>
        <Route path="/addblog" element={<PrivateRoute><AddBlog/></PrivateRoute>}/>
        <Route path="/*" element={<NotFound/>}/>
      </Routes>
    <BookNowButton/>
    <Footer/>
    </div>
  )
}

export default App