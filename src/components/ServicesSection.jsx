import React from 'react';
import { MDBBtn,MDBTooltip } from 'mdb-react-ui-kit';
import '../styles/Services.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const ServicesSection = ({ slides }) => {
  const user = useSelector((state)=>({...state.auth}))
  const navigate = useNavigate()
  const handleClick = ()=>{
      if(!user){
        navigate("/login")
      }
  }
  return (
    <section className="serviceOuterBox mb-4">
      <h1 className="sectionHeading">Our Services</h1>
      <div className="underline"></div>
      <div className="servicescontainer">
        {slides.map((service, index) => (
          <article
            className={`serviceCard ${index % 2 === 0 ? 'even' : 'odd'}`}
            key={service.tab}
          >
            <img
              src={service.imgUrl}
              alt="..."
              className={`serviceImage ${index % 2 === 0 ? 'even' : 'odd'}`}
            />
            <div className="serviceInfo">
              <h3 className="serviceTitle">{service.title}</h3>
              <p className="serviceDesc">{service.desc}</p>
              
                  <MDBBtn className="bookNowBtn" outline rounded color="dark" onClick={handleClick}>
                Book Now
              </MDBBtn>
                
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
