import React from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
import '../styles/Services.css';

const ServicesSection = ({ slides }) => {
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
              <MDBBtn className="bookNowBtn" outline rounded color="dark">
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
