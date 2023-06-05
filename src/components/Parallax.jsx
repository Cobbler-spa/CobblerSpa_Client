import React from 'react'
import '../styles/About.css'
const Parallax = ({AboutData}) => {
    const { imgurl, title, logo}= AboutData;
  return (
    <>
        <div class = "pimg" style={{backgroundImage : `url(${imgurl})`}}>   
        <div className='imgContainer'>
          {logo && <img src={logo} alt='logo' className='logoImg'/>}
        <h3 className='title'>{title}</h3>
          {logo && <p style={{color:"white", letterSpacing:"4px", fontSize:"1rem"}}>Shoe & Bag Care</p>}
        </div>            
    </div>
    </>
  )
}

export default Parallax