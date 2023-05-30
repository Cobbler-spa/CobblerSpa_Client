import React from 'react'
import imgurl from '../Assets/HeroText.jpeg'
const Hero = () => {
  return (
    <>
        <section id='heroText' style={{backgroundImage : `url(${imgurl})`}}>        
                <p className='container' style={{fontSize:"3rem", color:"whitesmoke", textAlign:"center", fontFamily:"oswald", letterSpacing:"4px"}}>Revive Your Shoes with Our Expert Shoe Laundry Services</p>
        </section>
    </>
  )
}

export default Hero