import React from 'react'
import Hero from '../components/Hero'
import '../styles/Home.css'
import Parallax from '../components/Parallax'
import heroImg from '../Assets/Hero.jpg'
import logo from '../Assets/HeroImg.jpg'
import heroImg2 from '../Assets/Hero2.jpg'
import BookNowButton from '../components/BookNowButton'
import Services from '../components/Services'
import Testimonial from '../components/Testimonial'
import Footer from '../components/Footer'
const Home = () => {
    const hero =  {imgurl:heroImg2, title:"COBBLER SPA", logo:logo}
  return (
    <>
        <Parallax AboutData={hero}/>
        <Hero/>
        <Services/>
        <Testimonial/>
        <Footer/>
        <BookNowButton/>
    </>
  )
}

export default Home