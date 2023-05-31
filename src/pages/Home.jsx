import React from 'react'
import Hero from '../components/Hero'
import '../styles/Home.css'
import Parallax from '../components/Parallax'
import logo from '../Assets/HeroImg.jpg'
import heroImg2 from '../Assets/Hero2.jpg'
import BookNowButton from '../components/BookNowButton'
import Services from '../components/Services'
import Testimonial from '../components/Testimonial'
import Footer from '../components/Footer'
import OurWork from '../components/OurWork'
import YouTubeVid from '../components/YouTubeVid'
import About from '../components/About'
const Home = () => {
    const hero =  {imgurl:heroImg2, title:"COBBLER SPA", logo:logo}
  return (
    <>
        <Parallax AboutData={hero}/>
        <Hero/>
        <Services/>
        <OurWork/>
        <YouTubeVid/>
        <About/>
        <Testimonial/>
        <Footer/>
        <BookNowButton/>
    </>
  )
}

export default Home