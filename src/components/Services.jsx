import React from 'react'
import imgurl from '../Assets/ServicesImg.jpeg'
import { GiSonicShoes } from "react-icons/gi";
import { AiOutlineVerified } from "react-icons/ai";
import { MdSavings } from "react-icons/md";
const Services = () => {
  return (
    <section id='ServiceSection' style={{backgroundImage : `url(${imgurl})`}}>        
               <p className='sectionHeading'>Services</p>
               <div className='underline'></div>
               <div className='servicesContainer' style={{display:"flex", justifyContent:"space-evenly", alignItems:"center"}}>
                <article className='serviceBlock container'>
                    <GiSonicShoes className='serviceLogo'/>
                    <p className='servicetitle'>Convinience</p>
                    <p>"Experience the convenience of impeccable shoe cleaning service, where every step is taken care of with utmost dedication and precision."</p>
                </article>
                <article className='serviceBlock container'>
                    <MdSavings className='serviceLogo'/>
                    <p className='servicetitle'>Affordable</p>
                    <p>"Revive your shoes without breaking the bank. Affordable shoe cleaning services that bring your kicks back to life!"</p>
                </article>
                <article className='serviceBlock container'>
                    <AiOutlineVerified className='serviceLogo'/>
                    <p className='servicetitle'>Quality</p>
                    <p>"The quality of our shoe cleaning service speaks louder than words."</p>
                </article>
               </div>
        </section>
  )
}

export default Services