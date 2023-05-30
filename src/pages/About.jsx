import React, { useEffect } from 'react'
import '../styles/About.css'
import About from '../components/AboutHelper'
import Parallax from '../components/Parallax'
import AboutData2 from '../Utility/AboutData2'
import TeamData from '../Utility/TeamData'
import AboutDecor from '../components/AboutDecor'
import AboutData from '../Utility/AboutData'
const AboutApp = () => {
  useEffect(()=>{
    window.scroll({
      top : 0,
      behavior: "smooth"
    }
      
    )
  },[])
  return (
    <>
    <Parallax AboutData={AboutData[0]}/>
    <section className = "section section-light" >
        <h2>History of Cobbler Spa🤌</h2>
        <br/>
        <p>
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, labore assumenda animi quasi magnam asperiores sunt nemo alias, laborum possimus soluta odio deserunt. Quam vitae alias, distinctio minus non repudiandae vel magni in nobis, corrupti blanditiis, eveniet eum placeat iusto?"
        </p>
        <div style={{ width:"100%", margin:"auto", marginTop:"50px"}}>
          <p style={{fontSize:"xx-large",color:"black", fontWeight:"bold"}}>At Cobbler Spa We are on a mission</p>
          <div className='decorContainer' >
                {
                  AboutData2.map((item)=>{
                    return(

                      <AboutDecor key={item.id} {...item}/>
                    )
                  })
                }
          </div>
        </div>

    </section>
    <Parallax AboutData={AboutData[1]}/>
    <About TeamData={TeamData} />
    <Parallax AboutData={AboutData[2]}/>
    <section className = "section section-light">
        <h2>How We Stand Apart 🏆</h2>
        <br/>
        <p>Innovative group tours for every kind An extensive range of guided group tours, speciality tours, customized holidays, suitable for people of all ages, which help create memories that last for a lifetime!</p>
        <br/>
    
        <ul style = {{textAlign: "left"}}>
            <p>Our Features :</p>
            <li>Relish authentic local tastes as well as delicious Indian foodt</li>
            <li>More than 150 guest touch points & ease of online bookings</li>
        </ul>
    </section>

    </>
  )
}

export default AboutApp