import React, { useEffect } from 'react'
import imgurl from '../Assets/ServicesImg.jpeg'
import { GiSonicShoes } from "react-icons/gi";
import { AiOutlineVerified } from "react-icons/ai";
import { MdSavings } from "react-icons/md";
import ScrollReveal from "scrollreveal";
const Services = () => {
 
  useEffect(()=>{
    const sr = ScrollReveal({
      origin: "bottom",
      duration: 2000,
      distance: "80px",
      reset: false,
    });

    sr.reveal(`.serviceBlock`, { opacity: 0, interval: 300 });
  },[])
  
  return (
    <section id='ServiceSection' style={{backgroundImage : `url(${imgurl})`}}>        
               <p className='sectionHeading'>Our Specialities</p>
               <div className='underline'></div>
               <div className='servicesContainer'>
                <article className='serviceBlock'>
                    <GiSonicShoes className='serviceLogo'/>
                    <p className='servicetitle'>Convinience</p>
                    <p>"Experience the convenience of impeccable shoe cleaning service, where every step is taken care of with utmost dedication and precision."</p>
                </article>
                <article className='serviceBlock'>
                    <MdSavings className='serviceLogo'/>
                    <p className='servicetitle'>Affordable</p>
                    <p>"Revive your shoes without breaking the bank. Affordable shoe cleaning services that bring your kicks back to life!"</p>
                </article>
                <article className='serviceBlock'>
                    <AiOutlineVerified className='serviceLogo'/>
                    <p className='servicetitle'>Quality</p>
                    <p>"The quality of our shoe cleaning service speaks louder than words."</p>
                </article>
               </div>
        </section>
  )
}

export default Services