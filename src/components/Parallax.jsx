import React from 'react'
import '../styles/About.css'
const Parallax = ({AboutData}) => {
    const { imgurl, title}= AboutData;
  return (
    <>
        <div class = "pimg" style={{backgroundImage : `url(${imgurl})`}}>               
        <h3 className='title'>{title}</h3>
    </div>
    </>
  )
}

export default Parallax