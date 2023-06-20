import React, { useState, useRef } from "react";
import Slider from "react-slick";
import data from "../Utility/Services.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  MDBBtn,
} from "mdb-react-ui-kit";

const OurServices = () => {
  const sliderRef = useRef(null);
  const [sliderSettings] = useState({
    dots: false,
    infinite: true,
    speed: 500,
    lazyLoad: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  });

  

  return (
    <section id="ServiceSection" style={{ background: "white" }}>
    <p className="sectionHeading">Our Services</p>
    <div className="underline"></div>
    <div className="container">
      <Slider {...sliderSettings} ref={sliderRef}>
        {data.map((item) => (
          <div key={item.id}>
            <div
            
            style={{
              height: "25rem",
              width: "50rem",
              margin: "auto",
              borderRadius: "10px",
              background: `url(${item.imgUrl}) center/cover`,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "center",
              position: "relative",
            }}
          >
            
          </div>
          <h3 style={{ zIndex: 1,textAlign:"center", color: "white", background:"black",width:"50%", margin:"auto",padding:"4px 8px", fontFamily:"poppins" }}>
              {item.title}
            </h3>
          </div>
        ))}
      </Slider>
      
      <MDBBtn
        outline
        rounded
        color="dark"
        style={{ display: "block", margin: "auto", padding: "0.3rem 8rem", marginTop:"1rem  " }}
      >
        View Details
      </MDBBtn>
    </div>
  </section>
  );
};

export default OurServices;
