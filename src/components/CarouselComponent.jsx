import React from "react";
import Slider from "react-slick";
import data from '../Utility/ServiceCarousal.js'
import img from "../Assets/Repair.jpg";
const SimpleSlider = () => {
  const settings = {
    dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
  };

  return (
    <div className="container" style={{height:"100vh"}}>
      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={index} style={{width:"100%", height:"100"}}>
            <img src={item.image} alt="..." style={{width:"100%", height:"100%"}}/>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SimpleSlider;