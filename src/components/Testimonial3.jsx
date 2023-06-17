import React, { useState } from "react";
import Slider from "react-slick";
import "../styles/Home.css"
import { FaQuoteLeft } from "react-icons/fa";
import data from '../Utility/TestiData.js'
import { MDBCard, MDBCardBody } from "mdb-react-ui-kit";
const SimpleSlider = () => {
  const [sliderSettings] = useState({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed: 2000,
      cssEase: "linear"
  });

  return (
    <section id="testimonialSection">
    <p className="TestimonialHeading">What people Say ABout Us?</p>
    <div className="underline"></div>
    <div className="Testicontainer">
      <Slider {...sliderSettings}>
      {
        data.map((item)=>(
            <MDBCard className="w-100" key={item.id}>
                <MDBCardBody className="p-4">
                  <div>
                      <FaQuoteLeft style={{fontSize:"3rem", marginBottom:"0.5rem"}}/>
                    <p style={{fontSize:"x-large", fontFamily:"poppins"}}>
                      {item.text}
                    </p>
                   

                    <div className="d-flex justify-content-end align-items-center">
                      
                      <span href="#!" className="link-muted" style={{fontSize:"larger", fontFamily:"poppins"}}>
                        ~ {item.author}
                      </span>
                    </div>
                  </div>
                </MDBCardBody>
              </MDBCard>
        ))
      }
      </Slider>
    </div>
  </section>
  );
};

export default SimpleSlider;