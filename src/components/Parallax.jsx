import React,{useEffect} from 'react'
import '../styles/About.css'
import ScrollReveal from 'scrollreveal';
const Parallax = ({AboutData}) => {
    const { imgurl, title, logo}= AboutData;
    useEffect(()=>{
      const sr = ScrollReveal({
        origin: "bottom",
        duration: 2000,
        distance: "80px",
        reset: false,
      });
  
      sr.reveal(`.imgContainer`, { opacity: 0, interval: 300 });
    },[])
  return (
    <>
        <div class = "pimg" style={{backgroundImage : `url(${imgurl})`}}>   
        <div className='imgContainer'>
          {logo && <img src={logo} alt='logo' className='logoImg'/>}
        <h3 className='title' style={{textAlign:"center"}}>{title}</h3>
          {logo && <p style={{color:"white", letterSpacing:"4px", fontSize:"1rem"}}>Shoe & Bag Care</p>}
        </div>            
    </div>
    </>
  )
}

export default Parallax