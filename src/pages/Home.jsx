import React from 'react'
import '../styles/Home.css'
import Parallax from '../components/Parallax'
import logo from '../Assets/HeroImg.jpg'
import heroImg2 from '../Assets/Hero2.jpg'
import Services from '../components/Services'
import Testimonial from '../components/Testimonial3.jsx'
import OurWork from '../components/OurWork'
import YouTubeVid from '../components/YouTubeVid'
import About from '../components/About'
import Partners from '../components/Partners'
import Contact from '../components/Contact'

const Home = () => {
    const hero =  {imgurl:heroImg2, title:"COBBLER SPA", logo:logo}
  return (
    <>
        <Parallax AboutData={hero}/>
        {/* <Hero/> */}
        <About/>
        <Services/>
        <section id="our-work">
        <OurWork />
        </section>
        <YouTubeVid/>
        <section id="testimonial">

        <Testimonial />
        </section>
        <section id="contact">

        <Contact/>
        </section>
        <Partners/>
    </>
  )
}

export default Home